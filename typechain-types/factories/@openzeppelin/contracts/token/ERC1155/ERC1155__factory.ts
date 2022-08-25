/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC1155,
  ERC1155Interface,
} from "../../../../../@openzeppelin/contracts/token/ERC1155/ERC1155";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
        type: "string",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002940380380620029408339818101604052810190620000379190620002b8565b62000048816200004f60201b60201c565b506200036e565b8060029080519060200190620000679291906200006b565b5050565b828054620000799062000338565b90600052602060002090601f0160209004810192826200009d5760008555620000e9565b82601f10620000b857805160ff1916838001178555620000e9565b82800160010185558215620000e9579182015b82811115620000e8578251825591602001919060010190620000cb565b5b509050620000f89190620000fc565b5090565b5b8082111562000117576000816000905550600101620000fd565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001848262000139565b810181811067ffffffffffffffff82111715620001a657620001a56200014a565b5b80604052505050565b6000620001bb6200011b565b9050620001c9828262000179565b919050565b600067ffffffffffffffff821115620001ec57620001eb6200014a565b5b620001f78262000139565b9050602081019050919050565b60005b838110156200022457808201518184015260208101905062000207565b8381111562000234576000848401525b50505050565b6000620002516200024b84620001ce565b620001af565b90508281526020810184848401111562000270576200026f62000134565b5b6200027d84828562000204565b509392505050565b600082601f8301126200029d576200029c6200012f565b5b8151620002af8482602086016200023a565b91505092915050565b600060208284031215620002d157620002d062000125565b5b600082015167ffffffffffffffff811115620002f257620002f16200012a565b5b620003008482850162000285565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200035157607f821691505b6020821081141562000368576200036762000309565b5b50919050565b6125c2806200037e6000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f414610138578063a22cb46514610168578063e985e9c514610184578063f242432a146101b457610087565b8062fdd58e1461008c57806301ffc9a7146100bc5780630e89341c146100ec5780632eb2c2d61461011c575b600080fd5b6100a660048036038101906100a191906113b6565b6101d0565b6040516100b39190611405565b60405180910390f35b6100d660048036038101906100d19190611478565b610299565b6040516100e391906114c0565b60405180910390f35b610106600480360381019061010191906114db565b61037b565b60405161011391906115a1565b60405180910390f35b610136600480360381019061013191906117c0565b61040f565b005b610152600480360381019061014d9190611952565b6104b0565b60405161015f9190611a88565b60405180910390f35b610182600480360381019061017d9190611ad6565b6105c9565b005b61019e60048036038101906101999190611b16565b6105df565b6040516101ab91906114c0565b60405180910390f35b6101ce60048036038101906101c99190611b56565b610673565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610241576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023890611c5f565b60405180910390fd5b60008083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061036457507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610374575061037382610714565b5b9050919050565b60606002805461038a90611cae565b80601f01602080910402602001604051908101604052809291908181526020018280546103b690611cae565b80156104035780601f106103d857610100808354040283529160200191610403565b820191906000526020600020905b8154815290600101906020018083116103e657829003601f168201915b50505050509050919050565b61041761077e565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16148061045d575061045c8561045761077e565b6105df565b5b61049c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049390611d52565b60405180910390fd5b6104a98585858585610786565b5050505050565b606081518351146104f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ed90611de4565b60405180910390fd5b6000835167ffffffffffffffff811115610513576105126115c8565b5b6040519080825280602002602001820160405280156105415781602001602082028036833780820191505090505b50905060005b84518110156105be5761058e85828151811061056657610565611e04565b5b602002602001015185838151811061058157610580611e04565b5b60200260200101516101d0565b8282815181106105a1576105a0611e04565b5b602002602001018181525050806105b790611e62565b9050610547565b508091505092915050565b6105db6105d461077e565b8383610aa8565b5050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61067b61077e565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806106c157506106c0856106bb61077e565b6105df565b5b610700576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f790611f1d565b60405180910390fd5b61070d8585858585610c15565b5050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b81518351146107ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c190611faf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561083a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083190612041565b60405180910390fd5b600061084461077e565b9050610854818787878787610eb1565b60005b8451811015610a0557600085828151811061087557610874611e04565b5b60200260200101519050600085838151811061089457610893611e04565b5b60200260200101519050600080600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610935576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092c906120d3565b60405180910390fd5b81810360008085815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160008085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109ea91906120f3565b92505081905550505050806109fe90611e62565b9050610857565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610a7c929190612149565b60405180910390a4610a92818787878787610eb9565b610aa0818787878787610ec1565b505050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0e906121f2565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610c0891906114c0565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610c85576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7c90612041565b60405180910390fd5b6000610c8f61077e565b90506000610c9c85611099565b90506000610ca985611099565b9050610cb9838989858589610eb1565b600080600088815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905085811015610d50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d47906120d3565b60405180910390fd5b85810360008089815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560008089815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e0591906120f3565b925050819055508773ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628a8a604051610e82929190612212565b60405180910390a4610e98848a8a86868a610eb9565b610ea6848a8a8a8a8a611113565b505050505050505050565b505050505050565b505050505050565b610ee08473ffffffffffffffffffffffffffffffffffffffff166112eb565b15611091578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b8152600401610f2695949392919061229f565b6020604051808303816000875af1925050508015610f6257506040513d601f19601f82011682018060405250810190610f5f919061231c565b60015b61100857610f6e612356565b806308c379a01415610fcb5750610f83612378565b80610f8e5750610fcd565b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fc291906115a1565b60405180910390fd5b505b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fff90612480565b60405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461108f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108690612512565b60405180910390fd5b505b505050505050565b60606000600167ffffffffffffffff8111156110b8576110b76115c8565b5b6040519080825280602002602001820160405280156110e65781602001602082028036833780820191505090505b50905082816000815181106110fe576110fd611e04565b5b60200260200101818152505080915050919050565b6111328473ffffffffffffffffffffffffffffffffffffffff166112eb565b156112e3578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b8152600401611178959493929190612532565b6020604051808303816000875af19250505080156111b457506040513d601f19601f820116820180604052508101906111b1919061231c565b60015b61125a576111c0612356565b806308c379a0141561121d57506111d5612378565b806111e0575061121f565b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161121491906115a1565b60405180910390fd5b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125190612480565b60405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146112e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112d890612512565b60405180910390fd5b505b505050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061134d82611322565b9050919050565b61135d81611342565b811461136857600080fd5b50565b60008135905061137a81611354565b92915050565b6000819050919050565b61139381611380565b811461139e57600080fd5b50565b6000813590506113b08161138a565b92915050565b600080604083850312156113cd576113cc611318565b5b60006113db8582860161136b565b92505060206113ec858286016113a1565b9150509250929050565b6113ff81611380565b82525050565b600060208201905061141a60008301846113f6565b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61145581611420565b811461146057600080fd5b50565b6000813590506114728161144c565b92915050565b60006020828403121561148e5761148d611318565b5b600061149c84828501611463565b91505092915050565b60008115159050919050565b6114ba816114a5565b82525050565b60006020820190506114d560008301846114b1565b92915050565b6000602082840312156114f1576114f0611318565b5b60006114ff848285016113a1565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611542578082015181840152602081019050611527565b83811115611551576000848401525b50505050565b6000601f19601f8301169050919050565b600061157382611508565b61157d8185611513565b935061158d818560208601611524565b61159681611557565b840191505092915050565b600060208201905081810360008301526115bb8184611568565b905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61160082611557565b810181811067ffffffffffffffff8211171561161f5761161e6115c8565b5b80604052505050565b600061163261130e565b905061163e82826115f7565b919050565b600067ffffffffffffffff82111561165e5761165d6115c8565b5b602082029050602081019050919050565b600080fd5b600061168761168284611643565b611628565b905080838252602082019050602084028301858111156116aa576116a961166f565b5b835b818110156116d357806116bf88826113a1565b8452602084019350506020810190506116ac565b5050509392505050565b600082601f8301126116f2576116f16115c3565b5b8135611702848260208601611674565b91505092915050565b600080fd5b600067ffffffffffffffff82111561172b5761172a6115c8565b5b61173482611557565b9050602081019050919050565b82818337600083830152505050565b600061176361175e84611710565b611628565b90508281526020810184848401111561177f5761177e61170b565b5b61178a848285611741565b509392505050565b600082601f8301126117a7576117a66115c3565b5b81356117b7848260208601611750565b91505092915050565b600080600080600060a086880312156117dc576117db611318565b5b60006117ea8882890161136b565b95505060206117fb8882890161136b565b945050604086013567ffffffffffffffff81111561181c5761181b61131d565b5b611828888289016116dd565b935050606086013567ffffffffffffffff8111156118495761184861131d565b5b611855888289016116dd565b925050608086013567ffffffffffffffff8111156118765761187561131d565b5b61188288828901611792565b9150509295509295909350565b600067ffffffffffffffff8211156118aa576118a96115c8565b5b602082029050602081019050919050565b60006118ce6118c98461188f565b611628565b905080838252602082019050602084028301858111156118f1576118f061166f565b5b835b8181101561191a5780611906888261136b565b8452602084019350506020810190506118f3565b5050509392505050565b600082601f830112611939576119386115c3565b5b81356119498482602086016118bb565b91505092915050565b6000806040838503121561196957611968611318565b5b600083013567ffffffffffffffff8111156119875761198661131d565b5b61199385828601611924565b925050602083013567ffffffffffffffff8111156119b4576119b361131d565b5b6119c0858286016116dd565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6119ff81611380565b82525050565b6000611a1183836119f6565b60208301905092915050565b6000602082019050919050565b6000611a35826119ca565b611a3f81856119d5565b9350611a4a836119e6565b8060005b83811015611a7b578151611a628882611a05565b9750611a6d83611a1d565b925050600181019050611a4e565b5085935050505092915050565b60006020820190508181036000830152611aa28184611a2a565b905092915050565b611ab3816114a5565b8114611abe57600080fd5b50565b600081359050611ad081611aaa565b92915050565b60008060408385031215611aed57611aec611318565b5b6000611afb8582860161136b565b9250506020611b0c85828601611ac1565b9150509250929050565b60008060408385031215611b2d57611b2c611318565b5b6000611b3b8582860161136b565b9250506020611b4c8582860161136b565b9150509250929050565b600080600080600060a08688031215611b7257611b71611318565b5b6000611b808882890161136b565b9550506020611b918882890161136b565b9450506040611ba2888289016113a1565b9350506060611bb3888289016113a1565b925050608086013567ffffffffffffffff811115611bd457611bd361131d565b5b611be088828901611792565b9150509295509295909350565b7f455243313135353a2062616c616e636520717565727920666f7220746865207a60008201527f65726f2061646472657373000000000000000000000000000000000000000000602082015250565b6000611c49602b83611513565b9150611c5482611bed565b604082019050919050565b60006020820190508181036000830152611c7881611c3c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611cc657607f821691505b60208210811415611cda57611cd9611c7f565b5b50919050565b7f455243313135353a207472616e736665722063616c6c6572206973206e6f742060008201527f6f776e6572206e6f7220617070726f7665640000000000000000000000000000602082015250565b6000611d3c603283611513565b9150611d4782611ce0565b604082019050919050565b60006020820190508181036000830152611d6b81611d2f565b9050919050565b7f455243313135353a206163636f756e747320616e6420696473206c656e67746860008201527f206d69736d617463680000000000000000000000000000000000000000000000602082015250565b6000611dce602983611513565b9150611dd982611d72565b604082019050919050565b60006020820190508181036000830152611dfd81611dc1565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611e6d82611380565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611ea057611e9f611e33565b5b600182019050919050565b7f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260008201527f20617070726f7665640000000000000000000000000000000000000000000000602082015250565b6000611f07602983611513565b9150611f1282611eab565b604082019050919050565b60006020820190508181036000830152611f3681611efa565b9050919050565b7f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060008201527f6d69736d61746368000000000000000000000000000000000000000000000000602082015250565b6000611f99602883611513565b9150611fa482611f3d565b604082019050919050565b60006020820190508181036000830152611fc881611f8c565b9050919050565b7f455243313135353a207472616e7366657220746f20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061202b602583611513565b915061203682611fcf565b604082019050919050565b6000602082019050818103600083015261205a8161201e565b9050919050565b7f455243313135353a20696e73756666696369656e742062616c616e636520666f60008201527f72207472616e7366657200000000000000000000000000000000000000000000602082015250565b60006120bd602a83611513565b91506120c882612061565b604082019050919050565b600060208201905081810360008301526120ec816120b0565b9050919050565b60006120fe82611380565b915061210983611380565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561213e5761213d611e33565b5b828201905092915050565b600060408201905081810360008301526121638185611a2a565b905081810360208301526121778184611a2a565b90509392505050565b7f455243313135353a2073657474696e6720617070726f76616c2073746174757360008201527f20666f722073656c660000000000000000000000000000000000000000000000602082015250565b60006121dc602983611513565b91506121e782612180565b604082019050919050565b6000602082019050818103600083015261220b816121cf565b9050919050565b600060408201905061222760008301856113f6565b61223460208301846113f6565b9392505050565b61224481611342565b82525050565b600081519050919050565b600082825260208201905092915050565b60006122718261224a565b61227b8185612255565b935061228b818560208601611524565b61229481611557565b840191505092915050565b600060a0820190506122b4600083018861223b565b6122c1602083018761223b565b81810360408301526122d38186611a2a565b905081810360608301526122e78185611a2a565b905081810360808301526122fb8184612266565b90509695505050505050565b6000815190506123168161144c565b92915050565b60006020828403121561233257612331611318565b5b600061234084828501612307565b91505092915050565b60008160e01c9050919050565b600060033d11156123755760046000803e612372600051612349565b90505b90565b600060443d10156123885761240b565b61239061130e565b60043d036004823e80513d602482011167ffffffffffffffff821117156123b857505061240b565b808201805167ffffffffffffffff8111156123d6575050505061240b565b80602083010160043d0385018111156123f357505050505061240b565b612402826020018501866115f7565b82955050505050505b90565b7f455243313135353a207472616e7366657220746f206e6f6e204552433131353560008201527f526563656976657220696d706c656d656e746572000000000000000000000000602082015250565b600061246a603483611513565b91506124758261240e565b604082019050919050565b600060208201905081810360008301526124998161245d565b9050919050565b7f455243313135353a204552433131353552656365697665722072656a6563746560008201527f6420746f6b656e73000000000000000000000000000000000000000000000000602082015250565b60006124fc602883611513565b9150612507826124a0565b604082019050919050565b6000602082019050818103600083015261252b816124ef565b9050919050565b600060a082019050612547600083018861223b565b612554602083018761223b565b61256160408301866113f6565b61256e60608301856113f6565b81810360808301526125808184612266565b9050969550505050505056fea264697066735822122024063429ab32964a464eaeaa824bd0e58f5caeacb87bb1a25e1819efdd97135064736f6c634300080b0033";

type ERC1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155__factory extends ContractFactory {
  constructor(...args: ERC1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155> {
    return super.deploy(uri_, overrides || {}) as Promise<ERC1155>;
  }
  override getDeployTransaction(
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri_, overrides || {});
  }
  override attach(address: string): ERC1155 {
    return super.attach(address) as ERC1155;
  }
  override connect(signer: Signer): ERC1155__factory {
    return super.connect(signer) as ERC1155__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155Interface {
    return new utils.Interface(_abi) as ERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155 {
    return new Contract(address, _abi, signerOrProvider) as ERC1155;
  }
}
