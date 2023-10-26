"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test64 = exports.and64 = exports.fromRate = exports.fromWei = exports.fromUnit = exports.getChainStorage = exports.getSubAccountsAndOrders = exports.getSubAccounts = exports.getReaderContract = exports.decodeSubAccountId = exports.encodeSubAccountId = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const ethers_1 = require("ethers");
const utils_1 = require("ethers/lib/utils");
const types_1 = require("./types");
const constants_1 = require("./constants");
const Reader__factory_1 = require("./abi/factories/Reader__factory");
/**
 * SubAccountId =
 *         96             88        80       72        0
 * +---------+--------------+---------+--------+--------+
 * | Account | collateralId | assetId | isLong | unused |
 * +---------+--------------+---------+--------+--------+
 */
function encodeSubAccountId(account, collateralId, assetId, isLong) {
    if (ethers_1.ethers.utils.arrayify(account).length !== 20) {
        throw new types_1.InvalidArgumentError(`malformed account: ${account}`);
    }
    return (ethers_1.ethers.utils.solidityPack(['address', 'uint8', 'uint8', 'bool'], [account, collateralId, assetId, isLong]) +
        '000000000000000000');
}
exports.encodeSubAccountId = encodeSubAccountId;
function decodeSubAccountId(subAccountId) {
    const raw = ethers_1.ethers.utils.arrayify(subAccountId);
    if (raw.length !== 32) {
        throw new types_1.InvalidArgumentError(`unrecognized subAccountId: ${subAccountId}`);
    }
    return {
        account: ethers_1.ethers.utils.hexlify(raw.subarray(0, 20)),
        collateralId: raw[20],
        assetId: raw[21],
        isLong: !!raw[22]
    };
}
exports.decodeSubAccountId = decodeSubAccountId;
function getReaderContract(signerOrProvider, contractAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!contractAddress) {
            let chainId = 0;
            if (signerOrProvider instanceof ethers_1.ethers.Signer) {
                if (!signerOrProvider.provider) {
                    throw new types_1.InvalidArgumentError('the given Signer does not have a Provider');
                }
                chainId = (yield signerOrProvider.provider.getNetwork()).chainId;
            }
            else {
                chainId = (yield signerOrProvider.getNetwork()).chainId;
            }
            contractAddress = constants_1.CHAIN_ID_TO_READER_ADDRESS[chainId];
            if (!contractAddress) {
                throw new types_1.InvalidArgumentError(`unknown chainId ${chainId}`);
            }
        }
        (0, utils_1.getAddress)(contractAddress);
        return Reader__factory_1.Reader__factory.connect(contractAddress, signerOrProvider);
    });
}
exports.getReaderContract = getReaderContract;
function getSubAccounts(reader, subAccountIds, overrides = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const ret = {};
        const subAccounts = yield reader.getSubAccounts(subAccountIds, overrides);
        if (subAccounts.length !== subAccountIds.length) {
            throw new types_1.BugError(`subAccounts array mismatched: ${subAccounts.length} vs ${subAccountIds.length}`);
        }
        subAccounts.forEach((subAccount, i) => {
            ret[subAccountIds[i].toString()] = _convertSubAccount(subAccount);
        });
        return ret;
    });
}
exports.getSubAccounts = getSubAccounts;
function getSubAccountsAndOrders(reader, subAccountIds, orderIds, overrides = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const ret = { subAccounts: {}, orders: {} };
        const result = yield reader.getSubAccountsAndOrders(subAccountIds, orderIds, overrides);
        if (result.subAccounts.length !== subAccountIds.length) {
            throw new types_1.BugError(`subAccounts array mismatched: ${result.subAccounts.length} vs ${subAccountIds.length}`);
        }
        result.subAccounts.forEach((subAccount, i) => {
            ret.subAccounts[subAccountIds[i].toString()] = _convertSubAccount(subAccount);
        });
        if (result.orders.length !== orderIds.length) {
            throw new types_1.BugError(`orders array mismatched: ${result.orders.length} vs ${orderIds.length}`);
        }
        if (result.isOrderExist.length !== orderIds.length) {
            throw new types_1.BugError(`orders array mismatched: ${result.isOrderExist.length} vs ${orderIds.length}`);
        }
        orderIds.forEach((orderId, index) => {
            if (result.isOrderExist[index]) {
                ret.orders[orderId] = result.orders[index];
            }
        });
        return ret;
    });
}
exports.getSubAccountsAndOrders = getSubAccountsAndOrders;
function getChainStorage(reader, overrides = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const storage = yield reader.callStatic.getChainStorage(overrides);
        return {
            pool: _convertLiquidityPoolStorage(storage.pool),
            assets: storage.assets.map(x => _convertAssetStorage(x)),
            dexes: storage.dexes.map(x => _convertDexStorage(storage.assets, x)),
            liquidityLockPeriod: storage.liquidityLockPeriod,
            lpDeduct: fromWei(storage.lpDeduct),
            stableDeduct: fromWei(storage.stableDeduct)
        };
    });
}
exports.getChainStorage = getChainStorage;
function fromUnit(n, decimals) {
    return new bignumber_js_1.default(n.toString()).shiftedBy(-decimals);
}
exports.fromUnit = fromUnit;
function fromWei(n) {
    return fromUnit(n, constants_1.DECIMALS);
}
exports.fromWei = fromWei;
function fromRate(n) {
    return new bignumber_js_1.default(n.toString()).shiftedBy(-constants_1.RATIO_DECIMALS);
}
exports.fromRate = fromRate;
function _convertSubAccount(a) {
    return {
        collateral: fromWei(a.collateral),
        size: fromWei(a.size),
        lastIncreasedTime: a.lastIncreasedTime,
        entryPrice: fromWei(a.entryPrice),
        entryFunding: fromWei(a.entryFunding)
    };
}
function _convertLiquidityPoolStorage(p) {
    return {
        shortFundingBaseRate8H: fromRate(p.shortFundingBaseRate8H),
        shortFundingLimitRate8H: fromRate(p.shortFundingLimitRate8H),
        lastFundingTime: p.lastFundingTime,
        fundingInterval: p.fundingInterval,
        liquidityBaseFeeRate: fromRate(p.liquidityBaseFeeRate),
        liquidityDynamicFeeRate: fromRate(p.liquidityDynamicFeeRate),
        sequence: p.sequence,
        strictStableDeviation: fromRate(p.strictStableDeviation),
        blpPriceLowerBound: fromWei(p.blpPriceLowerBound),
        blpPriceUpperBound: fromWei(p.blpPriceUpperBound)
    };
}
function _convertAssetStorage(a) {
    return {
        symbol: ethers_1.ethers.utils.parseBytes32String(a.symbol),
        id: a.id,
        decimals: a.decimals,
        isStable: test64(a.flags.toNumber(), constants_1.ASSET_IS_STABLE),
        canAddRemoveLiquidity: test64(a.flags.toNumber(), constants_1.ASSET_CAN_ADD_REMOVE_LIQUIDITY),
        isTradable: test64(a.flags.toNumber(), constants_1.ASSET_IS_TRADABLE),
        isOpenable: test64(a.flags.toNumber(), constants_1.ASSET_IS_OPENABLE),
        isShortable: test64(a.flags.toNumber(), constants_1.ASSET_IS_SHORTABLE),
        useStableTokenForProfit: test64(a.flags.toNumber(), constants_1.ASSET_USE_STABLE_TOKEN_FOR_PROFIT),
        isEnabled: test64(a.flags.toNumber(), constants_1.ASSET_IS_ENABLED),
        isStrictStable: test64(a.flags.toNumber(), constants_1.ASSET_IS_STRICT_STABLE),
        referenceOracleType: a.referenceOracleType,
        referenceOracle: a.referenceOracle,
        referenceDeviation: fromRate(a.referenceDeviation),
        halfSpread: fromRate(a.halfSpread),
        tokenAddress: a.tokenAddress,
        bitoroTokenAddress: a.bitoroTokenAddress,
        initialMarginRate: fromRate(a.initialMarginRate),
        maintenanceMarginRate: fromRate(a.maintenanceMarginRate),
        positionFeeRate: fromRate(a.positionFeeRate),
        minProfitRate: fromRate(a.minProfitRate),
        minProfitTime: a.minProfitTime,
        maxLongPositionSize: fromWei(a.maxLongPositionSize),
        maxShortPositionSize: fromWei(a.maxShortPositionSize),
        spotWeight: a.spotWeight,
        longFundingBaseRate8H: fromRate(a.longFundingBaseRate8H),
        longFundingLimitRate8H: fromRate(a.longFundingLimitRate8H),
        longCumulativeFundingRate: fromWei(a.longCumulativeFundingRate),
        shortCumulativeFunding: fromWei(a.shortCumulativeFunding),
        spotLiquidity: fromWei(a.spotLiquidity),
        credit: fromWei(a.credit),
        totalLongPosition: fromWei(a.totalLongPosition),
        averageLongPrice: fromWei(a.averageLongPrice),
        totalShortPosition: fromWei(a.totalShortPosition),
        averageShortPrice: fromWei(a.averageShortPrice),
        collectedFee: fromWei(a.collectedFee),
        deduct: fromWei(a.deduct)
    };
}
function _convertDexStorage(assets, d) {
    const fromAssetUnit = (balance, assetId) => {
        const asset = assets[assetId];
        if (typeof asset === 'undefined') {
            throw new Error(`bad dex config. reading assetId: ${assetId}`);
        }
        return new bignumber_js_1.default(balance.toString()).shiftedBy(-asset.decimals);
    };
    return {
        dexId: d.dexId,
        dexType: d.dexType,
        assetIds: d.assetIds,
        assetWeightInDEX: d.assetWeightInDEX,
        dexWeight: d.dexWeight,
        totalSpotInDEX: d.totalSpotInDEX.map((balance, i) => fromAssetUnit(balance, d.assetIds[i])),
        dexLPBalance: fromWei(d.dexLPBalance),
        liquidityBalance: d.liquidityBalance.map((balance, i) => fromAssetUnit(balance, d.assetIds[i]))
    };
}
function and64(v1, v2) {
    let hi = 0x80000000;
    let low = 0x7fffffff;
    let hi1 = ~~(v1 / hi);
    let hi2 = ~~(v2 / hi);
    let low1 = v1 & low;
    let low2 = v2 & low;
    let h = hi1 & hi2;
    let l = low1 & low2;
    return h * hi + l;
}
exports.and64 = and64;
function test64(v1, mask) {
    return and64(v1, mask) !== 0;
}
exports.test64 = test64;
//# sourceMappingURL=data.js.map