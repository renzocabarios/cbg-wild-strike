/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  ClaimTokens,
  ClaimTokensInterface,
} from "../../contracts/ClaimTokens";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [],
    name: "GameReset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player1",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "player2",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "betAmount",
        type: "uint256",
      },
    ],
    name: "GameStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "prizeAmount",
        type: "uint256",
      },
    ],
    name: "WinnerDeclared",
    type: "event",
  },
  {
    inputs: [],
    name: "betAmount",
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
    name: "checkContractBalance",
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
        name: "player",
        type: "address",
      },
    ],
    name: "checkPlayerBalance",
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
        name: "winner",
        type: "address",
      },
    ],
    name: "declareWinner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gameStarted",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "joinGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "player1",
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
    name: "player2",
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
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060405161095a38038061095a833981016040819052602c916050565b600080546001600160a01b0319166001600160a01b0392909216919091179055607e565b600060208284031215606157600080fd5b81516001600160a01b0381168114607757600080fd5b9392505050565b6108cd8061008d6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063d24257c011610066578063d24257c01461010e578063d30895e414610117578063db33f4f81461012a578063efaa55a01461013f578063fc0c546a1461015257600080fd5b806350312c9e1461009857806359a5f12d146100b35780635e123ce4146100de578063a4f76903146100fb575b600080fd5b6100a0610165565b6040519081526020015b60405180910390f35b6002546100c6906001600160a01b031681565b6040516001600160a01b0390911681526020016100aa565b6004546100eb9060ff1681565b60405190151581526020016100aa565b6100a06101093660046107ee565b6101d7565b6100a060035481565b6001546100c6906001600160a01b031681565b61013d6101383660046107ee565b61024c565b005b61013d61014d36600461081e565b610449565b6000546100c6906001600160a01b031681565b600080546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa1580156101ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d29190610837565b905090565b600080546040516370a0823160e01b81526001600160a01b038481166004830152909116906370a0823190602401602060405180830381865afa158015610222573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102469190610837565b92915050565b6001546001600160a01b031633148061026f57506002546001600160a01b031633145b6102c05760405162461bcd60e51b815260206004820152601760248201527f4e6f742061207265676973746572656420706c6179657200000000000000000060448201526064015b60405180910390fd5b60045460ff166103095760405162461bcd60e51b815260206004820152601460248201527311d85b59481a185cc81b9bdd081cdd185c9d195960621b60448201526064016102b7565b6001546001600160a01b038281169116148061033257506002546001600160a01b038281169116145b61036f5760405162461bcd60e51b815260206004820152600e60248201526d24b73b30b634b2103bb4b73732b960911b60448201526064016102b7565b600060035460026103809190610850565b60005460405163a9059cbb60e01b81526001600160a01b0385811660048301526024820184905292935091169063a9059cbb906044016020604051808303816000875af11580156103d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f99190610875565b50816001600160a01b03167f3cf1af53e79884a92609ce59db1ec9f584d88e2d14c8eaba43a21db81318301e8260405161043591815260200190565b60405180910390a2610445610798565b5050565b60045460ff16156104935760405162461bcd60e51b815260206004820152601460248201527311d85b5948185b1c9958591e481cdd185c9d195960621b60448201526064016102b7565b600081116104ef5760405162461bcd60e51b8152602060048201526024808201527f42657420616d6f756e74206d7573742062652067726561746572207468616e206044820152637a65726f60e01b60648201526084016102b7565b600054604051636eb1769f60e11b815233600482015230602482015282916001600160a01b03169063dd62ed3e90604401602060405180830381865afa15801561053d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105619190610837565b10156105a35760405162461bcd60e51b8152602060048201526011602482015270416c6c6f77616e636520746f6f206c6f7760781b60448201526064016102b7565b6000546040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03909116906323b872dd906064016020604051808303816000875af11580156105fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061e9190610875565b5060405181815233907f59062170a285eb80e8c6b8ced60428442a51910635005233fc4ce084a475845e9060200160405180910390a26001546001600160a01b031661067957600180546001600160a01b0319163317905550565b6002546001600160a01b0316610750576001546001600160a01b031633036106e35760405162461bcd60e51b815260206004820152601b60248201527f506c61796572203120616c72656164792072656769737465726564000000000060448201526064016102b7565b600280546001600160a01b0319163390811790915560038290556004805460ff19166001908117909155546040518381526001600160a01b03909116907fee0dca10a9957dad74da3fe318a3ccc561c46d96be0ab0b66e7aff32aab94cf39060200160405180910390a350565b60405162461bcd60e51b815260206004820152601c60248201527f47616d6520616c7265616479206861732074776f20706c61796572730000000060448201526064016102b7565b600180546001600160a01b0319908116909155600280549091169055600060038190556004805460ff191690556040517fc6976b6410888b44c765590c8368eb4a60e0431d4ad683c8a53ea85a8479f22e9190a1565b60006020828403121561080057600080fd5b81356001600160a01b038116811461081757600080fd5b9392505050565b60006020828403121561083057600080fd5b5035919050565b60006020828403121561084957600080fd5b5051919050565b808202811582820484141761024657634e487b7160e01b600052601160045260246000fd5b60006020828403121561088757600080fd5b8151801515811461081757600080fdfea2646970667358221220a267ef0ac2ab6d1ee558a0b4cbe5a127077bb55fe24be8e279273a3ba5bfa91564736f6c634300081c0033";

type ClaimTokensConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ClaimTokensConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ClaimTokens__factory extends ContractFactory {
  constructor(...args: ClaimTokensConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _tokenAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_tokenAddress, overrides || {});
  }
  override deploy(
    _tokenAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_tokenAddress, overrides || {}) as Promise<
      ClaimTokens & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ClaimTokens__factory {
    return super.connect(runner) as ClaimTokens__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ClaimTokensInterface {
    return new Interface(_abi) as ClaimTokensInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ClaimTokens {
    return new Contract(address, _abi, runner) as unknown as ClaimTokens;
  }
}
