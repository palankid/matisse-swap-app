import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MainSlice } from "./main.types";

const initialState: MainSlice = {
  connected: false,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    updateConnectedStatus: (state, action: PayloadAction<boolean>) => {
      state.connected = action.payload;
    },
  },
});

export const { updateConnectedStatus } = mainSlice.actions;

export default mainSlice.reducer;
