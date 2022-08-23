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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface MembershipsViewInterface extends ethers.utils.Interface {
  functions: {
    "getBuyPerWallet(bytes32,address)": FunctionFragment;
    "getBuyWalletCount(bytes32)": FunctionFragment;
    "getCampaign(uint256)": FunctionFragment;
    "getCampaignByOwner(address)": FunctionFragment;
    "getCampaignByReferral(address)": FunctionFragment;
    "getCampaignBySchedule(bytes32)": FunctionFragment;
    "getCampaignMetadata(bytes32)": FunctionFragment;
    "getCampaignsLength()": FunctionFragment;
    "getClaimed(bytes32,uint8)": FunctionFragment;
    "getReferral(bytes32)": FunctionFragment;
    "getSchedule(bytes32)": FunctionFragment;
    "getTokensAllowed()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getBuyPerWallet",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getBuyWalletCount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCampaign",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCampaignByOwner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCampaignByReferral",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCampaignBySchedule",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCampaignMetadata",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCampaignsLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getClaimed",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getReferral",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSchedule",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokensAllowed",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getBuyPerWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBuyWalletCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCampaign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCampaignByOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCampaignByReferral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCampaignBySchedule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCampaignMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCampaignsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getClaimed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getReferral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSchedule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokensAllowed",
    data: BytesLike
  ): Result;

  events: {};
}

export class MembershipsView extends BaseContract {
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

  interface: MembershipsViewInterface;

  functions: {
    getBuyPerWallet(
      scheduleId: BytesLike,
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getBuyWalletCount(
      record: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getCampaign(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, string[], string] & {
          campaignId: string;
          phases: string[];
          metadata: string;
        }
      ]
    >;

    getCampaignByOwner(
      owner: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        ([string, string[], string] & {
          campaignId: string;
          phases: string[];
          metadata: string;
        })[]
      ]
    >;

    getCampaignByReferral(
      referral: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        ([string, string[], string] & {
          campaignId: string;
          phases: string[];
          metadata: string;
        })[]
      ]
    >;

    getCampaignBySchedule(
      schedule: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, BigNumber, BigNumber] & {
          campaignId: string;
          campaignIndex: BigNumber;
          scheduleIndex: BigNumber;
        }
      ]
    >;

    getCampaignMetadata(
      campaignId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getCampaignsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    getClaimed(
      scheduleID: BytesLike,
      userType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getReferral(
      record: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [[string, BigNumber] & { referral: string; referralFee: BigNumber }]
    >;

    getSchedule(
      scheduleId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          boolean,
          boolean,
          string,
          BigNumber,
          BigNumber,
          string,
          BigNumber,
          BigNumber,
          string[],
          BigNumber[],
          [string, number] & { token: string; assetType: number },
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          initialized: boolean;
          revoked: boolean;
          owner: string;
          start: BigNumber;
          duration: BigNumber;
          merkleRoot: string;
          amountTotal: BigNumber;
          released: BigNumber;
          lotToken: string[];
          lotSize: BigNumber[];
          paymentAsset: [string, number] & { token: string; assetType: number };
          pricePerLot: BigNumber;
          rollFee: BigNumber;
          maxBuyPerWallet: BigNumber;
        }
      ]
    >;

    getTokensAllowed(overrides?: CallOverrides): Promise<[string[]]>;
  };

  getBuyPerWallet(
    scheduleId: BytesLike,
    addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getBuyWalletCount(
    record: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCampaign(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string[], string] & {
      campaignId: string;
      phases: string[];
      metadata: string;
    }
  >;

  getCampaignByOwner(
    owner: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      ([string, string[], string] & {
        campaignId: string;
        phases: string[];
        metadata: string;
      })[]
    ]
  >;

  getCampaignByReferral(
    referral: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      ([string, string[], string] & {
        campaignId: string;
        phases: string[];
        metadata: string;
      })[]
    ]
  >;

  getCampaignBySchedule(
    schedule: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber] & {
      campaignId: string;
      campaignIndex: BigNumber;
      scheduleIndex: BigNumber;
    }
  >;

  getCampaignMetadata(
    campaignId: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getCampaignsLength(overrides?: CallOverrides): Promise<BigNumber>;

  getClaimed(
    scheduleID: BytesLike,
    userType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getReferral(
    record: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber] & { referral: string; referralFee: BigNumber }
  >;

  getSchedule(
    scheduleId: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [
      boolean,
      boolean,
      string,
      BigNumber,
      BigNumber,
      string,
      BigNumber,
      BigNumber,
      string[],
      BigNumber[],
      [string, number] & { token: string; assetType: number },
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      initialized: boolean;
      revoked: boolean;
      owner: string;
      start: BigNumber;
      duration: BigNumber;
      merkleRoot: string;
      amountTotal: BigNumber;
      released: BigNumber;
      lotToken: string[];
      lotSize: BigNumber[];
      paymentAsset: [string, number] & { token: string; assetType: number };
      pricePerLot: BigNumber;
      rollFee: BigNumber;
      maxBuyPerWallet: BigNumber;
    }
  >;

  getTokensAllowed(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    getBuyPerWallet(
      scheduleId: BytesLike,
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBuyWalletCount(
      record: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCampaign(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string[], string] & {
        campaignId: string;
        phases: string[];
        metadata: string;
      }
    >;

    getCampaignByOwner(
      owner: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        ([string, string[], string] & {
          campaignId: string;
          phases: string[];
          metadata: string;
        })[]
      ]
    >;

    getCampaignByReferral(
      referral: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        ([string, string[], string] & {
          campaignId: string;
          phases: string[];
          metadata: string;
        })[]
      ]
    >;

    getCampaignBySchedule(
      schedule: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber] & {
        campaignId: string;
        campaignIndex: BigNumber;
        scheduleIndex: BigNumber;
      }
    >;

    getCampaignMetadata(
      campaignId: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getCampaignsLength(overrides?: CallOverrides): Promise<BigNumber>;

    getClaimed(
      scheduleID: BytesLike,
      userType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReferral(
      record: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { referral: string; referralFee: BigNumber }
    >;

    getSchedule(
      scheduleId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        boolean,
        boolean,
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        string[],
        BigNumber[],
        [string, number] & { token: string; assetType: number },
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        initialized: boolean;
        revoked: boolean;
        owner: string;
        start: BigNumber;
        duration: BigNumber;
        merkleRoot: string;
        amountTotal: BigNumber;
        released: BigNumber;
        lotToken: string[];
        lotSize: BigNumber[];
        paymentAsset: [string, number] & { token: string; assetType: number };
        pricePerLot: BigNumber;
        rollFee: BigNumber;
        maxBuyPerWallet: BigNumber;
      }
    >;

    getTokensAllowed(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {};

  estimateGas: {
    getBuyPerWallet(
      scheduleId: BytesLike,
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBuyWalletCount(
      record: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCampaign(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCampaignByOwner(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCampaignByReferral(
      referral: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCampaignBySchedule(
      schedule: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCampaignMetadata(
      campaignId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCampaignsLength(overrides?: CallOverrides): Promise<BigNumber>;

    getClaimed(
      scheduleID: BytesLike,
      userType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReferral(
      record: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSchedule(
      scheduleId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokensAllowed(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getBuyPerWallet(
      scheduleId: BytesLike,
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBuyWalletCount(
      record: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCampaign(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCampaignByOwner(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCampaignByReferral(
      referral: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCampaignBySchedule(
      schedule: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCampaignMetadata(
      campaignId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCampaignsLength(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getClaimed(
      scheduleID: BytesLike,
      userType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReferral(
      record: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSchedule(
      scheduleId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokensAllowed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
