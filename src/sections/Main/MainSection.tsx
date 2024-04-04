import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { MenuActionTypes } from "../../redux/action-types/menuActionsTypes";
import { MenuSectionType } from "../../redux/reducers/menuReducer";
import { Home } from "./Home";
import classNames from "classnames";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { List } from "./List";
import { Panel } from "react-resizable-panels";

export const MainSection = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.menu);
  // const lyrics = useAppSelector((state)=>state.player.);

  return (
    <Panel
      order={2}
      defaultSize={70}
      minSize={25}
      maxSize={100}
      className="h-full w-full p-1"
    >
      <div className="relative max-h-[100%-6rem] h-full rounded-lg bg-neutral-950">
        <div className="absolute top-0 left-0 flex w-full p-4 rounded-t-lg">
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
          {state.section === MenuSectionType.HOME ? (
            <Home />
          ) : state.section === MenuSectionType.LIST ? (
            <List />
          ) : (
            <></>
          )}
        </div>
        {/* Home, Search, Playlist|Album, Artist, List, Lyrics */}
      </div>
    </Panel>
  );
};
