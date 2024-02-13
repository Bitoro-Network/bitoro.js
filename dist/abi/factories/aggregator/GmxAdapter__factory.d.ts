import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { GmxAdapter, GmxAdapterInterface } from "../../aggregator/GmxAdapter";
export declare class GmxAdapter__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "weth";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "enum LibGmx.OrderCategory";
            readonly name: "category";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "enum LibGmx.OrderReceiver";
            readonly name: "receiver";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "borrow";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "AddPendingOrder";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "boostFee";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "cumulativeDebt";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "cumulativeFee";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "debtEntryFunding";
            readonly type: "uint256";
        }];
        readonly name: "BorrowAsset";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "key";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "success";
            readonly type: "bool";
        }];
        readonly name: "CancelOrder";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "collateralToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "indexToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isLong";
            readonly type: "bool";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "collateralUsd";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sizeUsd";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "priceUsd";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "isMarket";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "gmxOrderIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "executionFee";
                readonly type: "uint256";
            }];
            readonly indexed: false;
            readonly internalType: "struct ClosePositionContext";
            readonly name: "context";
            readonly type: "tuple";
        }];
        readonly name: "ClosePosition";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "collateralToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "indexToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isLong";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "liquidationPrice";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "estimateliquidationFee";
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
                readonly name: "averagePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "entryFundingRate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "reserveAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "realisedPnlUsd";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lastIncreasedTime";
                readonly type: "uint256";
            }];
            readonly indexed: false;
            readonly internalType: "struct IGmxVault.Position";
            readonly name: "position";
            readonly type: "tuple";
        }];
        readonly name: "LiquidatePosition";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "collateralToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "indexToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isLong";
            readonly type: "bool";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amountIn";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sizeUsd";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "priceUsd";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "isMarket";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "fee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "borrow";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountOut";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "gmxOrderIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "executionFee";
                readonly type: "uint256";
            }];
            readonly indexed: false;
            readonly internalType: "struct OpenPositionContext";
            readonly name: "context";
            readonly type: "tuple";
        }];
        readonly name: "OpenPosition";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "key";
            readonly type: "bytes32";
        }];
        readonly name: "RemovePendingOrder";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "paidDebt";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "paidFee";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "boostFee";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "badDebt";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "cumulativeDebt";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "cumulativeFee";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "debtEntryFunding";
            readonly type: "uint256";
        }];
        readonly name: "RepayAsset";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "previousRate";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newRate";
            readonly type: "uint256";
        }];
        readonly name: "SetBoostRate";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "previousLiquidityPool";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newLiquidityPool";
            readonly type: "address";
        }];
        readonly name: "SetLiquidityPool";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "cumulativeDebt";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "cumulativeFee";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "priceImpactFee";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isLiquidation";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "userWithdrawal";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "paidDebt";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "paidFee";
            readonly type: "uint256";
        }];
        readonly name: "Withdraw";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "bitoroAccountState";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "account";
                readonly type: "address";
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
                readonly internalType: "address";
                readonly name: "collateralToken";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "indexToken";
                readonly type: "address";
            }, {
                readonly internalType: "uint8";
                readonly name: "deprecated0";
                readonly type: "uint8";
            }, {
                readonly internalType: "bool";
                readonly name: "isLong";
                readonly type: "bool";
            }, {
                readonly internalType: "uint8";
                readonly name: "collateralDecimals";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint256";
                readonly name: "liquidationFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "isLiquidating";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "priceImpactFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes32[18]";
                readonly name: "reserved";
                readonly type: "bytes32[18]";
            }];
            readonly internalType: "struct AccountState";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "keys";
            readonly type: "bytes32[]";
        }];
        readonly name: "cancelOrders";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "keys";
            readonly type: "bytes32[]";
        }];
        readonly name: "cancelTimeoutOrders";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "collateralUsd";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "sizeUsd";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint96";
            readonly name: "priceUsd";
            readonly type: "uint96";
        }, {
            readonly internalType: "uint96";
            readonly name: "tpPriceUsd";
            readonly type: "uint96";
        }, {
            readonly internalType: "uint96";
            readonly name: "slPriceUsd";
            readonly type: "uint96";
        }, {
            readonly internalType: "uint8";
            readonly name: "flags";
            readonly type: "uint8";
        }];
        readonly name: "closePosition";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "debtStates";
        readonly outputs: readonly [{
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
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getPendingGmxOrderKeys";
        readonly outputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "";
            readonly type: "bytes32[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "orderKey";
            readonly type: "bytes32";
        }];
        readonly name: "getTpslOrderKeys";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "liquidityPool";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "collateralToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "assetToken";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "isLong";
            readonly type: "bool";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "liquidatePrice";
            readonly type: "uint256";
        }];
        readonly name: "liquidatePosition";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "swapInToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "swapInAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minSwapOut";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "borrow";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "sizeUsd";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint96";
            readonly name: "priceUsd";
            readonly type: "uint96";
        }, {
            readonly internalType: "uint96";
            readonly name: "tpPriceUsd";
            readonly type: "uint96";
        }, {
            readonly internalType: "uint96";
            readonly name: "slPriceUsd";
            readonly type: "uint96";
        }, {
            readonly internalType: "uint8";
            readonly name: "flags";
            readonly type: "uint8";
        }];
        readonly name: "openPosition";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "orderKey";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "collateralDelta";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "sizeDelta";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "triggerPrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "triggerAboveThreshold";
            readonly type: "bool";
        }];
        readonly name: "updateOrder";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): GmxAdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GmxAdapter;
}
