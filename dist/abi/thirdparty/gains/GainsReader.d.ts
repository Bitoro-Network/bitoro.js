import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace GNSPairsStorageV6 {
    type FeeStruct = {
        name: PromiseOrValue<string>;
        openFeeP: PromiseOrValue<BigNumberish>;
        closeFeeP: PromiseOrValue<BigNumberish>;
        oracleFeeP: PromiseOrValue<BigNumberish>;
        nftLimitOrderFeeP: PromiseOrValue<BigNumberish>;
        referralFeeP: PromiseOrValue<BigNumberish>;
        minLevPosDai: PromiseOrValue<BigNumberish>;
    };
    type FeeStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        name: string;
        openFeeP: BigNumber;
        closeFeeP: BigNumber;
        oracleFeeP: BigNumber;
        nftLimitOrderFeeP: BigNumber;
        referralFeeP: BigNumber;
        minLevPosDai: BigNumber;
    };
    type GroupStruct = {
        name: PromiseOrValue<string>;
        job: PromiseOrValue<BytesLike>;
        minLeverage: PromiseOrValue<BigNumberish>;
        maxLeverage: PromiseOrValue<BigNumberish>;
        maxCollateralP: PromiseOrValue<BigNumberish>;
    };
    type GroupStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        name: string;
        job: string;
        minLeverage: BigNumber;
        maxLeverage: BigNumber;
        maxCollateralP: BigNumber;
    };
    type FeedStruct = {
        feed1: PromiseOrValue<string>;
        feed2: PromiseOrValue<string>;
        feedCalculation: PromiseOrValue<BigNumberish>;
        maxDeviationP: PromiseOrValue<BigNumberish>;
    };
    type FeedStructOutput = [string, string, number, BigNumber] & {
        feed1: string;
        feed2: string;
        feedCalculation: number;
        maxDeviationP: BigNumber;
    };
    type PairStruct = {
        from: PromiseOrValue<string>;
        to: PromiseOrValue<string>;
        feed: GNSPairsStorageV6.FeedStruct;
        spreadP: PromiseOrValue<BigNumberish>;
        groupIndex: PromiseOrValue<BigNumberish>;
        feeIndex: PromiseOrValue<BigNumberish>;
    };
    type PairStructOutput = [
        string,
        string,
        GNSPairsStorageV6.FeedStructOutput,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        from: string;
        to: string;
        feed: GNSPairsStorageV6.FeedStructOutput;
        spreadP: BigNumber;
        groupIndex: BigNumber;
        feeIndex: BigNumber;
    };
}
export declare namespace GainsReader {
    type GainsConfigStruct = {
        fees: GNSPairsStorageV6.FeeStruct[];
        groups: GNSPairsStorageV6.GroupStruct[];
        trading: PromiseOrValue<string>;
        callbacks: PromiseOrValue<string>;
        maxTradesPerPair: PromiseOrValue<BigNumberish>;
        supportedTokens: PromiseOrValue<string>[];
        nftRewards: PromiseOrValue<string>;
        maxPosDai: PromiseOrValue<BigNumberish>;
        isPaused: PromiseOrValue<boolean>;
        maxNegativePnlOnOpenP: PromiseOrValue<BigNumberish>;
        pairsCount: PromiseOrValue<BigNumberish>;
    };
    type GainsConfigStructOutput = [
        GNSPairsStorageV6.FeeStructOutput[],
        GNSPairsStorageV6.GroupStructOutput[],
        string,
        string,
        BigNumber,
        string[],
        string,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber
    ] & {
        fees: GNSPairsStorageV6.FeeStructOutput[];
        groups: GNSPairsStorageV6.GroupStructOutput[];
        trading: string;
        callbacks: string;
        maxTradesPerPair: BigNumber;
        supportedTokens: string[];
        nftRewards: string;
        maxPosDai: BigNumber;
        isPaused: boolean;
        maxNegativePnlOnOpenP: BigNumber;
        pairsCount: BigNumber;
    };
    type PositionInfoStruct = {
        trade: GNSTradingStorageV5.TradeStruct;
        tradeInfo: GNSTradingStorageV5.TradeInfoStruct;
        initialFundingFeePerOi: PromiseOrValue<BigNumberish>;
        initialRolloverFeePerCollateral: PromiseOrValue<BigNumberish>;
        pendingAccRolloverFee: PromiseOrValue<BigNumberish>;
        pendingAccFundingFeeValueLong: PromiseOrValue<BigNumberish>;
        pendingAccFundingFeeValueShort: PromiseOrValue<BigNumberish>;
    };
    type PositionInfoStructOutput = [
        GNSTradingStorageV5.TradeStructOutput,
        GNSTradingStorageV5.TradeInfoStructOutput,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        trade: GNSTradingStorageV5.TradeStructOutput;
        tradeInfo: GNSTradingStorageV5.TradeInfoStructOutput;
        initialFundingFeePerOi: BigNumber;
        initialRolloverFeePerCollateral: BigNumber;
        pendingAccRolloverFee: BigNumber;
        pendingAccFundingFeeValueLong: BigNumber;
        pendingAccFundingFeeValueShort: BigNumber;
    };
    type MarketOrderStruct = {
        id: PromiseOrValue<BigNumberish>;
        order: GNSTradingStorageV5.PendingMarketOrderStruct;
    };
    type MarketOrderStructOutput = [
        BigNumber,
        GNSTradingStorageV5.PendingMarketOrderStructOutput
    ] & {
        id: BigNumber;
        order: GNSTradingStorageV5.PendingMarketOrderStructOutput;
    };
    type PairOpenInterestDaiStruct = {
        long: PromiseOrValue<BigNumberish>;
        short: PromiseOrValue<BigNumberish>;
        max: PromiseOrValue<BigNumberish>;
    };
    type PairOpenInterestDaiStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        long: BigNumber;
        short: BigNumber;
        max: BigNumber;
    };
    type PairInfoStruct = {
        onePercentDepthAbove: PromiseOrValue<BigNumberish>;
        onePercentDepthBelow: PromiseOrValue<BigNumberish>;
        rolloverFeePerBlockP: PromiseOrValue<BigNumberish>;
        fundingFeePerBlockP: PromiseOrValue<BigNumberish>;
        accPerCollateral: PromiseOrValue<BigNumberish>;
        lastRolloverUpdateBlock: PromiseOrValue<BigNumberish>;
        accPerOiLong: PromiseOrValue<BigNumberish>;
        accPerOiShort: PromiseOrValue<BigNumberish>;
        lastFundingUpdateBlock: PromiseOrValue<BigNumberish>;
    };
    type PairInfoStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        onePercentDepthAbove: BigNumber;
        onePercentDepthBelow: BigNumber;
        rolloverFeePerBlockP: BigNumber;
        fundingFeePerBlockP: BigNumber;
        accPerCollateral: BigNumber;
        lastRolloverUpdateBlock: BigNumber;
        accPerOiLong: BigNumber;
        accPerOiShort: BigNumber;
        lastFundingUpdateBlock: BigNumber;
    };
    type PairLeverageStruct = {
        pairMinLeverage: PromiseOrValue<BigNumberish>;
        pairMaxLeverage: PromiseOrValue<BigNumberish>;
    };
    type PairLeverageStructOutput = [BigNumber, BigNumber] & {
        pairMinLeverage: BigNumber;
        pairMaxLeverage: BigNumber;
    };
    type GainsPairStruct = {
        pair: GNSPairsStorageV6.PairStruct;
        openInterestDai: GainsReader.PairOpenInterestDaiStruct;
        pairInfo: GainsReader.PairInfoStruct;
        pairLeverage: GainsReader.PairLeverageStruct;
    };
    type GainsPairStructOutput = [
        GNSPairsStorageV6.PairStructOutput,
        GainsReader.PairOpenInterestDaiStructOutput,
        GainsReader.PairInfoStructOutput,
        GainsReader.PairLeverageStructOutput
    ] & {
        pair: GNSPairsStorageV6.PairStructOutput;
        openInterestDai: GainsReader.PairOpenInterestDaiStructOutput;
        pairInfo: GainsReader.PairInfoStructOutput;
        pairLeverage: GainsReader.PairLeverageStructOutput;
    };
}
export declare namespace GNSTradingStorageV5 {
    type OpenLimitOrderStruct = {
        trader: PromiseOrValue<string>;
        pairIndex: PromiseOrValue<BigNumberish>;
        index: PromiseOrValue<BigNumberish>;
        positionSize: PromiseOrValue<BigNumberish>;
        spreadReductionP: PromiseOrValue<BigNumberish>;
        buy: PromiseOrValue<boolean>;
        leverage: PromiseOrValue<BigNumberish>;
        tp: PromiseOrValue<BigNumberish>;
        sl: PromiseOrValue<BigNumberish>;
        minPrice: PromiseOrValue<BigNumberish>;
        maxPrice: PromiseOrValue<BigNumberish>;
        block: PromiseOrValue<BigNumberish>;
        tokenId: PromiseOrValue<BigNumberish>;
    };
    type OpenLimitOrderStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        trader: string;
        pairIndex: BigNumber;
        index: BigNumber;
        positionSize: BigNumber;
        spreadReductionP: BigNumber;
        buy: boolean;
        leverage: BigNumber;
        tp: BigNumber;
        sl: BigNumber;
        minPrice: BigNumber;
        maxPrice: BigNumber;
        block: BigNumber;
        tokenId: BigNumber;
    };
    type TradeStruct = {
        trader: PromiseOrValue<string>;
        pairIndex: PromiseOrValue<BigNumberish>;
        index: PromiseOrValue<BigNumberish>;
        initialPosToken: PromiseOrValue<BigNumberish>;
        positionSizeDai: PromiseOrValue<BigNumberish>;
        openPrice: PromiseOrValue<BigNumberish>;
        buy: PromiseOrValue<boolean>;
        leverage: PromiseOrValue<BigNumberish>;
        tp: PromiseOrValue<BigNumberish>;
        sl: PromiseOrValue<BigNumberish>;
    };
    type TradeStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        trader: string;
        pairIndex: BigNumber;
        index: BigNumber;
        initialPosToken: BigNumber;
        positionSizeDai: BigNumber;
        openPrice: BigNumber;
        buy: boolean;
        leverage: BigNumber;
        tp: BigNumber;
        sl: BigNumber;
    };
    type TradeInfoStruct = {
        tokenId: PromiseOrValue<BigNumberish>;
        tokenPriceDai: PromiseOrValue<BigNumberish>;
        openInterestDai: PromiseOrValue<BigNumberish>;
        tpLastUpdated: PromiseOrValue<BigNumberish>;
        slLastUpdated: PromiseOrValue<BigNumberish>;
        beingMarketClosed: PromiseOrValue<boolean>;
    };
    type TradeInfoStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        tokenId: BigNumber;
        tokenPriceDai: BigNumber;
        openInterestDai: BigNumber;
        tpLastUpdated: BigNumber;
        slLastUpdated: BigNumber;
        beingMarketClosed: boolean;
    };
    type PendingMarketOrderStruct = {
        trade: GNSTradingStorageV5.TradeStruct;
        block: PromiseOrValue<BigNumberish>;
        wantedPrice: PromiseOrValue<BigNumberish>;
        slippageP: PromiseOrValue<BigNumberish>;
        spreadReductionP: PromiseOrValue<BigNumberish>;
        tokenId: PromiseOrValue<BigNumberish>;
    };
    type PendingMarketOrderStructOutput = [
        GNSTradingStorageV5.TradeStructOutput,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        trade: GNSTradingStorageV5.TradeStructOutput;
        block: BigNumber;
        wantedPrice: BigNumber;
        slippageP: BigNumber;
        spreadReductionP: BigNumber;
        tokenId: BigNumber;
    };
}
export interface GainsReaderInterface extends utils.Interface {
    functions: {
        "config()": FunctionFragment;
        "getLimitOrders(address)": FunctionFragment;
        "getPairsCount()": FunctionFragment;
        "getPositionsAndMarketOrders(address)": FunctionFragment;
        "pair(uint256)": FunctionFragment;
        "pairStorage()": FunctionFragment;
        "tradingStorage()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "config" | "getLimitOrders" | "getPairsCount" | "getPositionsAndMarketOrders" | "pair" | "pairStorage" | "tradingStorage"): FunctionFragment;
    encodeFunctionData(functionFragment: "config", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLimitOrders", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getPairsCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPositionsAndMarketOrders", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "pair", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pairStorage", values?: undefined): string;
    encodeFunctionData(functionFragment: "tradingStorage", values?: undefined): string;
    decodeFunctionResult(functionFragment: "config", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLimitOrders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPairsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsAndMarketOrders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairStorage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tradingStorage", data: BytesLike): Result;
    events: {};
}
export interface GainsReader extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GainsReaderInterface;
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
        config(overrides?: CallOverrides): Promise<[GainsReader.GainsConfigStructOutput]>;
        getLimitOrders(trader: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            GNSTradingStorageV5.OpenLimitOrderStructOutput[],
            number[]
        ] & {
            openLimitOrders: GNSTradingStorageV5.OpenLimitOrderStructOutput[];
            openLimitOrderTypes: number[];
        }>;
        getPairsCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getPositionsAndMarketOrders(trader: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            GainsReader.PositionInfoStructOutput[],
            GainsReader.MarketOrderStructOutput[]
        ] & {
            positionInfos: GainsReader.PositionInfoStructOutput[];
            marketOrders: GainsReader.MarketOrderStructOutput[];
        }>;
        pair(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            GainsReader.GainsPairStructOutput
        ] & {
            gainsPair: GainsReader.GainsPairStructOutput;
        }>;
        pairStorage(overrides?: CallOverrides): Promise<[string]>;
        tradingStorage(overrides?: CallOverrides): Promise<[string]>;
    };
    config(overrides?: CallOverrides): Promise<GainsReader.GainsConfigStructOutput>;
    getLimitOrders(trader: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        GNSTradingStorageV5.OpenLimitOrderStructOutput[],
        number[]
    ] & {
        openLimitOrders: GNSTradingStorageV5.OpenLimitOrderStructOutput[];
        openLimitOrderTypes: number[];
    }>;
    getPairsCount(overrides?: CallOverrides): Promise<BigNumber>;
    getPositionsAndMarketOrders(trader: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        GainsReader.PositionInfoStructOutput[],
        GainsReader.MarketOrderStructOutput[]
    ] & {
        positionInfos: GainsReader.PositionInfoStructOutput[];
        marketOrders: GainsReader.MarketOrderStructOutput[];
    }>;
    pair(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<GainsReader.GainsPairStructOutput>;
    pairStorage(overrides?: CallOverrides): Promise<string>;
    tradingStorage(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        config(overrides?: CallOverrides): Promise<GainsReader.GainsConfigStructOutput>;
        getLimitOrders(trader: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            GNSTradingStorageV5.OpenLimitOrderStructOutput[],
            number[]
        ] & {
            openLimitOrders: GNSTradingStorageV5.OpenLimitOrderStructOutput[];
            openLimitOrderTypes: number[];
        }>;
        getPairsCount(overrides?: CallOverrides): Promise<BigNumber>;
        getPositionsAndMarketOrders(trader: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            GainsReader.PositionInfoStructOutput[],
            GainsReader.MarketOrderStructOutput[]
        ] & {
            positionInfos: GainsReader.PositionInfoStructOutput[];
            marketOrders: GainsReader.MarketOrderStructOutput[];
        }>;
        pair(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<GainsReader.GainsPairStructOutput>;
        pairStorage(overrides?: CallOverrides): Promise<string>;
        tradingStorage(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        config(overrides?: CallOverrides): Promise<BigNumber>;
        getLimitOrders(trader: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPairsCount(overrides?: CallOverrides): Promise<BigNumber>;
        getPositionsAndMarketOrders(trader: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        pair(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairStorage(overrides?: CallOverrides): Promise<BigNumber>;
        tradingStorage(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        config(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLimitOrders(trader: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPairsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionsAndMarketOrders(trader: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pair(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairStorage(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tradingStorage(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
