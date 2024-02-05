import { createAction } from "@reduxjs/toolkit";
import { MenuActionTypes } from "../action-types/menuActionsTypes";

export const switchHome = createAction(MenuActionTypes.HOME);
export const switchSearch = createAction(MenuActionTypes.SEARCH);
