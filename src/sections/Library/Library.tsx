import React, { useEffect, useRef, useState } from "react";
import { LibraryTitle } from "./LibraryTitle";
import { LibraryFilter } from "./LibraryFilter";
import { LibraryList } from "./LibraryList";
// import { library } from "../../data/userData";
import { LibraryFilterItemProps } from "./LibraryFilterItem";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { MenuState } from "../../redux/reducers/menuReducer";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { LayoutActionTypes } from "../../redux/action-types/layoutActionTypes";
import { getRandomItems } from "../../data/userData";
import Item from "../../models/Item";
import { ListItemProps } from "./LibraryItem";

export const Library = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const dispatch = useAppDispatch();
  const isCollapsed = useAppSelector(
    (state) => state.layout.leftSectionCollapsed
  );

  const noneFilter: LibraryFilterItemProps = { type: undefined, title: "" };
  const [currentFilter, setCurrentFilter] = useState(noneFilter);

  const isSmall = useAppSelector((state) => state.layout.leftSectionCollapsed);

  const [library, setLibrary] = useState<Item[]>([]);

  useEffect(() => {
    let arr: Item[] = [];
    getRandomItems(["Playlist", "Artist", "Folder"], 10).then((res) => {
      arr = res;
      setLibrary(arr);
    });
  }, []);

  return (
    <div
      ref={ref}
      className={classNames(
        "max-h-[calc(100%-7.5rem)] h-full pt-2 pl-2 rounded-lg bg-neutral-950",
        isSmall ? "w-16" : "w-full"
      )}
    >
      {/* <button onClick={()=>{
        dispatch({type:LayoutActionTypes.LEFT_SECTION});
      }}> */}
      <LibraryTitle />
      {/* </button> */}
      {/* (ref.current && ref.current.clientWidth < 800) */}
      {!isCollapsed && (
        <LibraryFilter
          currentFilter={currentFilter}
          noneFilter={noneFilter}
          setCurrentFilter={setCurrentFilter}
        />
      )}
      <LibraryList
        library={library === null ? null : (library as ListItemProps[])}
        currentFilter={currentFilter}
      />
    </div>
  );
};
