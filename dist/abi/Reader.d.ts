import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
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
export declare namespace Reader {
    type PoolStorageStruct = {
        shortFundingBaseRate8H: BigNumberish;
        shortFundingLimitRate8H: BigNumberish;
        fundingInterval: BigNumberish;
        liquidityBaseFeeRate: BigNumberish;
        liquidityDynamicFeeRate: BigNumberish;
        blpPriceLowerBound: BigNumberish;
        blpPriceUpperBound: BigNumberish;
        lastFundingTime: BigNumberish;
        sequence: BigNumberish;
        strictStableDeviation: BigNumberish;
    };
    type PoolStorageStructOutput = [
        number,
        number,
        number,
        number,
        number,
        BigNumber,
        BigNumber,
        number,
        number,
        number
    ] & {
        shortFundingBaseRate8H: number;
        shortFundingLimitRate8H: number;
        fundingInterval: number;
        liquidityBaseFeeRate: number;
        liquidityDynamicFeeRate: number;
        blpPriceLowerBound: BigNumber;
        blpPriceUpperBound: BigNumber;
        lastFundingTime: number;
        sequence: number;
        strictStableDeviation: number;
    };
    type AssetStorageStruct = {
        symbol: BytesLike;
        tokenAddress: string;
        bitoroTokenAddress: string;
        id: BigNumberish;
        decimals: BigNumberish;
        flags: BigNumberish;
        initialMarginRate: BigNumberish;
        maintenanceMarginRate: BigNumberish;
        positionFeeRate: BigNumberish;
        liquidationFeeRate: BigNumberish;
        minProfitRate: BigNumberish;
        minProfitTime: BigNumberish;
        maxLongPositionSize: BigNumberish;
        maxShortPositionSize: BigNumberish;
        spotWeight: BigNumberish;
        longFundingBaseRate8H: BigNumberish;
        longFundingLimitRate8H: BigNumberish;
        referenceOracleType: BigNumberish;
        referenceOracle: string;
        referenceDeviation: BigNumberish;
        halfSpread: BigNumberish;
        longCumulativeFundingRate: BigNumberish;
        shortCumulativeFunding: BigNumberish;
        spotLiquidity: BigNumberish;
        credit: BigNumberish;
        totalLongPosition: BigNumberish;
        totalShortPosition: BigNumberish;
        averageLongPrice: BigNumberish;
        averageShortPrice: BigNumberish;
        collectedFee: BigNumberish;
        deduct: BigNumberish;
    };
    type AssetStorageStructOutput = [
        string,
        string,
        string,
        number,
        number,
        BigNumber,
        number,
        number,
        number,
        number,
        number,
        number,
        BigNumber,
        BigNumber,
        number,
        number,
        number,
        number,
        string,
        number,
        number,
        BigNumber,
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
        symbol: string;
        tokenAddress: string;
        bitoroTokenAddress: string;
        id: number;
        decimals: number;
        flags: BigNumber;
        initialMarginRate: number;
        maintenanceMarginRate: number;
        positionFeeRate: number;
        liquidationFeeRate: number;
        minProfitRate: number;
        minProfitTime: number;
        maxLongPositionSize: BigNumber;
        maxShortPositionSize: BigNumber;
        spotWeight: number;
        longFundingBaseRate8H: number;
        longFundingLimitRate8H: number;
        referenceOracleType: number;
        referenceOracle: string;
        referenceDeviation: number;
        halfSpread: number;
        longCumulativeFundingRate: BigNumber;
        shortCumulativeFunding: BigNumber;
        spotLiquidity: BigNumber;
        credit: BigNumber;
        totalLongPosition: BigNumber;
        totalShortPosition: BigNumber;
        averageLongPrice: BigNumber;
        averageShortPrice: BigNumber;
        collectedFee: BigNumber;
        deduct: BigNumber;
    };
    type DexStorageStruct = {
        dexId: BigNumberish;
        dexType: BigNumberish;
        assetIds: BigNumberish[];
        assetWeightInDEX: BigNumberish[];
        totalSpotInDEX: BigNumberish[];
        dexWeight: BigNumberish;
        dexLPBalance: BigNumberish;
        liquidityBalance: BigNumberish[];
    };
    type DexStorageStructOutput = [
        number,
        number,
        number[],
        number[],
        BigNumber[],
        number,
        BigNumber,
        BigNumber[]
    ] & {
        dexId: number;
        dexType: number;
        assetIds: number[];
        assetWeightInDEX: number[];
        totalSpotInDEX: BigNumber[];
        dexWeight: number;
        dexLPBalance: BigNumber;
        liquidityBalance: BigNumber[];
    };
    type ChainStorageStruct = {
        pool: Reader.PoolStorageStruct;
        assets: Reader.AssetStorageStruct[];
        dexes: Reader.DexStorageStruct[];
        liquidityLockPeriod: BigNumberish;
        marketOrderTimeout: BigNumberish;
        maxLimitOrderTimeout: BigNumberish;
        lpDeduct: BigNumberish;
        stableDeduct: BigNumberish;
        isPositionOrderPaused: boolean;
        isLiquidityOrderPaused: boolean;
    };
    type ChainStorageStructOutput = [
        Reader.PoolStorageStructOutput,
        Reader.AssetStorageStructOutput[],
        Reader.DexStorageStructOutput[],
        number,
        number,
        number,
        BigNumber,
        BigNumber,
        boolean,
        boolean
    ] & {
        pool: Reader.PoolStorageStructOutput;
        assets: Reader.AssetStorageStructOutput[];
        dexes: Reader.DexStorageStructOutput[];
        liquidityLockPeriod: number;
        marketOrderTimeout: number;
        maxLimitOrderTimeout: number;
        lpDeduct: BigNumber;
        stableDeduct: BigNumber;
        isPositionOrderPaused: boolean;
        isLiquidityOrderPaused: boolean;
    };
    type SubAccountStateStruct = {
        collateral: BigNumberish;
        size: BigNumberish;
        lastIncreasedTime: BigNumberish;
        entryPrice: BigNumberish;
        entryFunding: BigNumberish;
    };
    type SubAccountStateStructOutput = [
        BigNumber,
        BigNumber,
        number,
        BigNumber,
        BigNumber
    ] & {
        collateral: BigNumber;
        size: BigNumber;
        lastIncreasedTime: number;
        entryPrice: BigNumber;
        entryFunding: BigNumber;
    };
}
export interface ReaderInterface extends utils.Interface {
    contractName: "Reader";
    functions: {
        "deductWhiteList(uint256)": FunctionFragment;
        "dex()": FunctionFragment;
        "getChainStorage()": FunctionFragment;
        "getErc20Balances(address[],address)": FunctionFragment;
        "getOrders(uint64[])": FunctionFragment;
        "getPositionOrdersExtra(uint64[])": FunctionFragment;
        "getSubAccounts(bytes32[])": FunctionFragment;
        "getSubAccountsAndOrders(bytes32[],uint64[])": FunctionFragment;
        "blp()": FunctionFragment;
        "orderBook()": FunctionFragment;
        "pool()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "deductWhiteList", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "dex", values?: undefined): string;
    encodeFunctionData(functionFragment: "getChainStorage", values?: undefined): string;
    encodeFunctionData(functionFragment: "getErc20Balances", values: [string[], string]): string;
    encodeFunctionData(functionFragment: "getOrders", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getPositionOrdersExtra", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getSubAccounts", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "getSubAccountsAndOrders", values: [BytesLike[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "blp", values?: undefined): string;
    encodeFunctionData(functionFragment: "orderBook", values?: undefined): string;
    encodeFunctionData(functionFragment: "pool", values?: undefined): string;
    decodeFunctionResult(functionFragment: "deductWhiteList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainStorage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getErc20Balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOrders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionOrdersExtra", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSubAccounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSubAccountsAndOrders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "orderBook", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
    events: {};
}
export interface Reader extends BaseContract {
    contractName: "Reader";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ReaderInterface;
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
        deductWhiteList(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        dex(overrides?: CallOverrides): Promise<[string]>;
        getChainStorage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getErc20Balances(tokens: string[], owner: string, overrides?: CallOverrides): Promise<[BigNumber[]] & {
            balances: BigNumber[];
        }>;
        getOrders(orderIds: BigNumberish[], overrides?: CallOverrides): Promise<[
            [string, string, string][],
            boolean[]
        ] & {
            orders: [string, string, string][];
            isExist: boolean[];
        }>;
        getPositionOrdersExtra(orderIds: BigNumberish[], overrides?: CallOverrides): Promise<[
            PositionOrderExtraStructOutput[]
        ] & {
            extras: PositionOrderExtraStructOutput[];
        }>;
        getSubAccounts(subAccountIds: BytesLike[], overrides?: CallOverrides): Promise<[
            Reader.SubAccountStateStructOutput[]
        ] & {
            subAccounts: Reader.SubAccountStateStructOutput[];
        }>;
        getSubAccountsAndOrders(subAccountIds: BytesLike[], orderIds: BigNumberish[], overrides?: CallOverrides): Promise<[
            Reader.SubAccountStateStructOutput[],
            [
                string,
                string,
                string
            ][],
            boolean[]
        ] & {
            subAccounts: Reader.SubAccountStateStructOutput[];
            orders: [string, string, string][];
            isOrderExist: boolean[];
        }>;
        blp(overrides?: CallOverrides): Promise<[string]>;
        orderBook(overrides?: CallOverrides): Promise<[string]>;
        pool(overrides?: CallOverrides): Promise<[string]>;
    };
    deductWhiteList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    dex(overrides?: CallOverrides): Promise<string>;
    getChainStorage(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getErc20Balances(tokens: string[], owner: string, overrides?: CallOverrides): Promise<BigNumber[]>;
    getOrders(orderIds: BigNumberish[], overrides?: CallOverrides): Promise<[
        [string, string, string][],
        boolean[]
    ] & {
        orders: [string, string, string][];
        isExist: boolean[];
    }>;
    getPositionOrdersExtra(orderIds: BigNumberish[], overrides?: CallOverrides): Promise<PositionOrderExtraStructOutput[]>;
    getSubAccounts(subAccountIds: BytesLike[], overrides?: CallOverrides): Promise<Reader.SubAccountStateStructOutput[]>;
    getSubAccountsAndOrders(subAccountIds: BytesLike[], orderIds: BigNumberish[], overrides?: CallOverrides): Promise<[
        Reader.SubAccountStateStructOutput[],
        [
            string,
            string,
            string
        ][],
        boolean[]
    ] & {
        subAccounts: Reader.SubAccountStateStructOutput[];
        orders: [string, string, string][];
        isOrderExist: boolean[];
    }>;
    blp(overrides?: CallOverrides): Promise<string>;
    orderBook(overrides?: CallOverrides): Promise<string>;
    pool(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        deductWhiteList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        dex(overrides?: CallOverrides): Promise<string>;
        getChainStorage(overrides?: CallOverrides): Promise<Reader.ChainStorageStructOutput>;
        getErc20Balances(tokens: string[], owner: string, overrides?: CallOverrides): Promise<BigNumber[]>;
        getOrders(orderIds: BigNumberish[], overrides?: CallOverrides): Promise<[
            [string, string, string][],
            boolean[]
        ] & {
            orders: [string, string, string][];
            isExist: boolean[];
        }>;
        getPositionOrdersExtra(orderIds: BigNumberish[], overrides?: CallOverrides): Promise<PositionOrderExtraStructOutput[]>;
        getSubAccounts(subAccountIds: BytesLike[], overrides?: CallOverrides): Promise<Reader.SubAccountStateStructOutput[]>;
        getSubAccountsAndOrders(subAccountIds: BytesLike[], orderIds: BigNumberish[], overrides?: CallOverrides): Promise<[
            Reader.SubAccountStateStructOutput[],
            [
                string,
                string,
                string
            ][],
            boolean[]
        ] & {
            subAccounts: Reader.SubAccountStateStructOutput[];
            orders: [string, string, string][];
            isOrderExist: boolean[];
        }>;
        blp(overrides?: CallOverrides): Promise<string>;
        orderBook(overrides?: CallOverrides): Promise<string>;
        pool(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        deductWhiteList(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        dex(overrides?: CallOverrides): Promise<BigNumber>;
        getChainStorage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getErc20Balances(tokens: string[], owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        getOrders(orderIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        getPositionOrdersExtra(orderIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        getSubAccounts(subAccountIds: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
        getSubAccountsAndOrders(subAccountIds: BytesLike[], orderIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        blp(overrides?: CallOverrides): Promise<BigNumber>;
        orderBook(overrides?: CallOverrides): Promise<BigNumber>;
        pool(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        deductWhiteList(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dex(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getChainStorage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getErc20Balances(tokens: string[], owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOrders(orderIds: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionOrdersExtra(orderIds: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSubAccounts(subAccountIds: BytesLike[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSubAccountsAndOrders(subAccountIds: BytesLike[], orderIds: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        blp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        orderBook(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
