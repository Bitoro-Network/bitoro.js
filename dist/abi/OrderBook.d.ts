import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type PositionOrderExtraStruct = {
    tpPrice: BigNumberish;
    slPrice: BigNumberish;
    tpslProfitTokenId: BigNumberish;
    tpslDeadline: BigNumberish;
};
export type PositionOrderExtraStructOutput = [
    BigNumber,
    BigNumber,
    number,
    number
] & {
    tpPrice: BigNumber;
    slPrice: BigNumber;
    tpslProfitTokenId: number;
    tpslDeadline: number;
};
export interface OrderBookInterface extends utils.Interface {
    contractName: "OrderBook";
    functions: {
        "addBroker(address)": FunctionFragment;
        "addRebalancer(address)": FunctionFragment;
        "brokers(address)": FunctionFragment;
        "cancelOrder(uint64)": FunctionFragment;
        "claimBrokerGasRebate()": FunctionFragment;
        "depositCollateral(bytes32,uint256)": FunctionFragment;
        "fillLiquidityOrder(uint64,uint96,uint96,uint96,uint96)": FunctionFragment;
        "fillPositionOrder(uint64,uint96,uint96,uint96)": FunctionFragment;
        "fillRebalanceOrder(uint64,uint96,uint96)": FunctionFragment;
        "fillWithdrawalOrder(uint64,uint96,uint96,uint96)": FunctionFragment;
        "getOrder(uint64)": FunctionFragment;
        "getOrderCount()": FunctionFragment;
        "getOrders(uint256,uint256)": FunctionFragment;
        "initialize(address,address,address,address)": FunctionFragment;
        "isLiquidityOrderPaused()": FunctionFragment;
        "isPositionOrderPaused()": FunctionFragment;
        "liquidate(bytes32,uint8,uint96,uint96,uint96)": FunctionFragment;
        "liquidityLockPeriod()": FunctionFragment;
        "maintainer()": FunctionFragment;
        "marketOrderTimeout()": FunctionFragment;
        "maxLimitOrderTimeout()": FunctionFragment;
        "nextOrderId()": FunctionFragment;
        "owner()": FunctionFragment;
        "pause(bool,bool)": FunctionFragment;
        "placeLiquidityOrder(uint8,uint96,bool)": FunctionFragment;
        "placePositionOrder2(bytes32,uint96,uint96,uint96,uint8,uint8,uint32,bytes32)": FunctionFragment;
        "placePositionOrder3(bytes32,uint96,uint96,uint96,uint8,uint8,uint32,bytes32,(uint96,uint96,uint8,uint32))": FunctionFragment;
        "placeRebalanceOrder(uint8,uint8,uint96,uint96,bytes32)": FunctionFragment;
        "placeWithdrawalOrder(bytes32,uint96,uint8,bool)": FunctionFragment;
        "positionOrderExtras(uint64)": FunctionFragment;
        "rebalancers(address)": FunctionFragment;
        "redeemBitoroToken(uint8,uint96)": FunctionFragment;
        "referralManager()": FunctionFragment;
        "removeBroker(address)": FunctionFragment;
        "removeRebalancer(address)": FunctionFragment;
        "renounceBroker()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "renounceRebalancer()": FunctionFragment;
        "setAggregator(address,bool)": FunctionFragment;
        "setLiquidityLockPeriod(uint32)": FunctionFragment;
        "setMaintainer(address)": FunctionFragment;
        "setOrderTimeout(uint32,uint32)": FunctionFragment;
        "setReferralManager(address)": FunctionFragment;
        "takeOwnership()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateFundingState(uint32,uint8[],uint32[],uint96[])": FunctionFragment;
        "withdrawAllCollateral(bytes32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addBroker", values: [string]): string;
    encodeFunctionData(functionFragment: "addRebalancer", values: [string]): string;
    encodeFunctionData(functionFragment: "brokers", values: [string]): string;
    encodeFunctionData(functionFragment: "cancelOrder", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimBrokerGasRebate", values?: undefined): string;
    encodeFunctionData(functionFragment: "depositCollateral", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "fillLiquidityOrder", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "fillPositionOrder", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "fillRebalanceOrder", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "fillWithdrawalOrder", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getOrder", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getOrderCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getOrders", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string, string]): string;
    encodeFunctionData(functionFragment: "isLiquidityOrderPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPositionOrderPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "liquidate", values: [BytesLike, BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "liquidityLockPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "maintainer", values?: undefined): string;
    encodeFunctionData(functionFragment: "marketOrderTimeout", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxLimitOrderTimeout", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextOrderId", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values: [boolean, boolean]): string;
    encodeFunctionData(functionFragment: "placeLiquidityOrder", values: [BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "placePositionOrder2", values: [
        BytesLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "placePositionOrder3", values: [
        BytesLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        PositionOrderExtraStruct
    ]): string;
    encodeFunctionData(functionFragment: "placeRebalanceOrder", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "placeWithdrawalOrder", values: [BytesLike, BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "positionOrderExtras", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "rebalancers", values: [string]): string;
    encodeFunctionData(functionFragment: "redeemBitoroToken", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "referralManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeBroker", values: [string]): string;
    encodeFunctionData(functionFragment: "removeRebalancer", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceBroker", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRebalancer", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAggregator", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setLiquidityLockPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaintainer", values: [string]): string;
    encodeFunctionData(functionFragment: "setOrderTimeout", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setReferralManager", values: [string]): string;
    encodeFunctionData(functionFragment: "takeOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "updateFundingState", values: [BigNumberish, BigNumberish[], BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "withdrawAllCollateral", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "addBroker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addRebalancer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "brokers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimBrokerGasRebate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fillLiquidityOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fillPositionOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fillRebalanceOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fillWithdrawalOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOrderCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOrders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isLiquidityOrderPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPositionOrderPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidityLockPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maintainer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "marketOrderTimeout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxLimitOrderTimeout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextOrderId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "placeLiquidityOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "placePositionOrder2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "placePositionOrder3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "placeRebalanceOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "placeWithdrawalOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionOrderExtras", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebalancers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemBitoroToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referralManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeBroker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeRebalancer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceBroker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRebalancer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAggregator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLiquidityLockPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaintainer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOrderTimeout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReferralManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "takeOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFundingState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAllCollateral", data: BytesLike): Result;
    events: {
        "AddBroker(address)": EventFragment;
        "AddRebalancer(address)": EventFragment;
        "CancelOrder(uint64,uint8,bytes32[3])": EventFragment;
        "FillOrder(uint64,uint8,bytes32[3])": EventFragment;
        "NewLiquidityOrder(address,uint64,uint8,uint96,bool)": EventFragment;
        "NewPositionOrder(bytes32,uint64,uint96,uint96,uint96,uint8,uint8,uint32)": EventFragment;
        "NewPositionOrderExtra(bytes32,uint64,uint96,uint96,uint96,uint8,uint8,uint32,tuple)": EventFragment;
        "NewRebalanceOrder(address,uint64,uint8,uint8,uint96,uint96,bytes32)": EventFragment;
        "NewWithdrawalOrder(bytes32,uint64,uint96,uint8,bool)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "PauseLiquidityOrder(bool)": EventFragment;
        "PausePositionOrder(bool)": EventFragment;
        "PrepareToTransferOwnership(address)": EventFragment;
        "RemoveBroker(address)": EventFragment;
        "RemoveRebalancer(address)": EventFragment;
        "SetAggregator(address,bool)": EventFragment;
        "SetLiquidityLockPeriod(uint32,uint32)": EventFragment;
        "SetMaintainer(address)": EventFragment;
        "SetOrderTimeout(uint32,uint32)": EventFragment;
        "SetReferralManager(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddBroker"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AddRebalancer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CancelOrder"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FillOrder"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewLiquidityOrder"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPositionOrder"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPositionOrderExtra"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewRebalanceOrder"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewWithdrawalOrder"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauseLiquidityOrder"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PausePositionOrder"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PrepareToTransferOwnership"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveBroker"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveRebalancer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetAggregator"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetLiquidityLockPeriod"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetMaintainer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetOrderTimeout"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetReferralManager"): EventFragment;
}
export type AddBrokerEvent = TypedEvent<[string], {
    newBroker: string;
}>;
export type AddBrokerEventFilter = TypedEventFilter<AddBrokerEvent>;
export type AddRebalancerEvent = TypedEvent<[
    string
], {
    newRebalancer: string;
}>;
export type AddRebalancerEventFilter = TypedEventFilter<AddRebalancerEvent>;
export type CancelOrderEvent = TypedEvent<[
    BigNumber,
    number,
    [string, string, string]
], {
    orderId: BigNumber;
    orderType: number;
    orderData: [string, string, string];
}>;
export type CancelOrderEventFilter = TypedEventFilter<CancelOrderEvent>;
export type FillOrderEvent = TypedEvent<[
    BigNumber,
    number,
    [string, string, string]
], {
    orderId: BigNumber;
    orderType: number;
    orderData: [string, string, string];
}>;
export type FillOrderEventFilter = TypedEventFilter<FillOrderEvent>;
export type NewLiquidityOrderEvent = TypedEvent<[
    string,
    BigNumber,
    number,
    BigNumber,
    boolean
], {
    account: string;
    orderId: BigNumber;
    assetId: number;
    rawAmount: BigNumber;
    isAdding: boolean;
}>;
export type NewLiquidityOrderEventFilter = TypedEventFilter<NewLiquidityOrderEvent>;
export type NewPositionOrderEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number,
    number
], {
    subAccountId: string;
    orderId: BigNumber;
    collateral: BigNumber;
    size: BigNumber;
    price: BigNumber;
    profitTokenId: number;
    flags: number;
    deadline: number;
}>;
export type NewPositionOrderEventFilter = TypedEventFilter<NewPositionOrderEvent>;
export type NewPositionOrderExtraEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
    PositionOrderExtraStructOutput
], {
    subAccountId: string;
    orderId: BigNumber;
    collateral: BigNumber;
    size: BigNumber;
    price: BigNumber;
    profitTokenId: number;
    flags: number;
    deadline: number;
    extra: PositionOrderExtraStructOutput;
}>;
export type NewPositionOrderExtraEventFilter = TypedEventFilter<NewPositionOrderExtraEvent>;
export type NewRebalanceOrderEvent = TypedEvent<[
    string,
    BigNumber,
    number,
    number,
    BigNumber,
    BigNumber,
    string
], {
    rebalancer: string;
    orderId: BigNumber;
    tokenId0: number;
    tokenId1: number;
    rawAmount0: BigNumber;
    maxRawAmount1: BigNumber;
    userData: string;
}>;
export type NewRebalanceOrderEventFilter = TypedEventFilter<NewRebalanceOrderEvent>;
export type NewWithdrawalOrderEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    number,
    boolean
], {
    subAccountId: string;
    orderId: BigNumber;
    rawAmount: BigNumber;
    profitTokenId: number;
    isProfit: boolean;
}>;
export type NewWithdrawalOrderEventFilter = TypedEventFilter<NewWithdrawalOrderEvent>;
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export type PauseLiquidityOrderEvent = TypedEvent<[
    boolean
], {
    isPaused: boolean;
}>;
export type PauseLiquidityOrderEventFilter = TypedEventFilter<PauseLiquidityOrderEvent>;
export type PausePositionOrderEvent = TypedEvent<[
    boolean
], {
    isPaused: boolean;
}>;
export type PausePositionOrderEventFilter = TypedEventFilter<PausePositionOrderEvent>;
export type PrepareToTransferOwnershipEvent = TypedEvent<[
    string
], {
    pendingOwner: string;
}>;
export type PrepareToTransferOwnershipEventFilter = TypedEventFilter<PrepareToTransferOwnershipEvent>;
export type RemoveBrokerEvent = TypedEvent<[string], {
    broker: string;
}>;
export type RemoveBrokerEventFilter = TypedEventFilter<RemoveBrokerEvent>;
export type RemoveRebalancerEvent = TypedEvent<[
    string
], {
    rebalancer: string;
}>;
export type RemoveRebalancerEventFilter = TypedEventFilter<RemoveRebalancerEvent>;
export type SetAggregatorEvent = TypedEvent<[
    string,
    boolean
], {
    aggregatorAddress: string;
    isEnable: boolean;
}>;
export type SetAggregatorEventFilter = TypedEventFilter<SetAggregatorEvent>;
export type SetLiquidityLockPeriodEvent = TypedEvent<[
    number,
    number
], {
    oldLockPeriod: number;
    newLockPeriod: number;
}>;
export type SetLiquidityLockPeriodEventFilter = TypedEventFilter<SetLiquidityLockPeriodEvent>;
export type SetMaintainerEvent = TypedEvent<[
    string
], {
    newMaintainer: string;
}>;
export type SetMaintainerEventFilter = TypedEventFilter<SetMaintainerEvent>;
export type SetOrderTimeoutEvent = TypedEvent<[
    number,
    number
], {
    marketOrderTimeout: number;
    maxLimitOrderTimeout: number;
}>;
export type SetOrderTimeoutEventFilter = TypedEventFilter<SetOrderTimeoutEvent>;
export type SetReferralManagerEvent = TypedEvent<[
    string
], {
    newReferralManager: string;
}>;
export type SetReferralManagerEventFilter = TypedEventFilter<SetReferralManagerEvent>;
export interface OrderBook extends BaseContract {
    contractName: "OrderBook";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OrderBookInterface;
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
        addBroker(newBroker: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addRebalancer(newRebalancer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        brokers(broker: string, overrides?: CallOverrides): Promise<[boolean]>;
        cancelOrder(orderId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimBrokerGasRebate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        depositCollateral(subAccountId: BytesLike, collateralAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fillLiquidityOrder(orderId: BigNumberish, assetPrice: BigNumberish, blpPrice: BigNumberish, currentAssetValue: BigNumberish, targetAssetValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fillPositionOrder(orderId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fillRebalanceOrder(orderId: BigNumberish, price0: BigNumberish, price1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fillWithdrawalOrder(orderId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getOrder(orderId: BigNumberish, overrides?: CallOverrides): Promise<[[string, string, string], boolean]>;
        getOrderCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getOrders(begin: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<[
            [string, string, string][],
            BigNumber
        ] & {
            orderArray: [string, string, string][];
            totalCount: BigNumber;
        }>;
        initialize(pool: string, blp: string, weth: string, nativeUnwrapper: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isLiquidityOrderPaused(overrides?: CallOverrides): Promise<[boolean]>;
        isPositionOrderPaused(overrides?: CallOverrides): Promise<[boolean]>;
        liquidate(subAccountId: BytesLike, profitAssetId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        liquidityLockPeriod(overrides?: CallOverrides): Promise<[number]>;
        maintainer(overrides?: CallOverrides): Promise<[string]>;
        marketOrderTimeout(overrides?: CallOverrides): Promise<[number]>;
        maxLimitOrderTimeout(overrides?: CallOverrides): Promise<[number]>;
        nextOrderId(overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pause(isPositionOrderPaused_: boolean, isLiquidityOrderPaused_: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        placeLiquidityOrder(assetId: BigNumberish, rawAmount: BigNumberish, isAdding: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        placePositionOrder2(subAccountId: BytesLike, collateralAmount: BigNumberish, size: BigNumberish, price: BigNumberish, profitTokenId: BigNumberish, flags: BigNumberish, deadline: BigNumberish, referralCode: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        placePositionOrder3(subAccountId: BytesLike, collateralAmount: BigNumberish, size: BigNumberish, price: BigNumberish, profitTokenId: BigNumberish, flags: BigNumberish, deadline: BigNumberish, referralCode: BytesLike, extra: PositionOrderExtraStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        placeRebalanceOrder(tokenId0: BigNumberish, tokenId1: BigNumberish, rawAmount0: BigNumberish, maxRawAmount1: BigNumberish, userData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        placeWithdrawalOrder(subAccountId: BytesLike, rawAmount: BigNumberish, profitTokenId: BigNumberish, isProfit: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        positionOrderExtras(orderId: BigNumberish, overrides?: CallOverrides): Promise<[PositionOrderExtraStructOutput]>;
        rebalancers(rebalancer: string, overrides?: CallOverrides): Promise<[boolean]>;
        redeemBitoroToken(tokenId: BigNumberish, bitoroTokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        referralManager(overrides?: CallOverrides): Promise<[string]>;
        removeBroker(broker: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeRebalancer(rebalancer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceBroker(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceRebalancer(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setAggregator(aggregatorAddress: string, isEnable: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setLiquidityLockPeriod(newLiquidityLockPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaintainer(newMaintainer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOrderTimeout(marketOrderTimeout_: BigNumberish, maxLimitOrderTimeout_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setReferralManager(newReferralManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        takeOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateFundingState(stableUtilization: BigNumberish, unstableTokenIds: BigNumberish[], unstableUtilizations: BigNumberish[], unstablePrices: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawAllCollateral(subAccountId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addBroker(newBroker: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addRebalancer(newRebalancer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    brokers(broker: string, overrides?: CallOverrides): Promise<boolean>;
    cancelOrder(orderId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimBrokerGasRebate(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    depositCollateral(subAccountId: BytesLike, collateralAmount: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fillLiquidityOrder(orderId: BigNumberish, assetPrice: BigNumberish, blpPrice: BigNumberish, currentAssetValue: BigNumberish, targetAssetValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fillPositionOrder(orderId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fillRebalanceOrder(orderId: BigNumberish, price0: BigNumberish, price1: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fillWithdrawalOrder(orderId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getOrder(orderId: BigNumberish, overrides?: CallOverrides): Promise<[[string, string, string], boolean]>;
    getOrderCount(overrides?: CallOverrides): Promise<BigNumber>;
    getOrders(begin: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<[
        [string, string, string][],
        BigNumber
    ] & {
        orderArray: [string, string, string][];
        totalCount: BigNumber;
    }>;
    initialize(pool: string, blp: string, weth: string, nativeUnwrapper: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isLiquidityOrderPaused(overrides?: CallOverrides): Promise<boolean>;
    isPositionOrderPaused(overrides?: CallOverrides): Promise<boolean>;
    liquidate(subAccountId: BytesLike, profitAssetId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    liquidityLockPeriod(overrides?: CallOverrides): Promise<number>;
    maintainer(overrides?: CallOverrides): Promise<string>;
    marketOrderTimeout(overrides?: CallOverrides): Promise<number>;
    maxLimitOrderTimeout(overrides?: CallOverrides): Promise<number>;
    nextOrderId(overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    pause(isPositionOrderPaused_: boolean, isLiquidityOrderPaused_: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    placeLiquidityOrder(assetId: BigNumberish, rawAmount: BigNumberish, isAdding: boolean, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    placePositionOrder2(subAccountId: BytesLike, collateralAmount: BigNumberish, size: BigNumberish, price: BigNumberish, profitTokenId: BigNumberish, flags: BigNumberish, deadline: BigNumberish, referralCode: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    placePositionOrder3(subAccountId: BytesLike, collateralAmount: BigNumberish, size: BigNumberish, price: BigNumberish, profitTokenId: BigNumberish, flags: BigNumberish, deadline: BigNumberish, referralCode: BytesLike, extra: PositionOrderExtraStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    placeRebalanceOrder(tokenId0: BigNumberish, tokenId1: BigNumberish, rawAmount0: BigNumberish, maxRawAmount1: BigNumberish, userData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    placeWithdrawalOrder(subAccountId: BytesLike, rawAmount: BigNumberish, profitTokenId: BigNumberish, isProfit: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    positionOrderExtras(orderId: BigNumberish, overrides?: CallOverrides): Promise<PositionOrderExtraStructOutput>;
    rebalancers(rebalancer: string, overrides?: CallOverrides): Promise<boolean>;
    redeemBitoroToken(tokenId: BigNumberish, bitoroTokenAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    referralManager(overrides?: CallOverrides): Promise<string>;
    removeBroker(broker: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeRebalancer(rebalancer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceBroker(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceRebalancer(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setAggregator(aggregatorAddress: string, isEnable: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setLiquidityLockPeriod(newLiquidityLockPeriod: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaintainer(newMaintainer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOrderTimeout(marketOrderTimeout_: BigNumberish, maxLimitOrderTimeout_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setReferralManager(newReferralManager: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    takeOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateFundingState(stableUtilization: BigNumberish, unstableTokenIds: BigNumberish[], unstableUtilizations: BigNumberish[], unstablePrices: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawAllCollateral(subAccountId: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addBroker(newBroker: string, overrides?: CallOverrides): Promise<void>;
        addRebalancer(newRebalancer: string, overrides?: CallOverrides): Promise<void>;
        brokers(broker: string, overrides?: CallOverrides): Promise<boolean>;
        cancelOrder(orderId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        claimBrokerGasRebate(overrides?: CallOverrides): Promise<BigNumber>;
        depositCollateral(subAccountId: BytesLike, collateralAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        fillLiquidityOrder(orderId: BigNumberish, assetPrice: BigNumberish, blpPrice: BigNumberish, currentAssetValue: BigNumberish, targetAssetValue: BigNumberish, overrides?: CallOverrides): Promise<void>;
        fillPositionOrder(orderId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: CallOverrides): Promise<void>;
        fillRebalanceOrder(orderId: BigNumberish, price0: BigNumberish, price1: BigNumberish, overrides?: CallOverrides): Promise<void>;
        fillWithdrawalOrder(orderId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getOrder(orderId: BigNumberish, overrides?: CallOverrides): Promise<[[string, string, string], boolean]>;
        getOrderCount(overrides?: CallOverrides): Promise<BigNumber>;
        getOrders(begin: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<[
            [string, string, string][],
            BigNumber
        ] & {
            orderArray: [string, string, string][];
            totalCount: BigNumber;
        }>;
        initialize(pool: string, blp: string, weth: string, nativeUnwrapper: string, overrides?: CallOverrides): Promise<void>;
        isLiquidityOrderPaused(overrides?: CallOverrides): Promise<boolean>;
        isPositionOrderPaused(overrides?: CallOverrides): Promise<boolean>;
        liquidate(subAccountId: BytesLike, profitAssetId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: CallOverrides): Promise<void>;
        liquidityLockPeriod(overrides?: CallOverrides): Promise<number>;
        maintainer(overrides?: CallOverrides): Promise<string>;
        marketOrderTimeout(overrides?: CallOverrides): Promise<number>;
        maxLimitOrderTimeout(overrides?: CallOverrides): Promise<number>;
        nextOrderId(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        pause(isPositionOrderPaused_: boolean, isLiquidityOrderPaused_: boolean, overrides?: CallOverrides): Promise<void>;
        placeLiquidityOrder(assetId: BigNumberish, rawAmount: BigNumberish, isAdding: boolean, overrides?: CallOverrides): Promise<void>;
        placePositionOrder2(subAccountId: BytesLike, collateralAmount: BigNumberish, size: BigNumberish, price: BigNumberish, profitTokenId: BigNumberish, flags: BigNumberish, deadline: BigNumberish, referralCode: BytesLike, overrides?: CallOverrides): Promise<void>;
        placePositionOrder3(subAccountId: BytesLike, collateralAmount: BigNumberish, size: BigNumberish, price: BigNumberish, profitTokenId: BigNumberish, flags: BigNumberish, deadline: BigNumberish, referralCode: BytesLike, extra: PositionOrderExtraStruct, overrides?: CallOverrides): Promise<void>;
        placeRebalanceOrder(tokenId0: BigNumberish, tokenId1: BigNumberish, rawAmount0: BigNumberish, maxRawAmount1: BigNumberish, userData: BytesLike, overrides?: CallOverrides): Promise<void>;
        placeWithdrawalOrder(subAccountId: BytesLike, rawAmount: BigNumberish, profitTokenId: BigNumberish, isProfit: boolean, overrides?: CallOverrides): Promise<void>;
        positionOrderExtras(orderId: BigNumberish, overrides?: CallOverrides): Promise<PositionOrderExtraStructOutput>;
        rebalancers(rebalancer: string, overrides?: CallOverrides): Promise<boolean>;
        redeemBitoroToken(tokenId: BigNumberish, bitoroTokenAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        referralManager(overrides?: CallOverrides): Promise<string>;
        removeBroker(broker: string, overrides?: CallOverrides): Promise<void>;
        removeRebalancer(rebalancer: string, overrides?: CallOverrides): Promise<void>;
        renounceBroker(overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        renounceRebalancer(overrides?: CallOverrides): Promise<void>;
        setAggregator(aggregatorAddress: string, isEnable: boolean, overrides?: CallOverrides): Promise<void>;
        setLiquidityLockPeriod(newLiquidityLockPeriod: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaintainer(newMaintainer: string, overrides?: CallOverrides): Promise<void>;
        setOrderTimeout(marketOrderTimeout_: BigNumberish, maxLimitOrderTimeout_: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setReferralManager(newReferralManager: string, overrides?: CallOverrides): Promise<void>;
        takeOwnership(overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        updateFundingState(stableUtilization: BigNumberish, unstableTokenIds: BigNumberish[], unstableUtilizations: BigNumberish[], unstablePrices: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        withdrawAllCollateral(subAccountId: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddBroker(address)"(newBroker?: string | null): AddBrokerEventFilter;
        AddBroker(newBroker?: string | null): AddBrokerEventFilter;
        "AddRebalancer(address)"(newRebalancer?: string | null): AddRebalancerEventFilter;
        AddRebalancer(newRebalancer?: string | null): AddRebalancerEventFilter;
        "CancelOrder(uint64,uint8,bytes32[3])"(orderId?: null, orderType?: null, orderData?: null): CancelOrderEventFilter;
        CancelOrder(orderId?: null, orderType?: null, orderData?: null): CancelOrderEventFilter;
        "FillOrder(uint64,uint8,bytes32[3])"(orderId?: null, orderType?: null, orderData?: null): FillOrderEventFilter;
        FillOrder(orderId?: null, orderType?: null, orderData?: null): FillOrderEventFilter;
        "NewLiquidityOrder(address,uint64,uint8,uint96,bool)"(account?: string | null, orderId?: BigNumberish | null, assetId?: null, rawAmount?: null, isAdding?: null): NewLiquidityOrderEventFilter;
        NewLiquidityOrder(account?: string | null, orderId?: BigNumberish | null, assetId?: null, rawAmount?: null, isAdding?: null): NewLiquidityOrderEventFilter;
        "NewPositionOrder(bytes32,uint64,uint96,uint96,uint96,uint8,uint8,uint32)"(subAccountId?: BytesLike | null, orderId?: BigNumberish | null, collateral?: null, size?: null, price?: null, profitTokenId?: null, flags?: null, deadline?: null): NewPositionOrderEventFilter;
        NewPositionOrder(subAccountId?: BytesLike | null, orderId?: BigNumberish | null, collateral?: null, size?: null, price?: null, profitTokenId?: null, flags?: null, deadline?: null): NewPositionOrderEventFilter;
        "NewPositionOrderExtra(bytes32,uint64,uint96,uint96,uint96,uint8,uint8,uint32,tuple)"(subAccountId?: BytesLike | null, orderId?: BigNumberish | null, collateral?: null, size?: null, price?: null, profitTokenId?: null, flags?: null, deadline?: null, extra?: null): NewPositionOrderExtraEventFilter;
        NewPositionOrderExtra(subAccountId?: BytesLike | null, orderId?: BigNumberish | null, collateral?: null, size?: null, price?: null, profitTokenId?: null, flags?: null, deadline?: null, extra?: null): NewPositionOrderExtraEventFilter;
        "NewRebalanceOrder(address,uint64,uint8,uint8,uint96,uint96,bytes32)"(rebalancer?: string | null, orderId?: BigNumberish | null, tokenId0?: null, tokenId1?: null, rawAmount0?: null, maxRawAmount1?: null, userData?: null): NewRebalanceOrderEventFilter;
        NewRebalanceOrder(rebalancer?: string | null, orderId?: BigNumberish | null, tokenId0?: null, tokenId1?: null, rawAmount0?: null, maxRawAmount1?: null, userData?: null): NewRebalanceOrderEventFilter;
        "NewWithdrawalOrder(bytes32,uint64,uint96,uint8,bool)"(subAccountId?: BytesLike | null, orderId?: BigNumberish | null, rawAmount?: null, profitTokenId?: null, isProfit?: null): NewWithdrawalOrderEventFilter;
        NewWithdrawalOrder(subAccountId?: BytesLike | null, orderId?: BigNumberish | null, rawAmount?: null, profitTokenId?: null, isProfit?: null): NewWithdrawalOrderEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "PauseLiquidityOrder(bool)"(isPaused?: null): PauseLiquidityOrderEventFilter;
        PauseLiquidityOrder(isPaused?: null): PauseLiquidityOrderEventFilter;
        "PausePositionOrder(bool)"(isPaused?: null): PausePositionOrderEventFilter;
        PausePositionOrder(isPaused?: null): PausePositionOrderEventFilter;
        "PrepareToTransferOwnership(address)"(pendingOwner?: string | null): PrepareToTransferOwnershipEventFilter;
        PrepareToTransferOwnership(pendingOwner?: string | null): PrepareToTransferOwnershipEventFilter;
        "RemoveBroker(address)"(broker?: string | null): RemoveBrokerEventFilter;
        RemoveBroker(broker?: string | null): RemoveBrokerEventFilter;
        "RemoveRebalancer(address)"(rebalancer?: string | null): RemoveRebalancerEventFilter;
        RemoveRebalancer(rebalancer?: string | null): RemoveRebalancerEventFilter;
        "SetAggregator(address,bool)"(aggregatorAddress?: string | null, isEnable?: null): SetAggregatorEventFilter;
        SetAggregator(aggregatorAddress?: string | null, isEnable?: null): SetAggregatorEventFilter;
        "SetLiquidityLockPeriod(uint32,uint32)"(oldLockPeriod?: null, newLockPeriod?: null): SetLiquidityLockPeriodEventFilter;
        SetLiquidityLockPeriod(oldLockPeriod?: null, newLockPeriod?: null): SetLiquidityLockPeriodEventFilter;
        "SetMaintainer(address)"(newMaintainer?: string | null): SetMaintainerEventFilter;
        SetMaintainer(newMaintainer?: string | null): SetMaintainerEventFilter;
        "SetOrderTimeout(uint32,uint32)"(marketOrderTimeout?: null, maxLimitOrderTimeout?: null): SetOrderTimeoutEventFilter;
        SetOrderTimeout(marketOrderTimeout?: null, maxLimitOrderTimeout?: null): SetOrderTimeoutEventFilter;
        "SetReferralManager(address)"(newReferralManager?: null): SetReferralManagerEventFilter;
        SetReferralManager(newReferralManager?: null): SetReferralManagerEventFilter;
    };
    estimateGas: {
        addBroker(newBroker: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addRebalancer(newRebalancer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        brokers(broker: string, overrides?: CallOverrides): Promise<BigNumber>;
        cancelOrder(orderId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimBrokerGasRebate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        depositCollateral(subAccountId: BytesLike, collateralAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fillLiquidityOrder(orderId: BigNumberish, assetPrice: BigNumberish, blpPrice: BigNumberish, currentAssetValue: BigNumberish, targetAssetValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fillPositionOrder(orderId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fillRebalanceOrder(orderId: BigNumberish, price0: BigNumberish, price1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fillWithdrawalOrder(orderId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getOrder(orderId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getOrderCount(overrides?: CallOverrides): Promise<BigNumber>;
        getOrders(begin: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(pool: string, blp: string, weth: string, nativeUnwrapper: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isLiquidityOrderPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isPositionOrderPaused(overrides?: CallOverrides): Promise<BigNumber>;
        liquidate(subAccountId: BytesLike, profitAssetId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        liquidityLockPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        maintainer(overrides?: CallOverrides): Promise<BigNumber>;
        marketOrderTimeout(overrides?: CallOverrides): Promise<BigNumber>;
        maxLimitOrderTimeout(overrides?: CallOverrides): Promise<BigNumber>;
        nextOrderId(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pause(isPositionOrderPaused_: boolean, isLiquidityOrderPaused_: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        placeLiquidityOrder(assetId: BigNumberish, rawAmount: BigNumberish, isAdding: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        placePositionOrder2(subAccountId: BytesLike, collateralAmount: BigNumberish, size: BigNumberish, price: BigNumberish, profitTokenId: BigNumberish, flags: BigNumberish, deadline: BigNumberish, referralCode: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        placePositionOrder3(subAccountId: BytesLike, collateralAmount: BigNumberish, size: BigNumberish, price: BigNumberish, profitTokenId: BigNumberish, flags: BigNumberish, deadline: BigNumberish, referralCode: BytesLike, extra: PositionOrderExtraStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        placeRebalanceOrder(tokenId0: BigNumberish, tokenId1: BigNumberish, rawAmount0: BigNumberish, maxRawAmount1: BigNumberish, userData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        placeWithdrawalOrder(subAccountId: BytesLike, rawAmount: BigNumberish, profitTokenId: BigNumberish, isProfit: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        positionOrderExtras(orderId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        rebalancers(rebalancer: string, overrides?: CallOverrides): Promise<BigNumber>;
        redeemBitoroToken(tokenId: BigNumberish, bitoroTokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        referralManager(overrides?: CallOverrides): Promise<BigNumber>;
        removeBroker(broker: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeRebalancer(rebalancer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceBroker(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceRebalancer(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setAggregator(aggregatorAddress: string, isEnable: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setLiquidityLockPeriod(newLiquidityLockPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaintainer(newMaintainer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOrderTimeout(marketOrderTimeout_: BigNumberish, maxLimitOrderTimeout_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setReferralManager(newReferralManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        takeOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateFundingState(stableUtilization: BigNumberish, unstableTokenIds: BigNumberish[], unstableUtilizations: BigNumberish[], unstablePrices: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawAllCollateral(subAccountId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addBroker(newBroker: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addRebalancer(newRebalancer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        brokers(broker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelOrder(orderId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimBrokerGasRebate(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        depositCollateral(subAccountId: BytesLike, collateralAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fillLiquidityOrder(orderId: BigNumberish, assetPrice: BigNumberish, blpPrice: BigNumberish, currentAssetValue: BigNumberish, targetAssetValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fillPositionOrder(orderId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fillRebalanceOrder(orderId: BigNumberish, price0: BigNumberish, price1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fillWithdrawalOrder(orderId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getOrder(orderId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOrderCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOrders(begin: BigNumberish, end: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(pool: string, blp: string, weth: string, nativeUnwrapper: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isLiquidityOrderPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPositionOrderPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidate(subAccountId: BytesLike, profitAssetId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        liquidityLockPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maintainer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        marketOrderTimeout(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxLimitOrderTimeout(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextOrderId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(isPositionOrderPaused_: boolean, isLiquidityOrderPaused_: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        placeLiquidityOrder(assetId: BigNumberish, rawAmount: BigNumberish, isAdding: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        placePositionOrder2(subAccountId: BytesLike, collateralAmount: BigNumberish, size: BigNumberish, price: BigNumberish, profitTokenId: BigNumberish, flags: BigNumberish, deadline: BigNumberish, referralCode: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        placePositionOrder3(subAccountId: BytesLike, collateralAmount: BigNumberish, size: BigNumberish, price: BigNumberish, profitTokenId: BigNumberish, flags: BigNumberish, deadline: BigNumberish, referralCode: BytesLike, extra: PositionOrderExtraStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        placeRebalanceOrder(tokenId0: BigNumberish, tokenId1: BigNumberish, rawAmount0: BigNumberish, maxRawAmount1: BigNumberish, userData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        placeWithdrawalOrder(subAccountId: BytesLike, rawAmount: BigNumberish, profitTokenId: BigNumberish, isProfit: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        positionOrderExtras(orderId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rebalancers(rebalancer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeemBitoroToken(tokenId: BigNumberish, bitoroTokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        referralManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeBroker(broker: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeRebalancer(rebalancer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceBroker(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceRebalancer(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setAggregator(aggregatorAddress: string, isEnable: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setLiquidityLockPeriod(newLiquidityLockPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaintainer(newMaintainer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOrderTimeout(marketOrderTimeout_: BigNumberish, maxLimitOrderTimeout_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setReferralManager(newReferralManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        takeOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateFundingState(stableUtilization: BigNumberish, unstableTokenIds: BigNumberish[], unstableUtilizations: BigNumberish[], unstablePrices: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAllCollateral(subAccountId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
