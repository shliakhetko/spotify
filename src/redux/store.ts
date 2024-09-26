import { configureStore, current } from "@reduxjs/toolkit";
import menuReducer from "./reducers/menuReducer";
import playerReducer from "./reducers/playerReducer";
import layoutReducer from "./reducers/layoutReducer";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    layout: layoutReducer,
    player: playerReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
