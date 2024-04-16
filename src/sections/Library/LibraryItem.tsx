import classNames from "classnames";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { MenuActionTypes } from "../../redux/action-types/menuActionsTypes";
import { MenuTypes } from "../../redux/enum-types/menuTypes";
import ItemType from "../../models/ItemType";
import Playlist from "../../models/Items/Playlist";
import Folder from "../../models/Items/Folder";
import Album from "../../models/Items/Album";
import { DisplayLibraryItem } from "../../components/ItemDisplays/DisplayLibraryItem";
import Artist from "../../models/Items/Artist";
import { Identificator } from "../../models/ID";
import Item from "../../models/Item";
import { Interface } from "readline";
import { getItem } from "../../data/userData";

export type ListItemProps = Album | Playlist | Artist | Folder;

type Props = { item: ListItemProps | Identificator | null };

export const LibraryItem = (props: Props) => {
  const dispatch = useAppDispatch();
  const isSmall = useAppSelector((state) => state.layout.leftSectionCollapsed);

  const [item, setItem] = useState<Item>(props.item as Item);

  if (props.item !== null && props.item.type === "id") {
    getItem(props.item.getType, props.item.id).then((res) => {
      setItem(res);
    });
    console.log("Got ID");
  }

  const [isOpened, setOpened] = useState(false);

  return (
    <>
      <button
        className="w-full flex hover:bg-neutral-900 rounded-md relative"
        onClick={() => {
          if (item === null) return;
          if (item.type === ItemType.PLAYLIST) {
            dispatch({
              type: MenuActionTypes[MenuTypes.PLAYLIST],
              payload: { id: item.id, type: item.type },
            });
          }
          if (item.type === ItemType.ALBUM) {
            dispatch({
              type: MenuActionTypes[MenuTypes.ALBUM],
              payload: { id: item.id, type: item.type },
            });
          }
          if (item.type === ItemType.ARTIST) {
            dispatch({
              type: MenuActionTypes[MenuTypes.ARTIST],
              payload: { id: item.id, type: item.type },
            });
          }
        }}
      >
        <DisplayLibraryItem item={item} />
        {item !== null && item.type === ItemType.FOLDER && (
          <div
            className={classNames(
              "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white",
              isOpened && "rotate-90"
            )}
            onClick={() => {
              setOpened(!isOpened);
            }}
          >
            ❯
          </div>
        )}
      </button>
      {item !== null && item.type === ItemType.FOLDER && (
        <ul className={classNames("pl-3", !isOpened && "hidden")}>
          {item.contents.length > 0 &&
            item.contents.map((content, i) => (
              <li key={i}>
                <LibraryItem item={content} />
              </li>
            ))}
        </ul>
      )}
    </>
  );
};
