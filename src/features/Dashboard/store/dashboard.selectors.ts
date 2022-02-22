import { RootState } from "store/store";

export const getFromTokenProps = (state: RootState) => {
  return state.dashboard.from;
};

export const getToTokenProps = (state: RootState) => {
  return state.dashboard.to;
};

export const areTokenSelectionsValid = (state: RootState) => {
  return (
    state.dashboard.from.validation.token && state.dashboard.to.validation.token
  );
};

export const areTokenValuesValid = (state: RootState) => {
  return (
    state.dashboard.from.validation.value &&
    state.dashboard.to.validation.value &&
    state.dashboard.from.value > 0 &&
    state.dashboard.to.value > 0
  );
};

export const areAllTokenPropsValid = (state: RootState) => {
  return areTokenSelectionsValid(state) && areTokenValuesValid(state);
};
