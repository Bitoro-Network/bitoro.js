import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface VaultInterface extends utils.Interface {
    contractName: "Vault";
    functions: {
        "initialize()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "takeOwnership()": FunctionFragment;
        "transferAllERC20(address,address[])": FunctionFragment;
        "transferERC20(address,address[],uint256[])": FunctionFragment;
        "transferETH(address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "takeOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferAllERC20", values: [string, string[]]): string;
    encodeFunctionData(functionFragment: "transferERC20", values: [string, string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "transferETH", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "takeOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferAllERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
        "PrepareToTransferOwnership(address)": EventFragment;
        "TransferERC20Token(address,address,uint256)": EventFragment;
        "TransferETH(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PrepareToTransferOwnership"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferERC20Token"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferETH"): EventFragment;
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
export type TransferERC20TokenEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    token: string;
    to: string;
    amount: BigNumber;
}>;
export type TransferERC20TokenEventFilter = TypedEventFilter<TransferERC20TokenEvent>;
export type TransferETHEvent = TypedEvent<[
    string,
    BigNumber
], {
    to: string;
    amount: BigNumber;
}>;
export type TransferETHEventFilter = TypedEventFilter<TransferETHEvent>;
export interface Vault extends BaseContract {
    contractName: "Vault";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VaultInterface;
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
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        takeOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferAllERC20(recipient: string, tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferERC20(recipient: string, tokens: string[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferETH(recipient: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    initialize(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    takeOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferAllERC20(recipient: string, tokens: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferERC20(recipient: string, tokens: string[], amounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferETH(recipient: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        initialize(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        takeOwnership(overrides?: CallOverrides): Promise<void>;
        transferAllERC20(recipient: string, tokens: string[], overrides?: CallOverrides): Promise<void>;
        transferERC20(recipient: string, tokens: string[], amounts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        transferETH(recipient: string, value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "PrepareToTransferOwnership(address)"(pendingOwner?: string | null): PrepareToTransferOwnershipEventFilter;
        PrepareToTransferOwnership(pendingOwner?: string | null): PrepareToTransferOwnershipEventFilter;
        "TransferERC20Token(address,address,uint256)"(token?: string | null, to?: string | null, amount?: null): TransferERC20TokenEventFilter;
        TransferERC20Token(token?: string | null, to?: string | null, amount?: null): TransferERC20TokenEventFilter;
        "TransferETH(address,uint256)"(to?: string | null, amount?: null): TransferETHEventFilter;
        TransferETH(to?: string | null, amount?: null): TransferETHEventFilter;
    };
    estimateGas: {
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        takeOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferAllERC20(recipient: string, tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferERC20(recipient: string, tokens: string[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferETH(recipient: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        takeOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferAllERC20(recipient: string, tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferERC20(recipient: string, tokens: string[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferETH(recipient: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
