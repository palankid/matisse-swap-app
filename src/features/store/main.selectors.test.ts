import { RootState } from "store/store";
import { getConnectedStatus } from "./main.selectors";
import { MainSlice } from "./main.types";

const mainSlice: MainSlice = {
  connected: false,
};

const store: RootState = {
  main: mainSlice,
};

describe("Main Selectors", () => {
  describe("getConnectedStatus", () => {
    test("query should return default connected status", () => {
      const result = getConnectedStatus(store);

      expect(result).toBe(false);
    });
  });
});
