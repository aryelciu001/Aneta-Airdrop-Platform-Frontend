import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BlockchainState, WalletName } from "utils";

const initialState: BlockchainState = {
  api: undefined,
  walletName: WalletName.NAMI,
  walletAddress: ''
};

export const blockchainSlice = createSlice({
  name: "blockchain",
  initialState,
  reducers: {
    setApi: (state, { payload }: PayloadAction<Object | undefined>) => {
      state.api = payload;
    },
    setWalletAddress: (state, { payload }: PayloadAction<string>) => {
      state.walletAddress = payload;
    },
    setWalletName: (state, { payload }: PayloadAction<string>) => {
      state.walletName = payload;
    },
  },
});

export const { setApi, setWalletAddress, setWalletName } = blockchainSlice.actions;

export default blockchainSlice.reducer;
