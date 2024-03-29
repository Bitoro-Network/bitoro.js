import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface RewardRouterInterface extends utils.Interface {
    contractName: "RewardRouter";
    functions: {
        "averageStakePeriod()": FunctionFragment;
        "batchCompoundForAccounts(address[])": FunctionFragment;
        "batchStakeBitoroForAccount(address[],uint256[],uint256[])": FunctionFragment;
        "claimAll()": FunctionFragment;
        "claimAllUnwrap()": FunctionFragment;
        "claimFromBlp()": FunctionFragment;
        "claimFromBlpUnwrap()": FunctionFragment;
        "claimFromVe()": FunctionFragment;
        "claimFromVeUnwrap()": FunctionFragment;
        "claimVestedTokenFromVe(address)": FunctionFragment;
        "claimableRewards(address)": FunctionFragment;
        "claimableVestedTokenFromBlp(address)": FunctionFragment;
        "claimableVestedTokenFromVe(address)": FunctionFragment;
        "claimedVestedTokenFromBlp(address)": FunctionFragment;
        "claimedVestedTokenFromVe(address)": FunctionFragment;
        "compound()": FunctionFragment;
        "compoundForAccount(address)": FunctionFragment;
        "depositToBlpVester(uint256)": FunctionFragment;
        "depositToVeVester(uint256)": FunctionFragment;
        "feeRewardRate()": FunctionFragment;
        "increaseStakeUnlockTime(uint256)": FunctionFragment;
        "initialize(address[5],address[4],address[2],address[2])": FunctionFragment;
        "maxVestableTokenFromBlp(address)": FunctionFragment;
        "maxVestableTokenFromVe(address)": FunctionFragment;
        "bcb()": FunctionFragment;
        "blp()": FunctionFragment;
        "blpDistributor()": FunctionFragment;
        "blpFeeTracker()": FunctionFragment;
        "blpLockAmount(address,uint256)": FunctionFragment;
        "blpBitoroTracker()": FunctionFragment;
        "blpVester()": FunctionFragment;
        "bitoro()": FunctionFragment;
        "bitoroDistributor()": FunctionFragment;
        "bitoroRewardRate()": FunctionFragment;
        "bitoroVester()": FunctionFragment;
        "owner()": FunctionFragment;
        "poolOwnedRate()": FunctionFragment;
        "protocolLiquidityOwner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "reservedBlpAmount(address)": FunctionFragment;
        "setProtocolLiquidityOwner(address)": FunctionFragment;
        "setTimelock(address)": FunctionFragment;
        "setVault(address)": FunctionFragment;
        "stakeBcb(uint256,uint256)": FunctionFragment;
        "stakeBcbForAccount(address,uint256)": FunctionFragment;
        "stakeBlp(uint256)": FunctionFragment;
        "stakeBitoro(uint256,uint256)": FunctionFragment;
        "stakedBlpAmount(address)": FunctionFragment;
        "timelock()": FunctionFragment;
        "totalVestedTokenFromBlp(address)": FunctionFragment;
        "totalVestedTokenFromVe(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unlockTime(address)": FunctionFragment;
        "unstakeBcbAndBitoro()": FunctionFragment;
        "unstakeBlp(uint256)": FunctionFragment;
        "vault()": FunctionFragment;
        "veFeeTracker()": FunctionFragment;
        "veBitoroTracker()": FunctionFragment;
        "votingEscrow()": FunctionFragment;
        "votingEscrowedAmounts(address)": FunctionFragment;
        "votingEscrowedRate()": FunctionFragment;
        "weth()": FunctionFragment;
        "withdrawFromBlpVester()": FunctionFragment;
        "withdrawFromVeVester()": FunctionFragment;
        "withdrawToken(address,address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "averageStakePeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "batchCompoundForAccounts", values: [string[]]): string;
    encodeFunctionData(functionFragment: "batchStakeBitoroForAccount", values: [string[], BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "claimAll", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimAllUnwrap", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimFromBlp", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimFromBlpUnwrap", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimFromVe", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimFromVeUnwrap", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimVestedTokenFromVe", values: [string]): string;
    encodeFunctionData(functionFragment: "claimableRewards", values: [string]): string;
    encodeFunctionData(functionFragment: "claimableVestedTokenFromBlp", values: [string]): string;
    encodeFunctionData(functionFragment: "claimableVestedTokenFromVe", values: [string]): string;
    encodeFunctionData(functionFragment: "claimedVestedTokenFromBlp", values: [string]): string;
    encodeFunctionData(functionFragment: "claimedVestedTokenFromVe", values: [string]): string;
    encodeFunctionData(functionFragment: "compound", values?: undefined): string;
    encodeFunctionData(functionFragment: "compoundForAccount", values: [string]): string;
    encodeFunctionData(functionFragment: "depositToBlpVester", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "depositToVeVester", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "feeRewardRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseStakeUnlockTime", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        [
            string,
            string,
            string,
            string,
            string
        ],
        [
            string,
            string,
            string,
            string
        ],
        [
            string,
            string
        ],
        [
            string,
            string
        ]
    ]): string;
    encodeFunctionData(functionFragment: "maxVestableTokenFromBlp", values: [string]): string;
    encodeFunctionData(functionFragment: "maxVestableTokenFromVe", values: [string]): string;
    encodeFunctionData(functionFragment: "bcb", values?: undefined): string;
    encodeFunctionData(functionFragment: "blp", values?: undefined): string;
    encodeFunctionData(functionFragment: "blpDistributor", values?: undefined): string;
    encodeFunctionData(functionFragment: "blpFeeTracker", values?: undefined): string;
    encodeFunctionData(functionFragment: "blpLockAmount", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "blpBitoroTracker", values?: undefined): string;
    encodeFunctionData(functionFragment: "blpVester", values?: undefined): string;
    encodeFunctionData(functionFragment: "bitoro", values?: undefined): string;
    encodeFunctionData(functionFragment: "bitoroDistributor", values?: undefined): string;
    encodeFunctionData(functionFragment: "bitoroRewardRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "bitoroVester", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolOwnedRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolLiquidityOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "reservedBlpAmount", values: [string]): string;
    encodeFunctionData(functionFragment: "setProtocolLiquidityOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "setTimelock", values: [string]): string;
    encodeFunctionData(functionFragment: "setVault", values: [string]): string;
    encodeFunctionData(functionFragment: "stakeBcb", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "stakeBcbForAccount", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "stakeBlp", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stakeBitoro", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "stakedBlpAmount", values: [string]): string;
    encodeFunctionData(functionFragment: "timelock", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalVestedTokenFromBlp", values: [string]): string;
    encodeFunctionData(functionFragment: "totalVestedTokenFromVe", values: [string]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "unlockTime", values: [string]): string;
    encodeFunctionData(functionFragment: "unstakeBcbAndBitoro", values?: undefined): string;
    encodeFunctionData(functionFragment: "unstakeBlp", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "vault", values?: undefined): string;
    encodeFunctionData(functionFragment: "veFeeTracker", values?: undefined): string;
    encodeFunctionData(functionFragment: "veBitoroTracker", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingEscrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingEscrowedAmounts", values: [string]): string;
    encodeFunctionData(functionFragment: "votingEscrowedRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "weth", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawFromBlpVester", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawFromVeVester", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawToken", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "averageStakePeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchCompoundForAccounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchStakeBitoroForAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimAllUnwrap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimFromBlp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimFromBlpUnwrap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimFromVe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimFromVeUnwrap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimVestedTokenFromVe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimableRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimableVestedTokenFromBlp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimableVestedTokenFromVe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimedVestedTokenFromBlp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimedVestedTokenFromVe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compound", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compoundForAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositToBlpVester", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositToVeVester", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeRewardRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseStakeUnlockTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxVestableTokenFromBlp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxVestableTokenFromVe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bcb", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blpDistributor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blpFeeTracker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blpLockAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blpBitoroTracker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blpVester", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bitoro", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bitoroDistributor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bitoroRewardRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bitoroVester", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolOwnedRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolLiquidityOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reservedBlpAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProtocolLiquidityOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTimelock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakeBcb", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakeBcbForAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakeBlp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakeBitoro", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakedBlpAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timelock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalVestedTokenFromBlp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalVestedTokenFromVe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlockTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unstakeBcbAndBitoro", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unstakeBlp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "veFeeTracker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "veBitoroTracker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingEscrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingEscrowedAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingEscrowedRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFromBlpVester", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFromVeVester", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawToken", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
        "SetProtocolLiquidityOwner(address,address)": EventFragment;
        "SetTimelock(address,address)": EventFragment;
        "SetVault(address,address)": EventFragment;
        "StakeBlp(address,uint256)": EventFragment;
        "StakeBitoro(address,address,uint256,uint256)": EventFragment;
        "UnstakeBlp(address,uint256)": EventFragment;
        "UnstakeBitoro(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetProtocolLiquidityOwner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTimelock"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetVault"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakeBlp"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakeBitoro"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UnstakeBlp"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UnstakeBitoro"): EventFragment;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export type SetProtocolLiquidityOwnerEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export type SetProtocolLiquidityOwnerEventFilter = TypedEventFilter<SetProtocolLiquidityOwnerEvent>;
export type SetTimelockEvent = TypedEvent<[
    string,
    string
], {
    previousTimelock: string;
    newTimelock: string;
}>;
export type SetTimelockEventFilter = TypedEventFilter<SetTimelockEvent>;
export type SetVaultEvent = TypedEvent<[
    string,
    string
], {
    previousVault: string;
    newVault: string;
}>;
export type SetVaultEventFilter = TypedEventFilter<SetVaultEvent>;
export type StakeBlpEvent = TypedEvent<[
    string,
    BigNumber
], {
    account: string;
    amount: BigNumber;
}>;
export type StakeBlpEventFilter = TypedEventFilter<StakeBlpEvent>;
export type StakeBitoroEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], {
    account: string;
    token: string;
    amount: BigNumber;
    unlockTime: BigNumber;
}>;
export type StakeBitoroEventFilter = TypedEventFilter<StakeBitoroEvent>;
export type UnstakeBlpEvent = TypedEvent<[
    string,
    BigNumber
], {
    account: string;
    amount: BigNumber;
}>;
export type UnstakeBlpEventFilter = TypedEventFilter<UnstakeBlpEvent>;
export type UnstakeBitoroEvent = TypedEvent<[
    string,
    BigNumber
], {
    account: string;
    amount: BigNumber;
}>;
export type UnstakeBitoroEventFilter = TypedEventFilter<UnstakeBitoroEvent>;
export interface RewardRouter extends BaseContract {
    contractName: "RewardRouter";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RewardRouterInterface;
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
        averageStakePeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        batchCompoundForAccounts(_accounts: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchStakeBitoroForAccount(_accounts: string[], _amounts: BigNumberish[], _unlockTime: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimAll(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimAllUnwrap(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimFromBlp(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimFromBlpUnwrap(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimFromVe(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimFromVeUnwrap(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimVestedTokenFromVe(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimableRewards(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimableVestedTokenFromBlp(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimableVestedTokenFromVe(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimedVestedTokenFromBlp(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimedVestedTokenFromVe(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        compound(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        compoundForAccount(_account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        depositToBlpVester(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        depositToVeVester(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        feeRewardRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        increaseStakeUnlockTime(lockPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(_tokens: [string, string, string, string, string], _rewardTrackers: [string, string, string, string], _vesters: [string, string], _distributors: [string, string], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        maxVestableTokenFromBlp(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxVestableTokenFromVe(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        bcb(overrides?: CallOverrides): Promise<[string]>;
        blp(overrides?: CallOverrides): Promise<[string]>;
        blpDistributor(overrides?: CallOverrides): Promise<[string]>;
        blpFeeTracker(overrides?: CallOverrides): Promise<[string]>;
        blpLockAmount(account: string, amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        blpBitoroTracker(overrides?: CallOverrides): Promise<[string]>;
        blpVester(overrides?: CallOverrides): Promise<[string]>;
        bitoro(overrides?: CallOverrides): Promise<[string]>;
        bitoroDistributor(overrides?: CallOverrides): Promise<[string]>;
        bitoroRewardRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        bitoroVester(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        poolOwnedRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        protocolLiquidityOwner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        reservedBlpAmount(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        setProtocolLiquidityOwner(_protocolLiquidityOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setTimelock(_timelock: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setVault(_vault: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stakeBcb(_amount: BigNumberish, lockPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stakeBcbForAccount(_account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stakeBlp(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stakeBitoro(_amount: BigNumberish, lockPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stakedBlpAmount(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        timelock(overrides?: CallOverrides): Promise<[string]>;
        totalVestedTokenFromBlp(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalVestedTokenFromVe(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unlockTime(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        unstakeBcbAndBitoro(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unstakeBlp(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        vault(overrides?: CallOverrides): Promise<[string]>;
        veFeeTracker(overrides?: CallOverrides): Promise<[string]>;
        veBitoroTracker(overrides?: CallOverrides): Promise<[string]>;
        votingEscrow(overrides?: CallOverrides): Promise<[string]>;
        votingEscrowedAmounts(account: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        votingEscrowedRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        weth(overrides?: CallOverrides): Promise<[string]>;
        withdrawFromBlpVester(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawFromVeVester(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawToken(_token: string, _account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    averageStakePeriod(overrides?: CallOverrides): Promise<BigNumber>;
    batchCompoundForAccounts(_accounts: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchStakeBitoroForAccount(_accounts: string[], _amounts: BigNumberish[], _unlockTime: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimAll(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimAllUnwrap(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimFromBlp(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimFromBlpUnwrap(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimFromVe(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimFromVeUnwrap(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimVestedTokenFromVe(account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimableRewards(account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimableVestedTokenFromBlp(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    claimableVestedTokenFromVe(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    claimedVestedTokenFromBlp(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    claimedVestedTokenFromVe(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    compound(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    compoundForAccount(_account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    depositToBlpVester(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    depositToVeVester(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    feeRewardRate(overrides?: CallOverrides): Promise<BigNumber>;
    increaseStakeUnlockTime(lockPeriod: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(_tokens: [string, string, string, string, string], _rewardTrackers: [string, string, string, string], _vesters: [string, string], _distributors: [string, string], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    maxVestableTokenFromBlp(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    maxVestableTokenFromVe(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    bcb(overrides?: CallOverrides): Promise<string>;
    blp(overrides?: CallOverrides): Promise<string>;
    blpDistributor(overrides?: CallOverrides): Promise<string>;
    blpFeeTracker(overrides?: CallOverrides): Promise<string>;
    blpLockAmount(account: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    blpBitoroTracker(overrides?: CallOverrides): Promise<string>;
    blpVester(overrides?: CallOverrides): Promise<string>;
    bitoro(overrides?: CallOverrides): Promise<string>;
    bitoroDistributor(overrides?: CallOverrides): Promise<string>;
    bitoroRewardRate(overrides?: CallOverrides): Promise<BigNumber>;
    bitoroVester(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    poolOwnedRate(overrides?: CallOverrides): Promise<BigNumber>;
    protocolLiquidityOwner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    reservedBlpAmount(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    setProtocolLiquidityOwner(_protocolLiquidityOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setTimelock(_timelock: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setVault(_vault: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stakeBcb(_amount: BigNumberish, lockPeriod: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stakeBcbForAccount(_account: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stakeBlp(_amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stakeBitoro(_amount: BigNumberish, lockPeriod: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stakedBlpAmount(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    timelock(overrides?: CallOverrides): Promise<string>;
    totalVestedTokenFromBlp(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    totalVestedTokenFromVe(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unlockTime(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    unstakeBcbAndBitoro(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unstakeBlp(_amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    vault(overrides?: CallOverrides): Promise<string>;
    veFeeTracker(overrides?: CallOverrides): Promise<string>;
    veBitoroTracker(overrides?: CallOverrides): Promise<string>;
    votingEscrow(overrides?: CallOverrides): Promise<string>;
    votingEscrowedAmounts(account: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    votingEscrowedRate(overrides?: CallOverrides): Promise<BigNumber>;
    weth(overrides?: CallOverrides): Promise<string>;
    withdrawFromBlpVester(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawFromVeVester(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawToken(_token: string, _account: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        averageStakePeriod(overrides?: CallOverrides): Promise<BigNumber>;
        batchCompoundForAccounts(_accounts: string[], overrides?: CallOverrides): Promise<void>;
        batchStakeBitoroForAccount(_accounts: string[], _amounts: BigNumberish[], _unlockTime: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        claimAll(overrides?: CallOverrides): Promise<void>;
        claimAllUnwrap(overrides?: CallOverrides): Promise<void>;
        claimFromBlp(overrides?: CallOverrides): Promise<void>;
        claimFromBlpUnwrap(overrides?: CallOverrides): Promise<void>;
        claimFromVe(overrides?: CallOverrides): Promise<void>;
        claimFromVeUnwrap(overrides?: CallOverrides): Promise<void>;
        claimVestedTokenFromVe(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimableRewards(account: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            blpFeeAmount: BigNumber;
            blpBitoroAmount: BigNumber;
            veFeeAmount: BigNumber;
            veBitoroAmount: BigNumber;
            bcbAmount: BigNumber;
        }>;
        claimableVestedTokenFromBlp(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimableVestedTokenFromVe(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimedVestedTokenFromBlp(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimedVestedTokenFromVe(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        compound(overrides?: CallOverrides): Promise<void>;
        compoundForAccount(_account: string, overrides?: CallOverrides): Promise<void>;
        depositToBlpVester(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        depositToVeVester(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        feeRewardRate(overrides?: CallOverrides): Promise<BigNumber>;
        increaseStakeUnlockTime(lockPeriod: BigNumberish, overrides?: CallOverrides): Promise<void>;
        initialize(_tokens: [string, string, string, string, string], _rewardTrackers: [string, string, string, string], _vesters: [string, string], _distributors: [string, string], overrides?: CallOverrides): Promise<void>;
        maxVestableTokenFromBlp(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxVestableTokenFromVe(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        bcb(overrides?: CallOverrides): Promise<string>;
        blp(overrides?: CallOverrides): Promise<string>;
        blpDistributor(overrides?: CallOverrides): Promise<string>;
        blpFeeTracker(overrides?: CallOverrides): Promise<string>;
        blpLockAmount(account: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        blpBitoroTracker(overrides?: CallOverrides): Promise<string>;
        blpVester(overrides?: CallOverrides): Promise<string>;
        bitoro(overrides?: CallOverrides): Promise<string>;
        bitoroDistributor(overrides?: CallOverrides): Promise<string>;
        bitoroRewardRate(overrides?: CallOverrides): Promise<BigNumber>;
        bitoroVester(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        poolOwnedRate(overrides?: CallOverrides): Promise<BigNumber>;
        protocolLiquidityOwner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        reservedBlpAmount(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        setProtocolLiquidityOwner(_protocolLiquidityOwner: string, overrides?: CallOverrides): Promise<void>;
        setTimelock(_timelock: string, overrides?: CallOverrides): Promise<void>;
        setVault(_vault: string, overrides?: CallOverrides): Promise<void>;
        stakeBcb(_amount: BigNumberish, lockPeriod: BigNumberish, overrides?: CallOverrides): Promise<void>;
        stakeBcbForAccount(_account: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        stakeBlp(_amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        stakeBitoro(_amount: BigNumberish, lockPeriod: BigNumberish, overrides?: CallOverrides): Promise<void>;
        stakedBlpAmount(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        timelock(overrides?: CallOverrides): Promise<string>;
        totalVestedTokenFromBlp(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        totalVestedTokenFromVe(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        unlockTime(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        unstakeBcbAndBitoro(overrides?: CallOverrides): Promise<void>;
        unstakeBlp(_amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<string>;
        veFeeTracker(overrides?: CallOverrides): Promise<string>;
        veBitoroTracker(overrides?: CallOverrides): Promise<string>;
        votingEscrow(overrides?: CallOverrides): Promise<string>;
        votingEscrowedAmounts(account: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        votingEscrowedRate(overrides?: CallOverrides): Promise<BigNumber>;
        weth(overrides?: CallOverrides): Promise<string>;
        withdrawFromBlpVester(overrides?: CallOverrides): Promise<void>;
        withdrawFromVeVester(overrides?: CallOverrides): Promise<void>;
        withdrawToken(_token: string, _account: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "SetProtocolLiquidityOwner(address,address)"(previousOwner?: null, newOwner?: null): SetProtocolLiquidityOwnerEventFilter;
        SetProtocolLiquidityOwner(previousOwner?: null, newOwner?: null): SetProtocolLiquidityOwnerEventFilter;
        "SetTimelock(address,address)"(previousTimelock?: null, newTimelock?: null): SetTimelockEventFilter;
        SetTimelock(previousTimelock?: null, newTimelock?: null): SetTimelockEventFilter;
        "SetVault(address,address)"(previousVault?: null, newVault?: null): SetVaultEventFilter;
        SetVault(previousVault?: null, newVault?: null): SetVaultEventFilter;
        "StakeBlp(address,uint256)"(account?: null, amount?: null): StakeBlpEventFilter;
        StakeBlp(account?: null, amount?: null): StakeBlpEventFilter;
        "StakeBitoro(address,address,uint256,uint256)"(account?: null, token?: null, amount?: null, unlockTime?: null): StakeBitoroEventFilter;
        StakeBitoro(account?: null, token?: null, amount?: null, unlockTime?: null): StakeBitoroEventFilter;
        "UnstakeBlp(address,uint256)"(account?: null, amount?: null): UnstakeBlpEventFilter;
        UnstakeBlp(account?: null, amount?: null): UnstakeBlpEventFilter;
        "UnstakeBitoro(address,uint256)"(account?: null, amount?: null): UnstakeBitoroEventFilter;
        UnstakeBitoro(account?: null, amount?: null): UnstakeBitoroEventFilter;
    };
    estimateGas: {
        averageStakePeriod(overrides?: CallOverrides): Promise<BigNumber>;
        batchCompoundForAccounts(_accounts: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchStakeBitoroForAccount(_accounts: string[], _amounts: BigNumberish[], _unlockTime: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimAll(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimAllUnwrap(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimFromBlp(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimFromBlpUnwrap(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimFromVe(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimFromVeUnwrap(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimVestedTokenFromVe(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimableRewards(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimableVestedTokenFromBlp(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimableVestedTokenFromVe(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimedVestedTokenFromBlp(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimedVestedTokenFromVe(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        compound(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        compoundForAccount(_account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        depositToBlpVester(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        depositToVeVester(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        feeRewardRate(overrides?: CallOverrides): Promise<BigNumber>;
        increaseStakeUnlockTime(lockPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(_tokens: [string, string, string, string, string], _rewardTrackers: [string, string, string, string], _vesters: [string, string], _distributors: [string, string], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        maxVestableTokenFromBlp(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxVestableTokenFromVe(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        bcb(overrides?: CallOverrides): Promise<BigNumber>;
        blp(overrides?: CallOverrides): Promise<BigNumber>;
        blpDistributor(overrides?: CallOverrides): Promise<BigNumber>;
        blpFeeTracker(overrides?: CallOverrides): Promise<BigNumber>;
        blpLockAmount(account: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        blpBitoroTracker(overrides?: CallOverrides): Promise<BigNumber>;
        blpVester(overrides?: CallOverrides): Promise<BigNumber>;
        bitoro(overrides?: CallOverrides): Promise<BigNumber>;
        bitoroDistributor(overrides?: CallOverrides): Promise<BigNumber>;
        bitoroRewardRate(overrides?: CallOverrides): Promise<BigNumber>;
        bitoroVester(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        poolOwnedRate(overrides?: CallOverrides): Promise<BigNumber>;
        protocolLiquidityOwner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        reservedBlpAmount(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        setProtocolLiquidityOwner(_protocolLiquidityOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setTimelock(_timelock: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setVault(_vault: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stakeBcb(_amount: BigNumberish, lockPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stakeBcbForAccount(_account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stakeBlp(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stakeBitoro(_amount: BigNumberish, lockPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stakedBlpAmount(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        timelock(overrides?: CallOverrides): Promise<BigNumber>;
        totalVestedTokenFromBlp(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        totalVestedTokenFromVe(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unlockTime(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        unstakeBcbAndBitoro(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unstakeBlp(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<BigNumber>;
        veFeeTracker(overrides?: CallOverrides): Promise<BigNumber>;
        veBitoroTracker(overrides?: CallOverrides): Promise<BigNumber>;
        votingEscrow(overrides?: CallOverrides): Promise<BigNumber>;
        votingEscrowedAmounts(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        votingEscrowedRate(overrides?: CallOverrides): Promise<BigNumber>;
        weth(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawFromBlpVester(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawFromVeVester(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawToken(_token: string, _account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        averageStakePeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        batchCompoundForAccounts(_accounts: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchStakeBitoroForAccount(_accounts: string[], _amounts: BigNumberish[], _unlockTime: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimAll(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimAllUnwrap(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimFromBlp(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimFromBlpUnwrap(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimFromVe(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimFromVeUnwrap(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimVestedTokenFromVe(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimableRewards(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimableVestedTokenFromBlp(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimableVestedTokenFromVe(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimedVestedTokenFromBlp(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimedVestedTokenFromVe(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        compound(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        compoundForAccount(_account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        depositToBlpVester(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        depositToVeVester(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        feeRewardRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseStakeUnlockTime(lockPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_tokens: [string, string, string, string, string], _rewardTrackers: [string, string, string, string], _vesters: [string, string], _distributors: [string, string], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        maxVestableTokenFromBlp(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxVestableTokenFromVe(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bcb(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        blp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        blpDistributor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        blpFeeTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        blpLockAmount(account: string, amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        blpBitoroTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        blpVester(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bitoro(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bitoroDistributor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bitoroRewardRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bitoroVester(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolOwnedRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolLiquidityOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        reservedBlpAmount(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setProtocolLiquidityOwner(_protocolLiquidityOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setTimelock(_timelock: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setVault(_vault: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stakeBcb(_amount: BigNumberish, lockPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stakeBcbForAccount(_account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stakeBlp(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stakeBitoro(_amount: BigNumberish, lockPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stakedBlpAmount(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        timelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalVestedTokenFromBlp(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalVestedTokenFromVe(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unlockTime(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unstakeBcbAndBitoro(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unstakeBlp(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        veFeeTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        veBitoroTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingEscrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingEscrowedAmounts(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingEscrowedRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawFromBlpVester(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawFromVeVester(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawToken(_token: string, _account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
