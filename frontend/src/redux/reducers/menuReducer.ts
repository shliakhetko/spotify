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
      Object.assign(state, {
        previous: [...state.previous, { section: state.section, content: state.content, previous: [], next: [] }],
        section: MenuSectionType.HOME,
        content: undefined,
        next: []
      });
    })
    .addCase(switchSearch, (state, action) => {
      Object.assign(state, {
        previous: [...state.previous, { section: state.section, content: state.content, previous: [], next: [] }],
        section: MenuSectionType.SEARCH,
        content: undefined,
        next: []
      });
    })
    .addCase(switchAlbum, (state, action) => {
      Object.assign(state, {
        previous: [...state.previous, { section: state.section, content: state.content, previous: [], next: [] }],
        section: MenuSectionType.ALBUM,
        content: action.payload,
        next: []
      });
    })
    .addCase(switchPlaylist, (state, action) => {
      Object.assign(state, {
        previous: [...state.previous, { section: state.section, content: state.content, previous: [], next: [] }],
        section: MenuSectionType.PLAYLIST,
        content: action.payload,
        currentColor: action.payload.image || null,
        next: []
      });
    })
    .addCase(switchArtist, (state, action) => {
      Object.assign(state, {
        previous: [...state.previous, { section: state.section, content: state.content, previous: [], next: [] }],
        section: MenuSectionType.ARTIST,
        content: action.payload,
        currentColor: action.payload.image || null,
        next: []
      });
    })
    .addCase(switchList, (state, action) => {
      Object.assign(state, {
        previous: [...state.previous, { section: state.section, content: state.content, previous: [], next: [] }],
        section: MenuSectionType.LIST,
        content: action.payload,
        next: []
      });
    })
    .addCase(switchLyrics, (state, action) => {
      Object.assign(state, {
        previous: [...state.previous, { section: state.section, content: state.content, previous: [], next: [] }],
        section: MenuSectionType.LYRICS,
        content: undefined,
        next: []
      });
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
    });
});

export const stringToMenuSectionType = (str: string) => {
  return (str as keyof typeof MenuSectionType);
};

export default menuReducer;
