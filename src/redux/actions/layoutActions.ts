import { createAction } from "@reduxjs/toolkit";
import { LayoutActionTypes } from "../action-types/layoutActionTypes";

export const setScreenWidth = createAction<number>(LayoutActionTypes.SCREEN_WIDTH);
export const setLeftSectionExpanded = createAction(LayoutActionTypes.LEFT_SECTION_EXPANDED);
export const setLeftSectionCollapsed = createAction(LayoutActionTypes.LEFT_SECTION_COLLAPSED);