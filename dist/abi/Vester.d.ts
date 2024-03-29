import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface VesterInterface extends utils.Interface {
    contractName: "Vester";
    functions: {
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "balances(address)": FunctionFragment;
        "claim()": FunctionFragment;
        "claimForAccount(address,address)": FunctionFragment;
        "claimable(address)": FunctionFragment;
        "claimableToken()": FunctionFragment;
        "claimedAmounts(address)": FunctionFragment;
        "cumulativeClaimAmounts(address)": FunctionFragment;
        "cumulativeRewardDeductions(address)": FunctionFragment;
        "decimals()": FunctionFragment;
        "deposit(uint256)": FunctionFragment;
        "depositForAccount(address,uint256)": FunctionFragment;
        "esToken()": FunctionFragment;
        "getCombinedAverageStakedAmount(address)": FunctionFragment;
        "getMaxVestableAmount(address)": FunctionFragment;
        "getPairAmount(address,uint256)": FunctionFragment;
        "getTotalVested(address)": FunctionFragment;
        "getVestedAmount(address)": FunctionFragment;
        "hasMaxVestableAmount()": FunctionFragment;
        "hasPairToken()": FunctionFragment;
        "hasRewardTracker()": FunctionFragment;
        "hasVolumeLimit()": FunctionFragment;
        "historicalCumulativeClaimAmounts(address)": FunctionFragment;
        "initialize(string,string,uint256,address,address,address,address,bool)": FunctionFragment;
        "isHandler(address)": FunctionFragment;
        "lastVestingTimes(address)": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "pairAmounts(address)": FunctionFragment;
        "pairSupply()": FunctionFragment;
        "pairToken()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "rewardTracker()": FunctionFragment;
        "setCumulativeRewardDeductions(address,uint256)": FunctionFragment;
        "setHandler(address,bool)": FunctionFragment;
        "setHasMaxVestableAmount(bool)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "transferredAverageStakedAmounts(address)": FunctionFragment;
        "transferredCumulativeRewards(address)": FunctionFragment;
        "vestingDuration()": FunctionFragment;
        "withdraw()": FunctionFragment;
        "withdrawFor(address,address)": FunctionFragment;
        "withdrawToken(address,address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "balances", values: [string]): string;
    encodeFunctionData(functionFragment: "claim", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimForAccount", values: [string, string]): string;
    encodeFunctionData(functionFragment: "claimable", values: [string]): string;
    encodeFunctionData(functionFragment: "claimableToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimedAmounts", values: [string]): string;
    encodeFunctionData(functionFragment: "cumulativeClaimAmounts", values: [string]): string;
    encodeFunctionData(functionFragment: "cumulativeRewardDeductions", values: [string]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "depositForAccount", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "esToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCombinedAverageStakedAmount", values: [string]): string;
    encodeFunctionData(functionFragment: "getMaxVestableAmount", values: [string]): string;
    encodeFunctionData(functionFragment: "getPairAmount", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTotalVested", values: [string]): string;
    encodeFunctionData(functionFragment: "getVestedAmount", values: [string]): string;
    encodeFunctionData(functionFragment: "hasMaxVestableAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "hasPairToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "hasRewardTracker", values?: undefined): string;
    encodeFunctionData(functionFragment: "hasVolumeLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "historicalCumulativeClaimAmounts", values: [string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        string,
        string,
        BigNumberish,
        string,
        string,
        string,
        string,
        boolean
    ]): string;
    encodeFunctionData(functionFragment: "isHandler", values: [string]): string;
    encodeFunctionData(functionFragment: "lastVestingTimes", values: [string]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pairAmounts", values: [string]): string;
    encodeFunctionData(functionFragment: "pairSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "pairToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardTracker", values?: undefined): string;
    encodeFunctionData(functionFragment: "setCumulativeRewardDeductions", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setHandler", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setHasMaxVestableAmount", values: [boolean]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "transferredAverageStakedAmounts", values: [string]): string;
    encodeFunctionData(functionFragment: "transferredCumulativeRewards", values: [string]): string;
    encodeFunctionData(functionFragment: "vestingDuration", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawFor", values: [string, string]): string;
    encodeFunctionData(functionFragment: "withdrawToken", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimForAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimableToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimedAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cumulativeClaimAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cumulativeRewardDeductions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositForAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "esToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCombinedAverageStakedAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaxVestableAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPairAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalVested", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVestedAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasMaxVestableAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasPairToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRewardTracker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasVolumeLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "historicalCumulativeClaimAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isHandler", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastVestingTimes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardTracker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCumulativeRewardDeductions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setHandler", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setHasMaxVestableAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferredAverageStakedAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferredCumulativeRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vestingDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawToken", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "Claim(address,uint256)": EventFragment;
        "Deposit(address,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "PairTransfer(address,address,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Withdraw(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PairTransfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    owner: string;
    spender: string;
    value: BigNumber;
}>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export type ClaimEvent = TypedEvent<[
    string,
    BigNumber
], {
    receiver: string;
    amount: BigNumber;
}>;
export type ClaimEventFilter = TypedEventFilter<ClaimEvent>;
export type DepositEvent = TypedEvent<[
    string,
    BigNumber
], {
    account: string;
    amount: BigNumber;
}>;
export type DepositEventFilter = TypedEventFilter<DepositEvent>;
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export type PairTransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    from: string;
    to: string;
    value: BigNumber;
}>;
export type PairTransferEventFilter = TypedEventFilter<PairTransferEvent>;
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    from: string;
    to: string;
    value: BigNumber;
}>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export type WithdrawEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    account: string;
    claimedAmount: BigNumber;
    balance: BigNumber;
}>;
export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface Vester extends BaseContract {
    contractName: "Vester";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VesterInterface;
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
        allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(_account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        balances(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        claim(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimForAccount(_account: string, _receiver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimable(_account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimableToken(overrides?: CallOverrides): Promise<[string]>;
        claimedAmounts(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        cumulativeClaimAmounts(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        cumulativeRewardDeductions(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        deposit(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        depositForAccount(_account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        esToken(overrides?: CallOverrides): Promise<[string]>;
        getCombinedAverageStakedAmount(_account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getMaxVestableAmount(_account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPairAmount(_account: string, _esAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTotalVested(_account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getVestedAmount(_account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        hasMaxVestableAmount(overrides?: CallOverrides): Promise<[boolean]>;
        hasPairToken(overrides?: CallOverrides): Promise<[boolean]>;
        hasRewardTracker(overrides?: CallOverrides): Promise<[boolean]>;
        hasVolumeLimit(overrides?: CallOverrides): Promise<[boolean]>;
        historicalCumulativeClaimAmounts(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_name: string, _symbol: string, _vestingDuration: BigNumberish, _esToken: string, _pairToken: string, _claimableToken: string, _rewardTracker: string, _hasVolumeLimit: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isHandler(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        lastVestingTimes(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pairAmounts(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        pairSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        pairToken(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        rewardTracker(overrides?: CallOverrides): Promise<[string]>;
        setCumulativeRewardDeductions(_account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setHandler(_handler: string, _isActive: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setHasMaxVestableAmount(_hasMaxVestableAmount: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        transferFrom(arg0: string, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferredAverageStakedAmounts(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        transferredCumulativeRewards(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        vestingDuration(overrides?: CallOverrides): Promise<[BigNumber]>;
        withdraw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawFor(account: string, _receiver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawToken(_token: string, _account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
    balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    claim(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimForAccount(_account: string, _receiver: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimable(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
    claimableToken(overrides?: CallOverrides): Promise<string>;
    claimedAmounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    cumulativeClaimAmounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    cumulativeRewardDeductions(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    decimals(overrides?: CallOverrides): Promise<number>;
    deposit(_amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    depositForAccount(_account: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    esToken(overrides?: CallOverrides): Promise<string>;
    getCombinedAverageStakedAmount(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
    getMaxVestableAmount(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
    getPairAmount(_account: string, _esAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getTotalVested(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
    getVestedAmount(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
    hasMaxVestableAmount(overrides?: CallOverrides): Promise<boolean>;
    hasPairToken(overrides?: CallOverrides): Promise<boolean>;
    hasRewardTracker(overrides?: CallOverrides): Promise<boolean>;
    hasVolumeLimit(overrides?: CallOverrides): Promise<boolean>;
    historicalCumulativeClaimAmounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_name: string, _symbol: string, _vestingDuration: BigNumberish, _esToken: string, _pairToken: string, _claimableToken: string, _rewardTracker: string, _hasVolumeLimit: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isHandler(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    lastVestingTimes(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pairAmounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    pairSupply(overrides?: CallOverrides): Promise<BigNumber>;
    pairToken(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    rewardTracker(overrides?: CallOverrides): Promise<string>;
    setCumulativeRewardDeductions(_account: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setHandler(_handler: string, _isActive: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setHasMaxVestableAmount(_hasMaxVestableAmount: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    transferFrom(arg0: string, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferredAverageStakedAmounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    transferredCumulativeRewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    vestingDuration(overrides?: CallOverrides): Promise<BigNumber>;
    withdraw(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawFor(account: string, _receiver: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawToken(_token: string, _account: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        claim(overrides?: CallOverrides): Promise<BigNumber>;
        claimForAccount(_account: string, _receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimable(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimableToken(overrides?: CallOverrides): Promise<string>;
        claimedAmounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        cumulativeClaimAmounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        cumulativeRewardDeductions(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<number>;
        deposit(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        depositForAccount(_account: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        esToken(overrides?: CallOverrides): Promise<string>;
        getCombinedAverageStakedAmount(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getMaxVestableAmount(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPairAmount(_account: string, _esAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getTotalVested(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getVestedAmount(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        hasMaxVestableAmount(overrides?: CallOverrides): Promise<boolean>;
        hasPairToken(overrides?: CallOverrides): Promise<boolean>;
        hasRewardTracker(overrides?: CallOverrides): Promise<boolean>;
        hasVolumeLimit(overrides?: CallOverrides): Promise<boolean>;
        historicalCumulativeClaimAmounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_name: string, _symbol: string, _vestingDuration: BigNumberish, _esToken: string, _pairToken: string, _claimableToken: string, _rewardTracker: string, _hasVolumeLimit: boolean, overrides?: CallOverrides): Promise<void>;
        isHandler(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        lastVestingTimes(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pairAmounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        pairSupply(overrides?: CallOverrides): Promise<BigNumber>;
        pairToken(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        rewardTracker(overrides?: CallOverrides): Promise<string>;
        setCumulativeRewardDeductions(_account: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setHandler(_handler: string, _isActive: boolean, overrides?: CallOverrides): Promise<void>;
        setHasMaxVestableAmount(_hasMaxVestableAmount: boolean, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(arg0: string, arg1: string, arg2: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        transferredAverageStakedAmounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferredCumulativeRewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        vestingDuration(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(overrides?: CallOverrides): Promise<void>;
        withdrawFor(account: string, _receiver: string, overrides?: CallOverrides): Promise<void>;
        withdrawToken(_token: string, _account: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "Claim(address,uint256)"(receiver?: null, amount?: null): ClaimEventFilter;
        Claim(receiver?: null, amount?: null): ClaimEventFilter;
        "Deposit(address,uint256)"(account?: null, amount?: null): DepositEventFilter;
        Deposit(account?: null, amount?: null): DepositEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "PairTransfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): PairTransferEventFilter;
        PairTransfer(from?: string | null, to?: string | null, value?: null): PairTransferEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        "Withdraw(address,uint256,uint256)"(account?: null, claimedAmount?: null, balance?: null): WithdrawEventFilter;
        Withdraw(account?: null, claimedAmount?: null, balance?: null): WithdrawEventFilter;
    };
    estimateGas: {
        allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        claim(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimForAccount(_account: string, _receiver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimable(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimableToken(overrides?: CallOverrides): Promise<BigNumber>;
        claimedAmounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        cumulativeClaimAmounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        cumulativeRewardDeductions(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        depositForAccount(_account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        esToken(overrides?: CallOverrides): Promise<BigNumber>;
        getCombinedAverageStakedAmount(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getMaxVestableAmount(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPairAmount(_account: string, _esAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getTotalVested(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getVestedAmount(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        hasMaxVestableAmount(overrides?: CallOverrides): Promise<BigNumber>;
        hasPairToken(overrides?: CallOverrides): Promise<BigNumber>;
        hasRewardTracker(overrides?: CallOverrides): Promise<BigNumber>;
        hasVolumeLimit(overrides?: CallOverrides): Promise<BigNumber>;
        historicalCumulativeClaimAmounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_name: string, _symbol: string, _vestingDuration: BigNumberish, _esToken: string, _pairToken: string, _claimableToken: string, _rewardTracker: string, _hasVolumeLimit: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isHandler(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        lastVestingTimes(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pairAmounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        pairSupply(overrides?: CallOverrides): Promise<BigNumber>;
        pairToken(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        rewardTracker(overrides?: CallOverrides): Promise<BigNumber>;
        setCumulativeRewardDeductions(_account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setHandler(_handler: string, _isActive: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setHasMaxVestableAmount(_hasMaxVestableAmount: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(arg0: string, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferredAverageStakedAmounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferredCumulativeRewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        vestingDuration(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawFor(account: string, _receiver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawToken(_token: string, _account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balances(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claim(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimForAccount(_account: string, _receiver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimable(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimableToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimedAmounts(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cumulativeClaimAmounts(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cumulativeRewardDeductions(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        depositForAccount(_account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        esToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCombinedAverageStakedAmount(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMaxVestableAmount(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPairAmount(_account: string, _esAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalVested(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVestedAmount(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasMaxVestableAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasPairToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasRewardTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasVolumeLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        historicalCumulativeClaimAmounts(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_name: string, _symbol: string, _vestingDuration: BigNumberish, _esToken: string, _pairToken: string, _claimableToken: string, _rewardTracker: string, _hasVolumeLimit: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isHandler(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastVestingTimes(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairAmounts(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        rewardTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setCumulativeRewardDeductions(_account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setHandler(_handler: string, _isActive: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setHasMaxVestableAmount(_hasMaxVestableAmount: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(arg0: string, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferredAverageStakedAmounts(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferredCumulativeRewards(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vestingDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawFor(account: string, _receiver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawToken(_token: string, _account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
