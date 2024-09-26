import { createAction } from "@reduxjs/toolkit";
import { MenuActionTypes } from "../action-types/menuActionsTypes";
import Item from "../../models/Item";
import ID, { Identificator } from "../../models/ID";
import { ItemList } from "../reducers/menuReducer";
import Album from "../../models/Items/Album";
import Playlist from "../../models/Items/Playlist";
import Artist from "../../models/Items/Artist";

export const switchHome = createAction(MenuActionTypes.HOME);
export const switchSearch = createAction(MenuActionTypes.SEARCH);
export const switchAlbum = createAction<Album>(MenuActionTypes.ALBUM);
export const switchPlaylist = createAction<Playlist>(MenuActionTypes.PLAYLIST);
export const switchArtist = createAction<Artist>(MenuActionTypes.ARTIST);
export const switchList = createAction<ItemList>(MenuActionTypes.LIST);
export const switchLyrics = createAction(MenuActionTypes.LYRICS);
export const switchToPrevious = createAction(MenuActionTypes.PREVIOUS);
export const switchToNext = createAction(MenuActionTypes.NEXT);
export const setCurrentColor = createAction<string | null>(MenuActionTypes.SET_CURRENT_COLOR);
