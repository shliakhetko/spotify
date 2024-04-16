import { createReducer } from "@reduxjs/toolkit";
import { leftSection, setLeftSection, setScreenWidth } from "../actions/layoutActions";

export interface LayoutState {
  screenWidth: number;
  leftSectionCollapsed: boolean;
}

const layoutInitialState: LayoutState = {
  screenWidth: 1080,
  leftSectionCollapsed: false,
};

const layoutReducer = createReducer(layoutInitialState, (builder) => {
  builder
    .addCase(setScreenWidth, (state, action) => {
      state.screenWidth = action.payload;
    })
    .addCase(setLeftSection, (state, action) => {
      state.leftSectionCollapsed = action.payload;
    })
    .addCase(leftSection, (state, action) => {
      state.leftSectionCollapsed = !state.leftSectionCollapsed;
    });
});

export default layoutReducer;
