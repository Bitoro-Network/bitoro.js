"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computePriceWithSpread = exports.computeSingleFundingRate8H = exports.computeFundingRate8H = exports.computeLiquidityFeeRate = exports.computeRealizeLoss = exports.computeRealizeProfit = exports.computeWithdrawProfit = exports.computeWithdrawCollateral = exports.computeClosePosition = exports.computeOpenPosition = exports.computeFundingFeeUsd = exports.computePositionPnlUsd = exports.computeLiquidityPrice = exports.computeTradingPrice = exports.computeSubAccount = void 0;
const types_1 = require("./types");
const constants_1 = require("./constants");
const data_1 = require("./data");
const bignumber_js_1 = __importDefault(require("bignumber.js"));
function computeSubAccount(assets, subAccountId, subAccount, collateralPrice, assetPrice) {
    const { collateralId, assetId, isLong } = (0, data_1.decodeSubAccountId)(subAccountId);
    const positionValueUsd = assetPrice.times(subAccount.size);
    const fundingFeeUsd = computeFundingFeeUsd(subAccount, assets[assetId], isLong, assetPrice);
    const { pendingPnlUsd, pnlUsd } = computePositionPnlUsd(assets[assetId], subAccount, isLong, subAccount.size, assetPrice);
    const pendingPnlAfterFundingUsd = pendingPnlUsd.minus(fundingFeeUsd);
    const pnlAfterFundingUsd = pnlUsd.minus(fundingFeeUsd);
    const collateralValue = subAccount.collateral.times(collateralPrice);
    const marginBalanceUsd = collateralValue.plus(pendingPnlAfterFundingUsd);
    const isIMSafe = marginBalanceUsd.gte(positionValueUsd.times(assets[assetId].initialMarginRate));
    const isMMSafe = marginBalanceUsd.gte(positionValueUsd.times(assets[assetId].maintenanceMarginRate));
    const isMarginSafe = marginBalanceUsd.gte(constants_1._0);
    const leverage = collateralValue.gt(0) ? subAccount.entryPrice.times(subAccount.size).div(collateralValue) : constants_1._0;
    const effectiveLeverage = marginBalanceUsd.gt(0) ? positionValueUsd.div(marginBalanceUsd) : constants_1._0;
    let pendingRoe = collateralValue.gt(0) ? pendingPnlAfterFundingUsd.div(collateralValue) : constants_1._0;
    const liquidationPrice = _estimateLiquidationPrice(assets, collateralId, assetId, isLong, subAccount, collateralPrice, fundingFeeUsd);
    // withdraw collateral
    const safeImr = bignumber_js_1.default.maximum(assets[assetId].initialMarginRate, '0.01'); // limit to 100x in the next calculation
    let withdrawableCollateral = bignumber_js_1.default.min(collateralValue.plus(pnlAfterFundingUsd).minus(positionValueUsd.times(safeImr)), // IM
    collateralValue.minus(fundingFeeUsd).minus(subAccount.entryPrice.times(subAccount.size).times(safeImr)) // leverage
    );
    withdrawableCollateral = bignumber_js_1.default.max(constants_1._0, withdrawableCollateral);
    withdrawableCollateral = withdrawableCollateral.div(collateralPrice);
    // withdraw profit
    let withdrawableProfit = bignumber_js_1.default.min(collateralValue.plus(pnlAfterFundingUsd).minus(positionValueUsd.times(safeImr)), // IM
    pnlAfterFundingUsd // profit
    );
    withdrawableProfit = bignumber_js_1.default.max(constants_1._0, withdrawableProfit);
    if (isLong) {
        withdrawableProfit = withdrawableProfit.div(assetPrice);
    }
    const computed = {
        positionValueUsd,
        fundingFeeUsd,
        pendingPnlUsd,
        pendingPnlAfterFundingUsd,
        pnlUsd,
        marginBalanceUsd,
        isIMSafe,
        isMMSafe,
        isMarginSafe,
        leverage,
        effectiveLeverage,
        pendingRoe,
        liquidationPrice,
        withdrawableCollateral,
        withdrawableProfit
    };
    return { subAccount, computed };
}
exports.computeSubAccount = computeSubAccount;
// get price with spread when open/close positions
function computeTradingPrice(assets, subAccountId, prices, // given by off-chain broker
isOpenPosition // true if openPosition
) {
    const { collateralId, assetId, isLong } = (0, data_1.decodeSubAccountId)(subAccountId);
    if (collateralId >= assets.length) {
        throw new types_1.InvalidArgumentError(`missing asset[${collateralId}]`);
    }
    if (assetId >= assets.length) {
        throw new types_1.InvalidArgumentError(`missing asset[${assetId}]`);
    }
    let collateralPrice = prices[assets[collateralId].symbol];
    let assetPrice = prices[assets[assetId].symbol];
    if (!collateralPrice || collateralPrice.lte(constants_1._0)) {
        throw new types_1.InvalidArgumentError(`invalid price[${assets[collateralId].symbol}]`);
    }
    if (!assetPrice || assetPrice.lte(constants_1._0)) {
        throw new types_1.InvalidArgumentError(`invalid price[${assets[assetId].symbol}]`);
    }
    let spreadType;
    if (isOpenPosition) {
        spreadType = isLong ? constants_1.SpreadType.Ask : constants_1.SpreadType.Bid;
    }
    else {
        spreadType = isLong ? constants_1.SpreadType.Bid : constants_1.SpreadType.Ask;
    }
    assetPrice = computePriceWithSpread(assets[assetId], assetPrice, spreadType);
    return { assetPrice, collateralPrice };
}
exports.computeTradingPrice = computeTradingPrice;
// get price with spread when add/remove liquidity
function computeLiquidityPrice(assets, prices, // given by off-chain broker
tokenId, isAddLiquidity // true if addLiquidity
) {
    if (tokenId >= assets.length) {
        throw new types_1.InvalidArgumentError(`missing asset[${tokenId}]`);
    }
    let collateralPrice = prices[assets[tokenId].symbol];
    if (!collateralPrice || collateralPrice.lte(constants_1._0)) {
        throw new types_1.InvalidArgumentError(`invalid price[${assets[tokenId].symbol}]`);
    }
    let spreadType = isAddLiquidity ? constants_1.SpreadType.Bid : constants_1.SpreadType.Ask;
    collateralPrice = computePriceWithSpread(assets[tokenId], collateralPrice, spreadType);
    return collateralPrice;
}
exports.computeLiquidityPrice = computeLiquidityPrice;
function computePositionPnlUsd(asset, subAccount, isLong, amount, assetPrice) {
    if (amount.eq(constants_1._0)) {
        return { pendingPnlUsd: constants_1._0, pnlUsd: constants_1._0 };
    }
    let priceDelta = isLong ? assetPrice.minus(subAccount.entryPrice) : subAccount.entryPrice.minus(assetPrice);
    let pendingPnlUsd = priceDelta.times(amount);
    if (priceDelta.gt(constants_1._0) &&
        Math.ceil(Date.now() / 1000) < subAccount.lastIncreasedTime + asset.minProfitTime &&
        priceDelta.abs().lt(asset.minProfitRate.times(subAccount.entryPrice))) {
        return { pendingPnlUsd, pnlUsd: constants_1._0 };
    }
    return { pendingPnlUsd, pnlUsd: pendingPnlUsd };
}
exports.computePositionPnlUsd = computePositionPnlUsd;
function _computeFeeUsd(subAccount, asset, isLong, amount, assetPrice) {
    let fee = computeFundingFeeUsd(subAccount, asset, isLong, assetPrice);
    fee = fee.plus(_computePositionFeeUsd(asset, amount, assetPrice));
    return fee;
}
function computeFundingFeeUsd(subAccount, asset, isLong, assetPrice) {
    if (subAccount.size.eq(constants_1._0)) {
        return constants_1._0;
    }
    let cumulativeFunding = constants_1._0;
    if (isLong) {
        cumulativeFunding = asset.longCumulativeFundingRate.minus(subAccount.entryFunding);
        cumulativeFunding = cumulativeFunding.times(assetPrice);
    }
    else {
        cumulativeFunding = asset.shortCumulativeFunding.minus(subAccount.entryFunding);
    }
    return cumulativeFunding.times(subAccount.size);
}
exports.computeFundingFeeUsd = computeFundingFeeUsd;
function _computePositionFeeUsd(asset, amount, assetPrice) {
    if (amount.eq(constants_1._0)) {
        return constants_1._0;
    }
    let feeUsd = assetPrice.times(asset.positionFeeRate).times(amount);
    return feeUsd;
}
// note: mutable modify
function _updateEntryFunding(subAccount, asset, isLong) {
    if (isLong) {
        subAccount.entryFunding = asset.longCumulativeFundingRate;
    }
    else {
        subAccount.entryFunding = asset.shortCumulativeFunding;
    }
}
function _estimateLiquidationPrice(assets, collateralId, assetId, isLong, subAccount, collateralPrice, fundingFeeUsd) {
    if (subAccount.size.eq(constants_1._0)) {
        return constants_1._0;
    }
    const { maintenanceMarginRate } = assets[assetId];
    const longFactor = isLong ? constants_1._1 : constants_1._1.negated();
    const t = longFactor
        .minus(maintenanceMarginRate)
        .times(subAccount.size);
    let p = constants_1._0;
    if (collateralId === assetId) {
        p = longFactor.times(subAccount.entryPrice).times(subAccount.size);
        p = p.plus(fundingFeeUsd).div(t.plus(subAccount.collateral));
        p = bignumber_js_1.default.max(constants_1._0, p);
    }
    else {
        p = longFactor.times(subAccount.entryPrice).times(subAccount.size);
        p = p.plus(fundingFeeUsd).minus(collateralPrice.times(subAccount.collateral));
        p = p.div(t);
        p = bignumber_js_1.default.max(constants_1._0, p);
    }
    // the liquidation price above is a tradingPrice, not indexPrice
    // * liquidate  long position: liquidateIndexPrice > tradingPrice (because close long means sell)
    // * liquidate short position: liquidateIndexPrice < tradingPrice
    if (isLong) {
        p = p.div(constants_1._1.minus(assets[assetId].halfSpread));
    }
    else {
        p = p.div(constants_1._1.plus(assets[assetId].halfSpread));
    }
    return p;
}
function computeOpenPosition(assets, subAccountId, subAccount, prices, amount, brokerGasFee // in collateral. you can pass _0 when calling placePositionOrder
) {
    // context
    subAccount = (0, types_1.cloneSubAccount)(subAccount);
    const { collateralId, assetId, isLong } = (0, data_1.decodeSubAccountId)(subAccountId);
    const { collateralPrice, assetPrice } = computeTradingPrice(assets, subAccountId, prices, true);
    if (amount.lte(constants_1._0)) {
        throw new types_1.InvalidArgumentError(`invalid amount ${amount.toFixed()}`);
    }
    if (brokerGasFee.lt(constants_1._0)) {
        throw new types_1.InvalidArgumentError(`invalid gasFee ${brokerGasFee.toFixed()}`);
    }
    // protection
    if (assets[assetId].isStable ||
        !assets[assetId].isTradable ||
        !assets[assetId].isOpenable ||
        !assets[assetId].isEnabled ||
        !assets[collateralId].isEnabled ||
        (!isLong && !assets[assetId].isShortable)) {
        throw new types_1.InvalidArgumentError('not tradable');
    }
    // fee & funding
    const fundingFeeUsd = computeFundingFeeUsd(subAccount, assets[assetId], isLong, assetPrice);
    const feeUsd = _computeFeeUsd(subAccount, assets[assetId], isLong, amount, assetPrice);
    _updateEntryFunding(subAccount, assets[assetId], isLong);
    let feeCollateral = feeUsd.div(collateralPrice);
    feeCollateral = feeCollateral.plus(brokerGasFee);
    if (subAccount.collateral.lt(feeCollateral)) {
        // InsufficientCollateralForFee. we continue in bitoro.js
    }
    subAccount.collateral = subAccount.collateral.minus(feeCollateral);
    // position
    const pnlUsd = computePositionPnlUsd(assets[assetId], subAccount, isLong, amount, assetPrice);
    const newSize = subAccount.size.plus(amount);
    if (pnlUsd.pnlUsd.eq(constants_1._0)) {
        subAccount.entryPrice = assetPrice;
    }
    else {
        subAccount.entryPrice = subAccount.entryPrice
            .times(subAccount.size)
            .plus(assetPrice.times(amount))
            .div(newSize);
    }
    subAccount.size = newSize;
    subAccount.lastIncreasedTime = Math.ceil(Date.now() / 1000);
    // post check
    const afterTrade = computeSubAccount(assets, subAccountId, subAccount, collateralPrice, assetPrice);
    return {
        afterTrade,
        isTradeSafe: afterTrade.computed.isIMSafe,
        fundingFeeUsd,
        feeUsd
    };
}
exports.computeOpenPosition = computeOpenPosition;
function computeClosePosition(assets, subAccountId, subAccount, profitAssetId, prices, amount, brokerGasFee // in collateral. you can pass _0 when calling placePositionOrder
) {
    // context
    subAccount = (0, types_1.cloneSubAccount)(subAccount);
    const { collateralId, assetId, isLong } = (0, data_1.decodeSubAccountId)(subAccountId);
    const { collateralPrice, assetPrice } = computeTradingPrice(assets, subAccountId, prices, false);
    let profitAssetPrice = constants_1._0;
    if (isLong && !assets[assetId].useStableTokenForProfit) {
        profitAssetId = assetId;
        profitAssetPrice = assetPrice;
    }
    else {
        if (profitAssetId >= assets.length) {
            throw new types_1.InvalidArgumentError(`missing asset[${profitAssetId}]`);
        }
        if (!assets[profitAssetId].isStable) {
            throw new types_1.InvalidArgumentError(`profit asset[${profitAssetId}] should be a stable coin`);
        }
        profitAssetPrice = prices[assets[profitAssetId].symbol];
        if (!profitAssetPrice || profitAssetPrice.lte(constants_1._0)) {
            throw new types_1.InvalidArgumentError(`invalid price[${assets[profitAssetId].symbol}]`);
        }
    }
    if (amount.lte(constants_1._0) || amount.gt(subAccount.size)) {
        throw new types_1.InvalidArgumentError(`invalid amount ${amount.toFixed()}`);
    }
    if (brokerGasFee.lt(constants_1._0)) {
        throw new types_1.InvalidArgumentError(`invalid gasFee ${brokerGasFee.toFixed()}`);
    }
    // protection
    if (assets[assetId].isStable ||
        !assets[assetId].isTradable ||
        !assets[assetId].isEnabled ||
        !assets[collateralId].isEnabled ||
        (!isLong && !assets[assetId].isShortable)) {
        throw new types_1.InvalidArgumentError('not tradable');
    }
    // fee & funding
    const totalFeeUsd = _computeFeeUsd(subAccount, assets[assetId], isLong, amount, assetPrice);
    _updateEntryFunding(subAccount, assets[assetId], isLong);
    // realize pnl
    let paidFeeUsd = constants_1._0;
    let profitAssetTransferred = constants_1._0;
    let bitoroTokenTransferred = constants_1._0;
    const { pnlUsd } = computePositionPnlUsd(assets[assetId], subAccount, isLong, amount, assetPrice);
    if (pnlUsd.gt(constants_1._0)) {
        const result = computeRealizeProfit(pnlUsd, totalFeeUsd, assets[profitAssetId], profitAssetPrice);
        paidFeeUsd = result.deductUsd;
        profitAssetTransferred = result.profitAssetTransferred;
        bitoroTokenTransferred = result.bitoroTokenTransferred;
    }
    else if (pnlUsd.lt(constants_1._0)) {
        computeRealizeLoss(subAccount, collateralPrice, pnlUsd.negated(), true);
    }
    subAccount.size = subAccount.size.minus(amount);
    if (subAccount.size.eq(constants_1._0)) {
        subAccount.entryPrice = constants_1._0;
        subAccount.entryFunding = constants_1._0;
        subAccount.lastIncreasedTime = 0;
    }
    // ignore fees if can not afford
    if (brokerGasFee.gt(constants_1._0) || totalFeeUsd.gt(paidFeeUsd)) {
        let feeCollateral = totalFeeUsd.minus(paidFeeUsd).div(collateralPrice);
        let feeAndGasCollateral = feeCollateral.plus(brokerGasFee);
        if (subAccount.collateral.lt(feeAndGasCollateral)) {
            feeAndGasCollateral = subAccount.collateral;
            if (subAccount.collateral.lt(brokerGasFee)) {
                feeCollateral = constants_1._0;
            }
            else {
                feeCollateral = subAccount.collateral.minus(brokerGasFee);
            }
        }
        subAccount.collateral = subAccount.collateral.minus(feeAndGasCollateral);
        paidFeeUsd = paidFeeUsd.plus(feeCollateral.times(collateralPrice));
    }
    // post check
    const afterTrade = computeSubAccount(assets, subAccountId, subAccount, collateralPrice, assetPrice);
    return {
        afterTrade,
        isTradeSafe: afterTrade.computed.isMarginSafe,
        feeUsd: paidFeeUsd,
        profitAssetTransferred,
        bitoroTokenTransferred
    };
}
exports.computeClosePosition = computeClosePosition;
function computeWithdrawCollateral(assets, subAccountId, subAccount, prices, amount) {
    // context
    subAccount = (0, types_1.cloneSubAccount)(subAccount);
    const { collateralId, assetId, isLong } = (0, data_1.decodeSubAccountId)(subAccountId);
    const { collateralPrice, assetPrice } = computeTradingPrice(assets, subAccountId, prices, false /* isOpen */);
    if (amount.lte(constants_1._0)) {
        throw new types_1.InvalidArgumentError(`invalid amount ${amount.toFixed()}`);
    }
    // protection
    if (!assets[assetId].isEnabled || !assets[collateralId].isEnabled) {
        throw new types_1.InvalidArgumentError('not tradable');
    }
    // fee & funding
    const totalFeeUsd = computeFundingFeeUsd(subAccount, assets[assetId], isLong, assetPrice);
    if (subAccount.size.gt(constants_1._0)) {
        _updateEntryFunding(subAccount, assets[assetId], isLong);
    }
    const feeCollateral = totalFeeUsd.div(collateralPrice);
    subAccount.collateral = subAccount.collateral.minus(feeCollateral);
    // withdraw
    subAccount.collateral = subAccount.collateral.minus(amount);
    // post check
    const afterTrade = computeSubAccount(assets, subAccountId, subAccount, collateralPrice, assetPrice);
    return {
        afterTrade,
        isTradeSafe: afterTrade.computed.isIMSafe,
        feeUsd: totalFeeUsd
    };
}
exports.computeWithdrawCollateral = computeWithdrawCollateral;
function computeWithdrawProfit(assets, subAccountId, subAccount, profitAssetId, prices, amount) {
    // context
    subAccount = (0, types_1.cloneSubAccount)(subAccount);
    const { collateralId, assetId, isLong } = (0, data_1.decodeSubAccountId)(subAccountId);
    const { collateralPrice, assetPrice } = computeTradingPrice(assets, subAccountId, prices, false /* isOpen */);
    let profitAssetPrice = constants_1._0;
    if (isLong && !assets[assetId].useStableTokenForProfit) {
        profitAssetId = assetId;
        profitAssetPrice = assetPrice;
    }
    else {
        if (profitAssetId >= assets.length) {
            throw new types_1.InvalidArgumentError(`missing asset[${profitAssetId}]`);
        }
        if (!assets[profitAssetId].isStable) {
            throw new types_1.InvalidArgumentError(`profit asset[${profitAssetId}] should be a stable coin`);
        }
        profitAssetPrice = prices[assets[profitAssetId].symbol];
        if (!profitAssetPrice || profitAssetPrice.lte(constants_1._0)) {
            throw new types_1.InvalidArgumentError(`invalid price[${assets[profitAssetId].symbol}]`);
        }
    }
    if (amount.lte(constants_1._0)) {
        throw new types_1.InvalidArgumentError(`invalid amount ${amount.toFixed()}`);
    }
    // protection
    if (assets[assetId].isStable ||
        !assets[assetId].isTradable ||
        !assets[assetId].isEnabled ||
        !assets[collateralId].isEnabled ||
        (!isLong && !assets[assetId].isShortable)) {
        throw new types_1.InvalidArgumentError('not tradable');
    }
    if (subAccount.size.eq(constants_1._0)) {
        throw new types_1.InvalidArgumentError('empty position');
    }
    // fee & funding
    const totalFeeUsd = computeFundingFeeUsd(subAccount, assets[assetId], isLong, assetPrice);
    _updateEntryFunding(subAccount, assets[assetId], isLong);
    // withdraw
    const deltaUsd = amount.times(profitAssetPrice).plus(totalFeeUsd);
    // profit
    const { pnlUsd } = computePositionPnlUsd(assets[assetId], subAccount, isLong, subAccount.size, assetPrice);
    if (pnlUsd.lt(deltaUsd)) {
        throw new Error('insufficient pnl');
    }
    const { profitAssetTransferred, bitoroTokenTransferred } = computeRealizeProfit(pnlUsd, totalFeeUsd, assets[profitAssetId], profitAssetPrice);
    // new entry price
    if (isLong) {
        subAccount.entryPrice = subAccount.entryPrice.plus(deltaUsd.div(subAccount.size));
    }
    else {
        subAccount.entryPrice = subAccount.entryPrice.minus(deltaUsd.div(subAccount.size));
    }
    // post check
    const afterTrade = computeSubAccount(assets, subAccountId, subAccount, collateralPrice, assetPrice);
    return {
        afterTrade,
        isTradeSafe: afterTrade.computed.isIMSafe,
        feeUsd: totalFeeUsd,
        profitAssetTransferred,
        bitoroTokenTransferred
    };
}
exports.computeWithdrawProfit = computeWithdrawProfit;
function computeRealizeProfit(profitUsd, feeUsd, profitAsset, profitAssetPrice) {
    let deductUsd = bignumber_js_1.default.minimum(profitUsd, feeUsd);
    let profitAssetTransferred = constants_1._0;
    let bitoroTokenTransferred = constants_1._0;
    // pnl
    profitUsd = profitUsd.minus(deductUsd);
    if (profitUsd.gt(constants_1._0)) {
        let profitCollateral = profitUsd.div(profitAssetPrice);
        // transfer profit token
        let spot = bignumber_js_1.default.minimum(profitCollateral, profitAsset.spotLiquidity);
        if (spot.gt(constants_1._0)) {
            profitAssetTransferred = spot;
        }
        // debt
        const debtWadAmount = profitCollateral.minus(spot);
        if (debtWadAmount.gt(constants_1._0)) {
            bitoroTokenTransferred = debtWadAmount;
        }
    }
    return { deductUsd, profitAssetTransferred, bitoroTokenTransferred };
}
exports.computeRealizeProfit = computeRealizeProfit;
function computeRealizeLoss(subAccount, collateralPrice, lossUsd, isThrowBankrupt) {
    if (lossUsd.eq(constants_1._0)) {
        return;
    }
    let lossCollateral = lossUsd.div(collateralPrice);
    if (isThrowBankrupt) {
        if (subAccount.collateral.lt(lossCollateral)) {
            throw new Error('bankrupt');
        }
    }
    else {
        lossCollateral = bignumber_js_1.default.minimum(lossCollateral, subAccount.collateral);
    }
    subAccount.collateral = subAccount.collateral.minus(lossCollateral);
}
exports.computeRealizeLoss = computeRealizeLoss;
function computeLiquidityFeeRate(poolConfig, currentAssetValue, targetAssetValue, isAdd, deltaValue) {
    const baseFeeRate = poolConfig.liquidityBaseFeeRate;
    const dynamicFeeRate = poolConfig.liquidityDynamicFeeRate;
    let newAssetValue = constants_1._0;
    if (isAdd) {
        newAssetValue = currentAssetValue.plus(deltaValue);
    }
    else {
        if (currentAssetValue.lt(deltaValue)) {
            throw new types_1.InsufficientLiquidityError(types_1.InsufficientLiquidityType.BitoroRemoveLiquidityExceedsCurrentAsset, `removed value ${deltaValue} > liquidity ${currentAssetValue}`);
        }
        newAssetValue = currentAssetValue.minus(deltaValue);
    }
    // | x - target |
    const oldDiff = currentAssetValue.minus(targetAssetValue).abs();
    const newDiff = newAssetValue.minus(targetAssetValue).abs();
    if (targetAssetValue.eq(constants_1._0)) {
        // avoid division by 0
        return baseFeeRate;
    }
    else if (newDiff.lt(oldDiff)) {
        // improves
        const rebate = dynamicFeeRate
            .times(oldDiff)
            .div(targetAssetValue)
            .dp(5, bignumber_js_1.default.ROUND_DOWN);
        return bignumber_js_1.default.maximum(constants_1._0, baseFeeRate.minus(rebate));
    }
    else {
        // worsen
        let avgDiff = oldDiff.plus(newDiff).div(2);
        avgDiff = bignumber_js_1.default.minimum(avgDiff, targetAssetValue);
        const dynamic = dynamicFeeRate
            .times(avgDiff)
            .div(targetAssetValue)
            .dp(5, bignumber_js_1.default.ROUND_DOWN);
        return baseFeeRate.plus(dynamic);
    }
}
exports.computeLiquidityFeeRate = computeLiquidityFeeRate;
// NOTE: this function always returns 8h funding rate. if fundingInterval is 1h, the fee will be
//       fundingRate8H / 8 every hour.
function computeFundingRate8H(pool, asset, stableUtilization, unstableUtilization) {
    const shortFundingRate8H = computeSingleFundingRate8H(pool.shortFundingBaseRate8H, pool.shortFundingLimitRate8H, stableUtilization);
    const longFundingRate8H = computeSingleFundingRate8H(asset.longFundingBaseRate8H, asset.longFundingLimitRate8H, unstableUtilization);
    return { longFundingRate8H, shortFundingRate8H };
}
exports.computeFundingRate8H = computeFundingRate8H;
/**
 * Funding rate formula
 *
 * ^ fr           / limit
 * |            /
 * |          /
 * |        /
 * |______/ base
 * |    .
 * |  .
 * |.
 * +-------------------> %util
 *
 * NOTE: this function always returns 8h funding rate. if fundingInterval is 1h, the fee will be
 *       fundingRate8H / 8 every hour.
 */
function computeSingleFundingRate8H(baseRate8H, limitRate8H, utilization) {
    if (utilization.gt(constants_1._1)) {
        throw new types_1.InvalidArgumentError('%utilization > 100%');
    }
    let fundingRate8H = utilization.times(limitRate8H);
    fundingRate8H = bignumber_js_1.default.maximum(fundingRate8H, baseRate8H);
    return fundingRate8H;
}
exports.computeSingleFundingRate8H = computeSingleFundingRate8H;
/**
 * @dev check price and add spread, where spreadType should be:
 *
 *      subAccount.isLong   openPosition   closePosition   addLiquidity   removeLiquidity
 *      long                ask            bid
 *      short               bid            ask
 *      N/A                                                bid            ask
 */
function computePriceWithSpread(asset, price, spreadType) {
    if (asset.halfSpread.eq(constants_1._0)) {
        return price;
    }
    const halfSpread = price.times(asset.halfSpread);
    if (spreadType == constants_1.SpreadType.Bid) {
        if (price.lte(halfSpread)) {
            throw new types_1.BugError(`price - halfSpread = 0. impossible. price: ${price.toFixed()}`);
        }
        return price.minus(halfSpread);
    }
    else {
        return price.plus(halfSpread);
    }
}
exports.computePriceWithSpread = computePriceWithSpread;
//# sourceMappingURL=computations.js.map