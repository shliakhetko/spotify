import { createReducer } from "@reduxjs/toolkit";
import {
  switchArtist,
  switchHome,
  switchPlaylist,
  switchSearch,
} from "../actions/menuActions";

export enum MenuSectionType {
  HOME = "home",
  SEARCH = "search",
  PLAYLIST = "playlist",
  ARTIST = "artist",
}

export interface MenuState {
  section:
    | MenuSectionType.HOME
    | MenuSectionType.SEARCH
    | MenuSectionType.PLAYLIST
    | MenuSectionType.ARTIST;
  content: string | undefined;
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
