import { RootState } from "store/store";
import { getConnectedStatus } from "./main.selectors";
import { MainSlice } from "./main.types";

const mainSlice: MainSlice = {
  connected: false,
};

const store: RootState = {
  main: mainSlice,
  dashboard: {
    from: {
      token: "",
      value: 0,
      validation: {
        token: false,
        value: false,
      },
    },
    to: {
      token: "",
      value: 0,
      validation: {
        token: false,
        value: false,
      },
    },
  },
};

describe("Main Selectors", () => {
  describe("getConnectedStatus", () => {
    test("query should return default connected status", () => {
      const result = getConnectedStatus(store);

      expect(result).toBe(false);
    });
  });
});
