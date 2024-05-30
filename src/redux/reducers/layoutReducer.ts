import { createReducer } from "@reduxjs/toolkit";
import { leftSection, setCurrentColor, setLeftSection, setScreenWidth } from "../actions/layoutActions";

export interface LayoutState {
  screenWidth: number;
  currentColor: string | null;
  leftSectionCollapsed: boolean;
}

const layoutInitialState: LayoutState = {
  screenWidth: 1080,
  currentColor: null,
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
    }).addCase(setCurrentColor, (state, action) => {
      state.currentColor = action.payload;
      console.log(state.currentColor);
    });
});

export default layoutReducer;
