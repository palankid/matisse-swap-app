import { RootState } from "store/store";

export const getConnectedStatus = (state: RootState) => {
  return state.main.connected;
};
