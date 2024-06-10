import { createReducer } from "@reduxjs/toolkit";
import {
  setCurrentColor,
  switchAlbum,
  switchArtist,
  switchHome,
  switchList,
  switchLyrics,
  switchPlaylist,
  switchSearch,
  switchToNext,
  switchToPrevious,
} from "../actions/menuActions";
import ID, { Identificator as Identificator } from "../../models/ID";
import Item from "../../models/Item";
import Artist from "../../models/Items/Artist";
import { LayoutActionTypes } from "../action-types/layoutActionTypes";

export interface ItemList { 
  title: string; 
  list: Item[] 
}

export enum MenuSectionType {
  HOME = "home",
  SEARCH = "search",
  ALBUM = "album",
  PLAYLIST = "playlist",
  ARTIST = "artist",
  LIST = "list",
  LYRICS = "lyrics",
}

export interface MenuState {
  section:
  | MenuSectionType.HOME
  | MenuSectionType.SEARCH
  | MenuSectionType.ALBUM
  | MenuSectionType.PLAYLIST
  | MenuSectionType.ARTIST
  | MenuSectionType.LIST
  | MenuSectionType.LYRICS;
  content: Item | ItemList | undefined;
  currentColor?: string | null;
  previous: MenuState[];
  next: MenuState[]
}

const menuInitialState: MenuState = {
  section: MenuSectionType.HOME,
  content: undefined,
  currentColor: null,
  previous: [],
  next: []
};

const menuReducer = createReducer(menuInitialState, (builder) => {
  builder
    .addCase(switchHome, (state, action) => {
      state.previous.push({ section: state.section, content: state.content, previous: [], next: [] });
      state.section = MenuSectionType.HOME;
      state.content = undefined;
      state.next = [];
    })
    .addCase(switchSearch, (state, action) => {
      state.previous.push({ section: state.section, content: state.content, previous: [], next: [] });
      state.section = MenuSectionType.SEARCH;
      state.content = undefined;
      state.next = [];
    })
    .addCase(switchAlbum, (state, action) => {
      state.previous.push({ section: state.section, content: state.content, previous: [], next: [] });
      state.section = MenuSectionType.ALBUM;
      state.content = action.payload;
      state.next = [];
    })
    .addCase(switchPlaylist, (state, action) => {
      state.previous.push({ section: state.section, content: state.content, previous: [], next: [] });
      state.section = MenuSectionType.PLAYLIST;
      state.content = action.payload;
      state.currentColor = action.payload.image || null;
      state.next = [];
    })
    .addCase(switchArtist, (state, action) => {
      state.previous.push({ section: state.section, content: state.content, previous: [], next: [] });
      state.section = MenuSectionType.ARTIST;
      state.content = action.payload;
      state.currentColor = action.payload.image || null;
      state.next = [];
    })
    .addCase(switchList, (state, action) => {
      state.previous.push({ section: state.section, content: state.content, previous: [], next: [] });
      state.section = MenuSectionType.LIST;
      state.content = action.payload;
      state.next = [];
    })
    .addCase(switchLyrics, (state, action) => {
      state.previous.push({ section: state.section, content: state.content, previous: [], next: [] });
      state.section = MenuSectionType.LYRICS;
      state.content = undefined;
      state.next = [];
    })
    .addCase(switchToPrevious, (state, action) => {
      if (state.previous.length > 0) {
        const currentState = state.previous.pop();
        if (currentState) {
          state.next.unshift({ section: state.section, content: state.content, previous: [], next: [] });

          state.section = currentState.section;
          state.content = currentState.content;
        }
      }
    })
    .addCase(switchToNext, (state, action) => {
      if (state.next.length > 0) {
        const currentState = state.next.shift();
        if (currentState) {
          state.previous.push({ section: state.section, content: state.content, previous: [], next: [] });

          state.section = currentState.section;
          state.content = currentState.content;
        }
      }
    })
    .addCase(setCurrentColor, (state, action) => {
      state.currentColor = action.payload;
      console.log(state.currentColor);
    });
});

export const stringToMenuSectionType = (str: string) => {
  return (str as keyof typeof MenuSectionType);
};

export default menuReducer;
