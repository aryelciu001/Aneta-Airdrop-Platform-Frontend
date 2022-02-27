export interface Token {
  name: string;
}

export interface GlobalState {
  darkTheme: boolean;
  tokenArray: Token[];
  tokenCurrency: string;
  addressArray: string[];
}

export interface BlockchainState {
  api: object | undefined;
}

export enum WalletName {
  NAMI = "nami",
  CCVAULT = "ccvault",
}
