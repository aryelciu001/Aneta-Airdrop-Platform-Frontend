export interface Token {
  name: string;
}

export interface GlobalState {
  darkTheme: boolean;
  tokenArray: Token[];
  tokenCurrency: string;
  addressArray: string[];
}

export type API = object | undefined;

export interface BlockchainState {
  api: API;
  walletName: string;
  walletAddress: string;
}

export enum WalletName {
  NAMI = "nami",
  CCVAULT = "ccvault",
}
