import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token, GlobalState } from 'utils'

const initialState: GlobalState = {
  darkTheme: false,
  tokenArray: [],
  tokenCurrency: '',
  addressArray: []
}

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
    updateTokenArray: (state, { payload }: PayloadAction<Token[]>) => {
      state.tokenArray = payload
    },
    updateTokenCurrency: (state, { payload }: PayloadAction<string>) => {
      state.tokenCurrency = payload
    },
    updateAddressArray: (state, { payload }: PayloadAction<string[]>) => {
      state.addressArray = payload
    }
  },
});

export const { toggleTheme, updateTokenArray, updateTokenCurrency } = globalSlice.actions;

export default globalSlice.reducer;
