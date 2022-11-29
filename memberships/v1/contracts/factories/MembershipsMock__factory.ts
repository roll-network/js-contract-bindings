/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  MembershipsMock,
  MembershipsMockInterface,
} from "../MembershipsMock";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes32",
        name: "_scheduleId",
        type: "bytes32",
      },
    ],
    name: "claim",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class MembershipsMock__factory {
  static readonly abi = _abi;
  static createInterface(): MembershipsMockInterface {
    return new utils.Interface(_abi) as MembershipsMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MembershipsMock {
    return new Contract(address, _abi, signerOrProvider) as MembershipsMock;
  }
}