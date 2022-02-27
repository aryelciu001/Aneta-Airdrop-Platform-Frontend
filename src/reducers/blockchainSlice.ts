import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BlockchainState, WalletName } from "utils";

const initialState: BlockchainState = {
  api: undefined,
  wallet: WalletName.NAMI,
};

export const blockchainSlice = createSlice({
  name: "blockchain",
  initialState,
  reducers: {
    setApi: (state, { payload }: PayloadAction<Object | undefined>) => {
      state.api = payload;
    },
  },
});

export const { setApi } = blockchainSlice.actions;

export default blockchainSlice.reducer;
