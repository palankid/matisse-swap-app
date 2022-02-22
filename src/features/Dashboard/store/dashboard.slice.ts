import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateConnectedStatus } from "features/store/main.slice";
import { Tokens } from "types/Tokens.types";

import { DashboardSlice, TokenPropsType } from "./dashboard.types";

const validateProps = (selection: TokenPropsType) => ({
  token: selection.token !== "",
  value:
    /^\d+([.]?\d{0,1})?$/.test(selection.value.toString()) &&
    0 <= selection.value === selection.value <= 100,
});

const initialState: DashboardSlice = {
  from: {
    token: Tokens.eth,
    value: 0,
    validation: {
      token: true,
      value: true,
    },
  },
  to: {
    token: "",
    value: 0,
    validation: {
      token: false,
      value: true,
    },
  },
};

interface ChangeSelectionActionType {
  branch: string;
  prop: string;
  value: any;
}

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    swapSelection: (state) => {
      const temp = { ...state.to };
      state.to = state.from;
      state.from = temp;
    },
    changeSelection: (
      state,
      action: PayloadAction<ChangeSelectionActionType>
    ) => {
      const { branch, prop, value } = action.payload;
      const slice = state as any;
      slice[branch][prop] = value;
      slice[branch].validation = validateProps(slice[branch]);
    },
  },
});

export const { swapSelection, changeSelection } = dashboardSlice.actions;

export default dashboardSlice.reducer;
