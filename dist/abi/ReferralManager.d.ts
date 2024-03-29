import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IReferralManager {
    type TierSettingStruct = {
        tier: BigNumberish;
        stakeThreshold: BigNumberish;
        discountRate: BigNumberish;
        rebateRate: BigNumberish;
    };
    type TierSettingStructOutput = [
        number,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        tier: number;
        stakeThreshold: BigNumber;
        discountRate: BigNumber;
        rebateRate: BigNumber;
    };
}
export interface ReferralManagerInterface extends utils.Interface {
    contractName: "ReferralManager";
    functions: {
        "PRIMARY_NETWORK()": FunctionFragment;
        "RATE_DENOMINATOR()": FunctionFragment;
        "getReferralCodeOf(address)": FunctionFragment;
        "getTiers()": FunctionFragment;
        "initialize()": FunctionFragment;
        "isHandler(address)": FunctionFragment;
        "isValidReferralCode(bytes32)": FunctionFragment;
        "lastUpdatedTime(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "rebateRecipients(bytes32)": FunctionFragment;
        "referralCodeOf(address)": FunctionFragment;
        "referralCodeOwners(bytes32)": FunctionFragment;
        "registerReferralCode(bytes32,address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setHandler(address,bool)": FunctionFragment;
        "setRebateRecipient(bytes32,address)": FunctionFragment;
        "setReferrerCode(bytes32)": FunctionFragment;
        "setReferrerCodeFor(address,bytes32)": FunctionFragment;
        "setTiers((uint8,uint64,uint64,uint64)[])": FunctionFragment;
        "takeOwnership()": FunctionFragment;
        "tierSettings(uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "transferReferralCode(bytes32,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "PRIMARY_NETWORK", values?: undefined): string;
    encodeFunctionData(functionFragment: "RATE_DENOMINATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReferralCodeOf", values: [string]): string;
    encodeFunctionData(functionFragment: "getTiers", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "isHandler", values: [string]): string;
    encodeFunctionData(functionFragment: "isValidReferralCode", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "lastUpdatedTime", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "rebateRecipients", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "referralCodeOf", values: [string]): string;
    encodeFunctionData(functionFragment: "referralCodeOwners", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "registerReferralCode", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setHandler", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setRebateRecipient", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setReferrerCode", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setReferrerCodeFor", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "setTiers", values: [IReferralManager.TierSettingStruct[]]): string;
    encodeFunctionData(functionFragment: "takeOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "tierSettings", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "transferReferralCode", values: [BytesLike, string]): string;
    decodeFunctionResult(functionFragment: "PRIMARY_NETWORK", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RATE_DENOMINATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReferralCodeOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTiers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isHandler", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidReferralCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastUpdatedTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebateRecipients", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referralCodeOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referralCodeOwners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerReferralCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setHandler", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRebateRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReferrerCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReferrerCodeFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTiers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "takeOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tierSettings", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferReferralCode", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
        "PrepareToTransferOwnership(address)": EventFragment;
        "RegisterReferralCode(address,bytes32)": EventFragment;
        "SetHandler(address,bool)": EventFragment;
        "SetMaintainer(address,address)": EventFragment;
        "SetRebateRecipient(bytes32,address,address)": EventFragment;
        "SetReferralCode(address,bytes32)": EventFragment;
        "SetTiers(tuple[])": EventFragment;
        "TransferReferralCode(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PrepareToTransferOwnership"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RegisterReferralCode"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetHandler"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetMaintainer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetRebateRecipient"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetReferralCode"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTiers"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferReferralCode"): EventFragment;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export type PrepareToTransferOwnershipEvent = TypedEvent<[
    string
], {
    pendingOwner: string;
}>;
export type PrepareToTransferOwnershipEventFilter = TypedEventFilter<PrepareToTransferOwnershipEvent>;
export type RegisterReferralCodeEvent = TypedEvent<[
    string,
    string
], {
    referralCodeOwner: string;
    referralCode: string;
}>;
export type RegisterReferralCodeEventFilter = TypedEventFilter<RegisterReferralCodeEvent>;
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
export type SetRebateRecipientEvent = TypedEvent<[
    string,
    string,
    string
], {
    referralCode: string;
    referralCodeOwner: string;
    rebateRecipient: string;
}>;
export type SetRebateRecipientEventFilter = TypedEventFilter<SetRebateRecipientEvent>;
export type SetReferralCodeEvent = TypedEvent<[
    string,
    string
], {
    trader: string;
    referralCode: string;
}>;
export type SetReferralCodeEventFilter = TypedEventFilter<SetReferralCodeEvent>;
export type SetTiersEvent = TypedEvent<[
    IReferralManager.TierSettingStructOutput[]
], {
    newTierSettings: IReferralManager.TierSettingStructOutput[];
}>;
export type SetTiersEventFilter = TypedEventFilter<SetTiersEvent>;
export type TransferReferralCodeEvent = TypedEvent<[
    string,
    string,
    string
], {
    referralCode: string;
    previousOwner: string;
    newOwner: string;
}>;
export type TransferReferralCodeEventFilter = TypedEventFilter<TransferReferralCodeEvent>;
export interface ReferralManager extends BaseContract {
    contractName: "ReferralManager";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ReferralManagerInterface;
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
        PRIMARY_NETWORK(overrides?: CallOverrides): Promise<[BigNumber]>;
        RATE_DENOMINATOR(overrides?: CallOverrides): Promise<[BigNumber]>;
        getReferralCodeOf(trader: string, overrides?: CallOverrides): Promise<[string, BigNumber]>;
        getTiers(overrides?: CallOverrides): Promise<[IReferralManager.TierSettingStructOutput[]]>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isHandler(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        isValidReferralCode(referralCode: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        lastUpdatedTime(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        rebateRecipients(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        referralCodeOf(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        referralCodeOwners(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        registerReferralCode(referralCode: BytesLike, rebateRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setHandler(handler: string, enable: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRebateRecipient(referralCode: BytesLike, rebateRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setReferrerCode(referralCode: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setReferrerCodeFor(trader: string, referralCode: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setTiers(newTierSettings: IReferralManager.TierSettingStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        takeOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        tierSettings(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            tier: number;
            stakeThreshold: BigNumber;
            discountRate: BigNumber;
            rebateRate: BigNumber;
        }>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferReferralCode(referralCode: BytesLike, newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    PRIMARY_NETWORK(overrides?: CallOverrides): Promise<BigNumber>;
    RATE_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;
    getReferralCodeOf(trader: string, overrides?: CallOverrides): Promise<[string, BigNumber]>;
    getTiers(overrides?: CallOverrides): Promise<IReferralManager.TierSettingStructOutput[]>;
    initialize(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isHandler(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    isValidReferralCode(referralCode: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    lastUpdatedTime(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    rebateRecipients(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
    referralCodeOf(arg0: string, overrides?: CallOverrides): Promise<string>;
    referralCodeOwners(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
    registerReferralCode(referralCode: BytesLike, rebateRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setHandler(handler: string, enable: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRebateRecipient(referralCode: BytesLike, rebateRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setReferrerCode(referralCode: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setReferrerCodeFor(trader: string, referralCode: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setTiers(newTierSettings: IReferralManager.TierSettingStruct[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    takeOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    tierSettings(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        number,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        tier: number;
        stakeThreshold: BigNumber;
        discountRate: BigNumber;
        rebateRate: BigNumber;
    }>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferReferralCode(referralCode: BytesLike, newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        PRIMARY_NETWORK(overrides?: CallOverrides): Promise<BigNumber>;
        RATE_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;
        getReferralCodeOf(trader: string, overrides?: CallOverrides): Promise<[string, BigNumber]>;
        getTiers(overrides?: CallOverrides): Promise<IReferralManager.TierSettingStructOutput[]>;
        initialize(overrides?: CallOverrides): Promise<void>;
        isHandler(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        isValidReferralCode(referralCode: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        lastUpdatedTime(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        rebateRecipients(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
        referralCodeOf(arg0: string, overrides?: CallOverrides): Promise<string>;
        referralCodeOwners(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
        registerReferralCode(referralCode: BytesLike, rebateRecipient: string, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setHandler(handler: string, enable: boolean, overrides?: CallOverrides): Promise<void>;
        setRebateRecipient(referralCode: BytesLike, rebateRecipient: string, overrides?: CallOverrides): Promise<void>;
        setReferrerCode(referralCode: BytesLike, overrides?: CallOverrides): Promise<void>;
        setReferrerCodeFor(trader: string, referralCode: BytesLike, overrides?: CallOverrides): Promise<void>;
        setTiers(newTierSettings: IReferralManager.TierSettingStruct[], overrides?: CallOverrides): Promise<void>;
        takeOwnership(overrides?: CallOverrides): Promise<void>;
        tierSettings(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            tier: number;
            stakeThreshold: BigNumber;
            discountRate: BigNumber;
            rebateRate: BigNumber;
        }>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        transferReferralCode(referralCode: BytesLike, newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "PrepareToTransferOwnership(address)"(pendingOwner?: string | null): PrepareToTransferOwnershipEventFilter;
        PrepareToTransferOwnership(pendingOwner?: string | null): PrepareToTransferOwnershipEventFilter;
        "RegisterReferralCode(address,bytes32)"(referralCodeOwner?: null, referralCode?: null): RegisterReferralCodeEventFilter;
        RegisterReferralCode(referralCodeOwner?: null, referralCode?: null): RegisterReferralCodeEventFilter;
        "SetHandler(address,bool)"(handler?: null, enable?: null): SetHandlerEventFilter;
        SetHandler(handler?: null, enable?: null): SetHandlerEventFilter;
        "SetMaintainer(address,address)"(previousMaintainer?: null, newMaintainer?: null): SetMaintainerEventFilter;
        SetMaintainer(previousMaintainer?: null, newMaintainer?: null): SetMaintainerEventFilter;
        "SetRebateRecipient(bytes32,address,address)"(referralCode?: null, referralCodeOwner?: null, rebateRecipient?: null): SetRebateRecipientEventFilter;
        SetRebateRecipient(referralCode?: null, referralCodeOwner?: null, rebateRecipient?: null): SetRebateRecipientEventFilter;
        "SetReferralCode(address,bytes32)"(trader?: null, referralCode?: null): SetReferralCodeEventFilter;
        SetReferralCode(trader?: null, referralCode?: null): SetReferralCodeEventFilter;
        "SetTiers(tuple[])"(newTierSettings?: null): SetTiersEventFilter;
        SetTiers(newTierSettings?: null): SetTiersEventFilter;
        "TransferReferralCode(bytes32,address,address)"(referralCode?: null, previousOwner?: null, newOwner?: null): TransferReferralCodeEventFilter;
        TransferReferralCode(referralCode?: null, previousOwner?: null, newOwner?: null): TransferReferralCodeEventFilter;
    };
    estimateGas: {
        PRIMARY_NETWORK(overrides?: CallOverrides): Promise<BigNumber>;
        RATE_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;
        getReferralCodeOf(trader: string, overrides?: CallOverrides): Promise<BigNumber>;
        getTiers(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isHandler(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        isValidReferralCode(referralCode: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        lastUpdatedTime(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        rebateRecipients(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        referralCodeOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        referralCodeOwners(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        registerReferralCode(referralCode: BytesLike, rebateRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setHandler(handler: string, enable: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRebateRecipient(referralCode: BytesLike, rebateRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setReferrerCode(referralCode: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setReferrerCodeFor(trader: string, referralCode: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setTiers(newTierSettings: IReferralManager.TierSettingStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        takeOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        tierSettings(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferReferralCode(referralCode: BytesLike, newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        PRIMARY_NETWORK(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        RATE_DENOMINATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReferralCodeOf(trader: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTiers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isHandler(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isValidReferralCode(referralCode: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastUpdatedTime(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rebateRecipients(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referralCodeOf(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referralCodeOwners(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerReferralCode(referralCode: BytesLike, rebateRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setHandler(handler: string, enable: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRebateRecipient(referralCode: BytesLike, rebateRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setReferrerCode(referralCode: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setReferrerCodeFor(trader: string, referralCode: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setTiers(newTierSettings: IReferralManager.TierSettingStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        takeOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        tierSettings(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferReferralCode(referralCode: BytesLike, newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
