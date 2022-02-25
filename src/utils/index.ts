export interface Token {
  name: string
}

export interface GlobalState {
  darkTheme: boolean,
  tokenArray: Token[],
  tokenCurrency: string,
  addressArray: string[]
}