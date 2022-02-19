import { AnyAction } from "@reduxjs/toolkit";
import reducer, { updateConnectedStatus } from "./main.slice";
import { MainSlice } from "./main.types";

const mainSlice: MainSlice = {
  connected: false,
};

describe("Main Slice Actions and Reducer", () => {
  describe("updateConnectedStatus", () => {
    test("initial connectivity status", () => {
      const newState = reducer(mainSlice, {} as AnyAction);

      expect(newState.connected).toEqual(false);
    });

    test("should handle an update in connectivity status", () => {
      const action = updateConnectedStatus(true);
      const newState = reducer(mainSlice, action);

      expect(newState.connected).toEqual(true);
    });
  });
});
