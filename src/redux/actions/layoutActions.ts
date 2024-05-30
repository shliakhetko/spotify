import { createAction } from "@reduxjs/toolkit";
import { LayoutActionTypes } from "../action-types/layoutActionTypes";

export const setScreenWidth = createAction<number>(LayoutActionTypes.SCREEN_WIDTH);
export const setLeftSection = createAction<boolean>(LayoutActionTypes.SET_LEFT_SECTION);
export const leftSection = createAction(LayoutActionTypes.LEFT_SECTION);
export const setCurrentColor = createAction<string | null>(LayoutActionTypes.SET_CURRENT_COLOR);