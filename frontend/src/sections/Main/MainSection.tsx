import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { MenuActionTypes } from "../../redux/action-types/menuActionsTypes";
import { MenuSectionType } from "../../redux/reducers/menuReducer";
import { Home } from "./Home";
import classNames from "classnames";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { List } from "./List";
import { Panel } from "react-resizable-panels";
import { PlaylistSection } from "./PlaylistSection";
import { ArtistSection } from "./ArtistSection";
import Artist from "../../models/Items/Artist";
import Playlist from "../../models/Items/Playlist";
import { LayoutActionTypes } from "../../redux/action-types/layoutActionTypes";
import { Search } from "./Search";

export const MainSection = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.menu);
  const content = useAppSelector((state) => state.menu.content);

  // useEffect(() => {
  //   if (state && "image" in state) {
  //     dispatch({
  //       type: LayoutActionTypes.SET_CURRENT_COLOR,
  //       payload: state?.image || null,
  //     });
  //   }
  // }, []);

  return (
    <Panel
      order={2}
      defaultSize={70}
      minSize={25}
      maxSize={100}
      className="h-full w-full p-1"
    >
      <div className="relative max-h-[100%-6rem] h-full rounded-lg bg-neutral-950">
        <div className="absolute top-0 left-0 flex p-4 rounded-t-lg z-40">
          <div className="space-x-2">
            <button
              className={classNames(
                "p-2 rounded-full bg-black",
                state.previous.length > 0
                  ? "opacity-90"
                  : "opacity-50 cursor-not-allowed"
              )}
              onClick={() => {
                dispatch({ type: MenuActionTypes.PREVIOUS });
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              className={classNames(
                "p-2 rounded-full bg-black",
                state.next.length > 0
                  ? "opacity-90"
                  : "opacity-50 cursor-not-allowed"
              )}
              onClick={() => {
                dispatch({ type: MenuActionTypes.NEXT });
              }}
            >
              <FaChevronRight />
            </button>
          </div>
          <div></div>
        </div>
        <div className="h-full pr-3.5 hover:pr-0.5 overflow-hidden hover:overflow-y-scroll">
          {state && (state.section === MenuSectionType.HOME ? (
            <Home />
          ) : state.section === MenuSectionType.SEARCH ? (
            <Search/>
          ) : state.section === MenuSectionType.LIST ? (
            <List />
          ) : state.section === MenuSectionType.PLAYLIST ? (
            <PlaylistSection item={content as Playlist} />
          ) : state.section === MenuSectionType.ARTIST ? (
            <ArtistSection item={content as Artist} />
          ) : (
            <></>
          ))}
        </div>
        {/* Home, Search, Playlist|Album, Artist, List, Lyrics */}
      </div>
    </Panel>
  );
};
