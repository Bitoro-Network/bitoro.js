import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IGmxPositionRouter, IGmxPositionRouterInterface } from "../../aggregator/GmxPositionRouter";
export declare class IGmxPositionRouter__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_key";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address payable";
            readonly name: "_executionFeeReceiver";
            readonly type: "address";
        }];
        readonly name: "cancelDecreasePosition";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_key";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address payable";
            readonly name: "_executionFeeReceiver";
            readonly type: "address";
        }];
        readonly name: "cancelIncreasePosition";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_path";
            readonly type: "address[]";
        }, {
            readonly internalType: "address";
            readonly name: "_indexToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_collateralDelta";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_sizeDelta";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_isLong";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_acceptablePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minOut";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_executionFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_withdrawETH";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "_callbackTarget";
            readonly type: "address";
        }];
        readonly name: "createDecreasePosition";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_path";
            readonly type: "address[]";
        }, {
            readonly internalType: "address";
            readonly name: "_indexToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minOut";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_sizeDelta";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_isLong";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "_acceptablePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_executionFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_referralCode";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "_callbackTarget";
            readonly type: "address";
        }];
        readonly name: "createIncreasePosition";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "decreasePositionRequests";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "account";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "indexToken";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "collateralDelta";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sizeDelta";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "isLong";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "acceptablePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minOut";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "executionFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "blockNumber";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "blockTime";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "withdrawETH";
                readonly type: "bool";
            }];
            readonly internalType: "struct IGmxPositionRouter.DecreasePositionRequest";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "decreasePositionsIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_key";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address payable";
            readonly name: "_executionFeeReceiver";
            readonly type: "address";
        }];
        readonly name: "executeDecreasePosition";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_key";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address payable";
            readonly name: "_executionFeeReceiver";
            readonly type: "address";
        }];
        readonly name: "executeIncreasePosition";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "increasePositionRequests";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "account";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "indexToken";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountIn";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minOut";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sizeDelta";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "isLong";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "acceptablePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "executionFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "blockNumber";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "blockTime";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasCollateralInETH";
                readonly type: "bool";
            }];
            readonly internalType: "struct IGmxPositionRouter.IncreasePositionRequest";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "increasePositionsIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "minExecutionFee";
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
            readonly name: "_account";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "_isActive";
            readonly type: "bool";
        }];
        readonly name: "setPositionKeeper";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IGmxPositionRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGmxPositionRouter;
}
