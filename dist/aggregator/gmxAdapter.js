"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateGmxAdapterClosePositionCollateralUsd = exports.calculateGmxAdapterOpenPositionWithCost = exports.calculateGmxAdapterOpenPositionWithSizeUsd = exports.calculateGmxAdapterOpenPositionWithSize = exports.computeGmxAdapterMaxWithdrawCollateral = exports.computeGmxAdapterWithdrawCollateral = exports.computeGmxAdapterWithdrawCollateralWithUsd = exports.computeGmxAdapterClosePosition = exports.computeGmxAdapterOpenPosition = exports.computeGmxAdapterAccountSimulateKeeper = exports.computeGmxAdapterAccount = void 0;
const bignumber_js_1 = require("bignumber.js");
const types_1 = require("../types");
const types_2 = require("./types");
const gmxCore_1 = require("./gmxCore");
const constants_1 = require("./constants");
const constants_2 = require("../constants");
const calculator_1 = require("../calculator");
function computeGmxAdapterAccount(assets, // BITORO storage
storage, // aggregator storage
pos, assetApiPrice) {
    if (pos.assetTokenAddress.toLowerCase() !== pos.gmx.assetTokenAddress.toLowerCase()) {
        throw new types_1.InvalidArgumentError(`pos.asset != pos.gmx.asset`);
    }
    if (pos.collateralTokenAddress.toLowerCase() !== pos.gmx.collateralTokenAddress.toLowerCase()) {
        throw new types_1.InvalidArgumentError(`pos.collateral != pos.gmx.collateral`);
    }
    if (pos.isLong !== pos.gmx.isLong) {
        throw new types_1.InvalidArgumentError(`pos.isLong != pos.gmx.isLong`);
    }
    const { gmxCollateral, aggregatorCollateral } = _loadCollateral(assets, storage, pos.collateralTokenAddress, pos.assetTokenAddress, pos.isLong);
    const gmxDetails = (0, gmxCore_1.computeGmxCoreAccount)(storage.gmx, pos.gmx, assetApiPrice);
    const collateralApiPrice = pos.isLong ? assetApiPrice : null;
    const collateralPrice = (0, gmxCore_1.getGmxCorePrice)(gmxCollateral, collateralApiPrice).minPrice;
    const traderInitialCollateralPrice = pos.isLong ? pos.gmx.entryPrice : gmxCollateral.contractMinPrice;
    // fees
    const aggregatorFundingFeeCollateral = _computeAggregatorFundingFee(assets, storage, pos);
    if (aggregatorFundingFeeCollateral.lt(0)) {
        throw new Error(`aggregatorFundingFee < 0. entryFunding: ${pos.debtEntryFunding.toFixed()} token: ${gmxCollateral.config.symbol}`);
    }
    // margin balance
    const inflightBorrow = _getInflightBorrow(pos);
    const marginBalanceUsd = pos.gmx.collateralUsd
        .minus(pos.cumulativeDebt
        .plus(pos.cumulativeFee)
        .minus(inflightBorrow)
        .plus(aggregatorFundingFeeCollateral)
        .times(traderInitialCollateralPrice))
        .plus(gmxDetails.computed.pendingPnlAfterFundingUsd);
    const traderInitialCostUsd = pos.gmx.collateralUsd.minus(pos.cumulativeDebt
        .plus(pos.cumulativeFee)
        .minus(inflightBorrow)
        .times(traderInitialCollateralPrice)
    // note: unlike marginBalanceUsd, we skip aggregatorFundingFee here. we append
    //       aggregatorFundingFee into pendingPnlAfterFundingUsd
    );
    const aggregatorFundingFeeUsd = aggregatorFundingFeeCollateral.times(traderInitialCollateralPrice);
    const pendingPnlAfterFundingUsd = gmxDetails.computed.pendingPnlAfterFundingUsd.minus(aggregatorFundingFeeUsd);
    const leverage = traderInitialCostUsd.eq(0) ? new bignumber_js_1.BigNumber(0) : pos.gmx.sizeUsd.div(traderInitialCostUsd);
    const pendingRoe = traderInitialCostUsd.eq(0) ? new bignumber_js_1.BigNumber(0) : pendingPnlAfterFundingUsd.div(traderInitialCostUsd);
    let liquidationPrice = _estimateGmxAdapterLiquidationPrice(aggregatorCollateral, pos, inflightBorrow, aggregatorFundingFeeCollateral, gmxDetails.computed.fundingFeeUsd);
    if (pos.isLong) {
        liquidationPrice = bignumber_js_1.BigNumber.maximum(liquidationPrice, gmxDetails.computed.liquidationPrice);
    }
    else {
        liquidationPrice = bignumber_js_1.BigNumber.minimum(liquidationPrice, gmxDetails.computed.liquidationPrice);
    }
    liquidationPrice = bignumber_js_1.BigNumber.maximum(constants_2._0, liquidationPrice);
    let isIMSafe = true;
    let isMMSafe = true;
    if (pos.gmx.sizeUsd.lt(pos.gmx.collateralUsd)) {
        // gmx does not allow this
        isIMSafe = false;
        isMMSafe = false;
    }
    else if (pos.gmx.sizeUsd.gt(constants_2._0) && marginBalanceUsd.lt(storage.gmx.liquidationFeeUsd)) {
        // the trader pays liquidationFeeUsd
        isIMSafe = false;
        isMMSafe = false;
    }
    else if (!gmxDetails.computed.isMMSafe) {
        // if borrow = 0, gmx will liquidate at gmx MMRate instead of aggregator MMRate
        isIMSafe = false;
        isMMSafe = false;
    }
    else {
        // aggregator keeper condition
        isIMSafe = marginBalanceUsd.gte(pos.gmx.sizeUsd.times(aggregatorCollateral.initialMarginRate));
        isMMSafe = marginBalanceUsd.gte(pos.gmx.sizeUsd.times(aggregatorCollateral.maintenanceMarginRate));
    }
    return {
        account: pos,
        computed: {
            size: gmxDetails.computed.size,
            collateral: gmxDetails.computed.collateral,
            collateralPrice,
            minPrice: gmxDetails.computed.minPrice,
            maxPrice: gmxDetails.computed.maxPrice,
            markPrice: gmxDetails.computed.markPrice,
            traderInitialCostUsd,
            marginBalanceUsd,
            isIMSafe,
            isMMSafe,
            leverage,
            fundingFeeUsd: aggregatorFundingFeeCollateral.times(collateralPrice).plus(gmxDetails.computed.fundingFeeUsd),
            aggregatorFundingFeeUsd: aggregatorFundingFeeCollateral.times(collateralPrice),
            gmxFundingFeeUsd: gmxDetails.computed.fundingFeeUsd,
            pnlUsd: gmxDetails.computed.pnlUsd,
            pendingPnlUsd: gmxDetails.computed.pendingPnlUsd,
            pendingPnlAfterFundingUsd,
            pendingRoe,
            liquidationPrice,
            inflightBorrow
        }
    };
}
exports.computeGmxAdapterAccount = computeGmxAdapterAccount;
// compute the account that simulate the keeper
function computeGmxAdapterAccountSimulateKeeper(assets, // BITORO storage
storage, // aggregator storage
pos, assetApiPrice) {
    if (pos.gmx.sizeUsd.eq(constants_2._0) && pos.cumulativeDebt.gt(constants_2._0)) {
        pos = Object.assign(Object.assign({}, pos), { gmx: Object.assign({}, pos.gmx) });
        const { gmxCollateral, aggregatorCollateral } = _loadCollateral(assets, storage, pos.collateralTokenAddress, pos.assetTokenAddress, pos.isLong);
        let balance = pos.proxyCollateralBalance;
        if (gmxCollateral.config.isNative) {
            balance = balance.plus(pos.proxyEthBalance);
        }
        const inflightBorrow = _getInflightBorrow(pos);
        const repayResult = _repayAsset(aggregatorCollateral, pos, balance, inflightBorrow);
        pos.cumulativeDebt = pos.cumulativeDebt.minus(repayResult.paidDebt);
        pos.cumulativeFee = constants_2._0;
    }
    return computeGmxAdapterAccount(assets, storage, pos, assetApiPrice);
}
exports.computeGmxAdapterAccountSimulateKeeper = computeGmxAdapterAccountSimulateKeeper;
function computeGmxAdapterOpenPosition(assets, // BITORO storage
storage, // aggregator storage
pos, assetApiPrice, // asset price
borrowCollateral, // in collateral token
sizeDeltaUsd, // position size
swapInTokenAddress, // swapIn token
swapInAmount // swapIn amount. in swapIn token. will use contract price because swapping executes immediately
) {
    pos = Object.assign(Object.assign({}, pos), { gmx: Object.assign({}, pos.gmx) });
    let liquidityWarning = undefined;
    const { gmxCollateral, aggregatorCollateral, bitoroCollateral } = _loadCollateral(assets, storage, pos.collateralTokenAddress, pos.assetTokenAddress, pos.isLong);
    const gmxSwapIn = storage.gmx.tokens[swapInTokenAddress.toLowerCase()];
    if (!gmxSwapIn) {
        throw new Error(`unknown gmx token ${swapInTokenAddress}`);
    }
    borrowCollateral = borrowCollateral.dp(gmxCollateral.config.decimals, bignumber_js_1.BigNumber.ROUND_DOWN);
    // prices
    const collateralApiPrice = pos.isLong ? assetApiPrice : null;
    const collateralPrice = (0, gmxCore_1.getGmxCorePrice)(gmxCollateral, collateralApiPrice).minPrice;
    // aggregator fee - funding
    const aggregatorFundingFeeCollateral = _computeAggregatorFundingFee(assets, storage, pos);
    const aggregatorFundingFeeUsd = aggregatorFundingFeeCollateral.times(collateralPrice);
    pos.cumulativeFee = pos.cumulativeFee.plus(aggregatorFundingFeeCollateral);
    // aggregator fee - open position boost fee will be deduct from borrowed
    const boostFeeCollateral = borrowCollateral
        .times(aggregatorCollateral.boostFeeRate)
        .dp(gmxCollateral.config.decimals, bignumber_js_1.BigNumber.ROUND_DOWN);
    const boostFeeUsd = boostFeeCollateral.times(collateralPrice);
    pos.cumulativeDebt = pos.cumulativeDebt.plus(borrowCollateral);
    _updateEntryFunding(assets, storage, pos);
    // swap
    const { toAmount: swapOutCollateral, feeRate: swapFeeRate, feeUsd: swapFeeUsd, liquidityWarning: gmxSwapWarning } = (0, gmxCore_1.computeGmxCoreSwap)(storage.gmx, gmxSwapIn, gmxCollateral, swapInAmount, null, // will use contract price because swapping executes immediately
    null // will use contract price because swapping executes immediately
    );
    if (gmxSwapWarning && !liquidityWarning) {
        liquidityWarning = gmxSwapWarning;
    }
    // trade
    const gmxAmountIn = swapOutCollateral.plus(borrowCollateral).minus(boostFeeCollateral);
    const collateralDeltaUsd = (0, gmxCore_1.computeGmxCoreTokenToUsdMin)(gmxAmountIn, gmxCollateral, collateralApiPrice);
    const { afterTrade: gmxAfterTrade, isTradeSafe: isGmxTradeSafe, feeUsd: gmxPosFeeUsd, liquidityWarning: gmxOpenPositionWarning } = (0, gmxCore_1.computeGmxCoreIncrease)(storage.gmx, pos.gmx, assetApiPrice, sizeDeltaUsd, collateralDeltaUsd);
    if (gmxOpenPositionWarning && !liquidityWarning) {
        liquidityWarning = gmxOpenPositionWarning;
    }
    if (borrowCollateral.gt(constants_2._0)) {
        if (!bitoroCollateral) {
            throw new types_1.InvalidArgumentError(`bitoro: can not borrow (${gmxCollateral.config.symbol}): no such token`);
        }
        if (bitoroCollateral.spotLiquidity.lt(borrowCollateral)) {
            if (!liquidityWarning) {
                liquidityWarning = new types_1.InsufficientLiquidityError(types_1.InsufficientLiquidityType.AggregatorLimitedCredit, `can not borrow (${bitoroCollateral.symbol}): ${bitoroCollateral.spotLiquidity.toFixed()} < ${borrowCollateral.toFixed()}`);
            }
        }
        if (aggregatorCollateral.totalBorrow.plus(borrowCollateral).gt(aggregatorCollateral.borrowLimit)) {
            if (!liquidityWarning) {
                liquidityWarning = new types_1.InsufficientLiquidityError(types_1.InsufficientLiquidityType.AggregatorLimitedCredit, `can not borrow (${bitoroCollateral.symbol}): ${aggregatorCollateral.totalBorrow.toFixed()} + ${borrowCollateral.toFixed()} > ${aggregatorCollateral.borrowLimit.toFixed()}`);
            }
        }
    }
    // after trade
    pos.isLiquidating = false;
    const afterTrade = computeGmxAdapterAccount(assets, storage, Object.assign(Object.assign({}, pos), { gmx: gmxAfterTrade.gmxAccount }), assetApiPrice);
    return {
        sizeDeltaUsd,
        swapFeeRate,
        swapFeeUsd,
        swapOutCollateral,
        gmxAmountIn,
        gmxPosFeeUsd,
        boostFeeUsd,
        aggregatorFundingFeeUsd,
        feeUsd: swapFeeUsd
            .plus(gmxPosFeeUsd)
            .plus(boostFeeUsd)
            .plus(aggregatorFundingFeeUsd),
        afterTrade,
        isTradeSafe: isGmxTradeSafe && afterTrade.computed.isIMSafe,
        liquidityWarning
    };
}
exports.computeGmxAdapterOpenPosition = computeGmxAdapterOpenPosition;
function computeGmxAdapterClosePosition(assets, // BITORO storage
storage, // aggregator storage
pos, assetApiPrice, sizeDeltaUsd, // position size
collateralDeltaUsd // in USD
) {
    pos = Object.assign(Object.assign({}, pos), { gmx: Object.assign({}, pos.gmx) });
    const { gmxCollateral, aggregatorCollateral } = _loadCollateral(assets, storage, pos.collateralTokenAddress, pos.assetTokenAddress, pos.isLong);
    if (pos.gmx.entryPrice.eq(0)) {
        throw new Error('empty account');
    }
    // prices
    const collateralApiPrice = pos.isLong ? assetApiPrice : null;
    const collateralPrice = (0, gmxCore_1.getGmxCorePrice)(gmxCollateral, collateralApiPrice).minPrice;
    const beforeTrade = computeGmxAdapterAccount(assets, storage, pos, assetApiPrice);
    // core close
    const { afterTrade: gmxAfterTrade, isTradeSafe: gmxIsTradeSafe, feeUsd: posFeeUsd, realizedPnlUsd, usdOutAfterFee: gmxUsdOutAfterFee, collateralOutAfterFee: gmxCollateralOutAfterFee } = (0, gmxCore_1.computeGmxCoreDecrease)(storage.gmx, pos.gmx, assetApiPrice, sizeDeltaUsd, collateralDeltaUsd);
    // aggregator fee - funding
    const aggregatorFundingFeeCollateral = _computeAggregatorFundingFee(assets, storage, pos);
    const aggregatorFundingFeeUsd = aggregatorFundingFeeCollateral.times(collateralPrice);
    pos.cumulativeFee = pos.cumulativeFee.plus(aggregatorFundingFeeCollateral);
    _updateEntryFunding(assets, storage, pos);
    // repay. see Debt.sol
    let collateralOut = gmxCollateralOutAfterFee;
    let repayCollateral = constants_2._0;
    let boostFeeCollateral = constants_2._0;
    let boostFeeUsd = constants_2._0;
    if (gmxAfterTrade.gmxAccount.sizeUsd.eq(0)) {
        const inflightBorrow = _getInflightBorrow(pos);
        const repayResult = _repayAsset(aggregatorCollateral, pos, gmxCollateralOutAfterFee /* note: balance in the proxy are ignored */, inflightBorrow);
        collateralOut = repayResult.remain;
        repayCollateral = repayResult.paidDebt;
        boostFeeCollateral = repayResult.boostFee;
        boostFeeUsd = boostFeeCollateral.times(collateralPrice);
    }
    const afterTrade = computeGmxAdapterAccount(assets, storage, Object.assign(Object.assign({}, pos), { gmx: gmxAfterTrade.gmxAccount }), assetApiPrice);
    return {
        sizeDeltaUsd,
        collateralDeltaUsd,
        realizedPnlUsd,
        gmxUsdOutAfterFee,
        gmxCollateralOutAfterFee,
        repayCollateral,
        boostFeeUsd,
        aggregatorFundingFeeUsd,
        feeUsd: posFeeUsd.plus(boostFeeUsd).plus(aggregatorFundingFeeUsd),
        afterTrade,
        collateralOut,
        isTradeSafe: beforeTrade.computed.isMMSafe && gmxIsTradeSafe && afterTrade.computed.isMMSafe
    };
}
exports.computeGmxAdapterClosePosition = computeGmxAdapterClosePosition;
function computeGmxAdapterWithdrawCollateralWithUsd(assets, // BITORO storage
storage, // aggregator storage
pos, assetApiPrice, collateralDeltaUsd // unit in USD
) {
    const { aggregatorCollateral } = _loadCollateral(assets, storage, pos.collateralTokenAddress, pos.assetTokenAddress, pos.isLong);
    const r = computeGmxAdapterClosePosition(assets, storage, pos, assetApiPrice, new bignumber_js_1.BigNumber(0), // sizeDeltaUsd
    collateralDeltaUsd);
    const maxLeverageAfterWithdraw = bignumber_js_1.BigNumber.min('100', constants_2._1.div(aggregatorCollateral.initialMarginRate));
    return Object.assign(Object.assign({}, r), { isTradeSafe: r.afterTrade.computed.isIMSafe && r.afterTrade.computed.leverage.lte(maxLeverageAfterWithdraw) });
}
exports.computeGmxAdapterWithdrawCollateralWithUsd = computeGmxAdapterWithdrawCollateralWithUsd;
// if the trader wants withdrawCollateral, get collateralUsd of the contract
function computeGmxAdapterWithdrawCollateral(assets, // BITORO storage
storage, // aggregator storage
pos, assetApiPrice, withdrawCollateral // unit in collateral
) {
    _loadCollateral(assets, storage, pos.collateralTokenAddress, pos.assetTokenAddress, pos.isLong);
    let collateralDeltaUsd = (0, calculator_1.binarySearchLeft)((x) => {
        if (x.lte(0)) {
            return true;
        }
        const res = computeGmxAdapterWithdrawCollateralWithUsd(assets, storage, pos, assetApiPrice, x);
        if (!res.isTradeSafe) {
            return false;
        }
        if (res.collateralOut.gt(withdrawCollateral)) {
            return false;
        }
        return true;
    }, null, //   guess
    pos.gmx.collateralUsd // upperLimit
    );
    return computeGmxAdapterWithdrawCollateralWithUsd(assets, storage, pos, assetApiPrice, collateralDeltaUsd);
}
exports.computeGmxAdapterWithdrawCollateral = computeGmxAdapterWithdrawCollateral;
function computeGmxAdapterMaxWithdrawCollateral(assets, // BITORO storage
storage, // aggregator storage
pos, assetApiPrice) {
    _loadCollateral(assets, storage, pos.collateralTokenAddress, pos.assetTokenAddress, pos.isLong);
    // get max possible collateralDeltaUsd
    let collateralDeltaUsd = (0, calculator_1.binarySearchLeft)((x) => {
        if (x.lte(0)) {
            return true;
        }
        const res = computeGmxAdapterWithdrawCollateralWithUsd(assets, storage, pos, assetApiPrice, x);
        if (!res.isTradeSafe) {
            return false;
        }
        return true;
    }, null, // guess
    pos.gmx.collateralUsd // upperLimit
    );
    // get max possible collateralDelta
    return computeGmxAdapterWithdrawCollateralWithUsd(assets, storage, pos, assetApiPrice, collateralDeltaUsd);
}
exports.computeGmxAdapterMaxWithdrawCollateral = computeGmxAdapterMaxWithdrawCollateral;
function _computeAggregatorFundingFee(assets, // BITORO storage
storage, // aggregator storage
pos) {
    if (pos.cumulativeDebt.eq(constants_2._0)) {
        return constants_2._0;
    }
    if (pos.gmx.sizeUsd.eq(constants_2._0)) {
        // if the order is not filled, even if the trader borrows, the funding is always 0.
        // the order can be canceled by broker.
        return constants_2._0;
    }
    const { gmxCollateral, bitoroCollateral } = _loadCollateral(assets, storage, pos.collateralTokenAddress, pos.assetTokenAddress, pos.isLong);
    if (!gmxCollateral) {
        throw new types_1.InvalidArgumentError(`missing gmxAsset[${pos.collateralTokenAddress}]`);
    }
    let cumulativeFunding = constants_2._0;
    if (pos.isLong &&
        pos.cumulativeDebt.gt(constants_2._0) /* note: some of gmxCollateral can not borrow. thus there is no bitoroCollateral */) {
        if (!bitoroCollateral) {
            throw new types_1.InvalidArgumentError(`can not borrow ${gmxCollateral.config.symbol}. no such token`);
        }
        cumulativeFunding = bitoroCollateral.longCumulativeFundingRate.minus(pos.debtEntryFunding);
        cumulativeFunding = cumulativeFunding;
    }
    if (!pos.isLong) {
        // this is a design compromise, bitoro does not have a short funding unit in usd. so the contract uses
        // specified shortFundingAssetId instead
        const bitoroCollateral = assets[storage.shortFundingAssetId];
        if (!bitoroCollateral) {
            throw new types_1.InvalidArgumentError(`missing bitoroAsset[${storage.shortFundingAssetId}]`);
        }
        if (bitoroCollateral.isStable) {
            throw new types_1.InvalidArgumentError(`bad config. bitoroAsset[${storage.shortFundingAssetId}] can not be stable coin`);
        }
        const gmxShortFundingAsset = storage.gmx.tokens[bitoroCollateral.tokenAddress.toLowerCase()];
        if (!gmxShortFundingAsset) {
            throw new types_1.InvalidArgumentError(`missing gmxAsset[${bitoroCollateral.tokenAddress}]`);
        }
        // note: bitoro eth.shortCumulativeFunding = Σ_i ethPrice_i * fundingRate_i
        cumulativeFunding = bitoroCollateral.shortCumulativeFunding
            .minus(pos.debtEntryFunding)
            .div(gmxShortFundingAsset.contractMinPrice);
    }
    return cumulativeFunding.times(pos.cumulativeDebt).dp(gmxCollateral.config.decimals, bignumber_js_1.BigNumber.ROUND_DOWN);
}
// CAUTION: only work when borrow > 0
function _estimateGmxAdapterLiquidationPrice(aggregatorCollateral, pos, inflightBorrow, aggregatorFundingFee, gmxFundingFeeUsd) {
    if (pos.gmx.sizeUsd.eq(constants_2._0) || pos.gmx.entryPrice.eq(constants_2._0)) {
        return constants_2._0;
    }
    const { maintenanceMarginRate: mmr } = aggregatorCollateral;
    const t1 = pos.gmx.collateralUsd.minus(gmxFundingFeeUsd).minus(pos.gmx.sizeUsd.times(mmr));
    const t2 = pos.cumulativeDebt
        .minus(inflightBorrow)
        .plus(pos.cumulativeFee)
        .plus(aggregatorFundingFee);
    const t3 = pos.gmx.sizeUsd.div(pos.gmx.entryPrice);
    if (pos.isLong) {
        return t1
            .minus(pos.gmx.sizeUsd)
            .minus(t2.times(pos.gmx.entryPrice))
            .div(t3.negated());
    }
    else {
        return t1
            .plus(pos.gmx.sizeUsd)
            .minus(t2)
            .div(t3);
    }
}
// when opening a position, get position size with given positionSize and leverage.
// (ignore the existing positions)
function calculateGmxAdapterOpenPositionWithSize(assets, // BITORO storage
storage, // aggregator storage
collateralTokenAddress, // key
assetTokenAddress, // key
isLong, // key
assetApiPrice, // asset price
leverage, positionAmount, // in asset
swapInTokenAddress, // swapIn token. will use contract price because swapping executes immediately
enableBorrow // borrowCollateral = 0 if !enableBorrow
) {
    const gmxAsset = storage.gmx.tokens[assetTokenAddress.toLowerCase()];
    if (!gmxAsset) {
        throw new Error(`unknown gmx token ${assetTokenAddress}`);
    }
    // price
    const { minPrice, maxPrice } = (0, gmxCore_1.getGmxCorePrice)(gmxAsset, assetApiPrice);
    const tradingPrice = isLong ? maxPrice : minPrice;
    const sizeUsd = tradingPrice.times(positionAmount);
    return calculateGmxAdapterOpenPositionWithSizeUsd(assets, storage, collateralTokenAddress, assetTokenAddress, isLong, assetApiPrice, leverage, sizeUsd, swapInTokenAddress, enableBorrow);
}
exports.calculateGmxAdapterOpenPositionWithSize = calculateGmxAdapterOpenPositionWithSize;
// when opening a position, get position size with given positionSize and leverage.
// (ignore the existing positions)
function calculateGmxAdapterOpenPositionWithSizeUsd(assets, // BITORO storage
storage, // aggregator storage
collateralTokenAddress, // key
assetTokenAddress, // key
isLong, // key
assetApiPrice, // asset price
leverage, sizeUsd, // in usd
swapInTokenAddress, // swapIn token. will use contract price because swapping executes immediately
enableBorrow // borrowCollateral = 0 if !enableBorrow
) {
    const { gmxCollateral, aggregatorCollateral } = _loadCollateral(assets, storage, collateralTokenAddress, assetTokenAddress, isLong);
    const gmxSwapIn = storage.gmx.tokens[swapInTokenAddress.toLowerCase()];
    if (!gmxSwapIn) {
        throw new Error(`unknown gmx token ${swapInTokenAddress}`);
    }
    if (typeof gmxCollateral.config.bitoroAssetId === 'undefined') {
        // bitoro can not borrow this
        if (enableBorrow) {
            throw new Error(`bitoro can not borrow ${gmxCollateral.config.symbol}`);
        }
    }
    // price
    const collateralApiPrice = isLong ? assetApiPrice : null;
    const collateralPrice = (0, gmxCore_1.getGmxCorePrice)(gmxCollateral, collateralApiPrice).minPrice;
    // get swapOut, borrow = position * 0.5%
    let borrowRate = constants_2._0;
    if (enableBorrow) {
        borrowRate = bignumber_js_1.BigNumber.maximum(constants_2._0, constants_2._1.div(constants_1.GMX_MAX_LEVERAGE).minus(aggregatorCollateral.maintenanceMarginRate));
    }
    let collateralFactor = constants_2._1
        .div(leverage)
        .plus(aggregatorCollateral.boostFeeRate.times(borrowRate))
        .plus(storage.gmx.marginFeeRate);
    const swapOutCollateral = sizeUsd.div(collateralPrice).times(collateralFactor);
    const borrowCollateral = sizeUsd.div(collateralPrice).times(borrowRate);
    const swap = (0, gmxCore_1.calculateGmxCoreSwapBySwapOut)(storage.gmx, gmxSwapIn, // from
    gmxCollateral, // to
    swapOutCollateral, // toAmount
    null, // will use contract price because swapping executes immediately
    null // will use contract price because swapping executes immediately
    );
    return {
        sizeDeltaUsd: sizeUsd,
        borrowCollateral: borrowCollateral.dp(gmxCollateral.config.decimals, bignumber_js_1.BigNumber.ROUND_UP),
        borrowUsd: borrowCollateral.times(collateralPrice),
        swapInAmount: swap.fromAmount,
        swapOutCollateral: swap.toAmount,
        swapOutUsd: swap.toAmount.times(collateralPrice)
    };
}
exports.calculateGmxAdapterOpenPositionWithSizeUsd = calculateGmxAdapterOpenPositionWithSizeUsd;
// when opening a position, get position size with given swapInAmount and leverage.
// (ignore the existing positions)
function calculateGmxAdapterOpenPositionWithCost(assets, // BITORO storage
storage, // aggregator storage
collateralTokenAddress, // key
assetTokenAddress, // key
isLong, // key
assetApiPrice, // asset price
leverage, swapInTokenAddress, // swapIn token
swapInAmount, // swapIn amount. in swapIn token
enableBorrow // borrowCollateral = 0 if !enableBorrow
) {
    const { gmxCollateral, aggregatorCollateral } = _loadCollateral(assets, storage, collateralTokenAddress, assetTokenAddress, isLong);
    const gmxSwapIn = storage.gmx.tokens[swapInTokenAddress.toLowerCase()];
    if (!gmxSwapIn) {
        throw new Error(`unknown gmx token ${swapInTokenAddress}`);
    }
    if (typeof gmxCollateral.config.bitoroAssetId === 'undefined') {
        // bitoro can not borrow this
        if (enableBorrow) {
            throw new Error(`bitoro can not borrow ${gmxCollateral.config.symbol}`);
        }
    }
    // prices
    const collateralApiPrice = isLong ? assetApiPrice : null;
    const collateralPrice = (0, gmxCore_1.getGmxCorePrice)(gmxCollateral, collateralApiPrice).minPrice;
    // swap
    const { toAmount: swapOutCollateral } = (0, gmxCore_1.computeGmxCoreSwap)(storage.gmx, gmxSwapIn, gmxCollateral, swapInAmount, null, // will use contract price because swapping executes immediately
    null // will use contract price because swapping executes immediately
    );
    // get sizeUsd, borrow = position * 0.5%
    let borrowRate = constants_2._0;
    if (enableBorrow) {
        borrowRate = bignumber_js_1.BigNumber.maximum(constants_2._0, constants_2._1.div(constants_1.GMX_MAX_LEVERAGE).minus(aggregatorCollateral.maintenanceMarginRate));
    }
    let collateralFactor = constants_2._1
        .div(leverage)
        .plus(aggregatorCollateral.boostFeeRate.times(borrowRate))
        .plus(storage.gmx.marginFeeRate);
    const sizeDeltaUsd = swapOutCollateral.times(collateralPrice).div(collateralFactor);
    const borrowCollateral = sizeDeltaUsd.div(collateralPrice).times(borrowRate);
    return {
        sizeDeltaUsd,
        borrowCollateral: borrowCollateral.dp(gmxCollateral.config.decimals, bignumber_js_1.BigNumber.ROUND_UP),
        borrowUsd: borrowCollateral.times(collateralPrice),
        swapOutCollateral: swapOutCollateral,
        swapOutUsd: swapOutCollateral.times(collateralPrice)
    };
}
exports.calculateGmxAdapterOpenPositionWithCost = calculateGmxAdapterOpenPositionWithCost;
// when closing a position, get collateralUsd to withdraw to keep the leverage
function calculateGmxAdapterClosePositionCollateralUsd(assets, // BITORO storage
storage, // aggregator storage
pos, assetApiPrice, amount // position size. in asset token
) {
    const { aggregatorCollateral } = _loadCollateral(assets, storage, pos.collateralTokenAddress, pos.assetTokenAddress, pos.isLong);
    if (pos.gmx.entryPrice.eq(constants_2._0)) {
        throw new types_1.InvalidArgumentError(`empty position`);
    }
    const sizeDeltaUsd = amount.times(pos.gmx.entryPrice);
    if (sizeDeltaUsd.gt(pos.gmx.sizeUsd)) {
        throw new types_1.InvalidArgumentError(`amount (${amount.toFixed()} = ${sizeDeltaUsd.toFixed()}) > position (${pos.gmx.sizeUsd.toFixed()})`);
    }
    if (sizeDeltaUsd.eq(pos.gmx.sizeUsd)) {
        // close all will automatically withdraw
        return constants_2._0;
    }
    // target leverage
    const maxLeverageAfterWithdraw = bignumber_js_1.BigNumber.min('100', constants_2._1.div(aggregatorCollateral.initialMarginRate));
    const oldLeverage = bignumber_js_1.BigNumber.minimum(maxLeverageAfterWithdraw, computeGmxAdapterAccount(assets, storage, pos, assetApiPrice).computed.leverage);
    if (oldLeverage.eq(constants_2._0)) {
        throw new types_1.BugError(`BUG? oldLeverage = 0. ${JSON.stringify(pos)}`);
    }
    let collateralDeltaUsd = (0, calculator_1.binarySearchLeft)((x) => {
        if (x.lte(0)) {
            return true;
        }
        x = x.dp(constants_2.DECIMALS); // GmxAdapter only accepts 18
        const res = computeGmxAdapterClosePosition(assets, storage, pos, assetApiPrice, sizeDeltaUsd, x);
        if (!res.isTradeSafe) {
            return false;
        }
        if (res.afterTrade.computed.leverage.gt(oldLeverage)) {
            return false;
        }
        return true;
    }, null, //   guess
    pos.gmx.collateralUsd // upperLimit
    );
    return collateralDeltaUsd.dp(constants_2.DECIMALS);
}
exports.calculateGmxAdapterClosePositionCollateralUsd = calculateGmxAdapterClosePositionCollateralUsd;
// CAUTION: mutable
function _updateEntryFunding(assets, // BITORO storage
storage, // aggregator storage
pos // CAUTION: mutable
) {
    if (pos.isLong && pos.cumulativeDebt.gt(constants_2._0)) {
        const { gmxCollateral, bitoroCollateral } = _loadCollateral(assets, storage, pos.collateralTokenAddress, pos.assetTokenAddress, pos.isLong);
        if (!bitoroCollateral) {
            throw new types_1.InvalidArgumentError(`can not borrow ${gmxCollateral.config.symbol}. no such token`);
        }
        pos.debtEntryFunding = bitoroCollateral.longCumulativeFundingRate;
    }
    if (!pos.isLong) {
        // this is a design compromise, bitoro does not have a short funding unit in usd. so the contract uses
        // specified shortFundingAssetId instead
        const bitoroCollateral = assets[storage.shortFundingAssetId];
        if (!bitoroCollateral) {
            throw new types_1.InvalidArgumentError(`missing bitoroAsset[${storage.shortFundingAssetId}]`);
        }
        if (bitoroCollateral.isStable) {
            throw new types_1.InvalidArgumentError(`bad config. bitoroAsset[${storage.shortFundingAssetId}] can not be stable coin`);
        }
        pos.debtEntryFunding = bitoroCollateral.shortCumulativeFunding;
    }
}
function _loadCollateral(assets, // BITORO storage
storage, // aggregator storage
collateralTokenAddress, assetTokenAddress, isLong) {
    const gmxCollateral = storage.gmx.tokens[collateralTokenAddress.toLowerCase()];
    if (!gmxCollateral) {
        throw new types_1.InvalidArgumentError(`missing gmxAsset[${collateralTokenAddress}]`);
    }
    const gmxAsset = storage.gmx.tokens[assetTokenAddress.toLowerCase()];
    if (!gmxAsset) {
        throw new types_1.InvalidArgumentError(`missing gmxAsset[${assetTokenAddress}]`);
    }
    if (gmxAsset.config.isStable) {
        throw new Error(`stable coin can not be asset(${assetTokenAddress})`);
    }
    if (isLong && assetTokenAddress.toLowerCase() !== collateralTokenAddress.toLowerCase()) {
        throw new Error(`long position should satisfy asset(${assetTokenAddress}) == collateral(${collateralTokenAddress})`);
    }
    if (!isLong && !gmxCollateral.config.isStable) {
        throw new Error(`short position should use stable coin as collateral(${collateralTokenAddress})`);
    }
    const aggregatorCollateral = storage.collaterals[collateralTokenAddress.toLowerCase()];
    if (!aggregatorCollateral) {
        throw new types_1.InvalidArgumentError(`missing aggregatorCollateral[${collateralTokenAddress}]`);
    }
    const bitoroCollateralId = gmxCollateral.config.bitoroAssetId;
    let bitoroCollateral = undefined;
    if (typeof bitoroCollateralId !== 'undefined') {
        // bitoro has this collateral
        bitoroCollateral = assets[bitoroCollateralId];
        if (!bitoroCollateral) {
            throw new types_1.InvalidArgumentError(`missing bitoroAsset[${bitoroCollateralId}]`);
        }
        if (collateralTokenAddress.toLowerCase() !== bitoroCollateral.tokenAddress.toLowerCase()) {
            throw new types_1.InvalidArgumentError(`pos.collateral(${collateralTokenAddress}) != pos.collateralId(${bitoroCollateralId})`);
        }
    }
    else {
        // bitoro does not have this collateral
        // just keep bitoroCollateral = undefined
    }
    return {
        gmxCollateral,
        gmxAsset,
        aggregatorCollateral,
        bitoroCollateral
    };
}
// CAUTION: mutable
function _repayAsset(aggregatorCollateral, pos, // CAUTION: mutable
collateralBalance, inflightBorrow) {
    const boostFee = pos.cumulativeDebt.times(aggregatorCollateral.boostFeeRate);
    const debt = pos.cumulativeDebt.minus(inflightBorrow);
    const fee = boostFee.plus(pos.cumulativeFee);
    let remain = collateralBalance;
    let paidDebt = constants_2._0;
    let paidFee = constants_2._0;
    if (remain.gte(debt)) {
        // good
        paidDebt = debt;
        remain = remain.minus(debt);
    }
    else {
        // bad
        paidDebt = remain;
        remain = constants_2._0;
    }
    if (remain.gte(fee)) {
        // good
        paidFee = fee;
        remain = remain.minus(fee);
    }
    else {
        // bad
        paidFee = remain;
        remain = constants_2._0;
    }
    let badDebt = debt.minus(paidDebt);
    pos.cumulativeDebt = inflightBorrow;
    pos.cumulativeFee = constants_2._0;
    return {
        boostFee,
        remain,
        paidDebt,
        paidFee,
        badDebt
    };
}
function _getInflightBorrow(pos) {
    let inflightBorrow = constants_2._0;
    for (let order of pos.gmxOrders) {
        if (!order.isFillOrCancel && order.category === types_2.AggregatorOrderCategory.Open) {
            if (order.collateralToken.toLowerCase() !== pos.gmx.collateralTokenAddress.toLowerCase()) {
                throw new types_1.BugError(`[BUG] order collateral (${order.collateralToken}) != subAccount collateral (${pos.gmx.collateralTokenAddress})`);
            }
            inflightBorrow = inflightBorrow.plus(order.borrow);
        }
    }
    return inflightBorrow;
}
//# sourceMappingURL=gmxAdapter.js.map