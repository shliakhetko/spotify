import { createReducer } from "@reduxjs/toolkit";
import {
  setLeftSectionCollapsed,
  setLeftSectionExpanded,
  setScreenWidth,
} from "../actions/layoutActions";

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
    .addCase(setLeftSectionExpanded, (state, action) => {
      state.leftSectionCollapsed = false;
    })
    .addCase(setLeftSectionCollapsed, (state, action) => {
      state.leftSectionCollapsed = true;
    });
});

export default layoutReducer;