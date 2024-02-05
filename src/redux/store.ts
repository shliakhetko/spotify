import { configureStore, current } from "@reduxjs/toolkit";
import menuReducer from "./reducers/menuReducer";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
