import React, { useEffect, useRef, useState } from "react";
import { LibraryTitle } from "./LibraryTitle";
import { LibraryFilter } from "./LibraryFilter";
import { LibraryList } from "./LibraryList";
import { LibraryFilterItemProps } from "./LibraryFilterItem";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { MenuState } from "../../redux/reducers/menuReducer";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { LayoutActionTypes } from "../../redux/action-types/layoutActionTypes";
import { getRandomItems } from "../../data/userData";
import Item from "../../models/Item";
import { LibraryItem, ListItemProps } from "./LibraryItem";

export const Library = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const dispatch = useAppDispatch();
  const isCollapsed = useAppSelector(
    (state) => state.layout.leftSectionCollapsed
  );

  const noneFilter: LibraryFilterItemProps = { type: undefined, title: "" };
  const [currentFilter, setCurrentFilter] = useState(noneFilter);
  const empty = new Array<null>(20).fill(null);

  const isSmall = useAppSelector((state) => state.layout.leftSectionCollapsed);

  const [library, setLibrary] = useState<Item[] | null>(null);

  useEffect(() => {
    getRandomItems(["Playlist", "Artist", "Folder"], 10).then((res) => {
      setLibrary(res);
    })
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
      {library ? (
        <LibraryList
          library={library as ListItemProps[]}
          currentFilter={currentFilter}
        />
      ) : (
        <ul>
          {empty.map((content, i) => (
            <li key={i}>
              <LibraryItem item={content} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// export const List = (props:Item[]|null) => {
//   return (
//     props.library?<LibraryList
//         library={library ? (library as ListItemProps[]) : null}
//         currentFilter={currentFilter}
//       />:empty.map((content, i) => (
//         <li key={i}>
//           <LibraryItem item={content} />
//         </li>
//       ))
//   )
// }
