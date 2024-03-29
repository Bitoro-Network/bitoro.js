import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type DexSpotConfigurationStruct = {
    dexId: BigNumberish;
    dexType: BigNumberish;
    dexWeight: BigNumberish;
    assetIds: BigNumberish[];
    assetWeightInDex: BigNumberish[];
    totalSpotInDex: BigNumberish[];
};
export type DexSpotConfigurationStructOutput = [
    number,
    number,
    number,
    number[],
    number[],
    BigNumber[]
] & {
    dexId: number;
    dexType: number;
    dexWeight: number;
    assetIds: number[];
    assetWeightInDex: number[];
    totalSpotInDex: BigNumber[];
};
export type DexRegistrationStruct = {
    adapter: string;
    disabled: boolean;
    slippage: BigNumberish;
};
export type DexRegistrationStructOutput = [string, boolean, number] & {
    adapter: string;
    disabled: boolean;
    slippage: number;
};
export interface LiquidityManagerInterface extends utils.Interface {
    contractName: "LiquidityManager";
    functions: {
        "addDexLiquidityCurve(uint8,uint256[],uint256)": FunctionFragment;
        "addDexLiquidityUniSwapV2(uint8,uint256[],uint256)": FunctionFragment;
        "addDexSpotConfiguration(uint8,uint8,uint32,uint8[],uint32[])": FunctionFragment;
        "claimDexFees(uint8)": FunctionFragment;
        "freezeDexWrapper(uint8,bool)": FunctionFragment;
        "getAllDexSpotConfiguration()": FunctionFragment;
        "getDexAdapter(uint8)": FunctionFragment;
        "getDexAdapterConfig(uint8)": FunctionFragment;
        "getDexAdapterState(uint8,bytes32)": FunctionFragment;
        "getDexFees(uint8)": FunctionFragment;
        "getDexLiquidity(uint8)": FunctionFragment;
        "getDexLiquidityData(uint8,uint256[])": FunctionFragment;
        "getDexLpBalance(uint8)": FunctionFragment;
        "getDexSpotAmounts(uint8,uint256)": FunctionFragment;
        "getDexSpotConfiguration(uint8)": FunctionFragment;
        "getDexTotalSpotAmounts(uint8)": FunctionFragment;
        "getMaintainer()": FunctionFragment;
        "getPool()": FunctionFragment;
        "getVault()": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "isHandler(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "refreshTokenCache(uint8[])": FunctionFragment;
        "removeDexLiquidity(uint8,uint256,uint256[],uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setAssetIds(uint8,uint8[])": FunctionFragment;
        "setDexSlippage(uint8,uint32)": FunctionFragment;
        "setDexWeight(uint8,uint32,uint32[])": FunctionFragment;
        "setDexWrapper(uint8,address,bytes)": FunctionFragment;
        "setHandler(address,bool)": FunctionFragment;
        "setMaintainer(address)": FunctionFragment;
        "setPlugin(address,bool)": FunctionFragment;
        "setPool(address)": FunctionFragment;
        "setVault(address)": FunctionFragment;
        "takeOwnership()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "withdrawToken(address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addDexLiquidityCurve", values: [BigNumberish, BigNumberish[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "addDexLiquidityUniSwapV2", values: [BigNumberish, BigNumberish[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "addDexSpotConfiguration", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish[],
        BigNumberish[]
    ]): string;
    encodeFunctionData(functionFragment: "claimDexFees", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "freezeDexWrapper", values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "getAllDexSpotConfiguration", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDexAdapter", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDexAdapterConfig", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDexAdapterState", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "getDexFees", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDexLiquidity", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDexLiquidityData", values: [BigNumberish, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getDexLpBalance", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDexSpotAmounts", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDexSpotConfiguration", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDexTotalSpotAmounts", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getMaintainer", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPool", values?: undefined): string;
    encodeFunctionData(functionFragment: "getVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isHandler", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "refreshTokenCache", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "removeDexLiquidity", values: [BigNumberish, BigNumberish, BigNumberish[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAssetIds", values: [BigNumberish, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "setDexSlippage", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setDexWeight", values: [BigNumberish, BigNumberish, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "setDexWrapper", values: [BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "setHandler", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setMaintainer", values: [string]): string;
    encodeFunctionData(functionFragment: "setPlugin", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setPool", values: [string]): string;
    encodeFunctionData(functionFragment: "setVault", values: [string]): string;
    encodeFunctionData(functionFragment: "takeOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "withdrawToken", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addDexLiquidityCurve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addDexLiquidityUniSwapV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addDexSpotConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimDexFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "freezeDexWrapper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllDexSpotConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDexAdapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDexAdapterConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDexAdapterState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDexFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDexLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDexLiquidityData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDexLpBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDexSpotAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDexSpotConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDexTotalSpotAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaintainer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isHandler", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refreshTokenCache", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeDexLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAssetIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDexSlippage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDexWeight", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDexWrapper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setHandler", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaintainer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPlugin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "takeOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawToken", data: BytesLike): Result;
    events: {
        "AddDex(uint8,uint8,uint32,uint8[],uint32[])": EventFragment;
        "AddDexLiquidity(uint8,uint256[],uint256[],uint256,bytes)": EventFragment;
        "ClaimDexFees(uint8)": EventFragment;
        "FetchAssets(uint8[],uint256[])": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "PluginCall(address,address,bytes4,bytes)": EventFragment;
        "PrepareToTransferOwnership(address)": EventFragment;
        "PushAssets(uint8[],uint256[])": EventFragment;
        "RemoveDexLiquidity(uint8,uint256,uint256[],uint256)": EventFragment;
        "SetAssetIds(uint8,uint8[])": EventFragment;
        "SetDexAdapter(uint8,address,bytes)": EventFragment;
        "SetDexSlippage(uint8,uint32)": EventFragment;
        "SetDexWeight(uint8,uint32,uint32[])": EventFragment;
        "SetDexWrapperEnable(uint8,bool)": EventFragment;
        "SetHandler(address,bool)": EventFragment;
        "SetMaintainer(address,address)": EventFragment;
        "SetPlugin(address,bool,bytes4[])": EventFragment;
        "SetPool(address,address)": EventFragment;
        "SetVault(address,address)": EventFragment;
        "WithdrawToken(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddDex"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AddDexLiquidity"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimDexFees"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FetchAssets"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PluginCall"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PrepareToTransferOwnership"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PushAssets"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveDexLiquidity"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetAssetIds"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetDexAdapter"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetDexSlippage"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetDexWeight"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetDexWrapperEnable"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetHandler"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetMaintainer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPlugin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPool"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetVault"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawToken"): EventFragment;
}
export type AddDexEvent = TypedEvent<[
    number,
    number,
    number,
    number[],
    number[]
], {
    dexId: number;
    dexType: number;
    dexWeight: number;
    assetIds: number[];
    assetWeightInDex: number[];
}>;
export type AddDexEventFilter = TypedEventFilter<AddDexEvent>;
export type AddDexLiquidityEvent = TypedEvent<[
    number,
    BigNumber[],
    BigNumber[],
    BigNumber,
    string
], {
    dexId: number;
    maxAmounts: BigNumber[];
    addedAmounts: BigNumber[];
    lpAmount: BigNumber;
    extraData: string;
}>;
export type AddDexLiquidityEventFilter = TypedEventFilter<AddDexLiquidityEvent>;
export type ClaimDexFeesEvent = TypedEvent<[number], {
    dexId: number;
}>;
export type ClaimDexFeesEventFilter = TypedEventFilter<ClaimDexFeesEvent>;
export type FetchAssetsEvent = TypedEvent<[
    number[],
    BigNumber[]
], {
    assetIds: number[];
    amounts: BigNumber[];
}>;
export type FetchAssetsEventFilter = TypedEventFilter<FetchAssetsEvent>;
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export type PluginCallEvent = TypedEvent<[
    string,
    string,
    string,
    string
], {
    sender: string;
    target: string;
    sig: string;
    payload: string;
}>;
export type PluginCallEventFilter = TypedEventFilter<PluginCallEvent>;
export type PrepareToTransferOwnershipEvent = TypedEvent<[
    string
], {
    pendingOwner: string;
}>;
export type PrepareToTransferOwnershipEventFilter = TypedEventFilter<PrepareToTransferOwnershipEvent>;
export type PushAssetsEvent = TypedEvent<[
    number[],
    BigNumber[]
], {
    assetIds: number[];
    amounts: BigNumber[];
}>;
export type PushAssetsEventFilter = TypedEventFilter<PushAssetsEvent>;
export type RemoveDexLiquidityEvent = TypedEvent<[
    number,
    BigNumber,
    BigNumber[],
    BigNumber
], {
    dexId: number;
    shareAmount: BigNumber;
    minAmounts: BigNumber[];
    deadline: BigNumber;
}>;
export type RemoveDexLiquidityEventFilter = TypedEventFilter<RemoveDexLiquidityEvent>;
export type SetAssetIdsEvent = TypedEvent<[
    number,
    number[]
], {
    dexId: number;
    assetIds: number[];
}>;
export type SetAssetIdsEventFilter = TypedEventFilter<SetAssetIdsEvent>;
export type SetDexAdapterEvent = TypedEvent<[
    number,
    string,
    string
], {
    dexId: number;
    entrypoint: string;
    initialData: string;
}>;
export type SetDexAdapterEventFilter = TypedEventFilter<SetDexAdapterEvent>;
export type SetDexSlippageEvent = TypedEvent<[
    number,
    number
], {
    dexId: number;
    slippage: number;
}>;
export type SetDexSlippageEventFilter = TypedEventFilter<SetDexSlippageEvent>;
export type SetDexWeightEvent = TypedEvent<[
    number,
    number,
    number[]
], {
    dexId: number;
    dexWeight: number;
    assetWeightInDex: number[];
}>;
export type SetDexWeightEventFilter = TypedEventFilter<SetDexWeightEvent>;
export type SetDexWrapperEnableEvent = TypedEvent<[
    number,
    boolean
], {
    dexId: number;
    enable: boolean;
}>;
export type SetDexWrapperEnableEventFilter = TypedEventFilter<SetDexWrapperEnableEvent>;
export type SetHandlerEvent = TypedEvent<[
    string,
    boolean
], {
    handler: string;
    enable: boolean;
}>;
export type SetHandlerEventFilter = TypedEventFilter<SetHandlerEvent>;
export type SetMaintainerEvent = TypedEvent<[
    string,
    string
], {
    previousMaintainer: string;
    newMaintainer: string;
}>;
export type SetMaintainerEventFilter = TypedEventFilter<SetMaintainerEvent>;
export type SetPluginEvent = TypedEvent<[
    string,
    boolean,
    string[]
], {
    plugin: string;
    enable: boolean;
    selectors: string[];
}>;
export type SetPluginEventFilter = TypedEventFilter<SetPluginEvent>;
export type SetPoolEvent = TypedEvent<[
    string,
    string
], {
    previousVault: string;
    newPool: string;
}>;
export type SetPoolEventFilter = TypedEventFilter<SetPoolEvent>;
export type SetVaultEvent = TypedEvent<[
    string,
    string
], {
    previousVault: string;
    newVault: string;
}>;
export type SetVaultEventFilter = TypedEventFilter<SetVaultEvent>;
export type WithdrawTokenEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    token: string;
    recipient: string;
    amount: BigNumber;
}>;
export type WithdrawTokenEventFilter = TypedEventFilter<WithdrawTokenEvent>;
export interface LiquidityManager extends BaseContract {
    contractName: "LiquidityManager";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LiquidityManagerInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        addDexLiquidityCurve(dexId: BigNumberish, maxAmounts: BigNumberish[], desiredAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addDexLiquidityUniSwapV2(dexId: BigNumberish, amounts: BigNumberish[], deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addDexSpotConfiguration(dexId: BigNumberish, dexType: BigNumberish, dexWeight: BigNumberish, assetIds: BigNumberish[], assetWeightInDex: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimDexFees(dexId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        freezeDexWrapper(dexId: BigNumberish, enable: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAllDexSpotConfiguration(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getDexAdapter(dexId: BigNumberish, overrides?: CallOverrides): Promise<[
            DexRegistrationStructOutput
        ] & {
            registration: DexRegistrationStructOutput;
        }>;
        getDexAdapterConfig(dexId: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            config: string;
        }>;
        getDexAdapterState(dexId: BigNumberish, key: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            state: string;
        }>;
        getDexFees(dexId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getDexLiquidity(dexId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getDexLiquidityData(dexId: BigNumberish, amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getDexLpBalance(dexId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getDexSpotAmounts(dexId: BigNumberish, shareAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getDexSpotConfiguration(dexId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getDexTotalSpotAmounts(dexId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getMaintainer(overrides?: CallOverrides): Promise<[string]>;
        getPool(overrides?: CallOverrides): Promise<[string]>;
        getVault(overrides?: CallOverrides): Promise<[string]>;
        initialize(vault_: string, pool_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isHandler(handler: string, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        refreshTokenCache(assetIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeDexLiquidity(dexId: BigNumberish, shareAmount: BigNumberish, minAmounts: BigNumberish[], deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setAssetIds(dexId: BigNumberish, assetIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDexSlippage(dexId: BigNumberish, slippage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDexWeight(dexId: BigNumberish, dexWeight: BigNumberish, assetWeightInDex: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDexWrapper(dexId: BigNumberish, adapter: string, initialData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setHandler(handler: string, enable: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaintainer(newMaintainer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPlugin(plugin: string, enable: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPool(newPool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setVault(newVault: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        takeOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawToken(token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addDexLiquidityCurve(dexId: BigNumberish, maxAmounts: BigNumberish[], desiredAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addDexLiquidityUniSwapV2(dexId: BigNumberish, amounts: BigNumberish[], deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addDexSpotConfiguration(dexId: BigNumberish, dexType: BigNumberish, dexWeight: BigNumberish, assetIds: BigNumberish[], assetWeightInDex: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimDexFees(dexId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    freezeDexWrapper(dexId: BigNumberish, enable: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAllDexSpotConfiguration(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getDexAdapter(dexId: BigNumberish, overrides?: CallOverrides): Promise<DexRegistrationStructOutput>;
    getDexAdapterConfig(dexId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getDexAdapterState(dexId: BigNumberish, key: BytesLike, overrides?: CallOverrides): Promise<string>;
    getDexFees(dexId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getDexLiquidity(dexId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getDexLiquidityData(dexId: BigNumberish, amounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getDexLpBalance(dexId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getDexSpotAmounts(dexId: BigNumberish, shareAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getDexSpotConfiguration(dexId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getDexTotalSpotAmounts(dexId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getMaintainer(overrides?: CallOverrides): Promise<string>;
    getPool(overrides?: CallOverrides): Promise<string>;
    getVault(overrides?: CallOverrides): Promise<string>;
    initialize(vault_: string, pool_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isHandler(handler: string, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    refreshTokenCache(assetIds: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeDexLiquidity(dexId: BigNumberish, shareAmount: BigNumberish, minAmounts: BigNumberish[], deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setAssetIds(dexId: BigNumberish, assetIds: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDexSlippage(dexId: BigNumberish, slippage: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDexWeight(dexId: BigNumberish, dexWeight: BigNumberish, assetWeightInDex: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDexWrapper(dexId: BigNumberish, adapter: string, initialData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setHandler(handler: string, enable: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaintainer(newMaintainer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPlugin(plugin: string, enable: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPool(newPool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setVault(newVault: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    takeOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawToken(token: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addDexLiquidityCurve(dexId: BigNumberish, maxAmounts: BigNumberish[], desiredAmount: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber[],
            BigNumber
        ] & {
            addedAmounts: BigNumber[];
            liquidityAmount: BigNumber;
        }>;
        addDexLiquidityUniSwapV2(dexId: BigNumberish, amounts: BigNumberish[], deadline: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber[],
            BigNumber
        ] & {
            addedAmounts: BigNumber[];
            liquidityAmount: BigNumber;
        }>;
        addDexSpotConfiguration(dexId: BigNumberish, dexType: BigNumberish, dexWeight: BigNumberish, assetIds: BigNumberish[], assetWeightInDex: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        claimDexFees(dexId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        freezeDexWrapper(dexId: BigNumberish, enable: boolean, overrides?: CallOverrides): Promise<void>;
        getAllDexSpotConfiguration(overrides?: CallOverrides): Promise<DexSpotConfigurationStructOutput[]>;
        getDexAdapter(dexId: BigNumberish, overrides?: CallOverrides): Promise<DexRegistrationStructOutput>;
        getDexAdapterConfig(dexId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getDexAdapterState(dexId: BigNumberish, key: BytesLike, overrides?: CallOverrides): Promise<string>;
        getDexFees(dexId: BigNumberish, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[],
            BigNumber[]
        ] & {
            tokens: string[];
            claimedAmounts: BigNumber[];
            pendingAmounts: BigNumber[];
        }>;
        getDexLiquidity(dexId: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber[],
            BigNumber
        ] & {
            liquidities: BigNumber[];
            lpBalance: BigNumber;
        }>;
        getDexLiquidityData(dexId: BigNumberish, amounts: BigNumberish[], overrides?: CallOverrides): Promise<string>;
        getDexLpBalance(dexId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getDexSpotAmounts(dexId: BigNumberish, shareAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        getDexSpotConfiguration(dexId: BigNumberish, overrides?: CallOverrides): Promise<DexSpotConfigurationStructOutput>;
        getDexTotalSpotAmounts(dexId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        getMaintainer(overrides?: CallOverrides): Promise<string>;
        getPool(overrides?: CallOverrides): Promise<string>;
        getVault(overrides?: CallOverrides): Promise<string>;
        initialize(vault_: string, pool_: string, overrides?: CallOverrides): Promise<void>;
        isHandler(handler: string, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        refreshTokenCache(assetIds: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        removeDexLiquidity(dexId: BigNumberish, shareAmount: BigNumberish, minAmounts: BigNumberish[], deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setAssetIds(dexId: BigNumberish, assetIds: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        setDexSlippage(dexId: BigNumberish, slippage: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setDexWeight(dexId: BigNumberish, dexWeight: BigNumberish, assetWeightInDex: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        setDexWrapper(dexId: BigNumberish, adapter: string, initialData: BytesLike, overrides?: CallOverrides): Promise<void>;
        setHandler(handler: string, enable: boolean, overrides?: CallOverrides): Promise<void>;
        setMaintainer(newMaintainer: string, overrides?: CallOverrides): Promise<void>;
        setPlugin(plugin: string, enable: boolean, overrides?: CallOverrides): Promise<void>;
        setPool(newPool: string, overrides?: CallOverrides): Promise<void>;
        setVault(newVault: string, overrides?: CallOverrides): Promise<void>;
        takeOwnership(overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        withdrawToken(token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddDex(uint8,uint8,uint32,uint8[],uint32[])"(dexId?: null, dexType?: null, dexWeight?: null, assetIds?: null, assetWeightInDex?: null): AddDexEventFilter;
        AddDex(dexId?: null, dexType?: null, dexWeight?: null, assetIds?: null, assetWeightInDex?: null): AddDexEventFilter;
        "AddDexLiquidity(uint8,uint256[],uint256[],uint256,bytes)"(dexId?: null, maxAmounts?: null, addedAmounts?: null, lpAmount?: null, extraData?: null): AddDexLiquidityEventFilter;
        AddDexLiquidity(dexId?: null, maxAmounts?: null, addedAmounts?: null, lpAmount?: null, extraData?: null): AddDexLiquidityEventFilter;
        "ClaimDexFees(uint8)"(dexId?: null): ClaimDexFeesEventFilter;
        ClaimDexFees(dexId?: null): ClaimDexFeesEventFilter;
        "FetchAssets(uint8[],uint256[])"(assetIds?: null, amounts?: null): FetchAssetsEventFilter;
        FetchAssets(assetIds?: null, amounts?: null): FetchAssetsEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "PluginCall(address,address,bytes4,bytes)"(sender?: null, target?: null, sig?: null, payload?: null): PluginCallEventFilter;
        PluginCall(sender?: null, target?: null, sig?: null, payload?: null): PluginCallEventFilter;
        "PrepareToTransferOwnership(address)"(pendingOwner?: string | null): PrepareToTransferOwnershipEventFilter;
        PrepareToTransferOwnership(pendingOwner?: string | null): PrepareToTransferOwnershipEventFilter;
        "PushAssets(uint8[],uint256[])"(assetIds?: null, amounts?: null): PushAssetsEventFilter;
        PushAssets(assetIds?: null, amounts?: null): PushAssetsEventFilter;
        "RemoveDexLiquidity(uint8,uint256,uint256[],uint256)"(dexId?: null, shareAmount?: null, minAmounts?: null, deadline?: null): RemoveDexLiquidityEventFilter;
        RemoveDexLiquidity(dexId?: null, shareAmount?: null, minAmounts?: null, deadline?: null): RemoveDexLiquidityEventFilter;
        "SetAssetIds(uint8,uint8[])"(dexId?: null, assetIds?: null): SetAssetIdsEventFilter;
        SetAssetIds(dexId?: null, assetIds?: null): SetAssetIdsEventFilter;
        "SetDexAdapter(uint8,address,bytes)"(dexId?: null, entrypoint?: null, initialData?: null): SetDexAdapterEventFilter;
        SetDexAdapter(dexId?: null, entrypoint?: null, initialData?: null): SetDexAdapterEventFilter;
        "SetDexSlippage(uint8,uint32)"(dexId?: null, slippage?: null): SetDexSlippageEventFilter;
        SetDexSlippage(dexId?: null, slippage?: null): SetDexSlippageEventFilter;
        "SetDexWeight(uint8,uint32,uint32[])"(dexId?: null, dexWeight?: null, assetWeightInDex?: null): SetDexWeightEventFilter;
        SetDexWeight(dexId?: null, dexWeight?: null, assetWeightInDex?: null): SetDexWeightEventFilter;
        "SetDexWrapperEnable(uint8,bool)"(dexId?: null, enable?: null): SetDexWrapperEnableEventFilter;
        SetDexWrapperEnable(dexId?: null, enable?: null): SetDexWrapperEnableEventFilter;
        "SetHandler(address,bool)"(handler?: null, enable?: null): SetHandlerEventFilter;
        SetHandler(handler?: null, enable?: null): SetHandlerEventFilter;
        "SetMaintainer(address,address)"(previousMaintainer?: null, newMaintainer?: null): SetMaintainerEventFilter;
        SetMaintainer(previousMaintainer?: null, newMaintainer?: null): SetMaintainerEventFilter;
        "SetPlugin(address,bool,bytes4[])"(plugin?: null, enable?: null, selectors?: null): SetPluginEventFilter;
        SetPlugin(plugin?: null, enable?: null, selectors?: null): SetPluginEventFilter;
        "SetPool(address,address)"(previousVault?: null, newPool?: null): SetPoolEventFilter;
        SetPool(previousVault?: null, newPool?: null): SetPoolEventFilter;
        "SetVault(address,address)"(previousVault?: null, newVault?: null): SetVaultEventFilter;
        SetVault(previousVault?: null, newVault?: null): SetVaultEventFilter;
        "WithdrawToken(address,address,uint256)"(token?: null, recipient?: null, amount?: null): WithdrawTokenEventFilter;
        WithdrawToken(token?: null, recipient?: null, amount?: null): WithdrawTokenEventFilter;
    };
    estimateGas: {
        addDexLiquidityCurve(dexId: BigNumberish, maxAmounts: BigNumberish[], desiredAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addDexLiquidityUniSwapV2(dexId: BigNumberish, amounts: BigNumberish[], deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addDexSpotConfiguration(dexId: BigNumberish, dexType: BigNumberish, dexWeight: BigNumberish, assetIds: BigNumberish[], assetWeightInDex: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimDexFees(dexId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        freezeDexWrapper(dexId: BigNumberish, enable: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAllDexSpotConfiguration(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getDexAdapter(dexId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getDexAdapterConfig(dexId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getDexAdapterState(dexId: BigNumberish, key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getDexFees(dexId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getDexLiquidity(dexId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getDexLiquidityData(dexId: BigNumberish, amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getDexLpBalance(dexId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getDexSpotAmounts(dexId: BigNumberish, shareAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getDexSpotConfiguration(dexId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getDexTotalSpotAmounts(dexId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getMaintainer(overrides?: CallOverrides): Promise<BigNumber>;
        getPool(overrides?: CallOverrides): Promise<BigNumber>;
        getVault(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(vault_: string, pool_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isHandler(handler: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        refreshTokenCache(assetIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeDexLiquidity(dexId: BigNumberish, shareAmount: BigNumberish, minAmounts: BigNumberish[], deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setAssetIds(dexId: BigNumberish, assetIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDexSlippage(dexId: BigNumberish, slippage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDexWeight(dexId: BigNumberish, dexWeight: BigNumberish, assetWeightInDex: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDexWrapper(dexId: BigNumberish, adapter: string, initialData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setHandler(handler: string, enable: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaintainer(newMaintainer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPlugin(plugin: string, enable: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPool(newPool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setVault(newVault: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        takeOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawToken(token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addDexLiquidityCurve(dexId: BigNumberish, maxAmounts: BigNumberish[], desiredAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addDexLiquidityUniSwapV2(dexId: BigNumberish, amounts: BigNumberish[], deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addDexSpotConfiguration(dexId: BigNumberish, dexType: BigNumberish, dexWeight: BigNumberish, assetIds: BigNumberish[], assetWeightInDex: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimDexFees(dexId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        freezeDexWrapper(dexId: BigNumberish, enable: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAllDexSpotConfiguration(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getDexAdapter(dexId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDexAdapterConfig(dexId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDexAdapterState(dexId: BigNumberish, key: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDexFees(dexId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getDexLiquidity(dexId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getDexLiquidityData(dexId: BigNumberish, amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getDexLpBalance(dexId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getDexSpotAmounts(dexId: BigNumberish, shareAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getDexSpotConfiguration(dexId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getDexTotalSpotAmounts(dexId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getMaintainer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(vault_: string, pool_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isHandler(handler: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        refreshTokenCache(assetIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeDexLiquidity(dexId: BigNumberish, shareAmount: BigNumberish, minAmounts: BigNumberish[], deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setAssetIds(dexId: BigNumberish, assetIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDexSlippage(dexId: BigNumberish, slippage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDexWeight(dexId: BigNumberish, dexWeight: BigNumberish, assetWeightInDex: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDexWrapper(dexId: BigNumberish, adapter: string, initialData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setHandler(handler: string, enable: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaintainer(newMaintainer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPlugin(plugin: string, enable: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPool(newPool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setVault(newVault: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        takeOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawToken(token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
