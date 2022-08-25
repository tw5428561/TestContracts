/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface Abs_L2DepositedERC721Interface extends utils.Interface {
  functions: {
    "finalizeDeposit(address,uint256,string)": FunctionFragment;
    "getFinalizeWithdrawalGas()": FunctionFragment;
    "init(address)": FunctionFragment;
    "messenger()": FunctionFragment;
    "tokenGateway()": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
    "withdrawTo(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "finalizeDeposit"
      | "getFinalizeWithdrawalGas"
      | "init"
      | "messenger"
      | "tokenGateway"
      | "withdraw"
      | "withdrawTo"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "finalizeDeposit",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getFinalizeWithdrawalGas",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "init", values: [string]): string;
  encodeFunctionData(functionFragment: "messenger", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenGateway",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTo",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "finalizeDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFinalizeWithdrawalGas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "messenger", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenGateway",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdrawTo", data: BytesLike): Result;

  events: {
    "DepositFinalized(address,uint256,string)": EventFragment;
    "Initialized(address)": EventFragment;
    "WithdrawalInitiated(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DepositFinalized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawalInitiated"): EventFragment;
}

export interface DepositFinalizedEventObject {
  _to: string;
  _tokenId: BigNumber;
  _tokenURI: string;
}
export type DepositFinalizedEvent = TypedEvent<
  [string, BigNumber, string],
  DepositFinalizedEventObject
>;

export type DepositFinalizedEventFilter =
  TypedEventFilter<DepositFinalizedEvent>;

export interface InitializedEventObject {
  tokenGateway: string;
}
export type InitializedEvent = TypedEvent<[string], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface WithdrawalInitiatedEventObject {
  _from: string;
  _to: string;
  _tokenId: BigNumber;
}
export type WithdrawalInitiatedEvent = TypedEvent<
  [string, string, BigNumber],
  WithdrawalInitiatedEventObject
>;

export type WithdrawalInitiatedEventFilter =
  TypedEventFilter<WithdrawalInitiatedEvent>;

export interface Abs_L2DepositedERC721 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Abs_L2DepositedERC721Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    finalizeDeposit(
      _to: string,
      _tokenId: BigNumberish,
      _tokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getFinalizeWithdrawalGas(overrides?: CallOverrides): Promise<[number]>;

    init(
      _tokenGateway: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    messenger(overrides?: CallOverrides): Promise<[string]>;

    tokenGateway(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawTo(
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  finalizeDeposit(
    _to: string,
    _tokenId: BigNumberish,
    _tokenURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getFinalizeWithdrawalGas(overrides?: CallOverrides): Promise<number>;

  init(
    _tokenGateway: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  messenger(overrides?: CallOverrides): Promise<string>;

  tokenGateway(overrides?: CallOverrides): Promise<string>;

  withdraw(
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawTo(
    _to: string,
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    finalizeDeposit(
      _to: string,
      _tokenId: BigNumberish,
      _tokenURI: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getFinalizeWithdrawalGas(overrides?: CallOverrides): Promise<number>;

    init(_tokenGateway: string, overrides?: CallOverrides): Promise<void>;

    messenger(overrides?: CallOverrides): Promise<string>;

    tokenGateway(overrides?: CallOverrides): Promise<string>;

    withdraw(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    withdrawTo(
      _to: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DepositFinalized(address,uint256,string)"(
      _to?: string | null,
      _tokenId?: null,
      _tokenURI?: null
    ): DepositFinalizedEventFilter;
    DepositFinalized(
      _to?: string | null,
      _tokenId?: null,
      _tokenURI?: null
    ): DepositFinalizedEventFilter;

    "Initialized(address)"(tokenGateway?: null): InitializedEventFilter;
    Initialized(tokenGateway?: null): InitializedEventFilter;

    "WithdrawalInitiated(address,address,uint256)"(
      _from?: string | null,
      _to?: null,
      _tokenId?: null
    ): WithdrawalInitiatedEventFilter;
    WithdrawalInitiated(
      _from?: string | null,
      _to?: null,
      _tokenId?: null
    ): WithdrawalInitiatedEventFilter;
  };

  estimateGas: {
    finalizeDeposit(
      _to: string,
      _tokenId: BigNumberish,
      _tokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getFinalizeWithdrawalGas(overrides?: CallOverrides): Promise<BigNumber>;

    init(
      _tokenGateway: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    messenger(overrides?: CallOverrides): Promise<BigNumber>;

    tokenGateway(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawTo(
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    finalizeDeposit(
      _to: string,
      _tokenId: BigNumberish,
      _tokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getFinalizeWithdrawalGas(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    init(
      _tokenGateway: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    messenger(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenGateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawTo(
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
