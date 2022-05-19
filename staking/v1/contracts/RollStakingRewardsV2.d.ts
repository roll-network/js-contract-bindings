/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface RollStakingRewardsV2Interface extends ethers.utils.Interface {
  functions: {
    "acceptOwnership()": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "claimFreeTokens()": FunctionFragment;
    "earned(address,address)": FunctionFragment;
    "exit()": FunctionFragment;
    "freeTokens(address)": FunctionFragment;
    "getReward()": FunctionFragment;
    "getRewardForDuration(address)": FunctionFragment;
    "isValidRewardToken(address)": FunctionFragment;
    "lastPauseTime()": FunctionFragment;
    "lastTimeRewardApplicable()": FunctionFragment;
    "lastUnstake()": FunctionFragment;
    "lastUpdateTime()": FunctionFragment;
    "nominateNewOwner(address)": FunctionFragment;
    "nominatedOwner()": FunctionFragment;
    "notifyRewardAmount(uint256[],address[])": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "periodFinish()": FunctionFragment;
    "periodStart()": FunctionFragment;
    "registry()": FunctionFragment;
    "rewardPerToken(address)": FunctionFragment;
    "rewardTokens(address)": FunctionFragment;
    "rewardTokensAddresses(uint256)": FunctionFragment;
    "rewards(address,address)": FunctionFragment;
    "rewardsDistribution()": FunctionFragment;
    "rewardsDuration()": FunctionFragment;
    "setPaused(bool)": FunctionFragment;
    "setRewardsDistribution(address)": FunctionFragment;
    "setRewardsDuration(uint256,uint256)": FunctionFragment;
    "stake(uint256)": FunctionFragment;
    "token()": FunctionFragment;
    "tokenDecimals()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "userRewardPerTokenPaid(address,address)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claimFreeTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "earned",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "exit", values?: undefined): string;
  encodeFunctionData(functionFragment: "freeTokens", values: [string]): string;
  encodeFunctionData(functionFragment: "getReward", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRewardForDuration",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidRewardToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lastPauseTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastTimeRewardApplicable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastUnstake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdateTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nominateNewOwner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "nominatedOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "notifyRewardAmount",
    values: [BigNumberish[], string[]]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "periodFinish",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "periodStart",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rewardPerToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardTokensAddresses",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewards",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsDistribution",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsDuration",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setPaused", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "setRewardsDistribution",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardsDuration",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenDecimals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "userRewardPerTokenPaid",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimFreeTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "freeTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRewardForDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidRewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastPauseTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastTimeRewardApplicable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastUnstake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdateTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nominateNewOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nominatedOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "notifyRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "periodFinish",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "periodStart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardTokensAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardsDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPaused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRewardsDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardsDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userRewardPerTokenPaid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "OwnerChanged(address,address)": EventFragment;
    "OwnerNominated(address)": EventFragment;
    "PauseChanged(bool)": EventFragment;
    "Recovered(address,uint256)": EventFragment;
    "RewardAdded(uint256,address)": EventFragment;
    "RewardPaid(address,address,uint256)": EventFragment;
    "RewardsUpdated(uint256,uint256)": EventFragment;
    "Staked(address,uint256)": EventFragment;
    "Withdrawn(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerNominated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PauseChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Recovered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardPaid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export type OwnerChangedEvent = TypedEvent<
  [string, string] & { oldOwner: string; newOwner: string }
>;

export type OwnerNominatedEvent = TypedEvent<[string] & { newOwner: string }>;

export type PauseChangedEvent = TypedEvent<[boolean] & { isPaused: boolean }>;

export type RecoveredEvent = TypedEvent<
  [string, BigNumber] & { token: string; amount: BigNumber }
>;

export type RewardAddedEvent = TypedEvent<
  [BigNumber, string] & { reward: BigNumber; token: string }
>;

export type RewardPaidEvent = TypedEvent<
  [string, string, BigNumber] & {
    user: string;
    token: string;
    reward: BigNumber;
  }
>;

export type RewardsUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber] & { newStart: BigNumber; newDuration: BigNumber }
>;

export type StakedEvent = TypedEvent<
  [string, BigNumber] & { user: string; amount: BigNumber }
>;

export type WithdrawnEvent = TypedEvent<
  [string, BigNumber] & { user: string; amount: BigNumber }
>;

export class RollStakingRewardsV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: RollStakingRewardsV2Interface;

  functions: {
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    claimFreeTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    earned(
      _account: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    exit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    freeTokens(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    getReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRewardForDuration(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isValidRewardToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    lastPauseTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastUnstake(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastUpdateTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    nominateNewOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    notifyRewardAmount(
      _rewards: BigNumberish[],
      _tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    periodFinish(overrides?: CallOverrides): Promise<[BigNumber]>;

    periodStart(overrides?: CallOverrides): Promise<[BigNumber]>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    rewardPerToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewardTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        rewardRate: BigNumber;
        rewardPerTokenStored: BigNumber;
      }
    >;

    rewardTokensAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    rewards(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewardsDistribution(overrides?: CallOverrides): Promise<[string]>;

    rewardsDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    setPaused(
      _paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRewardsDistribution(
      _rewardsDistribution: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRewardsDuration(
      _periodStart: BigNumberish,
      _rewardsDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    tokenDecimals(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    userRewardPerTokenPaid(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  claimFreeTokens(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  earned(
    _account: string,
    _token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  exit(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  freeTokens(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  getReward(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRewardForDuration(
    _token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isValidRewardToken(
    _token: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  lastPauseTime(overrides?: CallOverrides): Promise<BigNumber>;

  lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

  lastUnstake(overrides?: CallOverrides): Promise<BigNumber>;

  lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

  nominateNewOwner(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  notifyRewardAmount(
    _rewards: BigNumberish[],
    _tokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

  periodStart(overrides?: CallOverrides): Promise<BigNumber>;

  registry(overrides?: CallOverrides): Promise<string>;

  rewardPerToken(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

  rewardTokens(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      rewardRate: BigNumber;
      rewardPerTokenStored: BigNumber;
    }
  >;

  rewardTokensAddresses(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  rewards(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewardsDistribution(overrides?: CallOverrides): Promise<string>;

  rewardsDuration(overrides?: CallOverrides): Promise<BigNumber>;

  setPaused(
    _paused: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRewardsDistribution(
    _rewardsDistribution: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRewardsDuration(
    _periodStart: BigNumberish,
    _rewardsDuration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  tokenDecimals(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  userRewardPerTokenPaid(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdraw(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    claimFreeTokens(overrides?: CallOverrides): Promise<void>;

    earned(
      _account: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exit(overrides?: CallOverrides): Promise<void>;

    freeTokens(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getReward(overrides?: CallOverrides): Promise<void>;

    getRewardForDuration(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidRewardToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lastPauseTime(overrides?: CallOverrides): Promise<BigNumber>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

    lastUnstake(overrides?: CallOverrides): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(_owner: string, overrides?: CallOverrides): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    notifyRewardAmount(
      _rewards: BigNumberish[],
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

    periodStart(overrides?: CallOverrides): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<string>;

    rewardPerToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        rewardRate: BigNumber;
        rewardPerTokenStored: BigNumber;
      }
    >;

    rewardTokensAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    rewards(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardsDistribution(overrides?: CallOverrides): Promise<string>;

    rewardsDuration(overrides?: CallOverrides): Promise<BigNumber>;

    setPaused(_paused: boolean, overrides?: CallOverrides): Promise<void>;

    setRewardsDistribution(
      _rewardsDistribution: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setRewardsDuration(
      _periodStart: BigNumberish,
      _rewardsDuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    tokenDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    userRewardPerTokenPaid(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "OwnerChanged(address,address)"(
      oldOwner?: null,
      newOwner?: null
    ): TypedEventFilter<
      [string, string],
      { oldOwner: string; newOwner: string }
    >;

    OwnerChanged(
      oldOwner?: null,
      newOwner?: null
    ): TypedEventFilter<
      [string, string],
      { oldOwner: string; newOwner: string }
    >;

    "OwnerNominated(address)"(
      newOwner?: null
    ): TypedEventFilter<[string], { newOwner: string }>;

    OwnerNominated(
      newOwner?: null
    ): TypedEventFilter<[string], { newOwner: string }>;

    "PauseChanged(bool)"(
      isPaused?: null
    ): TypedEventFilter<[boolean], { isPaused: boolean }>;

    PauseChanged(
      isPaused?: null
    ): TypedEventFilter<[boolean], { isPaused: boolean }>;

    "Recovered(address,uint256)"(
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; amount: BigNumber }
    >;

    Recovered(
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; amount: BigNumber }
    >;

    "RewardAdded(uint256,address)"(
      reward?: null,
      token?: string | null
    ): TypedEventFilter<
      [BigNumber, string],
      { reward: BigNumber; token: string }
    >;

    RewardAdded(
      reward?: null,
      token?: string | null
    ): TypedEventFilter<
      [BigNumber, string],
      { reward: BigNumber; token: string }
    >;

    "RewardPaid(address,address,uint256)"(
      user?: string | null,
      token?: string | null,
      reward?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { user: string; token: string; reward: BigNumber }
    >;

    RewardPaid(
      user?: string | null,
      token?: string | null,
      reward?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { user: string; token: string; reward: BigNumber }
    >;

    "RewardsUpdated(uint256,uint256)"(
      newStart?: null,
      newDuration?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { newStart: BigNumber; newDuration: BigNumber }
    >;

    RewardsUpdated(
      newStart?: null,
      newDuration?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { newStart: BigNumber; newDuration: BigNumber }
    >;

    "Staked(address,uint256)"(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    Staked(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    "Withdrawn(address,uint256)"(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    Withdrawn(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    claimFreeTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    earned(
      _account: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    freeTokens(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRewardForDuration(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidRewardToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastPauseTime(overrides?: CallOverrides): Promise<BigNumber>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

    lastUnstake(overrides?: CallOverrides): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewardAmount(
      _rewards: BigNumberish[],
      _tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

    periodStart(overrides?: CallOverrides): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardTokens(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    rewardTokensAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewards(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardsDistribution(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsDuration(overrides?: CallOverrides): Promise<BigNumber>;

    setPaused(
      _paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRewardsDistribution(
      _rewardsDistribution: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRewardsDuration(
      _periodStart: BigNumberish,
      _rewardsDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    tokenDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    userRewardPerTokenPaid(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimFreeTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    earned(
      _account: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    freeTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRewardForDuration(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidRewardToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastPauseTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastTimeRewardApplicable(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastUnstake(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastUpdateTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nominateNewOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    notifyRewardAmount(
      _rewards: BigNumberish[],
      _tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    periodFinish(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    periodStart(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardPerToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardTokensAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewards(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardsDistribution(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardsDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setPaused(
      _paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRewardsDistribution(
      _rewardsDistribution: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRewardsDuration(
      _periodStart: BigNumberish,
      _rewardsDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userRewardPerTokenPaid(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
