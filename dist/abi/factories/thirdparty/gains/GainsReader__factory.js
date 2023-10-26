"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GainsReader__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract GNSPairsStorageV6",
                name: "pairStorage_",
                type: "address",
            },
            {
                internalType: "contract GNSTradingStorageV5",
                name: "tradingStorage_",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "config",
        outputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "string",
                                name: "name",
                                type: "string",
                            },
                            {
                                internalType: "uint256",
                                name: "openFeeP",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "closeFeeP",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "oracleFeeP",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "nftLimitOrderFeeP",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "referralFeeP",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "minLevPosDai",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct GNSPairsStorageV6.Fee[]",
                        name: "fees",
                        type: "tuple[]",
                    },
                    {
                        components: [
                            {
                                internalType: "string",
                                name: "name",
                                type: "string",
                            },
                            {
                                internalType: "bytes32",
                                name: "job",
                                type: "bytes32",
                            },
                            {
                                internalType: "uint256",
                                name: "minLeverage",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "maxLeverage",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "maxCollateralP",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct GNSPairsStorageV6.Group[]",
                        name: "groups",
                        type: "tuple[]",
                    },
                    {
                        internalType: "contract GNSTradingV6_2",
                        name: "trading",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "callbacks",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "maxTradesPerPair",
                        type: "uint256",
                    },
                    {
                        internalType: "address[]",
                        name: "supportedTokens",
                        type: "address[]",
                    },
                    {
                        internalType: "address",
                        name: "nftRewards",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "maxPosDai",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "isPaused",
                        type: "bool",
                    },
                    {
                        internalType: "uint256",
                        name: "maxNegativePnlOnOpenP",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "pairsCount",
                        type: "uint256",
                    },
                ],
                internalType: "struct GainsReader.GainsConfig",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "trader",
                type: "address",
            },
        ],
        name: "getLimitOrders",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "trader",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "pairIndex",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "index",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "positionSize",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "spreadReductionP",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "buy",
                        type: "bool",
                    },
                    {
                        internalType: "uint256",
                        name: "leverage",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "tp",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "sl",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "minPrice",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxPrice",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "block",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                    },
                ],
                internalType: "struct GNSTradingStorageV5.OpenLimitOrder[]",
                name: "openLimitOrders",
                type: "tuple[]",
            },
            {
                internalType: "enum GNSNftRewardsV6.OpenLimitOrderType[]",
                name: "openLimitOrderTypes",
                type: "uint8[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getPairsCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "trader",
                type: "address",
            },
        ],
        name: "getPositionsAndMarketOrders",
        outputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "trader",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "pairIndex",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "index",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "initialPosToken",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "positionSizeDai",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "openPrice",
                                type: "uint256",
                            },
                            {
                                internalType: "bool",
                                name: "buy",
                                type: "bool",
                            },
                            {
                                internalType: "uint256",
                                name: "leverage",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tp",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "sl",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct GNSTradingStorageV5.Trade",
                        name: "trade",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "tokenId",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tokenPriceDai",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "openInterestDai",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tpLastUpdated",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "slLastUpdated",
                                type: "uint256",
                            },
                            {
                                internalType: "bool",
                                name: "beingMarketClosed",
                                type: "bool",
                            },
                        ],
                        internalType: "struct GNSTradingStorageV5.TradeInfo",
                        name: "tradeInfo",
                        type: "tuple",
                    },
                    {
                        internalType: "int256",
                        name: "initialFundingFeePerOi",
                        type: "int256",
                    },
                    {
                        internalType: "uint256",
                        name: "initialRolloverFeePerCollateral",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "pendingAccRolloverFee",
                        type: "uint256",
                    },
                    {
                        internalType: "int256",
                        name: "pendingAccFundingFeeValueLong",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "pendingAccFundingFeeValueShort",
                        type: "int256",
                    },
                ],
                internalType: "struct GainsReader.PositionInfo[]",
                name: "positionInfos",
                type: "tuple[]",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        components: [
                            {
                                components: [
                                    {
                                        internalType: "address",
                                        name: "trader",
                                        type: "address",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "pairIndex",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "index",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "initialPosToken",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "positionSizeDai",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "openPrice",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "bool",
                                        name: "buy",
                                        type: "bool",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "leverage",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "tp",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "sl",
                                        type: "uint256",
                                    },
                                ],
                                internalType: "struct GNSTradingStorageV5.Trade",
                                name: "trade",
                                type: "tuple",
                            },
                            {
                                internalType: "uint256",
                                name: "block",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "wantedPrice",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "slippageP",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "spreadReductionP",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tokenId",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct GNSTradingStorageV5.PendingMarketOrder",
                        name: "order",
                        type: "tuple",
                    },
                ],
                internalType: "struct GainsReader.MarketOrder[]",
                name: "marketOrders",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "pairIndex",
                type: "uint256",
            },
        ],
        name: "pair",
        outputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "string",
                                name: "from",
                                type: "string",
                            },
                            {
                                internalType: "string",
                                name: "to",
                                type: "string",
                            },
                            {
                                components: [
                                    {
                                        internalType: "address",
                                        name: "feed1",
                                        type: "address",
                                    },
                                    {
                                        internalType: "address",
                                        name: "feed2",
                                        type: "address",
                                    },
                                    {
                                        internalType: "enum GNSPairsStorageV6.FeedCalculation",
                                        name: "feedCalculation",
                                        type: "uint8",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "maxDeviationP",
                                        type: "uint256",
                                    },
                                ],
                                internalType: "struct GNSPairsStorageV6.Feed",
                                name: "feed",
                                type: "tuple",
                            },
                            {
                                internalType: "uint256",
                                name: "spreadP",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "groupIndex",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "feeIndex",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct GNSPairsStorageV6.Pair",
                        name: "pair",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "long",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "short",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "max",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct GainsReader.PairOpenInterestDai",
                        name: "openInterestDai",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "onePercentDepthAbove",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "onePercentDepthBelow",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "rolloverFeePerBlockP",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "fundingFeePerBlockP",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "accPerCollateral",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "lastRolloverUpdateBlock",
                                type: "uint256",
                            },
                            {
                                internalType: "int256",
                                name: "accPerOiLong",
                                type: "int256",
                            },
                            {
                                internalType: "int256",
                                name: "accPerOiShort",
                                type: "int256",
                            },
                            {
                                internalType: "uint256",
                                name: "lastFundingUpdateBlock",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct GainsReader.PairInfo",
                        name: "pairInfo",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "pairMinLeverage",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "pairMaxLeverage",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct GainsReader.PairLeverage",
                        name: "pairLeverage",
                        type: "tuple",
                    },
                ],
                internalType: "struct GainsReader.GainsPair",
                name: "gainsPair",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "pairStorage",
        outputs: [
            {
                internalType: "contract GNSPairsStorageV6",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "tradingStorage",
        outputs: [
            {
                internalType: "contract GNSTradingStorageV5",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class GainsReader__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.GainsReader__factory = GainsReader__factory;
GainsReader__factory.abi = _abi;
//# sourceMappingURL=GainsReader__factory.js.map