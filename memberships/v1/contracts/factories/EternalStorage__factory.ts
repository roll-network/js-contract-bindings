/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EternalStorage,
  EternalStorageInterface,
} from "../EternalStorage";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "record",
        type: "bytes32",
      },
    ],
    name: "getReferral",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "referral",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "referralFee",
            type: "uint256",
          },
        ],
        internalType: "struct MembershipsTypes.ScheduleReferral",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "record",
        type: "bytes32",
      },
    ],
    name: "getSchedule",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "initialized",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "merkleRoot",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "amountTotal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "released",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "lotToken",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "lotSize",
            type: "uint256[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "enum MembershipsTypes.AssetType",
                name: "assetType",
                type: "uint8",
              },
            ],
            internalType: "struct MembershipsTypes.Asset",
            name: "paymentAsset",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "pricePerLot",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rollFee",
            type: "uint256",
          },
        ],
        internalType: "struct MembershipsTypes.MintingSchedule",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "schedules",
    outputs: [
      {
        internalType: "bool",
        name: "initialized",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "revoked",
        type: "bool",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amountTotal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "released",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "enum MembershipsTypes.AssetType",
            name: "assetType",
            type: "uint8",
          },
        ],
        internalType: "struct MembershipsTypes.Asset",
        name: "paymentAsset",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "pricePerLot",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rollFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "schedulesReferral",
    outputs: [
      {
        internalType: "address",
        name: "referral",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "referralFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "record",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "address",
            name: "referral",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "referralFee",
            type: "uint256",
          },
        ],
        internalType: "struct MembershipsTypes.ScheduleReferral",
        name: "value",
        type: "tuple",
      },
    ],
    name: "setReferral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "record",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "initialized",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "merkleRoot",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "amountTotal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "released",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "lotToken",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "lotSize",
            type: "uint256[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "enum MembershipsTypes.AssetType",
                name: "assetType",
                type: "uint8",
              },
            ],
            internalType: "struct MembershipsTypes.Asset",
            name: "paymentAsset",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "pricePerLot",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rollFee",
            type: "uint256",
          },
        ],
        internalType: "struct MembershipsTypes.MintingSchedule",
        name: "value",
        type: "tuple",
      },
    ],
    name: "setSchedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061196c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631b2a58c2146100675780633adc277a1461008357806380845447146100b357806382e58d51146100e45780638d0ba65c14610114578063d1e16bfa14610130575b600080fd5b610081600480360381019061007c9190610871565b61016a565b005b61009d60048036038101906100989190610848565b610190565b6040516100aa9190610cf5565b60405180910390f35b6100cd60048036038101906100c89190610848565b610466565b6040516100db929190610c21565b60405180910390f35b6100fe60048036038101906100f99190610848565b6104aa565b60405161010b9190610d17565b60405180910390f35b61012e600480360381019061012991906108c5565b610537565b005b61014a60048036038101906101459190610848565b61055e565b6040516101619b9a99989796959493929190610c4a565b60405180910390f35b80600080848152602001908152602001600020818161018991906117bf565b9050505050565b6101986106d9565b600080838152602001908152602001600020604051806101a00160405290816000820160009054906101000a900460ff161515151581526020016000820160019054906101000a900460ff161515151581526020016000820160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382015481526020016004820154815260200160058201548152602001600682018054806020026020016040519081016040528092919081815260200182805480156102f957602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116102af575b505050505081526020016007820180548060200260200160405190810160405280929190818152602001828054801561035157602002820191906000526020600020905b81548152602001906001019080831161033d575b50505050508152602001600882016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900460ff16600181111561040b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6001811115610443577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b81525050815260200160098201548152602001600a820154815250509050919050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905082565b6104b2610764565b600160008381526020019081526020016000206040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815250509050919050565b8060016000848152602001908152602001600020818161055791906117cd565b9050505050565b60006020528060005260406000206000915090508060000160009054906101000a900460ff16908060000160019054906101000a900460ff16908060000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806002015490806003015490806004015490806005015490806008016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900460ff16600181111561068c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60018111156106c4577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b815250509080600901549080600a015490508b565b604051806101a00160405280600015158152602001600015158152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000801916815260200160008152602001600081526020016060815260200160608152602001610750610794565b815260200160008152602001600081525090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600060018111156107f6577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b81525090565b60008135905061080b816118f3565b92915050565b60006101c0828403121561082457600080fd5b81905092915050565b60006040828403121561083f57600080fd5b81905092915050565b60006020828403121561085a57600080fd5b6000610868848285016107fc565b91505092915050565b6000806040838503121561088457600080fd5b6000610892858286016107fc565b925050602083013567ffffffffffffffff8111156108af57600080fd5b6108bb85828601610811565b9150509250929050565b600080606083850312156108d857600080fd5b60006108e6858286016107fc565b92505060206108f78582860161082d565b9150509250929050565b600061090d8383610931565b60208301905092915050565b60006109258383610c03565b60208301905092915050565b61093a81610ee6565b82525050565b61094981610ee6565b82525050565b600061095a82610e73565b6109648185610ec4565b935061096f83610e14565b8060005b838110156109a05781516109878882610901565b975061099283610eaa565b925050600181019050610973565b5085935050505092915050565b60006109b882610e94565b6109c28185610ed5565b93506109cd83610e43565b8060005b838110156109fe5781516109e58882610919565b97506109f083610eb7565b9250506001810190506109d1565b5085935050505092915050565b610a1481610ef8565b82525050565b610a2381610ef8565b82525050565b610a3281610f04565b82525050565b610a4181610f04565b82525050565b610a5081610fd9565b82525050565b604082016000820151610a6c6000850182610931565b506020820151610a7f6020850182610a47565b50505050565b604082016000820151610a9b6000850182610931565b506020820151610aae6020850182610a47565b50505050565b60006101c083016000830151610acd6000860182610a0b565b506020830151610ae06020860182610a0b565b506040830151610af36040860182610931565b506060830151610b066060860182610c03565b506080830151610b196080860182610c03565b5060a0830151610b2c60a0860182610a29565b5060c0830151610b3f60c0860182610c03565b5060e0830151610b5260e0860182610c03565b50610100830151848203610100860152610b6c828261094f565b915050610120830151848203610120860152610b8882826109ad565b915050610140830151610b9f610140860182610a56565b50610160830151610bb4610180860182610c03565b50610180830151610bc96101a0860182610c03565b508091505092915050565b604082016000820151610bea6000850182610931565b506020820151610bfd6020850182610c03565b50505050565b610c0c81610f41565b82525050565b610c1b81610f41565b82525050565b6000604082019050610c366000830185610940565b610c436020830184610c12565b9392505050565b600061018082019050610c60600083018e610a1a565b610c6d602083018d610a1a565b610c7a604083018c610940565b610c87606083018b610c12565b610c94608083018a610c12565b610ca160a0830189610a38565b610cae60c0830188610c12565b610cbb60e0830187610c12565b610cc9610100830186610a85565b610cd7610140830185610c12565b610ce5610160830184610c12565b9c9b505050505050505050505050565b60006020820190508181036000830152610d0f8184610ab4565b905092915050565b6000604082019050610d2c6000830184610bd4565b92915050565b60008083356001602003843603038112610d4b57600080fd5b80840192508235915067ffffffffffffffff821115610d6957600080fd5b602083019250602082023603831315610d8157600080fd5b509250929050565b60008083356001602003843603038112610da257600080fd5b80840192508235915067ffffffffffffffff821115610dc057600080fd5b602083019250602082023603831315610dd857600080fd5b509250929050565b60008190506001806001038301049050919050565b60008190506001806001038301049050919050565b6000819050919050565b6000819050602082019050919050565b60008190508160005260206000209050919050565b6000819050919050565b6000819050602082019050919050565b60008190508160005260206000209050919050565b600082905092915050565b600081519050919050565b600081549050919050565b600082905092915050565b600081519050919050565b600081549050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610ef182610f21565b9050919050565b60008115159050919050565b6000819050919050565b6000819050610f1c826118b1565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b5b81811015610f6a57610f5f60008261154a565b600181019050610f4c565b5050565b5b81811015610f8d57610f8260008261154a565b600181019050610f6f565b5050565b6000610f9c82610feb565b9050919050565b6000610fae82610ef8565b9050919050565b6000610fc082610f04565b9050919050565b6000610fd282610f0e565b9050919050565b6000610fe482610f0e565b9050919050565b6000610ff682610ffd565b9050919050565b600061100882610f21565b9050919050565b600061101a82610f41565b9050919050565b61102b8383610e68565b6110358183611434565b61103e83610e0a565b61104783610e24565b6000805b84811015611082578361105d816113c6565b905061106a818486611867565b6020850194506001840193505060018101905061104b565b5050505050505050565b6110968383610e89565b6110a08183611498565b6110a983610e39565b6110b283610e53565b6000805b848110156110ed57836110c88161141e565b90506110d581848661188c565b602085019450600184019350506001810190506110b6565b5050505050505050565b600081016000830180611109816113c6565b90506111158184611728565b50505060008101602083018061112a81611408565b90506111368184611821565b5050505050565b60008101600083018061114f816113dc565b905061115b818461176b565b505050600081016020830180611170816113dc565b905061117c81846117fe565b505050600081016040830180611191816113c6565b905061119d8184611844565b5050506001810160608301806111b28161141e565b90506111be81846117db565b5050506002810160808301806111d38161141e565b90506111df81846117db565b5050506003810160a08301806111f4816113f2565b9050611200818461178e565b5050506004810160c08301806112158161141e565b905061122181846117db565b5050506005810160e08301806112368161141e565b905061124281846117db565b5050506006810161010083016112588185610d32565b61126381838661174b565b5050505060078101610120830161127a8185610d89565b61128581838661175b565b505050506008810161014083018061129d81846117b1565b505050600981016101808301806112b38161141e565b90506112bf81846117db565b505050600a81016101a08301806112d58161141e565b90506112e181846117db565b5050505050565b6000810160008301806112fa816113c6565b90506113068184611728565b50505060018101602083018061131b8161141e565b905061132781846117db565b5050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000819050919050565b6000819050919050565b60006113ab8261153d565b9050919050565b6000819050919050565b6000819050919050565b600081356113d3816118c5565b80915050919050565b600081356113e9816118dc565b80915050919050565b600081356113ff816118f3565b80915050919050565b600081356114158161190a565b80915050919050565b6000813561142b8161191a565b80915050919050565b6801000000000000000082111561144e5761144d61135d565b5b61145781610e7e565b828255808310156114935761146b81610de0565b61147484610de0565b61147d84610e24565b81810183820161148d8183610f4b565b50505050505b505050565b680100000000000000008211156114b2576114b161135d565b5b6114bb81610e9f565b828255808310156114f7576114cf81610df5565b6114d884610df5565b6114e184610e53565b8181018382016114f18183610f6e565b50505050505b505050565b60008160001b9050919050565b60008160101b9050919050565b60008160a01b9050919050565b60008160081b9050919050565b600082821b905092915050565b60008160001c9050919050565b611552611931565b61155d81848461188c565b505050565b600060ff61156f846114fc565b9350801983169250808416831791505092915050565b600061ff0061159384611523565b9350801983169250808416831791505092915050565b600074ff00000000000000000000000000000000000000006115ca84611516565b9350801983169250808416831791505092915050565b600073ffffffffffffffffffffffffffffffffffffffff611600846114fc565b9350801983169250808416831791505092915050565b600075ffffffffffffffffffffffffffffffffffffffff000061163884611509565b9350801983169250808416831791505092915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61167a846114fc565b9350801983169250808416831791505092915050565b6000600883026116b473ffffffffffffffffffffffffffffffffffffffff82611530565b6116be8683611530565b95508019841693508086168417925050509392505050565b6000600883026117067fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611530565b6117108683611530565b95508019841693508086168417925050509392505050565b61173182610f91565b61174461173d8261138c565b83546115e0565b8255505050565b611756838383611021565b505050565b61176683838361108c565b505050565b61177482610fa3565b61178761178082611396565b8354611562565b8255505050565b61179782610fb5565b6117aa6117a3826113a0565b835461164e565b8255505050565b6117bb82826110f7565b5050565b6117c9828261113d565b5050565b6117d782826112e8565b5050565b6117e48261100f565b6117f76117f0826113bc565b835461164e565b8255505050565b61180782610fa3565b61181a61181382611396565b8354611585565b8255505050565b61182a82610fc7565b61183d611836826113b2565b83546115a9565b8255505050565b61184d82610f91565b6118606118598261138c565b8354611616565b8255505050565b61187083610f91565b61188461187c8261138c565b848454611690565b825550505050565b6118958361100f565b6118a96118a1826113bc565b8484546116d6565b825550505050565b600281106118c2576118c161132e565b5b50565b6118ce81610ee6565b81146118d957600080fd5b50565b6118e581610ef8565b81146118f057600080fd5b50565b6118fc81610f04565b811461190757600080fd5b50565b6002811061191757600080fd5b50565b61192381610f41565b811461192e57600080fd5b50565b60009056fea264697066735822122041cd00c72a74d00a98d9c113ece9e075c3c916ca0dbae66b2365cffb704c8d0f64736f6c63430008040033";

export class EternalStorage__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EternalStorage> {
    return super.deploy(overrides || {}) as Promise<EternalStorage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EternalStorage {
    return super.attach(address) as EternalStorage;
  }
  connect(signer: Signer): EternalStorage__factory {
    return super.connect(signer) as EternalStorage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EternalStorageInterface {
    return new utils.Interface(_abi) as EternalStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EternalStorage {
    return new Contract(address, _abi, signerOrProvider) as EternalStorage;
  }
}