import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace IGmxPositionRouter {
    type DecreasePositionRequestStruct = {
        account: PromiseOrValue<string>;
        indexToken: PromiseOrValue<string>;
        collateralDelta: PromiseOrValue<BigNumberish>;
        sizeDelta: PromiseOrValue<BigNumberish>;
        isLong: PromiseOrValue<boolean>;
        receiver: PromiseOrValue<string>;
        acceptablePrice: PromiseOrValue<BigNumberish>;
        minOut: PromiseOrValue<BigNumberish>;
        executionFee: PromiseOrValue<BigNumberish>;
        blockNumber: PromiseOrValue<BigNumberish>;
        blockTime: PromiseOrValue<BigNumberish>;
        withdrawETH: PromiseOrValue<boolean>;
    };
    type DecreasePositionRequestStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        boolean,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        account: string;
        indexToken: string;
        collateralDelta: BigNumber;
        sizeDelta: BigNumber;
        isLong: boolean;
        receiver: string;
        acceptablePrice: BigNumber;
        minOut: BigNumber;
        executionFee: BigNumber;
        blockNumber: BigNumber;
        blockTime: BigNumber;
        withdrawETH: boolean;
    };
    type IncreasePositionRequestStruct = {
        account: PromiseOrValue<string>;
        indexToken: PromiseOrValue<string>;
        amountIn: PromiseOrValue<BigNumberish>;
        minOut: PromiseOrValue<BigNumberish>;
        sizeDelta: PromiseOrValue<BigNumberish>;
        isLong: PromiseOrValue<boolean>;
        acceptablePrice: PromiseOrValue<BigNumberish>;
        executionFee: PromiseOrValue<BigNumberish>;
        blockNumber: PromiseOrValue<BigNumberish>;
        blockTime: PromiseOrValue<BigNumberish>;
        hasCollateralInETH: PromiseOrValue<boolean>;
    };
    type IncreasePositionRequestStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        account: string;
        indexToken: string;
        amountIn: BigNumber;
        minOut: BigNumber;
        sizeDelta: BigNumber;
        isLong: boolean;
        acceptablePrice: BigNumber;
        executionFee: BigNumber;
        blockNumber: BigNumber;
        blockTime: BigNumber;
        hasCollateralInETH: boolean;
    };
}
export interface IGmxPositionRouterInterface extends utils.Interface {
    functions: {
        "cancelDecreasePosition(bytes32,address)": FunctionFragment;
        "cancelIncreasePosition(bytes32,address)": FunctionFragment;
        "createDecreasePosition(address[],address,uint256,uint256,bool,address,uint256,uint256,uint256,bool,address)": FunctionFragment;
        "createIncreasePosition(address[],address,uint256,uint256,uint256,bool,uint256,uint256,bytes32,address)": FunctionFragment;
        "decreasePositionRequests(bytes32)": FunctionFragment;
        "decreasePositionsIndex(address)": FunctionFragment;
        "executeDecreasePosition(bytes32,address)": FunctionFragment;
        "executeIncreasePosition(bytes32,address)": FunctionFragment;
        "increasePositionRequests(bytes32)": FunctionFragment;
        "increasePositionsIndex(address)": FunctionFragment;
        "minExecutionFee()": FunctionFragment;
        "setPositionKeeper(address,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "cancelDecreasePosition" | "cancelIncreasePosition" | "createDecreasePosition" | "createIncreasePosition" | "decreasePositionRequests" | "decreasePositionsIndex" | "executeDecreasePosition" | "executeIncreasePosition" | "increasePositionRequests" | "increasePositionsIndex" | "minExecutionFee" | "setPositionKeeper"): FunctionFragment;
    encodeFunctionData(functionFragment: "cancelDecreasePosition", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "cancelIncreasePosition", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "createDecreasePosition", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "createIncreasePosition", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "decreasePositionRequests", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "decreasePositionsIndex", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "executeDecreasePosition", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "executeIncreasePosition", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "increasePositionRequests", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "increasePositionsIndex", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "minExecutionFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "setPositionKeeper", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    decodeFunctionResult(functionFragment: "cancelDecreasePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelIncreasePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDecreasePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createIncreasePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreasePositionRequests", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreasePositionsIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeDecreasePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeIncreasePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increasePositionRequests", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increasePositionsIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minExecutionFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPositionKeeper", data: BytesLike): Result;
    events: {};
}
export interface IGmxPositionRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IGmxPositionRouterInterface;
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
        cancelDecreasePosition(_key: PromiseOrValue<BytesLike>, _executionFeeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cancelIncreasePosition(_key: PromiseOrValue<BytesLike>, _executionFeeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createDecreasePosition(_path: PromiseOrValue<string>[], _indexToken: PromiseOrValue<string>, _collateralDelta: PromiseOrValue<BigNumberish>, _sizeDelta: PromiseOrValue<BigNumberish>, _isLong: PromiseOrValue<boolean>, _receiver: PromiseOrValue<string>, _acceptablePrice: PromiseOrValue<BigNumberish>, _minOut: PromiseOrValue<BigNumberish>, _executionFee: PromiseOrValue<BigNumberish>, _withdrawETH: PromiseOrValue<boolean>, _callbackTarget: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createIncreasePosition(_path: PromiseOrValue<string>[], _indexToken: PromiseOrValue<string>, _amountIn: PromiseOrValue<BigNumberish>, _minOut: PromiseOrValue<BigNumberish>, _sizeDelta: PromiseOrValue<BigNumberish>, _isLong: PromiseOrValue<boolean>, _acceptablePrice: PromiseOrValue<BigNumberish>, _executionFee: PromiseOrValue<BigNumberish>, _referralCode: PromiseOrValue<BytesLike>, _callbackTarget: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decreasePositionRequests(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[IGmxPositionRouter.DecreasePositionRequestStructOutput]>;
        decreasePositionsIndex(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        executeDecreasePosition(_key: PromiseOrValue<BytesLike>, _executionFeeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeIncreasePosition(_key: PromiseOrValue<BytesLike>, _executionFeeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        increasePositionRequests(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[IGmxPositionRouter.IncreasePositionRequestStructOutput]>;
        increasePositionsIndex(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        minExecutionFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        setPositionKeeper(_account: PromiseOrValue<string>, _isActive: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    cancelDecreasePosition(_key: PromiseOrValue<BytesLike>, _executionFeeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancelIncreasePosition(_key: PromiseOrValue<BytesLike>, _executionFeeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createDecreasePosition(_path: PromiseOrValue<string>[], _indexToken: PromiseOrValue<string>, _collateralDelta: PromiseOrValue<BigNumberish>, _sizeDelta: PromiseOrValue<BigNumberish>, _isLong: PromiseOrValue<boolean>, _receiver: PromiseOrValue<string>, _acceptablePrice: PromiseOrValue<BigNumberish>, _minOut: PromiseOrValue<BigNumberish>, _executionFee: PromiseOrValue<BigNumberish>, _withdrawETH: PromiseOrValue<boolean>, _callbackTarget: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createIncreasePosition(_path: PromiseOrValue<string>[], _indexToken: PromiseOrValue<string>, _amountIn: PromiseOrValue<BigNumberish>, _minOut: PromiseOrValue<BigNumberish>, _sizeDelta: PromiseOrValue<BigNumberish>, _isLong: PromiseOrValue<boolean>, _acceptablePrice: PromiseOrValue<BigNumberish>, _executionFee: PromiseOrValue<BigNumberish>, _referralCode: PromiseOrValue<BytesLike>, _callbackTarget: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decreasePositionRequests(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<IGmxPositionRouter.DecreasePositionRequestStructOutput>;
    decreasePositionsIndex(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    executeDecreasePosition(_key: PromiseOrValue<BytesLike>, _executionFeeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeIncreasePosition(_key: PromiseOrValue<BytesLike>, _executionFeeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    increasePositionRequests(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<IGmxPositionRouter.IncreasePositionRequestStructOutput>;
    increasePositionsIndex(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    minExecutionFee(overrides?: CallOverrides): Promise<BigNumber>;
    setPositionKeeper(_account: PromiseOrValue<string>, _isActive: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        cancelDecreasePosition(_key: PromiseOrValue<BytesLike>, _executionFeeReceiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        cancelIncreasePosition(_key: PromiseOrValue<BytesLike>, _executionFeeReceiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        createDecreasePosition(_path: PromiseOrValue<string>[], _indexToken: PromiseOrValue<string>, _collateralDelta: PromiseOrValue<BigNumberish>, _sizeDelta: PromiseOrValue<BigNumberish>, _isLong: PromiseOrValue<boolean>, _receiver: PromiseOrValue<string>, _acceptablePrice: PromiseOrValue<BigNumberish>, _minOut: PromiseOrValue<BigNumberish>, _executionFee: PromiseOrValue<BigNumberish>, _withdrawETH: PromiseOrValue<boolean>, _callbackTarget: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        createIncreasePosition(_path: PromiseOrValue<string>[], _indexToken: PromiseOrValue<string>, _amountIn: PromiseOrValue<BigNumberish>, _minOut: PromiseOrValue<BigNumberish>, _sizeDelta: PromiseOrValue<BigNumberish>, _isLong: PromiseOrValue<boolean>, _acceptablePrice: PromiseOrValue<BigNumberish>, _executionFee: PromiseOrValue<BigNumberish>, _referralCode: PromiseOrValue<BytesLike>, _callbackTarget: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        decreasePositionRequests(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<IGmxPositionRouter.DecreasePositionRequestStructOutput>;
        decreasePositionsIndex(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        executeDecreasePosition(_key: PromiseOrValue<BytesLike>, _executionFeeReceiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        executeIncreasePosition(_key: PromiseOrValue<BytesLike>, _executionFeeReceiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        increasePositionRequests(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<IGmxPositionRouter.IncreasePositionRequestStructOutput>;
        increasePositionsIndex(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        minExecutionFee(overrides?: CallOverrides): Promise<BigNumber>;
        setPositionKeeper(_account: PromiseOrValue<string>, _isActive: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        cancelDecreasePosition(_key: PromiseOrValue<BytesLike>, _executionFeeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancelIncreasePosition(_key: PromiseOrValue<BytesLike>, _executionFeeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createDecreasePosition(_path: PromiseOrValue<string>[], _indexToken: PromiseOrValue<string>, _collateralDelta: PromiseOrValue<BigNumberish>, _sizeDelta: PromiseOrValue<BigNumberish>, _isLong: PromiseOrValue<boolean>, _receiver: PromiseOrValue<string>, _acceptablePrice: PromiseOrValue<BigNumberish>, _minOut: PromiseOrValue<BigNumberish>, _executionFee: PromiseOrValue<BigNumberish>, _withdrawETH: PromiseOrValue<boolean>, _callbackTarget: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createIncreasePosition(_path: PromiseOrValue<string>[], _indexToken: PromiseOrValue<string>, _amountIn: PromiseOrValue<BigNumberish>, _minOut: PromiseOrValue<BigNumberish>, _sizeDelta: PromiseOrValue<BigNumberish>, _isLong: PromiseOrValue<boolean>, _acceptablePrice: PromiseOrValue<BigNumberish>, _executionFee: PromiseOrValue<BigNumberish>, _referralCode: PromiseOrValue<BytesLike>, _callbackTarget: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decreasePositionRequests(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        decreasePositionsIndex(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        executeDecreasePosition(_key: PromiseOrValue<BytesLike>, _executionFeeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeIncreasePosition(_key: PromiseOrValue<BytesLike>, _executionFeeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        increasePositionRequests(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        increasePositionsIndex(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        minExecutionFee(overrides?: CallOverrides): Promise<BigNumber>;
        setPositionKeeper(_account: PromiseOrValue<string>, _isActive: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        cancelDecreasePosition(_key: PromiseOrValue<BytesLike>, _executionFeeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancelIncreasePosition(_key: PromiseOrValue<BytesLike>, _executionFeeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createDecreasePosition(_path: PromiseOrValue<string>[], _indexToken: PromiseOrValue<string>, _collateralDelta: PromiseOrValue<BigNumberish>, _sizeDelta: PromiseOrValue<BigNumberish>, _isLong: PromiseOrValue<boolean>, _receiver: PromiseOrValue<string>, _acceptablePrice: PromiseOrValue<BigNumberish>, _minOut: PromiseOrValue<BigNumberish>, _executionFee: PromiseOrValue<BigNumberish>, _withdrawETH: PromiseOrValue<boolean>, _callbackTarget: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createIncreasePosition(_path: PromiseOrValue<string>[], _indexToken: PromiseOrValue<string>, _amountIn: PromiseOrValue<BigNumberish>, _minOut: PromiseOrValue<BigNumberish>, _sizeDelta: PromiseOrValue<BigNumberish>, _isLong: PromiseOrValue<boolean>, _acceptablePrice: PromiseOrValue<BigNumberish>, _executionFee: PromiseOrValue<BigNumberish>, _referralCode: PromiseOrValue<BytesLike>, _callbackTarget: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decreasePositionRequests(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreasePositionsIndex(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeDecreasePosition(_key: PromiseOrValue<BytesLike>, _executionFeeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeIncreasePosition(_key: PromiseOrValue<BytesLike>, _executionFeeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        increasePositionRequests(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increasePositionsIndex(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minExecutionFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setPositionKeeper(_account: PromiseOrValue<string>, _isActive: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
