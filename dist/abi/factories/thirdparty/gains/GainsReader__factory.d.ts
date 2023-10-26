import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { GainsReader, GainsReaderInterface } from "../../../thirdparty/gains/GainsReader";
export declare class GainsReader__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract GNSPairsStorageV6";
            readonly name: "pairStorage_";
            readonly type: "address";
        }, {
            readonly internalType: "contract GNSTradingStorageV5";
            readonly name: "tradingStorage_";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "config";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "string";
                    readonly name: "name";
                    readonly type: "string";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "openFeeP";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "closeFeeP";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "oracleFeeP";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "nftLimitOrderFeeP";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "referralFeeP";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "minLevPosDai";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct GNSPairsStorageV6.Fee[]";
                readonly name: "fees";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "string";
                    readonly name: "name";
                    readonly type: "string";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "job";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "minLeverage";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maxLeverage";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maxCollateralP";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct GNSPairsStorageV6.Group[]";
                readonly name: "groups";
                readonly type: "tuple[]";
            }, {
                readonly internalType: "contract GNSTradingV6_2";
                readonly name: "trading";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "callbacks";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxTradesPerPair";
                readonly type: "uint256";
            }, {
                readonly internalType: "address[]";
                readonly name: "supportedTokens";
                readonly type: "address[]";
            }, {
                readonly internalType: "address";
                readonly name: "nftRewards";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxPosDai";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "isPaused";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxNegativePnlOnOpenP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "pairsCount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct GainsReader.GainsConfig";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }];
        readonly name: "getLimitOrders";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "trader";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "pairIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "index";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "positionSize";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "spreadReductionP";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "buy";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "leverage";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "tp";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sl";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "block";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly internalType: "struct GNSTradingStorageV5.OpenLimitOrder[]";
            readonly name: "openLimitOrders";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "enum GNSNftRewardsV6.OpenLimitOrderType[]";
            readonly name: "openLimitOrderTypes";
            readonly type: "uint8[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getPairsCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }];
        readonly name: "getPositionsAndMarketOrders";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "trader";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "pairIndex";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "index";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "initialPosToken";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "positionSizeDai";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "openPrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "buy";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "leverage";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "tp";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "sl";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct GNSTradingStorageV5.Trade";
                readonly name: "trade";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "tokenPriceDai";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "openInterestDai";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "tpLastUpdated";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "slLastUpdated";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "beingMarketClosed";
                    readonly type: "bool";
                }];
                readonly internalType: "struct GNSTradingStorageV5.TradeInfo";
                readonly name: "tradeInfo";
                readonly type: "tuple";
            }, {
                readonly internalType: "int256";
                readonly name: "initialFundingFeePerOi";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "initialRolloverFeePerCollateral";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "pendingAccRolloverFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "pendingAccFundingFeeValueLong";
                readonly type: "int256";
            }, {
                readonly internalType: "int256";
                readonly name: "pendingAccFundingFeeValueShort";
                readonly type: "int256";
            }];
            readonly internalType: "struct GainsReader.PositionInfo[]";
            readonly name: "positionInfos";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "id";
                readonly type: "uint256";
            }, {
                readonly components: readonly [{
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "trader";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "pairIndex";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "index";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "initialPosToken";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "positionSizeDai";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "openPrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "buy";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "leverage";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "tp";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "sl";
                        readonly type: "uint256";
                    }];
                    readonly internalType: "struct GNSTradingStorageV5.Trade";
                    readonly name: "trade";
                    readonly type: "tuple";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "block";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "wantedPrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "slippageP";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "spreadReductionP";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct GNSTradingStorageV5.PendingMarketOrder";
                readonly name: "order";
                readonly type: "tuple";
            }];
            readonly internalType: "struct GainsReader.MarketOrder[]";
            readonly name: "marketOrders";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "pair";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "string";
                    readonly name: "from";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "to";
                    readonly type: "string";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "feed1";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "feed2";
                        readonly type: "address";
                    }, {
                        readonly internalType: "enum GNSPairsStorageV6.FeedCalculation";
                        readonly name: "feedCalculation";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "maxDeviationP";
                        readonly type: "uint256";
                    }];
                    readonly internalType: "struct GNSPairsStorageV6.Feed";
                    readonly name: "feed";
                    readonly type: "tuple";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "spreadP";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "groupIndex";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "feeIndex";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct GNSPairsStorageV6.Pair";
                readonly name: "pair";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "long";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "short";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "max";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct GainsReader.PairOpenInterestDai";
                readonly name: "openInterestDai";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "onePercentDepthAbove";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "onePercentDepthBelow";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "rolloverFeePerBlockP";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "fundingFeePerBlockP";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "accPerCollateral";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lastRolloverUpdateBlock";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "int256";
                    readonly name: "accPerOiLong";
                    readonly type: "int256";
                }, {
                    readonly internalType: "int256";
                    readonly name: "accPerOiShort";
                    readonly type: "int256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lastFundingUpdateBlock";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct GainsReader.PairInfo";
                readonly name: "pairInfo";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "pairMinLeverage";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "pairMaxLeverage";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct GainsReader.PairLeverage";
                readonly name: "pairLeverage";
                readonly type: "tuple";
            }];
            readonly internalType: "struct GainsReader.GainsPair";
            readonly name: "gainsPair";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pairStorage";
        readonly outputs: readonly [{
            readonly internalType: "contract GNSPairsStorageV6";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "tradingStorage";
        readonly outputs: readonly [{
            readonly internalType: "contract GNSTradingStorageV5";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): GainsReaderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GainsReader;
}
