import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Reader, ReaderInterface } from "../../aggregator/Reader";
export declare class Reader__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IProxyFactory";
            readonly name: "aggregatorFactory_";
            readonly type: "address";
        }, {
            readonly internalType: "contract IGmxVault";
            readonly name: "gmxVault_";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "weth_";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "usdg_";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "aggregatorFactory";
        readonly outputs: readonly [{
            readonly internalType: "contract IProxyFactory";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IGmxPositionRouter";
            readonly name: "gmxPositionRouter";
            readonly type: "address";
        }, {
            readonly internalType: "contract IGmxOrderBook";
            readonly name: "gmxOrderBook";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "accountAddress";
            readonly type: "address";
        }];
        readonly name: "getAggregatorSubAccountsOfAccount";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "proxyAddress";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "projectId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "collateralAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "assetAddress";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "isLong";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isLiquidating";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "cumulativeDebt";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "cumulativeFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "debtEntryFunding";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "proxyCollateralBalance";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "proxyEthBalance";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "priceImpactFee";
                readonly type: "uint256";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "sizeUsd";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "collateralUsd";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lastIncreasedTime";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "entryPrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "entryFundingRate";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Reader.GmxCoreAccount";
                readonly name: "gmx";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "orderHistoryKey";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isFillOrCancel";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amountIn";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "collateralDeltaUsd";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "sizeDeltaUsd";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "triggerPrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "triggerAboveThreshold";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "tpOrderHistoryKey";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "slOrderHistoryKey";
                    readonly type: "bytes32";
                }];
                readonly internalType: "struct Reader.GmxAdapterOrder[]";
                readonly name: "gmxOrders";
                readonly type: "tuple[]";
            }];
            readonly internalType: "struct Reader.AggregatorSubAccount[]";
            readonly name: "subAccounts";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IGmxPositionRouter";
            readonly name: "gmxPositionRouter";
            readonly type: "address";
        }, {
            readonly internalType: "contract IGmxOrderBook";
            readonly name: "gmxOrderBook";
            readonly type: "address";
        }, {
            readonly internalType: "address[]";
            readonly name: "proxyAddresses";
            readonly type: "address[]";
        }];
        readonly name: "getAggregatorSubAccountsOfProxy";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "proxyAddress";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "projectId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "collateralAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "assetAddress";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "isLong";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isLiquidating";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "cumulativeDebt";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "cumulativeFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "debtEntryFunding";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "proxyCollateralBalance";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "proxyEthBalance";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "priceImpactFee";
                readonly type: "uint256";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "sizeUsd";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "collateralUsd";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lastIncreasedTime";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "entryPrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "entryFundingRate";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Reader.GmxCoreAccount";
                readonly name: "gmx";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "orderHistoryKey";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isFillOrCancel";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amountIn";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "collateralDeltaUsd";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "sizeDeltaUsd";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "triggerPrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "triggerAboveThreshold";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "tpOrderHistoryKey";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "slOrderHistoryKey";
                    readonly type: "bytes32";
                }];
                readonly internalType: "struct Reader.GmxAdapterOrder[]";
                readonly name: "gmxOrders";
                readonly type: "tuple[]";
            }];
            readonly internalType: "struct Reader.AggregatorSubAccount[]";
            readonly name: "subAccounts";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IGmxBasePositionManager";
            readonly name: "gmxPositionManager";
            readonly type: "address";
        }, {
            readonly internalType: "contract IGmxPositionRouter";
            readonly name: "gmxPositionRouter";
            readonly type: "address";
        }, {
            readonly internalType: "contract IGmxOrderBook";
            readonly name: "gmxOrderBook";
            readonly type: "address";
        }, {
            readonly internalType: "address[]";
            readonly name: "aggregatorCollateralAddresses";
            readonly type: "address[]";
        }, {
            readonly internalType: "address[]";
            readonly name: "gmxTokenAddresses";
            readonly type: "address[]";
        }];
        readonly name: "getGmxAdapterStorage";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "boostFeeRate";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "initialMarginRate";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maintenanceMarginRate";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "liquidationFeeRate";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "totalBorrow";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "borrowLimit";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Reader.BitoroCollateral[]";
                readonly name: "collaterals";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "totalTokenWeights";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "minProfitTime";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "minExecutionFee";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "liquidationFeeUsd";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_marginFeeBasisPoints";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "swapFeeBasisPoints";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "stableSwapFeeBasisPoints";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "taxBasisPoints";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "stableTaxBasisPoints";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "usdgSupply";
                    readonly type: "uint256";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "minProfit";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "weight";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "maxUsdgAmounts";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "maxGlobalShortSize";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "maxGlobalLongSize";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "poolAmount";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "reservedAmount";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "usdgAmount";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "redemptionAmount";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "bufferAmounts";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "globalShortSize";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "contractMinPrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "contractMaxPrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "guaranteedUsd";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "fundingRate";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "cumulativeFundingRate";
                        readonly type: "uint256";
                    }];
                    readonly internalType: "struct Reader.GmxToken[]";
                    readonly name: "tokens";
                    readonly type: "tuple[]";
                }];
                readonly internalType: "struct Reader.GmxCoreStorage";
                readonly name: "gmx";
                readonly type: "tuple";
            }];
            readonly internalType: "struct Reader.GmxAdapterStorage";
            readonly name: "store";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "gmxVault";
        readonly outputs: readonly [{
            readonly internalType: "contract IGmxVault";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "usdg";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "weth";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ReaderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Reader;
}
