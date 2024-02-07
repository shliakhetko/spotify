import { createAction } from "@reduxjs/toolkit";
import { MenuActionTypes } from "../action-types/menuActionsTypes";

export const switchHome = createAction(MenuActionTypes.HOME);
export const switchSearch = createAction(MenuActionTypes.SEARCH);
export const switchPlaylist = createAction<string>(MenuActionTypes.PLAYLIST);
export const switchArtist = createAction<string>(MenuActionTypes.ARTIST);