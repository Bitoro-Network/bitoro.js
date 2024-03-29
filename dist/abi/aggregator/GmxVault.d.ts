import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
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
export interface IGmxVaultInterface extends utils.Interface {
    functions: {
        "bufferAmounts(address)": FunctionFragment;
        "cumulativeFundingRates(address)": FunctionFragment;
        "fundingRateFactor()": FunctionFragment;
        "getDelta(address,uint256,uint256,bool,uint256)": FunctionFragment;
        "getEntryFundingRate(address,address,bool)": FunctionFragment;
        "getFundingFee(address,uint256,uint256)": FunctionFragment;
        "getMaxPrice(address)": FunctionFragment;
        "getMinPrice(address)": FunctionFragment;
        "getNextAveragePrice(address,uint256,uint256,bool,uint256,uint256,uint256)": FunctionFragment;
        "getNextFundingRate(address)": FunctionFragment;
        "getPosition(address,address,address,bool)": FunctionFragment;
        "getPositionDelta(address,address,address,bool)": FunctionFragment;
        "getRedemptionAmount(address,uint256)": FunctionFragment;
        "globalShortSizes(address)": FunctionFragment;
        "gov()": FunctionFragment;
        "guaranteedUsd(address)": FunctionFragment;
        "liquidatePosition(address,address,address,bool,address)": FunctionFragment;
        "liquidationFeeUsd()": FunctionFragment;
        "marginFeeBasisPoints()": FunctionFragment;
        "maxGlobalShortSizes(address)": FunctionFragment;
        "maxUsdgAmounts(address)": FunctionFragment;
        "minProfitBasisPoints(address)": FunctionFragment;
        "minProfitTime()": FunctionFragment;
        "poolAmounts(address)": FunctionFragment;
        "positions(bytes32)": FunctionFragment;
        "priceFeed()": FunctionFragment;
        "reservedAmounts(address)": FunctionFragment;
        "setLiquidator(address,bool)": FunctionFragment;
        "stableFundingRateFactor()": FunctionFragment;
        "stableSwapFeeBasisPoints()": FunctionFragment;
        "stableTaxBasisPoints()": FunctionFragment;
        "stableTokens(address)": FunctionFragment;
        "swap(address,address,address)": FunctionFragment;
        "swapFeeBasisPoints()": FunctionFragment;
        "taxBasisPoints()": FunctionFragment;
        "tokenWeights(address)": FunctionFragment;
        "totalTokenWeights()": FunctionFragment;
        "usdgAmounts(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "bufferAmounts" | "cumulativeFundingRates" | "fundingRateFactor" | "getDelta" | "getEntryFundingRate" | "getFundingFee" | "getMaxPrice" | "getMinPrice" | "getNextAveragePrice" | "getNextFundingRate" | "getPosition" | "getPositionDelta" | "getRedemptionAmount" | "globalShortSizes" | "gov" | "guaranteedUsd" | "liquidatePosition" | "liquidationFeeUsd" | "marginFeeBasisPoints" | "maxGlobalShortSizes" | "maxUsdgAmounts" | "minProfitBasisPoints" | "minProfitTime" | "poolAmounts" | "positions" | "priceFeed" | "reservedAmounts" | "setLiquidator" | "stableFundingRateFactor" | "stableSwapFeeBasisPoints" | "stableTaxBasisPoints" | "stableTokens" | "swap" | "swapFeeBasisPoints" | "taxBasisPoints" | "tokenWeights" | "totalTokenWeights" | "usdgAmounts"): FunctionFragment;
    encodeFunctionData(functionFragment: "bufferAmounts", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "cumulativeFundingRates", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "fundingRateFactor", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDelta", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getEntryFundingRate", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "getFundingFee", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getMaxPrice", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getMinPrice", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getNextAveragePrice", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getNextFundingRate", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getPosition", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "getPositionDelta", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "getRedemptionAmount", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "globalShortSizes", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "gov", values?: undefined): string;
    encodeFunctionData(functionFragment: "guaranteedUsd", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "liquidatePosition", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "liquidationFeeUsd", values?: undefined): string;
    encodeFunctionData(functionFragment: "marginFeeBasisPoints", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxGlobalShortSizes", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "maxUsdgAmounts", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "minProfitBasisPoints", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "minProfitTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolAmounts", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "positions", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "priceFeed", values?: undefined): string;
    encodeFunctionData(functionFragment: "reservedAmounts", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setLiquidator", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "stableFundingRateFactor", values?: undefined): string;
    encodeFunctionData(functionFragment: "stableSwapFeeBasisPoints", values?: undefined): string;
    encodeFunctionData(functionFragment: "stableTaxBasisPoints", values?: undefined): string;
    encodeFunctionData(functionFragment: "stableTokens", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "swap", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "swapFeeBasisPoints", values?: undefined): string;
    encodeFunctionData(functionFragment: "taxBasisPoints", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenWeights", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "totalTokenWeights", values?: undefined): string;
    encodeFunctionData(functionFragment: "usdgAmounts", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "bufferAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cumulativeFundingRates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundingRateFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDelta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEntryFundingRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFundingFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaxPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNextAveragePrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNextFundingRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionDelta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRedemptionAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "globalShortSizes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "guaranteedUsd", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidatePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationFeeUsd", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "marginFeeBasisPoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxGlobalShortSizes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxUsdgAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minProfitBasisPoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minProfitTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reservedAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLiquidator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stableFundingRateFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stableSwapFeeBasisPoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stableTaxBasisPoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stableTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapFeeBasisPoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "taxBasisPoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenWeights", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalTokenWeights", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "usdgAmounts", data: BytesLike): Result;
    events: {
        "BuyUSDG(address,address,uint256,uint256,uint256)": EventFragment;
        "ClosePosition(bytes32,uint256,uint256,uint256,uint256,uint256,int256)": EventFragment;
        "CollectMarginFees(address,uint256,uint256)": EventFragment;
        "CollectSwapFees(address,uint256,uint256)": EventFragment;
        "DecreaseGuaranteedUsd(address,uint256)": EventFragment;
        "DecreasePoolAmount(address,uint256)": EventFragment;
        "DecreasePosition(bytes32,address,address,address,uint256,uint256,bool,uint256,uint256)": EventFragment;
        "DecreaseReservedAmount(address,uint256)": EventFragment;
        "DecreaseUsdgAmount(address,uint256)": EventFragment;
        "DirectPoolDeposit(address,uint256)": EventFragment;
        "IncreaseGuaranteedUsd(address,uint256)": EventFragment;
        "IncreasePoolAmount(address,uint256)": EventFragment;
        "IncreasePosition(bytes32,address,address,address,uint256,uint256,bool,uint256,uint256)": EventFragment;
        "IncreaseReservedAmount(address,uint256)": EventFragment;
        "IncreaseUsdgAmount(address,uint256)": EventFragment;
        "LiquidatePosition(bytes32,address,address,address,bool,uint256,uint256,uint256,int256,uint256)": EventFragment;
        "SellUSDG(address,address,uint256,uint256,uint256)": EventFragment;
        "Swap(address,address,address,uint256,uint256,uint256,uint256)": EventFragment;
        "UpdateFundingRate(address,uint256)": EventFragment;
        "UpdatePnl(bytes32,bool,uint256)": EventFragment;
        "UpdatePosition(bytes32,uint256,uint256,uint256,uint256,uint256,int256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BuyUSDG"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClosePosition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CollectMarginFees"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CollectSwapFees"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DecreaseGuaranteedUsd"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DecreasePoolAmount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DecreasePosition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DecreaseReservedAmount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DecreaseUsdgAmount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DirectPoolDeposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IncreaseGuaranteedUsd"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IncreasePoolAmount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IncreasePosition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IncreaseReservedAmount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IncreaseUsdgAmount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidatePosition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SellUSDG"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateFundingRate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdatePnl"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdatePosition"): EventFragment;
}
export interface BuyUSDGEventObject {
    account: string;
    token: string;
    tokenAmount: BigNumber;
    usdgAmount: BigNumber;
    feeBasisPoints: BigNumber;
}
export type BuyUSDGEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], BuyUSDGEventObject>;
export type BuyUSDGEventFilter = TypedEventFilter<BuyUSDGEvent>;
export interface ClosePositionEventObject {
    key: string;
    size: BigNumber;
    collateral: BigNumber;
    averagePrice: BigNumber;
    entryFundingRate: BigNumber;
    reserveAmount: BigNumber;
    realisedPnl: BigNumber;
}
export type ClosePositionEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], ClosePositionEventObject>;
export type ClosePositionEventFilter = TypedEventFilter<ClosePositionEvent>;
export interface CollectMarginFeesEventObject {
    token: string;
    feeUsd: BigNumber;
    feeTokens: BigNumber;
}
export type CollectMarginFeesEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], CollectMarginFeesEventObject>;
export type CollectMarginFeesEventFilter = TypedEventFilter<CollectMarginFeesEvent>;
export interface CollectSwapFeesEventObject {
    token: string;
    feeUsd: BigNumber;
    feeTokens: BigNumber;
}
export type CollectSwapFeesEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], CollectSwapFeesEventObject>;
export type CollectSwapFeesEventFilter = TypedEventFilter<CollectSwapFeesEvent>;
export interface DecreaseGuaranteedUsdEventObject {
    token: string;
    amount: BigNumber;
}
export type DecreaseGuaranteedUsdEvent = TypedEvent<[
    string,
    BigNumber
], DecreaseGuaranteedUsdEventObject>;
export type DecreaseGuaranteedUsdEventFilter = TypedEventFilter<DecreaseGuaranteedUsdEvent>;
export interface DecreasePoolAmountEventObject {
    token: string;
    amount: BigNumber;
}
export type DecreasePoolAmountEvent = TypedEvent<[
    string,
    BigNumber
], DecreasePoolAmountEventObject>;
export type DecreasePoolAmountEventFilter = TypedEventFilter<DecreasePoolAmountEvent>;
export interface DecreasePositionEventObject {
    key: string;
    account: string;
    collateralToken: string;
    indexToken: string;
    collateralDelta: BigNumber;
    sizeDelta: BigNumber;
    isLong: boolean;
    price: BigNumber;
    fee: BigNumber;
}
export type DecreasePositionEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber
], DecreasePositionEventObject>;
export type DecreasePositionEventFilter = TypedEventFilter<DecreasePositionEvent>;
export interface DecreaseReservedAmountEventObject {
    token: string;
    amount: BigNumber;
}
export type DecreaseReservedAmountEvent = TypedEvent<[
    string,
    BigNumber
], DecreaseReservedAmountEventObject>;
export type DecreaseReservedAmountEventFilter = TypedEventFilter<DecreaseReservedAmountEvent>;
export interface DecreaseUsdgAmountEventObject {
    token: string;
    amount: BigNumber;
}
export type DecreaseUsdgAmountEvent = TypedEvent<[
    string,
    BigNumber
], DecreaseUsdgAmountEventObject>;
export type DecreaseUsdgAmountEventFilter = TypedEventFilter<DecreaseUsdgAmountEvent>;
export interface DirectPoolDepositEventObject {
    token: string;
    amount: BigNumber;
}
export type DirectPoolDepositEvent = TypedEvent<[
    string,
    BigNumber
], DirectPoolDepositEventObject>;
export type DirectPoolDepositEventFilter = TypedEventFilter<DirectPoolDepositEvent>;
export interface IncreaseGuaranteedUsdEventObject {
    token: string;
    amount: BigNumber;
}
export type IncreaseGuaranteedUsdEvent = TypedEvent<[
    string,
    BigNumber
], IncreaseGuaranteedUsdEventObject>;
export type IncreaseGuaranteedUsdEventFilter = TypedEventFilter<IncreaseGuaranteedUsdEvent>;
export interface IncreasePoolAmountEventObject {
    token: string;
    amount: BigNumber;
}
export type IncreasePoolAmountEvent = TypedEvent<[
    string,
    BigNumber
], IncreasePoolAmountEventObject>;
export type IncreasePoolAmountEventFilter = TypedEventFilter<IncreasePoolAmountEvent>;
export interface IncreasePositionEventObject {
    key: string;
    account: string;
    collateralToken: string;
    indexToken: string;
    collateralDelta: BigNumber;
    sizeDelta: BigNumber;
    isLong: boolean;
    price: BigNumber;
    fee: BigNumber;
}
export type IncreasePositionEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber
], IncreasePositionEventObject>;
export type IncreasePositionEventFilter = TypedEventFilter<IncreasePositionEvent>;
export interface IncreaseReservedAmountEventObject {
    token: string;
    amount: BigNumber;
}
export type IncreaseReservedAmountEvent = TypedEvent<[
    string,
    BigNumber
], IncreaseReservedAmountEventObject>;
export type IncreaseReservedAmountEventFilter = TypedEventFilter<IncreaseReservedAmountEvent>;
export interface IncreaseUsdgAmountEventObject {
    token: string;
    amount: BigNumber;
}
export type IncreaseUsdgAmountEvent = TypedEvent<[
    string,
    BigNumber
], IncreaseUsdgAmountEventObject>;
export type IncreaseUsdgAmountEventFilter = TypedEventFilter<IncreaseUsdgAmountEvent>;
export interface LiquidatePositionEventObject {
    key: string;
    account: string;
    collateralToken: string;
    indexToken: string;
    isLong: boolean;
    size: BigNumber;
    collateral: BigNumber;
    reserveAmount: BigNumber;
    realisedPnl: BigNumber;
    markPrice: BigNumber;
}
export type LiquidatePositionEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], LiquidatePositionEventObject>;
export type LiquidatePositionEventFilter = TypedEventFilter<LiquidatePositionEvent>;
export interface SellUSDGEventObject {
    account: string;
    token: string;
    usdgAmount: BigNumber;
    tokenAmount: BigNumber;
    feeBasisPoints: BigNumber;
}
export type SellUSDGEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], SellUSDGEventObject>;
export type SellUSDGEventFilter = TypedEventFilter<SellUSDGEvent>;
export interface SwapEventObject {
    account: string;
    tokenIn: string;
    tokenOut: string;
    amountIn: BigNumber;
    amountOut: BigNumber;
    amountOutAfterFees: BigNumber;
    feeBasisPoints: BigNumber;
}
export type SwapEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], SwapEventObject>;
export type SwapEventFilter = TypedEventFilter<SwapEvent>;
export interface UpdateFundingRateEventObject {
    token: string;
    fundingRate: BigNumber;
}
export type UpdateFundingRateEvent = TypedEvent<[
    string,
    BigNumber
], UpdateFundingRateEventObject>;
export type UpdateFundingRateEventFilter = TypedEventFilter<UpdateFundingRateEvent>;
export interface UpdatePnlEventObject {
    key: string;
    hasProfit: boolean;
    delta: BigNumber;
}
export type UpdatePnlEvent = TypedEvent<[
    string,
    boolean,
    BigNumber
], UpdatePnlEventObject>;
export type UpdatePnlEventFilter = TypedEventFilter<UpdatePnlEvent>;
export interface UpdatePositionEventObject {
    key: string;
    size: BigNumber;
    collateral: BigNumber;
    averagePrice: BigNumber;
    entryFundingRate: BigNumber;
    reserveAmount: BigNumber;
    realisedPnl: BigNumber;
}
export type UpdatePositionEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], UpdatePositionEventObject>;
export type UpdatePositionEventFilter = TypedEventFilter<UpdatePositionEvent>;
export interface IGmxVault extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IGmxVaultInterface;
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
        bufferAmounts(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        cumulativeFundingRates(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        fundingRateFactor(overrides?: CallOverrides): Promise<[BigNumber]>;
        getDelta(_indexToken: PromiseOrValue<string>, _size: PromiseOrValue<BigNumberish>, _averagePrice: PromiseOrValue<BigNumberish>, _isLong: PromiseOrValue<boolean>, _lastIncreasedTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean, BigNumber]>;
        getEntryFundingRate(_collateralToken: PromiseOrValue<string>, _indexToken: PromiseOrValue<string>, _isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getFundingFee(_token: PromiseOrValue<string>, _size: PromiseOrValue<BigNumberish>, _entryFundingRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getMaxPrice(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getMinPrice(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getNextAveragePrice(_indexToken: PromiseOrValue<string>, _size: PromiseOrValue<BigNumberish>, _averagePrice: PromiseOrValue<BigNumberish>, _isLong: PromiseOrValue<boolean>, _nextPrice: PromiseOrValue<BigNumberish>, _sizeDelta: PromiseOrValue<BigNumberish>, _lastIncreasedTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getNextFundingRate(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPosition(account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, indexToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean,
            BigNumber
        ] & {
            size: BigNumber;
            collateral: BigNumber;
            averagePrice: BigNumber;
            entryFundingRate: BigNumber;
            reserveAmount: BigNumber;
            realisedPnl: BigNumber;
            hasRealisedPnl: boolean;
            lastIncreasedTime: BigNumber;
        }>;
        getPositionDelta(_account: PromiseOrValue<string>, _collateralToken: PromiseOrValue<string>, _indexToken: PromiseOrValue<string>, _isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[boolean, BigNumber]>;
        getRedemptionAmount(token: PromiseOrValue<string>, usdgAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        globalShortSizes(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        gov(overrides?: CallOverrides): Promise<[string]>;
        guaranteedUsd(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        liquidatePosition(_account: PromiseOrValue<string>, _collateralToken: PromiseOrValue<string>, _indexToken: PromiseOrValue<string>, _isLong: PromiseOrValue<boolean>, _feeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        liquidationFeeUsd(overrides?: CallOverrides): Promise<[BigNumber]>;
        marginFeeBasisPoints(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxGlobalShortSizes(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxUsdgAmounts(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        minProfitBasisPoints(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        minProfitTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        poolAmounts(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        positions(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[IGmxVault.PositionStructOutput]>;
        priceFeed(overrides?: CallOverrides): Promise<[string]>;
        reservedAmounts(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        setLiquidator(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stableFundingRateFactor(overrides?: CallOverrides): Promise<[BigNumber]>;
        stableSwapFeeBasisPoints(overrides?: CallOverrides): Promise<[BigNumber]>;
        stableTaxBasisPoints(overrides?: CallOverrides): Promise<[BigNumber]>;
        stableTokens(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        swap(_tokenIn: PromiseOrValue<string>, _tokenOut: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapFeeBasisPoints(overrides?: CallOverrides): Promise<[BigNumber]>;
        taxBasisPoints(overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenWeights(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalTokenWeights(overrides?: CallOverrides): Promise<[BigNumber]>;
        usdgAmounts(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    bufferAmounts(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    cumulativeFundingRates(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    fundingRateFactor(overrides?: CallOverrides): Promise<BigNumber>;
    getDelta(_indexToken: PromiseOrValue<string>, _size: PromiseOrValue<BigNumberish>, _averagePrice: PromiseOrValue<BigNumberish>, _isLong: PromiseOrValue<boolean>, _lastIncreasedTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean, BigNumber]>;
    getEntryFundingRate(_collateralToken: PromiseOrValue<string>, _indexToken: PromiseOrValue<string>, _isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    getFundingFee(_token: PromiseOrValue<string>, _size: PromiseOrValue<BigNumberish>, _entryFundingRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getMaxPrice(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getMinPrice(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getNextAveragePrice(_indexToken: PromiseOrValue<string>, _size: PromiseOrValue<BigNumberish>, _averagePrice: PromiseOrValue<BigNumberish>, _isLong: PromiseOrValue<boolean>, _nextPrice: PromiseOrValue<BigNumberish>, _sizeDelta: PromiseOrValue<BigNumberish>, _lastIncreasedTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getNextFundingRate(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getPosition(account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, indexToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber
    ] & {
        size: BigNumber;
        collateral: BigNumber;
        averagePrice: BigNumber;
        entryFundingRate: BigNumber;
        reserveAmount: BigNumber;
        realisedPnl: BigNumber;
        hasRealisedPnl: boolean;
        lastIncreasedTime: BigNumber;
    }>;
    getPositionDelta(_account: PromiseOrValue<string>, _collateralToken: PromiseOrValue<string>, _indexToken: PromiseOrValue<string>, _isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[boolean, BigNumber]>;
    getRedemptionAmount(token: PromiseOrValue<string>, usdgAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    globalShortSizes(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    gov(overrides?: CallOverrides): Promise<string>;
    guaranteedUsd(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    liquidatePosition(_account: PromiseOrValue<string>, _collateralToken: PromiseOrValue<string>, _indexToken: PromiseOrValue<string>, _isLong: PromiseOrValue<boolean>, _feeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    liquidationFeeUsd(overrides?: CallOverrides): Promise<BigNumber>;
    marginFeeBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
    maxGlobalShortSizes(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    maxUsdgAmounts(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    minProfitBasisPoints(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    minProfitTime(overrides?: CallOverrides): Promise<BigNumber>;
    poolAmounts(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    positions(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<IGmxVault.PositionStructOutput>;
    priceFeed(overrides?: CallOverrides): Promise<string>;
    reservedAmounts(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    setLiquidator(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stableFundingRateFactor(overrides?: CallOverrides): Promise<BigNumber>;
    stableSwapFeeBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
    stableTaxBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
    stableTokens(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    swap(_tokenIn: PromiseOrValue<string>, _tokenOut: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapFeeBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
    taxBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
    tokenWeights(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    totalTokenWeights(overrides?: CallOverrides): Promise<BigNumber>;
    usdgAmounts(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        bufferAmounts(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        cumulativeFundingRates(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        fundingRateFactor(overrides?: CallOverrides): Promise<BigNumber>;
        getDelta(_indexToken: PromiseOrValue<string>, _size: PromiseOrValue<BigNumberish>, _averagePrice: PromiseOrValue<BigNumberish>, _isLong: PromiseOrValue<boolean>, _lastIncreasedTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean, BigNumber]>;
        getEntryFundingRate(_collateralToken: PromiseOrValue<string>, _indexToken: PromiseOrValue<string>, _isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        getFundingFee(_token: PromiseOrValue<string>, _size: PromiseOrValue<BigNumberish>, _entryFundingRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getMaxPrice(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getMinPrice(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getNextAveragePrice(_indexToken: PromiseOrValue<string>, _size: PromiseOrValue<BigNumberish>, _averagePrice: PromiseOrValue<BigNumberish>, _isLong: PromiseOrValue<boolean>, _nextPrice: PromiseOrValue<BigNumberish>, _sizeDelta: PromiseOrValue<BigNumberish>, _lastIncreasedTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getNextFundingRate(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPosition(account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, indexToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean,
            BigNumber
        ] & {
            size: BigNumber;
            collateral: BigNumber;
            averagePrice: BigNumber;
            entryFundingRate: BigNumber;
            reserveAmount: BigNumber;
            realisedPnl: BigNumber;
            hasRealisedPnl: boolean;
            lastIncreasedTime: BigNumber;
        }>;
        getPositionDelta(_account: PromiseOrValue<string>, _collateralToken: PromiseOrValue<string>, _indexToken: PromiseOrValue<string>, _isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[boolean, BigNumber]>;
        getRedemptionAmount(token: PromiseOrValue<string>, usdgAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        globalShortSizes(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        gov(overrides?: CallOverrides): Promise<string>;
        guaranteedUsd(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        liquidatePosition(_account: PromiseOrValue<string>, _collateralToken: PromiseOrValue<string>, _indexToken: PromiseOrValue<string>, _isLong: PromiseOrValue<boolean>, _feeReceiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        liquidationFeeUsd(overrides?: CallOverrides): Promise<BigNumber>;
        marginFeeBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
        maxGlobalShortSizes(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxUsdgAmounts(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        minProfitBasisPoints(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        minProfitTime(overrides?: CallOverrides): Promise<BigNumber>;
        poolAmounts(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        positions(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<IGmxVault.PositionStructOutput>;
        priceFeed(overrides?: CallOverrides): Promise<string>;
        reservedAmounts(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setLiquidator(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        stableFundingRateFactor(overrides?: CallOverrides): Promise<BigNumber>;
        stableSwapFeeBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
        stableTaxBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
        stableTokens(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        swap(_tokenIn: PromiseOrValue<string>, _tokenOut: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        swapFeeBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
        taxBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
        tokenWeights(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        totalTokenWeights(overrides?: CallOverrides): Promise<BigNumber>;
        usdgAmounts(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "BuyUSDG(address,address,uint256,uint256,uint256)"(account?: null, token?: null, tokenAmount?: null, usdgAmount?: null, feeBasisPoints?: null): BuyUSDGEventFilter;
        BuyUSDG(account?: null, token?: null, tokenAmount?: null, usdgAmount?: null, feeBasisPoints?: null): BuyUSDGEventFilter;
        "ClosePosition(bytes32,uint256,uint256,uint256,uint256,uint256,int256)"(key?: null, size?: null, collateral?: null, averagePrice?: null, entryFundingRate?: null, reserveAmount?: null, realisedPnl?: null): ClosePositionEventFilter;
        ClosePosition(key?: null, size?: null, collateral?: null, averagePrice?: null, entryFundingRate?: null, reserveAmount?: null, realisedPnl?: null): ClosePositionEventFilter;
        "CollectMarginFees(address,uint256,uint256)"(token?: null, feeUsd?: null, feeTokens?: null): CollectMarginFeesEventFilter;
        CollectMarginFees(token?: null, feeUsd?: null, feeTokens?: null): CollectMarginFeesEventFilter;
        "CollectSwapFees(address,uint256,uint256)"(token?: null, feeUsd?: null, feeTokens?: null): CollectSwapFeesEventFilter;
        CollectSwapFees(token?: null, feeUsd?: null, feeTokens?: null): CollectSwapFeesEventFilter;
        "DecreaseGuaranteedUsd(address,uint256)"(token?: null, amount?: null): DecreaseGuaranteedUsdEventFilter;
        DecreaseGuaranteedUsd(token?: null, amount?: null): DecreaseGuaranteedUsdEventFilter;
        "DecreasePoolAmount(address,uint256)"(token?: null, amount?: null): DecreasePoolAmountEventFilter;
        DecreasePoolAmount(token?: null, amount?: null): DecreasePoolAmountEventFilter;
        "DecreasePosition(bytes32,address,address,address,uint256,uint256,bool,uint256,uint256)"(key?: null, account?: null, collateralToken?: null, indexToken?: null, collateralDelta?: null, sizeDelta?: null, isLong?: null, price?: null, fee?: null): DecreasePositionEventFilter;
        DecreasePosition(key?: null, account?: null, collateralToken?: null, indexToken?: null, collateralDelta?: null, sizeDelta?: null, isLong?: null, price?: null, fee?: null): DecreasePositionEventFilter;
        "DecreaseReservedAmount(address,uint256)"(token?: null, amount?: null): DecreaseReservedAmountEventFilter;
        DecreaseReservedAmount(token?: null, amount?: null): DecreaseReservedAmountEventFilter;
        "DecreaseUsdgAmount(address,uint256)"(token?: null, amount?: null): DecreaseUsdgAmountEventFilter;
        DecreaseUsdgAmount(token?: null, amount?: null): DecreaseUsdgAmountEventFilter;
        "DirectPoolDeposit(address,uint256)"(token?: null, amount?: null): DirectPoolDepositEventFilter;
        DirectPoolDeposit(token?: null, amount?: null): DirectPoolDepositEventFilter;
        "IncreaseGuaranteedUsd(address,uint256)"(token?: null, amount?: null): IncreaseGuaranteedUsdEventFilter;
        IncreaseGuaranteedUsd(token?: null, amount?: null): IncreaseGuaranteedUsdEventFilter;
        "IncreasePoolAmount(address,uint256)"(token?: null, amount?: null): IncreasePoolAmountEventFilter;
        IncreasePoolAmount(token?: null, amount?: null): IncreasePoolAmountEventFilter;
        "IncreasePosition(bytes32,address,address,address,uint256,uint256,bool,uint256,uint256)"(key?: null, account?: null, collateralToken?: null, indexToken?: null, collateralDelta?: null, sizeDelta?: null, isLong?: null, price?: null, fee?: null): IncreasePositionEventFilter;
        IncreasePosition(key?: null, account?: null, collateralToken?: null, indexToken?: null, collateralDelta?: null, sizeDelta?: null, isLong?: null, price?: null, fee?: null): IncreasePositionEventFilter;
        "IncreaseReservedAmount(address,uint256)"(token?: null, amount?: null): IncreaseReservedAmountEventFilter;
        IncreaseReservedAmount(token?: null, amount?: null): IncreaseReservedAmountEventFilter;
        "IncreaseUsdgAmount(address,uint256)"(token?: null, amount?: null): IncreaseUsdgAmountEventFilter;
        IncreaseUsdgAmount(token?: null, amount?: null): IncreaseUsdgAmountEventFilter;
        "LiquidatePosition(bytes32,address,address,address,bool,uint256,uint256,uint256,int256,uint256)"(key?: null, account?: null, collateralToken?: null, indexToken?: null, isLong?: null, size?: null, collateral?: null, reserveAmount?: null, realisedPnl?: null, markPrice?: null): LiquidatePositionEventFilter;
        LiquidatePosition(key?: null, account?: null, collateralToken?: null, indexToken?: null, isLong?: null, size?: null, collateral?: null, reserveAmount?: null, realisedPnl?: null, markPrice?: null): LiquidatePositionEventFilter;
        "SellUSDG(address,address,uint256,uint256,uint256)"(account?: null, token?: null, usdgAmount?: null, tokenAmount?: null, feeBasisPoints?: null): SellUSDGEventFilter;
        SellUSDG(account?: null, token?: null, usdgAmount?: null, tokenAmount?: null, feeBasisPoints?: null): SellUSDGEventFilter;
        "Swap(address,address,address,uint256,uint256,uint256,uint256)"(account?: null, tokenIn?: null, tokenOut?: null, amountIn?: null, amountOut?: null, amountOutAfterFees?: null, feeBasisPoints?: null): SwapEventFilter;
        Swap(account?: null, tokenIn?: null, tokenOut?: null, amountIn?: null, amountOut?: null, amountOutAfterFees?: null, feeBasisPoints?: null): SwapEventFilter;
        "UpdateFundingRate(address,uint256)"(token?: null, fundingRate?: null): UpdateFundingRateEventFilter;
        UpdateFundingRate(token?: null, fundingRate?: null): UpdateFundingRateEventFilter;
        "UpdatePnl(bytes32,bool,uint256)"(key?: null, hasProfit?: null, delta?: null): UpdatePnlEventFilter;
        UpdatePnl(key?: null, hasProfit?: null, delta?: null): UpdatePnlEventFilter;
        "UpdatePosition(bytes32,uint256,uint256,uint256,uint256,uint256,int256)"(key?: null, size?: null, collateral?: null, averagePrice?: null, entryFundingRate?: null, reserveAmount?: null, realisedPnl?: null): UpdatePositionEventFilter;
        UpdatePosition(key?: null, size?: null, collateral?: null, averagePrice?: null, entryFundingRate?: null, reserveAmount?: null, realisedPnl?: null): UpdatePositionEventFilter;
    };
    estimateGas: {
        bufferAmounts(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        cumulativeFundingRates(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        fundingRateFactor(overrides?: CallOverrides): Promise<BigNumber>;
        getDelta(_indexToken: PromiseOrValue<string>, _size: PromiseOrValue<BigNumberish>, _averagePrice: PromiseOrValue<BigNumberish>, _isLong: PromiseOrValue<boolean>, _lastIncreasedTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getEntryFundingRate(_collateralToken: PromiseOrValue<string>, _indexToken: PromiseOrValue<string>, _isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        getFundingFee(_token: PromiseOrValue<string>, _size: PromiseOrValue<BigNumberish>, _entryFundingRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getMaxPrice(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getMinPrice(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getNextAveragePrice(_indexToken: PromiseOrValue<string>, _size: PromiseOrValue<BigNumberish>, _averagePrice: PromiseOrValue<BigNumberish>, _isLong: PromiseOrValue<boolean>, _nextPrice: PromiseOrValue<BigNumberish>, _sizeDelta: PromiseOrValue<BigNumberish>, _lastIncreasedTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getNextFundingRate(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPosition(account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, indexToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionDelta(_account: PromiseOrValue<string>, _collateralToken: PromiseOrValue<string>, _indexToken: PromiseOrValue<string>, _isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        getRedemptionAmount(token: PromiseOrValue<string>, usdgAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        globalShortSizes(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        gov(overrides?: CallOverrides): Promise<BigNumber>;
        guaranteedUsd(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        liquidatePosition(_account: PromiseOrValue<string>, _collateralToken: PromiseOrValue<string>, _indexToken: PromiseOrValue<string>, _isLong: PromiseOrValue<boolean>, _feeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        liquidationFeeUsd(overrides?: CallOverrides): Promise<BigNumber>;
        marginFeeBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
        maxGlobalShortSizes(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxUsdgAmounts(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        minProfitBasisPoints(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        minProfitTime(overrides?: CallOverrides): Promise<BigNumber>;
        poolAmounts(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        positions(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        priceFeed(overrides?: CallOverrides): Promise<BigNumber>;
        reservedAmounts(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setLiquidator(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stableFundingRateFactor(overrides?: CallOverrides): Promise<BigNumber>;
        stableSwapFeeBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
        stableTaxBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
        stableTokens(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        swap(_tokenIn: PromiseOrValue<string>, _tokenOut: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapFeeBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
        taxBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
        tokenWeights(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        totalTokenWeights(overrides?: CallOverrides): Promise<BigNumber>;
        usdgAmounts(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        bufferAmounts(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cumulativeFundingRates(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundingRateFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDelta(_indexToken: PromiseOrValue<string>, _size: PromiseOrValue<BigNumberish>, _averagePrice: PromiseOrValue<BigNumberish>, _isLong: PromiseOrValue<boolean>, _lastIncreasedTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEntryFundingRate(_collateralToken: PromiseOrValue<string>, _indexToken: PromiseOrValue<string>, _isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFundingFee(_token: PromiseOrValue<string>, _size: PromiseOrValue<BigNumberish>, _entryFundingRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMaxPrice(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMinPrice(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNextAveragePrice(_indexToken: PromiseOrValue<string>, _size: PromiseOrValue<BigNumberish>, _averagePrice: PromiseOrValue<BigNumberish>, _isLong: PromiseOrValue<boolean>, _nextPrice: PromiseOrValue<BigNumberish>, _sizeDelta: PromiseOrValue<BigNumberish>, _lastIncreasedTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNextFundingRate(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPosition(account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, indexToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionDelta(_account: PromiseOrValue<string>, _collateralToken: PromiseOrValue<string>, _indexToken: PromiseOrValue<string>, _isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRedemptionAmount(token: PromiseOrValue<string>, usdgAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        globalShortSizes(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        guaranteedUsd(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidatePosition(_account: PromiseOrValue<string>, _collateralToken: PromiseOrValue<string>, _indexToken: PromiseOrValue<string>, _isLong: PromiseOrValue<boolean>, _feeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        liquidationFeeUsd(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        marginFeeBasisPoints(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxGlobalShortSizes(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxUsdgAmounts(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minProfitBasisPoints(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minProfitTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolAmounts(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positions(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceFeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reservedAmounts(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setLiquidator(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stableFundingRateFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stableSwapFeeBasisPoints(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stableTaxBasisPoints(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stableTokens(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swap(_tokenIn: PromiseOrValue<string>, _tokenOut: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapFeeBasisPoints(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        taxBasisPoints(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenWeights(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalTokenWeights(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        usdgAmounts(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
