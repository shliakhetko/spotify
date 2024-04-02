import { configureStore, current } from "@reduxjs/toolkit";
import menuReducer from "./reducers/menuReducer";
import layoutReducer from "./reducers/layoutReducer";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    layout: layoutReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
