import { configureStore } from "@reduxjs/toolkit";

import main from "features/store/main.slice";

const store = configureStore({
  reducer: {
    main,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
