import { configureStore, current } from "@reduxjs/toolkit";
import menuReducer from "./reducers/menuReducer";
import playerReducer from "./reducers/playerReducer";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    player: playerReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
