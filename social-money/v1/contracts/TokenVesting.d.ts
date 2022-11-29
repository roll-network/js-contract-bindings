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

interface TokenVestingInterface extends ethers.utils.Interface {
  functions: {
    "release(address)": FunctionFragment;
    "WEEKS_IN_SECONDS()": FunctionFragment;
    "vestedAmount(address)": FunctionFragment;
    "releaseableAmount(address)": FunctionFragment;
    "addToken(address,address,uint256)": FunctionFragment;
    "getOwner()": FunctionFragment;
    "owner()": FunctionFragment;
    "parseAddr(bytes)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "vestingInfo(address)": FunctionFragment;
    "getVestingInfo(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "release", values: [string]): string;
  encodeFunctionData(
    functionFragment: "WEEKS_IN_SECONDS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "vestedAmount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "releaseableAmount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addToken",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "parseAddr",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "vestingInfo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getVestingInfo",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "WEEKS_IN_SECONDS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vestedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releaseableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "parseAddr", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vestingInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVestingInfo",
    data: BytesLike
  ): Result;

  events: {
    "Released(address,address,uint256)": EventFragment;
    "LogTokenAdded(address,address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Released"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogTokenAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type ReleasedEvent = TypedEvent<
  [string, string, BigNumber] & {
    token: string;
    vestingBeneficiary: string;
    amount: BigNumber;
  }
>;

export type LogTokenAddedEvent = TypedEvent<
  [string, string, BigNumber] & {
    token: string;
    vestingBeneficiary: string;
    vestingPeriodInWeeks: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class TokenVesting extends BaseContract {
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

  interface: TokenVestingInterface;

  functions: {
    release(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    WEEKS_IN_SECONDS(overrides?: CallOverrides): Promise<[BigNumber]>;

    vestedAmount(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    releaseableAmount(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    addToken(
      _token: string,
      _vestingBeneficiary: string,
      _vestingPeriodInWeeks: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getOwner(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    parseAddr(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { parsed: string }>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vestingInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        vestingBeneficiary: string;
        releasedSupply: BigNumber;
        start: BigNumber;
        duration: BigNumber;
      }
    >;

    getVestingInfo(
      _token: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, BigNumber, BigNumber, BigNumber] & {
          vestingBeneficiary: string;
          releasedSupply: BigNumber;
          start: BigNumber;
          duration: BigNumber;
        }
      ]
    >;
  };

  release(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  WEEKS_IN_SECONDS(overrides?: CallOverrides): Promise<BigNumber>;

  vestedAmount(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

  releaseableAmount(
    _token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  addToken(
    _token: string,
    _vestingBeneficiary: string,
    _vestingPeriodInWeeks: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getOwner(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  parseAddr(data: BytesLike, overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vestingInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber] & {
      vestingBeneficiary: string;
      releasedSupply: BigNumber;
      start: BigNumber;
      duration: BigNumber;
    }
  >;

  getVestingInfo(
    _token: string,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber] & {
      vestingBeneficiary: string;
      releasedSupply: BigNumber;
      start: BigNumber;
      duration: BigNumber;
    }
  >;

  callStatic: {
    release(_token: string, overrides?: CallOverrides): Promise<void>;

    WEEKS_IN_SECONDS(overrides?: CallOverrides): Promise<BigNumber>;

    vestedAmount(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

    releaseableAmount(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addToken(
      _token: string,
      _vestingBeneficiary: string,
      _vestingPeriodInWeeks: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getOwner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    parseAddr(data: BytesLike, overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    vestingInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        vestingBeneficiary: string;
        releasedSupply: BigNumber;
        start: BigNumber;
        duration: BigNumber;
      }
    >;

    getVestingInfo(
      _token: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        vestingBeneficiary: string;
        releasedSupply: BigNumber;
        start: BigNumber;
        duration: BigNumber;
      }
    >;
  };

  filters: {
    "Released(address,address,uint256)"(
      token?: string | null,
      vestingBeneficiary?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { token: string; vestingBeneficiary: string; amount: BigNumber }
    >;

    Released(
      token?: string | null,
      vestingBeneficiary?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { token: string; vestingBeneficiary: string; amount: BigNumber }
    >;

    "LogTokenAdded(address,address,uint256)"(
      token?: string | null,
      vestingBeneficiary?: null,
      vestingPeriodInWeeks?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      {
        token: string;
        vestingBeneficiary: string;
        vestingPeriodInWeeks: BigNumber;
      }
    >;

    LogTokenAdded(
      token?: string | null,
      vestingBeneficiary?: null,
      vestingPeriodInWeeks?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      {
        token: string;
        vestingBeneficiary: string;
        vestingPeriodInWeeks: BigNumber;
      }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    release(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    WEEKS_IN_SECONDS(overrides?: CallOverrides): Promise<BigNumber>;

    vestedAmount(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

    releaseableAmount(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addToken(
      _token: string,
      _vestingBeneficiary: string,
      _vestingPeriodInWeeks: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    parseAddr(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vestingInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getVestingInfo(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    release(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    WEEKS_IN_SECONDS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vestedAmount(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    releaseableAmount(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addToken(
      _token: string,
      _vestingBeneficiary: string,
      _vestingPeriodInWeeks: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    parseAddr(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vestingInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVestingInfo(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}