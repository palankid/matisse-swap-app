import { AnyAction } from "@reduxjs/toolkit";
import { Tokens } from "types/Tokens.types";
import reducer, { changeSelection, swapSelection } from "./dashboard.slice";
import { DashboardSlice } from "./dashboard.types";

const dashboardSlice: DashboardSlice = {
  from: {
    token: Tokens.eth,
    value: 0,
    validation: {
      token: true,
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
};

describe("Dashboard Slice Actions and Reducer", () => {
  describe("swapSelection", () => {
    test("initial data", () => {
      const newState = reducer(dashboardSlice, {} as AnyAction);
      const expected = {
        from: {
          token: Tokens.eth,
          value: 0,
          validation: {
            token: true,
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
      };

      expect(newState).toEqual(expected);
    });

    test("should handle swapping selections", () => {
      const action = swapSelection();
      const newState = reducer(dashboardSlice, action);
      const expected = {
        from: {
          token: "",
          value: 0,
          validation: {
            token: false,
            value: false,
          },
        },
        to: {
          token: Tokens.eth,
          value: 0,
          validation: {
            token: true,
            value: false,
          },
        },
      };

      expect(newState).toEqual(expected);
    });
  });

  describe("changeSelection", () => {
    test("should handle the value change on 'from' and validate the changes", () => {
      const action = changeSelection({
        branch: "from",
        prop: "value",
        value: 1,
      });
      const newState = reducer(dashboardSlice, action);
      const expected = {
        from: {
          token: Tokens.eth,
          value: 1,
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
            value: false,
          },
        },
      };

      expect(newState).toEqual(expected);
    });

    test("should handle the value change on 'to' and validate the changes", () => {
      const action = changeSelection({
        branch: "to",
        prop: "value",
        value: 99,
      });
      const newState = reducer(dashboardSlice, action);
      const expected = {
        from: {
          token: Tokens.eth,
          value: 0,
          validation: {
            token: true,
            value: false,
          },
        },
        to: {
          token: "",
          value: 99,
          validation: {
            token: false,
            value: true,
          },
        },
      };

      expect(newState).toEqual(expected);
    });

    test("should handle the value change on 'to' and validate should fail on value as it's below range", () => {
      const action = changeSelection({
        branch: "to",
        prop: "value",
        value: -1,
      });
      const newState = reducer(dashboardSlice, action);
      const expected = {
        from: {
          token: Tokens.eth,
          value: 0,
          validation: {
            token: true,
            value: false,
          },
        },
        to: {
          token: "",
          value: -1,
          validation: {
            token: false,
            value: false,
          },
        },
      };

      expect(newState).toEqual(expected);
    });

    test("should handle the value change on 'to' and validate should fail on value as it's above range", () => {
      const action = changeSelection({
        branch: "to",
        prop: "value",
        value: 101,
      });
      const newState = reducer(dashboardSlice, action);
      const expected = {
        from: {
          token: Tokens.eth,
          value: 0,
          validation: {
            token: true,
            value: false,
          },
        },
        to: {
          token: "",
          value: 101,
          validation: {
            token: false,
            value: false,
          },
        },
      };

      expect(newState).toEqual(expected);
    });

    test("should handle the value change on 'to' and validate should fail on value as the number of digits is more than allowed", () => {
      const action = changeSelection({
        branch: "to",
        prop: "value",
        value: 50.22,
      });
      const newState = reducer(dashboardSlice, action);
      const expected = {
        from: {
          token: Tokens.eth,
          value: 0,
          validation: {
            token: true,
            value: false,
          },
        },
        to: {
          token: "",
          value: 50.22,
          validation: {
            token: false,
            value: false,
          },
        },
      };

      expect(newState).toEqual(expected);
    });
  });
});
