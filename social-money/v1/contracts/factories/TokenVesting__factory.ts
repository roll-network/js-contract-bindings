/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { TokenVesting, TokenVestingInterface } from "../TokenVesting";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_token",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "WEEKS_IN_SECONDS",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_token",
        type: "address",
      },
    ],
    name: "vestedAmount",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_token",
        type: "address",
      },
    ],
    name: "releaseableAmount",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_token",
        type: "address",
      },
      {
        name: "_vestingBeneficiary",
        type: "address",
      },
      {
        name: "_vestingPeriodInWeeks",
        type: "uint256",
      },
    ],
    name: "addToken",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "parseAddr",
    outputs: [
      {
        name: "parsed",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
    ],
    name: "vestingInfo",
    outputs: [
      {
        name: "vestingBeneficiary",
        type: "address",
      },
      {
        name: "releasedSupply",
        type: "uint256",
      },
      {
        name: "start",
        type: "uint256",
      },
      {
        name: "duration",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_token",
        type: "address",
      },
    ],
    name: "getVestingInfo",
    outputs: [
      {
        components: [
          {
            name: "vestingBeneficiary",
            type: "address",
          },
          {
            name: "releasedSupply",
            type: "uint256",
          },
          {
            name: "start",
            type: "uint256",
          },
          {
            name: "duration",
            type: "uint256",
          },
        ],
        name: "",
        type: "tuple",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        name: "vestingBeneficiary",
        type: "address",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Released",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        name: "vestingBeneficiary",
        type: "address",
      },
      {
        indexed: false,
        name: "vestingPeriodInWeeks",
        type: "uint256",
      },
    ],
    name: "LogTokenAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
];

export class TokenVesting__factory {
  static readonly abi = _abi;
  static createInterface(): TokenVestingInterface {
    return new utils.Interface(_abi) as TokenVestingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenVesting {
    return new Contract(address, _abi, signerOrProvider) as TokenVesting;
  }
}
