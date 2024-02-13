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
exports.decodeGmxAdapterOrderHistoryKey = exports.getAggregatorPositionsAndOrders = exports.getGmxAdapterStorage = exports.getAggregatorReaderContract = exports.fromGmxUsd = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const utils_1 = require("ethers/lib/utils");
const constants_1 = require("./constants");
const types_1 = require("../types");
const ethers_1 = require("ethers");
const data_1 = require("../data");
const Reader__factory_1 = require("../abi/factories/aggregator/Reader__factory");
const utils_2 = require("ethers/lib/utils");
const constants_2 = require("../constants");
function fromGmxUsd(n) {
    return (0, data_1.fromUnit)(n, constants_1.GMX_PRICE_DECIMALS);
}
exports.fromGmxUsd = fromGmxUsd;
function getAggregatorReaderContract(signerOrProvider, contractAddress) {
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
            contractAddress = constants_1.CHAIN_ID_TO_AGGREGATOR_READER_ADDRESS[chainId];
            if (!contractAddress) {
                throw new types_1.InvalidArgumentError(`unknown chainId ${chainId}`);
            }
        }
        (0, utils_2.getAddress)(contractAddress);
        return Reader__factory_1.Reader__factory.connect(contractAddress, signerOrProvider);
    });
}
exports.getAggregatorReaderContract = getAggregatorReaderContract;
function getGmxAdapterStorage(reader, chainId, gmxPositionManager, gmxPositionRouter, gmxOrderBook, aggregatorTokenAddresses = [], gmxTokenAddresses = [], overrides = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (aggregatorTokenAddresses.length === 0) {
            const filtered = constants_1.GMX_TOKENS[chainId];
            aggregatorTokenAddresses = filtered.map(token => token.address);
        }
        if (gmxTokenAddresses.length === 0) {
            const filtered = constants_1.GMX_TOKENS[chainId];
            gmxTokenAddresses = filtered.map(token => token.address);
        }
        const store = yield reader.getGmxAdapterStorage(gmxPositionManager, gmxPositionRouter, gmxOrderBook, aggregatorTokenAddresses, gmxTokenAddresses, overrides);
        return _parseGmxAndAggregatorStorage(chainId, aggregatorTokenAddresses, gmxTokenAddresses, store);
    });
}
exports.getGmxAdapterStorage = getGmxAdapterStorage;
function _parseGmxAndAggregatorStorage(chainId, aggregatorTokenAddresses, gmxTokenAddresses, store) {
    return {
        gmx: {
            liquidationFeeUsd: fromGmxUsd(store.gmx.liquidationFeeUsd),
            marginFeeRate: constants_1.GMX_POSITION_FEE_RATE,
            swapFeeRate: (0, data_1.fromUnit)(store.gmx.swapFeeBasisPoints, constants_1.GMX_BASIS_POINTS_DECIMALS),
            stableSwapFeeRate: (0, data_1.fromUnit)(store.gmx.stableSwapFeeBasisPoints, constants_1.GMX_BASIS_POINTS_DECIMALS),
            taxRate: (0, data_1.fromUnit)(store.gmx.taxBasisPoints, constants_1.GMX_BASIS_POINTS_DECIMALS),
            stableTaxRate: (0, data_1.fromUnit)(store.gmx.stableTaxBasisPoints, constants_1.GMX_BASIS_POINTS_DECIMALS),
            minExecutionFee: new bignumber_js_1.default(store.gmx.minExecutionFee.toString()),
            minProfitTime: store.gmx.minProfitTime.toNumber(),
            totalTokenWeights: store.gmx.totalTokenWeights.toNumber(),
            usdgSupply: (0, data_1.fromWei)(store.gmx.usdgSupply),
            tokens: _parseGmxTokens(chainId, gmxTokenAddresses, store)
        },
        collaterals: _parseAdapterCollaterals(chainId, aggregatorTokenAddresses, store),
        shortFundingAssetId: constants_1.CHAIN_ID_TO_AGGREGATOR_SHORT_FUNDING_ASSET_ID[chainId]
    };
}
function _parseGmxTokens(chainId, gmxTokenAddresses, store) {
    const ret = {};
    if (gmxTokenAddresses.length !== store.gmx.tokens.length) {
        throw new types_1.BugError(`Bug: invalid gmxTokens length. ${gmxTokenAddresses.length} vs ${store.gmx.tokens.length}`);
    }
    // parse gmx tokens
    for (let i = 0; i < gmxTokenAddresses.length; i++) {
        const tokenAddress = gmxTokenAddresses[i].toLowerCase();
        const config = constants_1.GMX_TOKENS[chainId].find(conf => conf.address.toLowerCase() === tokenAddress);
        if (!config) {
            throw new types_1.InvalidArgumentError(`unknown gmx token ${tokenAddress}`);
        }
        const storeToken = store.gmx.tokens[i];
        let token = {
            // config
            config,
            minProfit: (0, data_1.fromUnit)(storeToken.minProfit, constants_1.GMX_BASIS_POINTS_DECIMALS),
            weight: storeToken.weight.toNumber(),
            maxUsdgAmounts: (0, data_1.fromWei)(storeToken.maxUsdgAmounts),
            maxGlobalShortSizeUsd: fromGmxUsd(storeToken.maxGlobalShortSize),
            maxGlobalLongSizeUsd: fromGmxUsd(storeToken.maxGlobalLongSize),
            // state
            poolAmount: (0, data_1.fromUnit)(storeToken.poolAmount, config.decimals),
            reservedAmount: (0, data_1.fromUnit)(storeToken.reservedAmount, config.decimals),
            bufferAmounts: (0, data_1.fromUnit)(storeToken.bufferAmounts, config.decimals),
            usdgAmount: (0, data_1.fromWei)(storeToken.usdgAmount),
            redemptionAmount: (0, data_1.fromWei)(storeToken.redemptionAmount),
            globalShortSizeUsd: fromGmxUsd(storeToken.globalShortSize),
            guaranteedUsd: fromGmxUsd(storeToken.guaranteedUsd),
            contractMinPrice: fromGmxUsd(storeToken.contractMinPrice),
            contractMaxPrice: fromGmxUsd(storeToken.contractMaxPrice),
            fundingRate: (0, data_1.fromUnit)(storeToken.fundingRate, constants_1.GMX_FUNDING_RATE_DECIMALS),
            cumulativeFundingRate: (0, data_1.fromUnit)(storeToken.cumulativeFundingRate, constants_1.GMX_FUNDING_RATE_DECIMALS),
            // computed
            availableAmount: constants_2._0,
            availableUsd: constants_2._0,
            maxAvailableShortUsd: constants_2._0,
            maxAvailableLongUsd: constants_2._0,
            maxLongCapacityUsd: constants_2._0
        };
        // computed
        token.availableAmount = token.poolAmount.minus(token.reservedAmount);
        token.maxAvailableShortUsd = new bignumber_js_1.default(0);
        if (token.maxGlobalShortSizeUsd.gt(0)) {
            if (token.maxGlobalShortSizeUsd.gt(token.globalShortSizeUsd)) {
                token.maxAvailableShortUsd = token.maxGlobalShortSizeUsd.minus(token.globalShortSizeUsd);
            }
        }
        token.availableUsd = token.config.isStable
            ? token.poolAmount.times(token.contractMinPrice)
            : token.availableAmount.times(token.contractMinPrice);
        token.maxAvailableLongUsd = new bignumber_js_1.default(0);
        if (token.maxGlobalLongSizeUsd.gt(0)) {
            if (token.maxGlobalLongSizeUsd.gt(token.guaranteedUsd)) {
                const remainingLongSizeUsd = token.maxGlobalLongSizeUsd.minus(token.guaranteedUsd);
                token.maxAvailableLongUsd = remainingLongSizeUsd.lt(token.availableUsd)
                    ? remainingLongSizeUsd
                    : token.availableUsd;
            }
        }
        else {
            token.maxAvailableLongUsd = token.availableUsd;
        }
        token.maxLongCapacityUsd =
            token.maxGlobalLongSizeUsd.gt(0) && token.maxGlobalLongSizeUsd.lt(token.availableUsd.plus(token.guaranteedUsd))
                ? token.maxGlobalLongSizeUsd
                : token.availableUsd.plus(token.guaranteedUsd);
        ret[tokenAddress] = token;
    }
    return ret;
}
function _parseAdapterCollaterals(chainId, aggregatorTokenAddresses, store) {
    const ret = {};
    for (let i = 0; i < aggregatorTokenAddresses.length; i++) {
        const tokenAddress = aggregatorTokenAddresses[i].toLowerCase();
        const aggregatorToken = store.collaterals[i];
        const gmxCollateral = constants_1.GMX_TOKENS[chainId].find(conf => conf.address.toLowerCase() === tokenAddress);
        if (!gmxCollateral) {
            throw new Error(`missing gmxCollateral[${tokenAddress}]`);
        }
        const token = {
            boostFeeRate: (0, data_1.fromRate)(aggregatorToken.boostFeeRate.toNumber()),
            initialMarginRate: (0, data_1.fromRate)(aggregatorToken.initialMarginRate.toNumber()),
            maintenanceMarginRate: (0, data_1.fromRate)(aggregatorToken.maintenanceMarginRate.toNumber()),
            liquidationFeeRate: (0, data_1.fromRate)(aggregatorToken.liquidationFeeRate.toNumber()),
            totalBorrow: (0, data_1.fromUnit)(aggregatorToken.totalBorrow, gmxCollateral.decimals),
            borrowLimit: (0, data_1.fromUnit)(aggregatorToken.borrowLimit, gmxCollateral.decimals)
        };
        ret[tokenAddress] = token;
    }
    return ret;
}
function getAggregatorPositionsAndOrders(reader, chainId, gmxPositionRouter, gmxOrderBook, account, overrides = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const store = yield reader.getAggregatorSubAccountsOfAccount(gmxPositionRouter, gmxOrderBook, account, overrides);
        return {
            subAccounts: _parseGmxAdapterSubAccounts(account, chainId, store)
        };
    });
}
exports.getAggregatorPositionsAndOrders = getAggregatorPositionsAndOrders;
function _parseGmxAdapterSubAccounts(accountAddress, chainId, store) {
    const ret = [];
    for (let i of store) {
        const gmxCollateral = constants_1.GMX_TOKENS[chainId].find(conf => conf.address.toLowerCase() === i.collateralAddress.toLowerCase());
        if (!gmxCollateral) {
            throw new Error(`missing gmxCollateral[${i.collateralAddress}]`);
        }
        const sub = {
            // key
            proxyAddress: i.proxyAddress,
            projectId: i.projectId.toNumber(),
            account: accountAddress,
            collateralTokenAddress: i.collateralAddress,
            assetTokenAddress: i.assetAddress,
            isLong: i.isLong,
            // store
            isLiquidating: i.isLiquidating,
            cumulativeDebt: (0, data_1.fromUnit)(i.cumulativeDebt, gmxCollateral.decimals),
            cumulativeFee: (0, data_1.fromUnit)(i.cumulativeFee, gmxCollateral.decimals),
            debtEntryFunding: (0, data_1.fromWei)(i.debtEntryFunding),
            proxyCollateralBalance: (0, data_1.fromUnit)(i.proxyCollateralBalance, gmxCollateral.decimals),
            proxyEthBalance: (0, data_1.fromWei)(i.proxyEthBalance),
            priceImpactFee: (0, data_1.fromUnit)(i.priceImpactFee, gmxCollateral.decimals),
            // gmx
            gmx: _parseGmxCoreAccount(i),
            gmxOrders: _parseGmxAdapterOrder(accountAddress, chainId, i)
        };
        ret.push(sub);
    }
    return ret;
}
function _parseGmxCoreAccount(store) {
    return {
        collateralTokenAddress: store.collateralAddress,
        assetTokenAddress: store.assetAddress,
        isLong: store.isLong,
        sizeUsd: fromGmxUsd(store.gmx.sizeUsd),
        collateralUsd: fromGmxUsd(store.gmx.collateralUsd),
        lastIncreasedTime: store.gmx.lastIncreasedTime.toNumber(),
        entryPrice: fromGmxUsd(store.gmx.entryPrice),
        entryFundingRate: (0, data_1.fromUnit)(store.gmx.entryFundingRate, constants_1.GMX_FUNDING_RATE_DECIMALS)
    };
}
function _parseGmxAdapterOrder(accountAddress, chainId, store) {
    const ret = [];
    for (let i of store.gmxOrders) {
        const collateralAddress = store.collateralAddress.toLowerCase();
        const gmxCollateral = constants_1.GMX_TOKENS[chainId].find(conf => conf.address.toLowerCase() === collateralAddress);
        if (!gmxCollateral) {
            throw new types_1.InvalidArgumentError(`unknown gmx token ${collateralAddress}`);
        }
        const { category, receiver, gmxOrderIndex, borrow, placeOrderTime } = decodeGmxAdapterOrderHistoryKey(i.orderHistoryKey, gmxCollateral);
        ret.push({
            orderHistoryKey: i.orderHistoryKey,
            // key
            account: accountAddress,
            collateralToken: store.collateralAddress,
            indexToken: store.assetAddress,
            isLong: store.isLong,
            // aggregator order
            category,
            receiver,
            gmxOrderIndex,
            borrow,
            placeOrderTime,
            // gmx order
            isFillOrCancel: i.isFillOrCancel,
            amountIn: (0, data_1.fromUnit)(i.amountIn, gmxCollateral.decimals),
            collateralDeltaUsd: fromGmxUsd(i.collateralDeltaUsd),
            sizeDeltaUsd: fromGmxUsd(i.sizeDeltaUsd),
            triggerPrice: fromGmxUsd(i.triggerPrice),
            triggerAboveThreshold: i.triggerAboveThreshold,
            slOrderHistoryKey: i.slOrderHistoryKey,
            tpOrderHistoryKey: i.tpOrderHistoryKey
        });
    }
    return ret;
}
//            252          248                184          88           0
// +------------+------------+------------------+-----------+-----------+
// | category 4 | receiver 4 | gmxOrderIndex 64 | borrow 96 |  time 88  |
// +------------+------------+------------------+-----------+-----------+
function decodeGmxAdapterOrderHistoryKey(key, gmxCollateral) {
    const raw = ethers_1.ethers.utils.arrayify(key);
    if (raw.length !== 32) {
        throw new Error(`unrecognized gmxAggregatorOrderHistoryKey: ${key}`);
    }
    return {
        category: (raw[0] >> 4),
        receiver: (raw[0] & 0xf),
        gmxOrderIndex: new bignumber_js_1.default((0, utils_1.hexlify)(raw.subarray(1, 1 + 8))).toNumber(),
        borrow: new bignumber_js_1.default((0, utils_1.hexlify)(raw.subarray(9, 9 + 12))).shiftedBy(-gmxCollateral.decimals),
        placeOrderTime: new bignumber_js_1.default((0, utils_1.hexlify)(raw.subarray(21, 21 + 11))).toNumber()
    };
}
exports.decodeGmxAdapterOrderHistoryKey = decodeGmxAdapterOrderHistoryKey;
//# sourceMappingURL=data.js.map