/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Timelock, TimelockInterface } from "../Timelock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "CancelTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "ExecuteTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "NewDelay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "QueueTransaction",
    type: "event",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAXIMUM_DELAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINIMUM_DELAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "admin_initialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "cancelTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "queueTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "queuedTransactions",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
      },
    ],
    name: "setDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pendingAdmin_",
        type: "address",
      },
    ],
    name: "setPendingAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200225238038062002252833981810160405281019062000037919062000160565b61a8c08110156200007f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000769062000217565b60405180910390fd5b62278d00811115620000c8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000bf90620001f5565b60405180910390fd5b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806002819055506000600360006101000a81548160ff02191690831515021790555050506200035f565b60008151905062000143816200032b565b92915050565b6000815190506200015a8162000345565b92915050565b600080604083850312156200017a576200017962000288565b5b60006200018a8582860162000132565b92505060206200019d8582860162000149565b9150509250929050565b6000620001b6603b8362000239565b9150620001c3826200028d565b604082019050919050565b6000620001dd60378362000239565b9150620001ea82620002dc565b604082019050919050565b600060208201905081810360008301526200021081620001a7565b9050919050565b600060208201905081810360008301526200023281620001ce565b9050919050565b600082825260208201905092915050565b600062000257826200025e565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600080fd5b7f54696d656c6f636b3a3a636f6e7374727563746f723a2044656c6179206d757360008201527f74206e6f7420657863656564206d6178696d756d2064656c61792e0000000000602082015250565b7f54696d656c6f636b3a3a636f6e7374727563746f723a2044656c6179206d757360008201527f7420657863656564206d696e696d756d2064656c61792e000000000000000000602082015250565b62000336816200024a565b81146200034257600080fd5b50565b62000350816200027e565b81146200035c57600080fd5b50565b611ee3806200036f6000396000f3fe6080604052600436106100e15760003560e01c80636fc1f57e1161007f578063c1a287e211610059578063c1a287e21461029a578063e177246e146102c5578063f2b06537146102ee578063f851a4401461032b576100e8565b80636fc1f57e146102195780637d645fab14610244578063b1b43ae51461026f576100e8565b80633a66f901116100bb5780633a66f9011461015f5780634dd18bf51461019c578063591fcdfe146101c55780636a42b8f8146101ee576100e8565b80630825f38f146100ed5780630e18b6811461011d5780632678224714610134576100e8565b366100e857005b600080fd5b61010760048036038101906101029190610ffe565b610356565b60405161011491906114dc565b60405180910390f35b34801561012957600080fd5b5061013261069c565b005b34801561014057600080fd5b50610149610813565b604051610156919061142a565b60405180910390f35b34801561016b57600080fd5b5061018660048036038101906101819190610ffe565b610839565b60405161019391906114c1565b60405180910390f35b3480156101a857600080fd5b506101c360048036038101906101be9190610fd1565b6109e2565b005b3480156101d157600080fd5b506101ec60048036038101906101e79190610ffe565b610bbd565b005b3480156101fa57600080fd5b50610203610d07565b60405161021091906116be565b60405180910390f35b34801561022557600080fd5b5061022e610d0d565b60405161023b91906114a6565b60405180910390f35b34801561025057600080fd5b50610259610d20565b60405161026691906116be565b60405180910390f35b34801561027b57600080fd5b50610284610d27565b60405161029191906116be565b60405180910390f35b3480156102a657600080fd5b506102af610d2d565b6040516102bc91906116be565b60405180910390f35b3480156102d157600080fd5b506102ec60048036038101906102e791906110de565b610d34565b005b3480156102fa57600080fd5b50610315600480360381019061031091906110b1565b610e66565b60405161032291906114a6565b60405180910390f35b34801561033757600080fd5b50610340610e86565b60405161034d919061142a565b60405180910390f35b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103dd906114fe565b60405180910390fd5b60008686868686604051602001610401959493929190611445565b6040516020818303038152906040528051906020012090506004600082815260200190815260200160002060009054906101000a900460ff16610479576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610470906115de565b60405180910390fd5b82610482610eaa565b10156104c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ba9061155e565b60405180910390fd5b62127500836104d291906117f6565b6104da610eaa565b111561051b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105129061153e565b60405180910390fd5b60006004600083815260200190815260200160002060006101000a81548160ff021916908315150217905550606060008651141561055b57849050610587565b8580519060200120856040516020016105759291906113eb565b60405160208183030381529060405290505b6000808973ffffffffffffffffffffffffffffffffffffffff1689846040516105b09190611413565b60006040518083038185875af1925050503d80600081146105ed576040519150601f19603f3d011682016040523d82523d6000602084013e6105f2565b606091505b509150915081610637576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062e9061165e565b60405180910390fd5b8973ffffffffffffffffffffffffffffffffffffffff16847fa560e3198060a2f10670c1ec5b403077ea6ae93ca8de1c32b451dc1a943cd6e78b8b8b8b60405161068494939291906116d9565b60405180910390a38094505050505095945050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461072c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610723906115fe565b60405180910390fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c60405160405180910390a2565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c19061163e565b60405180910390fd5b6002546108d5610eaa565b6108df91906117f6565b821015610921576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109189061167e565b60405180910390fd5b6000868686868660405160200161093c959493929190611445565b60405160208183030381529060405280519060200120905060016004600083815260200190815260200160002060006101000a81548160ff0219169083151502179055508673ffffffffffffffffffffffffffffffffffffffff16817f76e2796dc3a81d57b0e8504b647febcbeeb5f4af818e164f11eef8131a6a763f888888886040516109cd94939291906116d9565b60405180910390a38091505095945050505050565b600360009054906101000a900460ff1615610a6a573073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a65576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5c9061161e565b60405180910390fd5b610b14565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610af8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aef9061159e565b60405180910390fd5b6001600360006101000a81548160ff0219169083151502179055505b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f69d78e38a01985fbb1462961809b4b2d65531bc93b2b94037f3334b82ca4a75660405160405180910390a250565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c4b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c429061151e565b60405180910390fd5b60008585858585604051602001610c66959493929190611445565b60405160208183030381529060405280519060200120905060006004600083815260200190815260200160002060006101000a81548160ff0219169083151502179055508573ffffffffffffffffffffffffffffffffffffffff16817f2fffc091a501fd91bfbff27141450d3acb40fb8e6d8382b243ec7a812a3aaf8787878787604051610cf794939291906116d9565b60405180910390a3505050505050565b60025481565b600360009054906101000a900460ff1681565b62278d0081565b61a8c081565b6212750081565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610da2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d999061169e565b60405180910390fd5b61a8c0811015610de7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dde9061157e565b60405180910390fd5b62278d00811115610e2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e24906115be565b60405180910390fd5b806002819055506002547f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c60405160405180910390a250565b60046020528060005260406000206000915054906101000a900460ff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600042905090565b6000610ec5610ec084611751565b61172c565b905082815260208101848484011115610ee157610ee06119aa565b5b610eec8482856118ca565b509392505050565b6000610f07610f0284611782565b61172c565b905082815260208101848484011115610f2357610f226119aa565b5b610f2e8482856118ca565b509392505050565b600081359050610f4581611e68565b92915050565b600081359050610f5a81611e7f565b92915050565b600082601f830112610f7557610f746119a5565b5b8135610f85848260208601610eb2565b91505092915050565b600082601f830112610fa357610fa26119a5565b5b8135610fb3848260208601610ef4565b91505092915050565b600081359050610fcb81611e96565b92915050565b600060208284031215610fe757610fe66119b4565b5b6000610ff584828501610f36565b91505092915050565b600080600080600060a0868803121561101a576110196119b4565b5b600061102888828901610f36565b955050602061103988828901610fbc565b945050604086013567ffffffffffffffff81111561105a576110596119af565b5b61106688828901610f8e565b935050606086013567ffffffffffffffff811115611087576110866119af565b5b61109388828901610f60565b92505060806110a488828901610fbc565b9150509295509295909350565b6000602082840312156110c7576110c66119b4565b5b60006110d584828501610f4b565b91505092915050565b6000602082840312156110f4576110f36119b4565b5b600061110284828501610fbc565b91505092915050565b6111148161184c565b82525050565b6111238161185e565b82525050565b6111328161186a565b82525050565b61114961114482611874565b61193d565b82525050565b600061115a826117b3565b61116481856117c9565b93506111748185602086016118d9565b61117d816119b9565b840191505092915050565b6000611193826117b3565b61119d81856117da565b93506111ad8185602086016118d9565b80840191505092915050565b60006111c4826117be565b6111ce81856117e5565b93506111de8185602086016118d9565b6111e7816119b9565b840191505092915050565b60006111ff6038836117e5565b915061120a826119ca565b604082019050919050565b60006112226037836117e5565b915061122d82611a19565b604082019050919050565b60006112456033836117e5565b915061125082611a68565b604082019050919050565b60006112686045836117e5565b915061127382611ab7565b606082019050919050565b600061128b6034836117e5565b915061129682611b2c565b604082019050919050565b60006112ae603b836117e5565b91506112b982611b7b565b604082019050919050565b60006112d16038836117e5565b91506112dc82611bca565b604082019050919050565b60006112f4603d836117e5565b91506112ff82611c19565b604082019050919050565b60006113176038836117e5565b915061132282611c68565b604082019050919050565b600061133a6038836117e5565b915061134582611cb7565b604082019050919050565b600061135d6036836117e5565b915061136882611d06565b604082019050919050565b6000611380603d836117e5565b915061138b82611d55565b604082019050919050565b60006113a36049836117e5565b91506113ae82611da4565b606082019050919050565b60006113c66031836117e5565b91506113d182611e19565b604082019050919050565b6113e5816118c0565b82525050565b60006113f78285611138565b6004820191506114078284611188565b91508190509392505050565b600061141f8284611188565b915081905092915050565b600060208201905061143f600083018461110b565b92915050565b600060a08201905061145a600083018861110b565b61146760208301876113dc565b818103604083015261147981866111b9565b9050818103606083015261148d818561114f565b905061149c60808301846113dc565b9695505050505050565b60006020820190506114bb600083018461111a565b92915050565b60006020820190506114d66000830184611129565b92915050565b600060208201905081810360008301526114f6818461114f565b905092915050565b60006020820190508181036000830152611517816111f2565b9050919050565b6000602082019050818103600083015261153781611215565b9050919050565b6000602082019050818103600083015261155781611238565b9050919050565b600060208201905081810360008301526115778161125b565b9050919050565b600060208201905081810360008301526115978161127e565b9050919050565b600060208201905081810360008301526115b7816112a1565b9050919050565b600060208201905081810360008301526115d7816112c4565b9050919050565b600060208201905081810360008301526115f7816112e7565b9050919050565b600060208201905081810360008301526116178161130a565b9050919050565b600060208201905081810360008301526116378161132d565b9050919050565b6000602082019050818103600083015261165781611350565b9050919050565b6000602082019050818103600083015261167781611373565b9050919050565b6000602082019050818103600083015261169781611396565b9050919050565b600060208201905081810360008301526116b7816113b9565b9050919050565b60006020820190506116d360008301846113dc565b92915050565b60006080820190506116ee60008301876113dc565b818103602083015261170081866111b9565b90508181036040830152611714818561114f565b905061172360608301846113dc565b95945050505050565b6000611736611747565b9050611742828261190c565b919050565b6000604051905090565b600067ffffffffffffffff82111561176c5761176b611976565b5b611775826119b9565b9050602081019050919050565b600067ffffffffffffffff82111561179d5761179c611976565b5b6117a6826119b9565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000611801826118c0565b915061180c836118c0565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561184157611840611947565b5b828201905092915050565b6000611857826118a0565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156118f75780820151818401526020810190506118dc565b83811115611906576000848401525b50505050565b611915826119b9565b810181811067ffffffffffffffff8211171561193457611933611976565b5b80604052505050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20436160008201527f6c6c206d75737420636f6d652066726f6d2061646d696e2e0000000000000000602082015250565b7f54696d656c6f636b3a3a63616e63656c5472616e73616374696f6e3a2043616c60008201527f6c206d75737420636f6d652066726f6d2061646d696e2e000000000000000000602082015250565b7f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260008201527f616e73616374696f6e206973207374616c652e00000000000000000000000000602082015250565b7f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260008201527f616e73616374696f6e206861736e2774207375727061737365642074696d652060208201527f6c6f636b2e000000000000000000000000000000000000000000000000000000604082015250565b7f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206560008201527f7863656564206d696e696d756d2064656c61792e000000000000000000000000602082015250565b7f54696d656c6f636b3a3a73657450656e64696e6741646d696e3a20466972737460008201527f2063616c6c206d75737420636f6d652066726f6d2061646d696e2e0000000000602082015250565b7f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e60008201527f6f7420657863656564206d6178696d756d2064656c61792e0000000000000000602082015250565b7f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260008201527f616e73616374696f6e206861736e2774206265656e207175657565642e000000602082015250565b7f54696d656c6f636b3a3a61636365707441646d696e3a2043616c6c206d75737460008201527f20636f6d652066726f6d2070656e64696e6741646d696e2e0000000000000000602082015250565b7f54696d656c6f636b3a3a73657450656e64696e6741646d696e3a2043616c6c2060008201527f6d75737420636f6d652066726f6d2054696d656c6f636b2e0000000000000000602082015250565b7f54696d656c6f636b3a3a71756575655472616e73616374696f6e3a2043616c6c60008201527f206d75737420636f6d652066726f6d2061646d696e2e00000000000000000000602082015250565b7f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260008201527f616e73616374696f6e20657865637574696f6e2072657665727465642e000000602082015250565b7f54696d656c6f636b3a3a71756575655472616e73616374696f6e3a204573746960008201527f6d6174656420657865637574696f6e20626c6f636b206d75737420736174697360208201527f66792064656c61792e0000000000000000000000000000000000000000000000604082015250565b7f54696d656c6f636b3a3a73657444656c61793a2043616c6c206d75737420636f60008201527f6d652066726f6d2054696d656c6f636b2e000000000000000000000000000000602082015250565b611e718161184c565b8114611e7c57600080fd5b50565b611e888161186a565b8114611e9357600080fd5b50565b611e9f816118c0565b8114611eaa57600080fd5b5056fea26469706673582212203578b19fca848a9b0bde86192a73bbe3e098dc1d1dfa0af6c3d1f23979c38ac864736f6c63430008070033";

export class Timelock__factory extends ContractFactory {
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
    admin_: string,
    delay_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Timelock> {
    return super.deploy(admin_, delay_, overrides || {}) as Promise<Timelock>;
  }
  getDeployTransaction(
    admin_: string,
    delay_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(admin_, delay_, overrides || {});
  }
  attach(address: string): Timelock {
    return super.attach(address) as Timelock;
  }
  connect(signer: Signer): Timelock__factory {
    return super.connect(signer) as Timelock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockInterface {
    return new utils.Interface(_abi) as TimelockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Timelock {
    return new Contract(address, _abi, signerOrProvider) as Timelock;
  }
}
