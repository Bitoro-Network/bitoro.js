import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export type ClosePositionContextStruct = {
    collateralUsd: PromiseOrValue<BigNumberish>;
    sizeUsd: PromiseOrValue<BigNumberish>;
    priceUsd: PromiseOrValue<BigNumberish>;
    isMarket: PromiseOrValue<boolean>;
    gmxOrderIndex: PromiseOrValue<BigNumberish>;
    executionFee: PromiseOrValue<BigNumberish>;
};
export type ClosePositionContextStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber
] & {
    collateralUsd: BigNumber;
    sizeUsd: BigNumber;
    priceUsd: BigNumber;
    isMarket: boolean;
    gmxOrderIndex: BigNumber;
    executionFee: BigNumber;
};
export type OpenPositionContextStruct = {
    amountIn: PromiseOrValue<BigNumberish>;
    sizeUsd: PromiseOrValue<BigNumberish>;
    priceUsd: PromiseOrValue<BigNumberish>;
    isMarket: PromiseOrValue<boolean>;
    fee: PromiseOrValue<BigNumberish>;
    borrow: PromiseOrValue<BigNumberish>;
    amountOut: PromiseOrValue<BigNumberish>;
    gmxOrderIndex: PromiseOrValue<BigNumberish>;
    executionFee: PromiseOrValue<BigNumberish>;
};
export type OpenPositionContextStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
] & {
    amountIn: BigNumber;
    sizeUsd: BigNumber;
    priceUsd: BigNumber;
    isMarket: boolean;
    fee: BigNumber;
    borrow: BigNumber;
    amountOut: BigNumber;
    gmxOrderIndex: BigNumber;
    executionFee: BigNumber;
};
export type AccountStateStruct = {
    account: PromiseOrValue<string>;
    cumulativeDebt: PromiseOrValue<BigNumberish>;
    cumulativeFee: PromiseOrValue<BigNumberish>;
    debtEntryFunding: PromiseOrValue<BigNumberish>;
    collateralToken: PromiseOrValue<string>;
    indexToken: PromiseOrValue<string>;
    deprecated0: PromiseOrValue<BigNumberish>;
    isLong: PromiseOrValue<boolean>;
    collateralDecimals: PromiseOrValue<BigNumberish>;
    liquidationFee: PromiseOrValue<BigNumberish>;
    isLiquidating: PromiseOrValue<boolean>;
    priceImpactFee: PromiseOrValue<BigNumberish>;
    reserved: PromiseOrValue<BytesLike>[];
};
export type AccountStateStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string,
    number,
    boolean,
    number,
    BigNumber,
    boolean,
    BigNumber,
    string[]
] & {
    account: string;
    cumulativeDebt: BigNumber;
    cumulativeFee: BigNumber;
    debtEntryFunding: BigNumber;
    collateralToken: string;
    indexToken: string;
    deprecated0: number;
    isLong: boolean;
    collateralDecimals: number;
    liquidationFee: BigNumber;
    isLiquidating: boolean;
    priceImpactFee: BigNumber;
    reserved: string[];
};
export declare namespace IGmxVault {
    type PositionStruct = {
        sizeUsd: PromiseOrValue<BigNumberish>;
        collateralUsd: PromiseOrValue<BigNumberish>;
        averagePrice: PromiseOrValue<BigNumberish>;
        entryFundingRate: PromiseOrValue<BigNumberish>;
        reserveAmount: PromiseOrValue<BigNumberish>;
        realisedPnlUsd: PromiseOrValue<BigNumberish>;
        lastIncreasedTime: PromiseOrValue<BigNumberish>;
    };
    type PositionStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        sizeUsd: BigNumber;
        collateralUsd: BigNumber;
        averagePrice: BigNumber;
        entryFundingRate: BigNumber;
        reserveAmount: BigNumber;
        realisedPnlUsd: BigNumber;
        lastIncreasedTime: BigNumber;
    };
}
export interface GmxAdapterInterface extends utils.Interface {
    functions: {
        "bitoroAccountState()": FunctionFragment;
        "cancelOrders(bytes32[])": FunctionFragment;
        "cancelTimeoutOrders(bytes32[])": FunctionFragment;
        "closePosition(uint256,uint256,uint96,uint96,uint96,uint8)": FunctionFragment;
        "debtStates()": FunctionFragment;
        "getPendingGmxOrderKeys()": FunctionFragment;
        "getTpslOrderKeys(bytes32)": FunctionFragment;
        "initialize(uint256,address,address,address,address,bool)": FunctionFragment;
        "liquidatePosition(uint256)": FunctionFragment;
        "openPosition(address,uint256,uint256,uint256,uint256,uint96,uint96,uint96,uint8)": FunctionFragment;
        "updateOrder(bytes32,uint256,uint256,uint256,bool)": FunctionFragment;
        "withdraw()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "bitoroAccountState" | "cancelOrders" | "cancelTimeoutOrders" | "closePosition" | "debtStates" | "getPendingGmxOrderKeys" | "getTpslOrderKeys" | "initialize" | "liquidatePosition" | "openPosition" | "updateOrder" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "bitoroAccountState", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancelOrders", values: [PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "cancelTimeoutOrders", values: [PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "closePosition", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "debtStates", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPendingGmxOrderKeys", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTpslOrderKeys", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "liquidatePosition", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "openPosition", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "updateOrder", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
    decodeFunctionResult(functionFragment: "bitoroAccountState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelOrders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelTimeoutOrders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "debtStates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPendingGmxOrderKeys", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTpslOrderKeys", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidatePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "AddPendingOrder(uint8,uint8,uint256,uint256,uint256)": EventFragment;
        "BorrowAsset(uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "CancelOrder(bytes32,bool)": EventFragment;
        "ClosePosition(address,address,bool,tuple)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "LiquidatePosition(address,address,bool,uint256,uint256,tuple)": EventFragment;
        "OpenPosition(address,address,bool,tuple)": EventFragment;
        "RemovePendingOrder(bytes32)": EventFragment;
        "RepayAsset(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "SetBoostRate(uint256,uint256)": EventFragment;
        "SetLiquidityPool(address,address)": EventFragment;
        "Withdraw(uint256,uint256,uint256,bool,uint256,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddPendingOrder"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BorrowAsset"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CancelOrder"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClosePosition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidatePosition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OpenPosition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemovePendingOrder"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RepayAsset"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetBoostRate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetLiquidityPool"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
export interface AddPendingOrderEventObject {
    category: number;
    receiver: number;
    index: BigNumber;
    borrow: BigNumber;
    timestamp: BigNumber;
}
export type AddPendingOrderEvent = TypedEvent<[
    number,
    number,
    BigNumber,
    BigNumber,
    BigNumber
], AddPendingOrderEventObject>;
export type AddPendingOrderEventFilter = TypedEventFilter<AddPendingOrderEvent>;
export interface BorrowAssetEventObject {
    amount: BigNumber;
    boostFee: BigNumber;
    cumulativeDebt: BigNumber;
    cumulativeFee: BigNumber;
    debtEntryFunding: BigNumber;
}
export type BorrowAssetEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], BorrowAssetEventObject>;
export type BorrowAssetEventFilter = TypedEventFilter<BorrowAssetEvent>;
export interface CancelOrderEventObject {
    key: string;
    success: boolean;
}
export type CancelOrderEvent = TypedEvent<[
    string,
    boolean
], CancelOrderEventObject>;
export type CancelOrderEventFilter = TypedEventFilter<CancelOrderEvent>;
export interface ClosePositionEventObject {
    collateralToken: string;
    indexToken: string;
    isLong: boolean;
    context: ClosePositionContextStructOutput;
}
export type ClosePositionEvent = TypedEvent<[
    string,
    string,
    boolean,
    ClosePositionContextStructOutput
], ClosePositionEventObject>;
export type ClosePositionEventFilter = TypedEventFilter<ClosePositionEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface LiquidatePositionEventObject {
    collateralToken: string;
    indexToken: string;
    isLong: boolean;
    liquidationPrice: BigNumber;
    estimateliquidationFee: BigNumber;
    position: IGmxVault.PositionStructOutput;
}
export type LiquidatePositionEvent = TypedEvent<[
    string,
    string,
    boolean,
    BigNumber,
    BigNumber,
    IGmxVault.PositionStructOutput
], LiquidatePositionEventObject>;
export type LiquidatePositionEventFilter = TypedEventFilter<LiquidatePositionEvent>;
export interface OpenPositionEventObject {
    collateralToken: string;
    indexToken: string;
    isLong: boolean;
    context: OpenPositionContextStructOutput;
}
export type OpenPositionEvent = TypedEvent<[
    string,
    string,
    boolean,
    OpenPositionContextStructOutput
], OpenPositionEventObject>;
export type OpenPositionEventFilter = TypedEventFilter<OpenPositionEvent>;
export interface RemovePendingOrderEventObject {
    key: string;
}
export type RemovePendingOrderEvent = TypedEvent<[
    string
], RemovePendingOrderEventObject>;
export type RemovePendingOrderEventFilter = TypedEventFilter<RemovePendingOrderEvent>;
export interface RepayAssetEventObject {
    amount: BigNumber;
    paidDebt: BigNumber;
    paidFee: BigNumber;
    boostFee: BigNumber;
    badDebt: BigNumber;
    cumulativeDebt: BigNumber;
    cumulativeFee: BigNumber;
    debtEntryFunding: BigNumber;
}
export type RepayAssetEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], RepayAssetEventObject>;
export type RepayAssetEventFilter = TypedEventFilter<RepayAssetEvent>;
export interface SetBoostRateEventObject {
    previousRate: BigNumber;
    newRate: BigNumber;
}
export type SetBoostRateEvent = TypedEvent<[
    BigNumber,
    BigNumber
], SetBoostRateEventObject>;
export type SetBoostRateEventFilter = TypedEventFilter<SetBoostRateEvent>;
export interface SetLiquidityPoolEventObject {
    previousLiquidityPool: string;
    newLiquidityPool: string;
}
export type SetLiquidityPoolEvent = TypedEvent<[
    string,
    string
], SetLiquidityPoolEventObject>;
export type SetLiquidityPoolEventFilter = TypedEventFilter<SetLiquidityPoolEvent>;
export interface WithdrawEventObject {
    cumulativeDebt: BigNumber;
    cumulativeFee: BigNumber;
    priceImpactFee: BigNumber;
    isLiquidation: boolean;
    balance: BigNumber;
    userWithdrawal: BigNumber;
    paidDebt: BigNumber;
    paidFee: BigNumber;
}
export type WithdrawEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], WithdrawEventObject>;
export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface GmxAdapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GmxAdapterInterface;
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
        bitoroAccountState(overrides?: CallOverrides): Promise<[AccountStateStructOutput]>;
        cancelOrders(keys: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cancelTimeoutOrders(keys: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        closePosition(collateralUsd: PromiseOrValue<BigNumberish>, sizeUsd: PromiseOrValue<BigNumberish>, priceUsd: PromiseOrValue<BigNumberish>, tpPriceUsd: PromiseOrValue<BigNumberish>, slPriceUsd: PromiseOrValue<BigNumberish>, flags: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        debtStates(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            cumulativeDebt: BigNumber;
            cumulativeFee: BigNumber;
            debtEntryFunding: BigNumber;
        }>;
        getPendingGmxOrderKeys(overrides?: CallOverrides): Promise<[string[]]>;
        getTpslOrderKeys(orderKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string, string]>;
        initialize(projectId: PromiseOrValue<BigNumberish>, liquidityPool: PromiseOrValue<string>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        liquidatePosition(liquidatePrice: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        openPosition(swapInToken: PromiseOrValue<string>, swapInAmount: PromiseOrValue<BigNumberish>, minSwapOut: PromiseOrValue<BigNumberish>, borrow: PromiseOrValue<BigNumberish>, sizeUsd: PromiseOrValue<BigNumberish>, priceUsd: PromiseOrValue<BigNumberish>, tpPriceUsd: PromiseOrValue<BigNumberish>, slPriceUsd: PromiseOrValue<BigNumberish>, flags: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateOrder(orderKey: PromiseOrValue<BytesLike>, collateralDelta: PromiseOrValue<BigNumberish>, sizeDelta: PromiseOrValue<BigNumberish>, triggerPrice: PromiseOrValue<BigNumberish>, triggerAboveThreshold: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    bitoroAccountState(overrides?: CallOverrides): Promise<AccountStateStructOutput>;
    cancelOrders(keys: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancelTimeoutOrders(keys: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    closePosition(collateralUsd: PromiseOrValue<BigNumberish>, sizeUsd: PromiseOrValue<BigNumberish>, priceUsd: PromiseOrValue<BigNumberish>, tpPriceUsd: PromiseOrValue<BigNumberish>, slPriceUsd: PromiseOrValue<BigNumberish>, flags: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    debtStates(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        cumulativeDebt: BigNumber;
        cumulativeFee: BigNumber;
        debtEntryFunding: BigNumber;
    }>;
    getPendingGmxOrderKeys(overrides?: CallOverrides): Promise<string[]>;
    getTpslOrderKeys(orderKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string, string]>;
    initialize(projectId: PromiseOrValue<BigNumberish>, liquidityPool: PromiseOrValue<string>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    liquidatePosition(liquidatePrice: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    openPosition(swapInToken: PromiseOrValue<string>, swapInAmount: PromiseOrValue<BigNumberish>, minSwapOut: PromiseOrValue<BigNumberish>, borrow: PromiseOrValue<BigNumberish>, sizeUsd: PromiseOrValue<BigNumberish>, priceUsd: PromiseOrValue<BigNumberish>, tpPriceUsd: PromiseOrValue<BigNumberish>, slPriceUsd: PromiseOrValue<BigNumberish>, flags: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateOrder(orderKey: PromiseOrValue<BytesLike>, collateralDelta: PromiseOrValue<BigNumberish>, sizeDelta: PromiseOrValue<BigNumberish>, triggerPrice: PromiseOrValue<BigNumberish>, triggerAboveThreshold: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdraw(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        bitoroAccountState(overrides?: CallOverrides): Promise<AccountStateStructOutput>;
        cancelOrders(keys: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        cancelTimeoutOrders(keys: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        closePosition(collateralUsd: PromiseOrValue<BigNumberish>, sizeUsd: PromiseOrValue<BigNumberish>, priceUsd: PromiseOrValue<BigNumberish>, tpPriceUsd: PromiseOrValue<BigNumberish>, slPriceUsd: PromiseOrValue<BigNumberish>, flags: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        debtStates(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            cumulativeDebt: BigNumber;
            cumulativeFee: BigNumber;
            debtEntryFunding: BigNumber;
        }>;
        getPendingGmxOrderKeys(overrides?: CallOverrides): Promise<string[]>;
        getTpslOrderKeys(orderKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string, string]>;
        initialize(projectId: PromiseOrValue<BigNumberish>, liquidityPool: PromiseOrValue<string>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        liquidatePosition(liquidatePrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        openPosition(swapInToken: PromiseOrValue<string>, swapInAmount: PromiseOrValue<BigNumberish>, minSwapOut: PromiseOrValue<BigNumberish>, borrow: PromiseOrValue<BigNumberish>, sizeUsd: PromiseOrValue<BigNumberish>, priceUsd: PromiseOrValue<BigNumberish>, tpPriceUsd: PromiseOrValue<BigNumberish>, slPriceUsd: PromiseOrValue<BigNumberish>, flags: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateOrder(orderKey: PromiseOrValue<BytesLike>, collateralDelta: PromiseOrValue<BigNumberish>, sizeDelta: PromiseOrValue<BigNumberish>, triggerPrice: PromiseOrValue<BigNumberish>, triggerAboveThreshold: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        withdraw(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddPendingOrder(uint8,uint8,uint256,uint256,uint256)"(category?: null, receiver?: null, index?: null, borrow?: null, timestamp?: null): AddPendingOrderEventFilter;
        AddPendingOrder(category?: null, receiver?: null, index?: null, borrow?: null, timestamp?: null): AddPendingOrderEventFilter;
        "BorrowAsset(uint256,uint256,uint256,uint256,uint256)"(amount?: null, boostFee?: null, cumulativeDebt?: null, cumulativeFee?: null, debtEntryFunding?: null): BorrowAssetEventFilter;
        BorrowAsset(amount?: null, boostFee?: null, cumulativeDebt?: null, cumulativeFee?: null, debtEntryFunding?: null): BorrowAssetEventFilter;
        "CancelOrder(bytes32,bool)"(key?: null, success?: null): CancelOrderEventFilter;
        CancelOrder(key?: null, success?: null): CancelOrderEventFilter;
        "ClosePosition(address,address,bool,tuple)"(collateralToken?: null, indexToken?: null, isLong?: null, context?: null): ClosePositionEventFilter;
        ClosePosition(collateralToken?: null, indexToken?: null, isLong?: null, context?: null): ClosePositionEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "LiquidatePosition(address,address,bool,uint256,uint256,tuple)"(collateralToken?: null, indexToken?: null, isLong?: null, liquidationPrice?: null, estimateliquidationFee?: null, position?: null): LiquidatePositionEventFilter;
        LiquidatePosition(collateralToken?: null, indexToken?: null, isLong?: null, liquidationPrice?: null, estimateliquidationFee?: null, position?: null): LiquidatePositionEventFilter;
        "OpenPosition(address,address,bool,tuple)"(collateralToken?: null, indexToken?: null, isLong?: null, context?: null): OpenPositionEventFilter;
        OpenPosition(collateralToken?: null, indexToken?: null, isLong?: null, context?: null): OpenPositionEventFilter;
        "RemovePendingOrder(bytes32)"(key?: null): RemovePendingOrderEventFilter;
        RemovePendingOrder(key?: null): RemovePendingOrderEventFilter;
        "RepayAsset(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)"(amount?: null, paidDebt?: null, paidFee?: null, boostFee?: null, badDebt?: null, cumulativeDebt?: null, cumulativeFee?: null, debtEntryFunding?: null): RepayAssetEventFilter;
        RepayAsset(amount?: null, paidDebt?: null, paidFee?: null, boostFee?: null, badDebt?: null, cumulativeDebt?: null, cumulativeFee?: null, debtEntryFunding?: null): RepayAssetEventFilter;
        "SetBoostRate(uint256,uint256)"(previousRate?: null, newRate?: null): SetBoostRateEventFilter;
        SetBoostRate(previousRate?: null, newRate?: null): SetBoostRateEventFilter;
        "SetLiquidityPool(address,address)"(previousLiquidityPool?: null, newLiquidityPool?: null): SetLiquidityPoolEventFilter;
        SetLiquidityPool(previousLiquidityPool?: null, newLiquidityPool?: null): SetLiquidityPoolEventFilter;
        "Withdraw(uint256,uint256,uint256,bool,uint256,uint256,uint256,uint256)"(cumulativeDebt?: null, cumulativeFee?: null, priceImpactFee?: null, isLiquidation?: null, balance?: null, userWithdrawal?: null, paidDebt?: null, paidFee?: null): WithdrawEventFilter;
        Withdraw(cumulativeDebt?: null, cumulativeFee?: null, priceImpactFee?: null, isLiquidation?: null, balance?: null, userWithdrawal?: null, paidDebt?: null, paidFee?: null): WithdrawEventFilter;
    };
    estimateGas: {
        bitoroAccountState(overrides?: CallOverrides): Promise<BigNumber>;
        cancelOrders(keys: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancelTimeoutOrders(keys: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        closePosition(collateralUsd: PromiseOrValue<BigNumberish>, sizeUsd: PromiseOrValue<BigNumberish>, priceUsd: PromiseOrValue<BigNumberish>, tpPriceUsd: PromiseOrValue<BigNumberish>, slPriceUsd: PromiseOrValue<BigNumberish>, flags: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        debtStates(overrides?: CallOverrides): Promise<BigNumber>;
        getPendingGmxOrderKeys(overrides?: CallOverrides): Promise<BigNumber>;
        getTpslOrderKeys(orderKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(projectId: PromiseOrValue<BigNumberish>, liquidityPool: PromiseOrValue<string>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        liquidatePosition(liquidatePrice: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        openPosition(swapInToken: PromiseOrValue<string>, swapInAmount: PromiseOrValue<BigNumberish>, minSwapOut: PromiseOrValue<BigNumberish>, borrow: PromiseOrValue<BigNumberish>, sizeUsd: PromiseOrValue<BigNumberish>, priceUsd: PromiseOrValue<BigNumberish>, tpPriceUsd: PromiseOrValue<BigNumberish>, slPriceUsd: PromiseOrValue<BigNumberish>, flags: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateOrder(orderKey: PromiseOrValue<BytesLike>, collateralDelta: PromiseOrValue<BigNumberish>, sizeDelta: PromiseOrValue<BigNumberish>, triggerPrice: PromiseOrValue<BigNumberish>, triggerAboveThreshold: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        bitoroAccountState(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelOrders(keys: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancelTimeoutOrders(keys: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        closePosition(collateralUsd: PromiseOrValue<BigNumberish>, sizeUsd: PromiseOrValue<BigNumberish>, priceUsd: PromiseOrValue<BigNumberish>, tpPriceUsd: PromiseOrValue<BigNumberish>, slPriceUsd: PromiseOrValue<BigNumberish>, flags: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        debtStates(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPendingGmxOrderKeys(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTpslOrderKeys(orderKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(projectId: PromiseOrValue<BigNumberish>, liquidityPool: PromiseOrValue<string>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        liquidatePosition(liquidatePrice: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        openPosition(swapInToken: PromiseOrValue<string>, swapInAmount: PromiseOrValue<BigNumberish>, minSwapOut: PromiseOrValue<BigNumberish>, borrow: PromiseOrValue<BigNumberish>, sizeUsd: PromiseOrValue<BigNumberish>, priceUsd: PromiseOrValue<BigNumberish>, tpPriceUsd: PromiseOrValue<BigNumberish>, slPriceUsd: PromiseOrValue<BigNumberish>, flags: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateOrder(orderKey: PromiseOrValue<BytesLike>, collateralDelta: PromiseOrValue<BigNumberish>, sizeDelta: PromiseOrValue<BigNumberish>, triggerPrice: PromiseOrValue<BigNumberish>, triggerAboveThreshold: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
