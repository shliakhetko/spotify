import { createAction } from "@reduxjs/toolkit";
import { MenuActionTypes } from "../action-types/menuActionsTypes";
import Item from "../../models/Item";
import ID from "../../models/ID";
import { ItemList } from "../reducers/menuReducer";

export const switchHome = createAction(MenuActionTypes.HOME);
export const switchSearch = createAction(MenuActionTypes.SEARCH);
export const switchAlbum = createAction<ID>(MenuActionTypes.ALBUM);
export const switchPlaylist = createAction<ID>(MenuActionTypes.PLAYLIST);
export const switchArtist = createAction<ID>(MenuActionTypes.ARTIST);
export const switchList = createAction<ItemList>(MenuActionTypes.LIST);
export const switchLyrics = createAction(MenuActionTypes.LYRICS);
export const switchToPrevious = createAction(MenuActionTypes.PREVIOUS);
export const switchToNext = createAction(MenuActionTypes.NEXT);
