import { createReducer } from "@reduxjs/toolkit";
import {
  switchAlbum,
  switchArtist,
  switchHome,
  switchPlaylist,
  switchSearch,
} from "../actions/menuActions";
import ID from "../../models/ID";

export enum MenuSectionType {
  HOME = "home",
  SEARCH = "search",
  ALBUM = "album",
  PLAYLIST = "playlist",
  ARTIST = "artist",
}

export interface MenuState {
  section:
    | MenuSectionType.HOME
    | MenuSectionType.SEARCH
    | MenuSectionType.ALBUM
    | MenuSectionType.PLAYLIST
    | MenuSectionType.ARTIST;
  content: ID  | undefined;
}

const menuInitialState: MenuState = {
  section: MenuSectionType.HOME,
  content: undefined,
};

const menuReducer = createReducer(menuInitialState, (builder) => {
  builder
    .addCase(switchHome, (state, action) => {
      state.section = MenuSectionType.HOME;
      state.content = undefined;
    })
    .addCase(switchSearch, (state, action) => {
      state.section = MenuSectionType.SEARCH;
      state.content = undefined;
    })
    .addCase(switchAlbum, (state, action) => {
      state.section = MenuSectionType.ALBUM;
      state.content = action.payload;
    })
    .addCase(switchPlaylist, (state, action) => {
      state.section = MenuSectionType.PLAYLIST;
      state.content = action.payload;
    })
    .addCase(switchArtist, (state, action) => {
      state.section = MenuSectionType.ARTIST;
      state.content = action.payload;
    });
});

export const stringToMenuSectionType = (str: string) => {
  return (str as keyof typeof MenuSectionType);
};

export default menuReducer;
