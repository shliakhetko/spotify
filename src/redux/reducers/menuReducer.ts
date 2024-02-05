import { createReducer } from "@reduxjs/toolkit";
import { switchHome, switchSearch } from "../actions/menuActions";

export enum MenuSectionType {
  HOME = "home",
  SEARCH = "search",
}

export interface MenuState {
  section: MenuSectionType.HOME | MenuSectionType.SEARCH;
}

const menuInitialState: MenuState = { section: MenuSectionType.HOME };

const menuReducer = createReducer(menuInitialState, (builder) => {
  builder
    .addCase(switchHome, (state, action) => {
      state.section = MenuSectionType.HOME;
    })
    .addCase(switchSearch, (state, action) => {
      state.section = MenuSectionType.SEARCH;
    });
});

export default menuReducer;
