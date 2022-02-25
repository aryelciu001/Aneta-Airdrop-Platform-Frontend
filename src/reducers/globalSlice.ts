import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token, GlobalState } from 'utils'

const initialState: GlobalState = {
  darkTheme: false,
  tokenArray: []
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
    }
  },
});

export const { toggleTheme } = globalSlice.actions;

export default globalSlice.reducer;
