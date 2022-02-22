import { RootState } from "store/store";
import { Tokens } from "types/Tokens.types";
import {
  areTokenSelectionsValid,
  areTokenValuesValid,
  getFromTokenProps,
  getToTokenProps,
} from "./dashboard.selectors";
import { DashboardSlice } from "./dashboard.types";

const dashboardSlice: DashboardSlice = {
  from: {
    token: Tokens.eth,
    value: 1,
    validation: {
      token: true,
      value: true,
    },
  },
  to: {
    token: Tokens.matic,
    value: 2,
    validation: {
      token: true,
      value: true,
    },
  },
};

const store: RootState = {
  main: {
    connected: true,
  },
  dashboard: dashboardSlice,
};

describe("Dashboard Selectors", () => {
  describe("getFromTokenProps", () => {
    test("query should return props related to 'from' selection, validation should pass", () => {
      const result = getFromTokenProps(store);
      const expected = {
        token: Tokens.eth,
        value: 1,
        validation: {
          token: true,
          value: true,
        },
      };

      expect(result).toEqual(expected);
    });
  });

  describe("getToTokenProps", () => {
    test("query should return props related to 'to' selection, validation should pass", () => {
      const result = getToTokenProps(store);
      const expected = {
        token: Tokens.matic,
        value: 2,
        validation: {
          token: true,
          value: true,
        },
      };

      expect(result).toEqual(expected);
    });
  });

  describe("areTokenSelectionsValid", () => {
    test("query should assert that all initial token selections are valid", () => {
      const result = areTokenSelectionsValid(store);

      expect(result).toBe(true);
    });

    test("query should assert that token selections is not valid if at least one of them is not valid", () => {
      const localStore = {
        ...store,
        dashboard: {
          ...store.dashboard,
          from: {
            ...store.dashboard.from,
            validation: {
              ...store.dashboard.from.validation,
              token: false,
            },
          },
        },
      };
      const result = areTokenSelectionsValid(localStore);

      expect(result).toBe(false);
    });
  });

  describe("areTokenSelectionsValid", () => {
    test("query should assert that all initial token values are valid", () => {
      const result = areTokenValuesValid(store);

      expect(result).toBe(true);
    });

    test("query should assert that token values is not valid if at least one of them is not valid", () => {
      const localStore = {
        ...store,
        dashboard: {
          ...store.dashboard,
          from: {
            ...store.dashboard.from,
            validation: {
              ...store.dashboard.from.validation,
              value: false,
            },
          },
        },
      };
      const result = areTokenValuesValid(localStore);

      expect(result).toBe(false);
    });
  });
});
