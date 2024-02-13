import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ProxyFactory, ProxyFactoryInterface } from "../../aggregator/ProxyFactory";
export declare class ProxyFactory__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "proxyId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "proxy";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "gmxPositionKey";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "assetToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "collateralToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "collateralTokenId";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isLong";
            readonly type: "bool";
        }];
        readonly name: "CreateProxy";
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
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "BitoroCall";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "assetToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "prevAssetId";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "newAssetId";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "prevLimit";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newLimit";
            readonly type: "uint256";
        }];
        readonly name: "SetBorrowConfig";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "gmxReferralCode";
            readonly type: "bytes32";
        }];
        readonly name: "SetGmxReferralCode";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "keeper";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "enable";
            readonly type: "bool";
        }];
        readonly name: "SetKeeper";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "maintainer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "enable";
            readonly type: "bool";
        }];
        readonly name: "SetMaintainer";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "assetToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "values";
            readonly type: "uint256[]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "version";
            readonly type: "uint256";
        }];
        readonly name: "SetProjectAssetConfig";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "values";
            readonly type: "uint256[]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "version";
            readonly type: "uint256";
        }];
        readonly name: "SetProjectConfig";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "assetToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "toBorrow";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }];
        readonly name: "borrowAsset";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountOut";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
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
        }, {
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
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
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
        }, {
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
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "projectId";
                readonly type: "uint256";
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
            }, {
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
                readonly internalType: "uint8";
                readonly name: "flags";
                readonly type: "uint8";
            }, {
                readonly internalType: "bytes32";
                readonly name: "referralCode";
                readonly type: "bytes32";
            }];
            readonly internalType: "struct ProxyFactory.ClosePositionArgs";
            readonly name: "args";
            readonly type: "tuple";
        }];
        readonly name: "closePosition";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "projectId";
                readonly type: "uint256";
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
            }, {
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
            }, {
                readonly internalType: "bytes32";
                readonly name: "referralCode";
                readonly type: "bytes32";
            }];
            readonly internalType: "struct ProxyFactory.ClosePositionArgsV2";
            readonly name: "args";
            readonly type: "tuple";
        }];
        readonly name: "closePositionV2";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
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
        readonly name: "createProxy";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "assetToken";
            readonly type: "address";
        }];
        readonly name: "getAssetId";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
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
            readonly name: "assetToken";
            readonly type: "address";
        }];
        readonly name: "getBorrowStates";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "totalBorrow";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "borrowLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "badDebt";
            readonly type: "uint256";
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
            readonly name: "assetToken";
            readonly type: "address";
        }];
        readonly name: "getConfigVersions";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "projectConfigVersion";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "assetConfigVersion";
            readonly type: "uint32";
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
            readonly name: "assetToken";
            readonly type: "address";
        }];
        readonly name: "getProjectAssetConfig";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
        }];
        readonly name: "getProjectConfig";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getProxiesOf";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "accountKey";
            readonly type: "bytes32";
        }];
        readonly name: "getProxy";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
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
        readonly name: "getProxyAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "implementation";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "weth_";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "liquidityPool";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "keeper";
            readonly type: "address";
        }];
        readonly name: "isKeeper";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
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
        }, {
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
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "projectId";
                readonly type: "uint256";
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
            }, {
                readonly internalType: "address";
                readonly name: "tokenIn";
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
                readonly internalType: "uint8";
                readonly name: "flags";
                readonly type: "uint8";
            }, {
                readonly internalType: "bytes32";
                readonly name: "referralCode";
                readonly type: "bytes32";
            }];
            readonly internalType: "struct ProxyFactory.OpenPositionArgs";
            readonly name: "args";
            readonly type: "tuple";
        }];
        readonly name: "openPosition";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "projectId";
                readonly type: "uint256";
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
            }, {
                readonly internalType: "address";
                readonly name: "tokenIn";
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
            }, {
                readonly internalType: "bytes32";
                readonly name: "referralCode";
                readonly type: "bytes32";
            }];
            readonly internalType: "struct ProxyFactory.OpenPositionArgsV2";
            readonly name: "args";
            readonly type: "tuple";
        }];
        readonly name: "openPositionV2";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "projectId";
                readonly type: "uint256";
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
            }, {
                readonly internalType: "address";
                readonly name: "tokenIn";
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
            }, {
                readonly internalType: "bytes32";
                readonly name: "referralCode";
                readonly type: "bytes32";
            }];
            readonly internalType: "struct ProxyFactory.OpenPositionArgsV2";
            readonly name: "args";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "subAccountId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint96";
                readonly name: "collateralAmount";
                readonly type: "uint96";
            }, {
                readonly internalType: "uint96";
                readonly name: "size";
                readonly type: "uint96";
            }, {
                readonly internalType: "uint96";
                readonly name: "price";
                readonly type: "uint96";
            }, {
                readonly internalType: "uint8";
                readonly name: "profitTokenId";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint8";
                readonly name: "flags";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint32";
                readonly name: "deadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "referralCode";
                readonly type: "bytes32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint96";
                    readonly name: "tpPrice";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "uint96";
                    readonly name: "slPrice";
                    readonly type: "uint96";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "tpslProfitTokenId";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "tpslDeadline";
                    readonly type: "uint32";
                }];
                readonly internalType: "struct IBitoroOrderBook.PositionOrderExtra";
                readonly name: "extra";
                readonly type: "tuple";
            }];
            readonly internalType: "struct ProxyFactory.BitoroOrderParams";
            readonly name: "bitoroParams";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "bitoroValue";
            readonly type: "uint256";
        }];
        readonly name: "openPositionV3";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "assetToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "toRepay";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "badDebt";
            readonly type: "uint256";
        }];
        readonly name: "repayAsset";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "assetToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint8";
            readonly name: "newAssetId";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "newLimit";
            readonly type: "uint256";
        }];
        readonly name: "setBorrowConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "keeper";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "enable";
            readonly type: "bool";
        }];
        readonly name: "setKeeper";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "maintainer";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "enable";
            readonly type: "bool";
        }];
        readonly name: "setMaintainer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "bitoroOrderBook";
            readonly type: "address";
        }];
        readonly name: "setBitoroOrderBook";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "assetToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "values";
            readonly type: "uint256[]";
        }];
        readonly name: "setProjectAssetConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "values";
            readonly type: "uint256[]";
        }];
        readonly name: "setProjectConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "referralManager";
            readonly type: "address";
        }];
        readonly name: "setReferralManager";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
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
        }, {
            readonly components: readonly [{
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
            readonly internalType: "struct ProxyFactory.OrderParams[]";
            readonly name: "orderParams";
            readonly type: "tuple[]";
        }];
        readonly name: "updateOrder";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "newImplementation_";
            readonly type: "address";
        }];
        readonly name: "upgradeTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "weth";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
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
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ProxyFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ProxyFactory;
}
