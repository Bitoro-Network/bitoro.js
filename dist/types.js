"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneSubAccount = exports.BugError = exports.InsufficientLiquidityType = exports.InsufficientLiquidityError = exports.InvalidArgumentError = void 0;
/**
 * Invalid argument or the query condition is impossible.
 */
class InvalidArgumentError extends Error {
    constructor(message) {
        super();
        this.message = message;
    }
}
exports.InvalidArgumentError = InvalidArgumentError;
/**
 * Indicates that LiquidityPool has insufficient reserves for a desired amount.
 */
class InsufficientLiquidityError extends Error {
    constructor(type, message) {
        super();
        this.isInsufficientLiquidityError = true;
        this.type = type;
        this.message = message;
    }
}
exports.InsufficientLiquidityError = InsufficientLiquidityError;
var InsufficientLiquidityType;
(function (InsufficientLiquidityType) {
    InsufficientLiquidityType[InsufficientLiquidityType["BitoroRemoveLiquidityExceedsCurrentAsset"] = 0] = "BitoroRemoveLiquidityExceedsCurrentAsset";
    InsufficientLiquidityType[InsufficientLiquidityType["AggregatorLimitedCredit"] = 1] = "AggregatorLimitedCredit";
    InsufficientLiquidityType[InsufficientLiquidityType["AggregatorLimitedMaxPosition"] = 2] = "AggregatorLimitedMaxPosition";
    InsufficientLiquidityType[InsufficientLiquidityType["SwapExceedsCurrentAsset"] = 3] = "SwapExceedsCurrentAsset";
})(InsufficientLiquidityType || (exports.InsufficientLiquidityType = InsufficientLiquidityType = {}));
/**
 * Indicates that calling convention error or bugs happened.
 */
class BugError extends Error {
    constructor(message) {
        super();
        this.message = message;
    }
}
exports.BugError = BugError;
function cloneSubAccount(a) {
    return Object.assign({}, a);
}
exports.cloneSubAccount = cloneSubAccount;
//# sourceMappingURL=types.js.map