import { configureStore } from "@reduxjs/toolkit";

import main from "features/store/main.slice";
import dashboard from "features/Dashboard/store/dashboard.slice";

const store = configureStore({
  reducer: {
    main,
    dashboard,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
