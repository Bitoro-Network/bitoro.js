"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearchLeft = exports.binarySearchRight = exports.calculateClosePositionCollateralAmount = exports.calculateOpenPositionWithCollateral = void 0;
const types_1 = require("./types");
const constants_1 = require("./constants");
const data_1 = require("./data");
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const computations_1 = require("./computations");
// when opening a position, get position size with given collateral and leverage.
// (ignore the existing positions)
function calculateOpenPositionWithCollateral(assets, subAccountId, subAccount, prices, leverage, collateralAmount, brokerGasFee // in collateral. you can pass _0 when calling placePositionOrder
) {
    const { collateralId, assetId, isLong } = (0, data_1.decodeSubAccountId)(subAccountId);
    if (collateralId >= assets.length) {
        throw new types_1.InvalidArgumentError(`missing asset[${collateralId}]`);
    }
    if (assetId >= assets.length) {
        throw new types_1.InvalidArgumentError(`missing asset[${assetId}]`);
    }
    const collateralPrice = prices[assets[collateralId].symbol];
    const assetPrice = prices[assets[assetId].symbol];
    if (!collateralPrice || collateralPrice.lte(constants_1._0)) {
        throw new types_1.InvalidArgumentError(`invalid price[${assets[collateralId].symbol}]`);
    }
    if (!assetPrice || assetPrice.lte(constants_1._0)) {
        throw new types_1.InvalidArgumentError(`invalid price[${assets[assetId].symbol}]`);
    }
    if (collateralAmount.lte(constants_1._0)) {
        throw new types_1.InvalidArgumentError(`invalid collateral ${collateralAmount.toFixed()}`);
    }
    if (brokerGasFee.lt(constants_1._0)) {
        throw new types_1.InvalidArgumentError(`invalid gasFee ${brokerGasFee.toFixed()}`);
    }
    if (collateralAmount.lt(brokerGasFee)) {
        throw new types_1.InvalidArgumentError(`collateral ${collateralAmount.toFixed()} < brokerGasFee ${brokerGasFee.toFixed()}`);
    }
    const collateralUsd = collateralAmount.minus(brokerGasFee).times(collateralPrice);
    const positionFeeRate = assets[assetId].positionFeeRate;
    const fundingFeeUsd = (0, computations_1.computeFundingFeeUsd)(subAccount, assets[assetId], isLong, assetPrice);
    let size = collateralUsd.minus(fundingFeeUsd);
    size = size.times(leverage).div(assetPrice); // treat assetPrice as entryPrice
    size = size.div(leverage.times(positionFeeRate).plus(1));
    return size;
}
exports.calculateOpenPositionWithCollateral = calculateOpenPositionWithCollateral;
// when closing a position, get collateral amount to withdraw to keep the leverage (positionValue / collateralValue)
function calculateClosePositionCollateralAmount(assets, subAccountId, subAccount, prices, profitAssetId, deltaPosition, brokerGasFee // in collateral. you can pass _0 when calling placePositionOrder
) {
    const { collateralId } = (0, data_1.decodeSubAccountId)(subAccountId);
    if (collateralId >= assets.length) {
        throw new types_1.InvalidArgumentError(`missing asset[${collateralId}]`);
    }
    const { collateralPrice, assetPrice } = (0, computations_1.computeTradingPrice)(assets, subAccountId, prices, false);
    const beforeTrade = (0, computations_1.computeSubAccount)(assets, subAccountId, subAccount, collateralPrice, assetPrice);
    if (!beforeTrade.computed.isMarginSafe) {
        throw new types_1.InvalidArgumentError('already bankrupt');
    }
    const oldLeverage = beforeTrade.computed.leverage;
    const afterTrade = (0, computations_1.computeClosePosition)(assets, subAccountId, subAccount, profitAssetId, prices, deltaPosition, brokerGasFee);
    if (!afterTrade.isTradeSafe) {
        throw new types_1.InvalidArgumentError('bad deltaPosition');
    }
    if (afterTrade.afterTrade.subAccount.size.eq(constants_1._0)) {
        // close all (assuming flags = WithdrawAllIfEmpty)
        return constants_1._0;
    }
    // leverage = entryPrice * newSize / newCollateral / collateralPrice
    // so newCollateral = entryPrice * newSize / leverage / collateralPrice
    const collateralRequired = afterTrade.afterTrade.subAccount.size
        .times(afterTrade.afterTrade.subAccount.entryPrice)
        .div(oldLeverage)
        .div(collateralPrice);
    let deltaCollateral = afterTrade.afterTrade.subAccount.collateral.minus(collateralRequired);
    deltaCollateral = bignumber_js_1.default.maximum(deltaCollateral, constants_1._0);
    return deltaCollateral;
}
exports.calculateClosePositionCollateralAmount = calculateClosePositionCollateralAmount;
// search x*, satisfies:
// * f(0 <= x < x*) = false
// * f(x >= x*) = true
// the returned x MUST satisfy f(x) = true
function binarySearchRight(f, guess, upperLimit = null, // x* < upperLimit
maxIteration = null, tolerance = null // | new - old | / old < tolerance
) {
    // x* ∈ [left, right]
    let left = constants_1._0;
    let right = new bignumber_js_1.default('Infinite');
    if (maxIteration === null) {
        maxIteration = 100;
    }
    if (tolerance === null) {
        tolerance = new bignumber_js_1.default('1e-7');
    }
    if (upperLimit === null && guess !== null) {
        // search an upper limit
        if (guess.lte(constants_1._0) || !guess.isFinite()) {
            guess = constants_1._1;
        }
        while (maxIteration > 0) {
            maxIteration -= 1;
            if (f(guess)) {
                right = guess;
                break;
            }
            else {
                left = guess;
                guess = left.times(2);
            }
        }
    }
    else if (upperLimit !== null && guess === null) {
        // a simple bisect
        right = upperLimit;
    }
    else {
        throw new types_1.InvalidArgumentError('not supported yet');
    }
    // simple bisect
    while (maxIteration > 0) {
        maxIteration -= 1;
        guess = left.plus(right).div(2);
        if (f(guess)) {
            right = guess;
        }
        else {
            left = guess;
        }
        if (right
            .minus(left)
            .div(right)
            .lt(tolerance)) {
            return right;
        }
    }
    return right;
}
exports.binarySearchRight = binarySearchRight;
// search x*, satisfies:
// * f(0 <= x <= x*) = true
// * f(x > x*) = false
// the returned x MUST satisfy f(x) = true
function binarySearchLeft(f, guess, upperLimit = null, // x* < upperLimit
maxIteration = null, tolerance = null // | new - old | / old < tolerance
) {
    // x* ∈ [left, right)
    let left = constants_1._0;
    let right = new bignumber_js_1.default('Infinite');
    if (maxIteration === null) {
        maxIteration = 100;
    }
    if (tolerance === null) {
        tolerance = new bignumber_js_1.default('1e-7');
    }
    // shortcut of "0"
    if (!f(tolerance)) {
        return constants_1._0;
    }
    if (upperLimit === null && guess !== null) {
        // search an upper limit
        if (guess.lte(constants_1._0) || !guess.isFinite()) {
            guess = constants_1._1;
        }
        while (maxIteration > 0) {
            maxIteration -= 1;
            if (f(guess)) {
                left = guess;
                guess = left.times(2);
            }
            else {
                right = guess;
                break;
            }
        }
    }
    else if (upperLimit !== null && guess === null) {
        // a simple bisect
        right = upperLimit;
    }
    else {
        throw new types_1.InvalidArgumentError('not supported yet');
    }
    // simple bisect
    while (maxIteration > 0) {
        maxIteration -= 1;
        guess = left.plus(right).div(2);
        if (f(guess)) {
            left = guess;
        }
        else {
            right = guess;
        }
        if (right
            .minus(left)
            .div(right)
            .lt(tolerance)) {
            return left;
        }
    }
    return left;
}
exports.binarySearchLeft = binarySearchLeft;
//# sourceMappingURL=calculator.js.map