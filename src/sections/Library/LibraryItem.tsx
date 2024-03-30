import classNames from "classnames";
import React, { useState } from "react";
import { IconType } from "react-icons";
import { CiFolderOn } from "react-icons/ci";
import { useAppDispatch } from "../../redux/hooks";
import { MenuActionTypes } from "../../redux/action-types/menuActionsTypes";
import { MenuTypes } from "../../redux/enum-types";
import ItemType from "../../models/ItemType";
import Playlist from "../../models/Items/Playlist";
import Folder from "../../models/Items/Folder";
import Album from "../../models/Items/Album";
import { DisplayLibraryItem } from "../../components/ItemDisplays/DisplayLibraryItem";
import Artist from "../../models/Items/Artist";

export type ListItemProps = Album | Playlist | Artist | Folder;

type Props = ListItemProps | { type: "ID"};

export const LibraryItem = (props: Props) => {
  const dispatch = useAppDispatch();

  const type = props.type;

  if (type === "ID") {
    console.log("Got ID");
  }

  const [isOpened, setOpened] = useState(false);

  return type !== "ID" ? (
    <>
      <button
        className="w-full flex hover:bg-neutral-900 rounded-md relative"
        onClick={() => {
          if (type === ItemType.PLAYLIST) {
            dispatch({
              type: MenuActionTypes[MenuTypes.PLAYLIST],
              payload: props.id,
            });
          }
          if (type === ItemType.ALBUM) {
            dispatch({
              type: MenuActionTypes[MenuTypes.ALBUM],
              payload: props.id,
            });
          }
          if (type === ItemType.ARTIST) {
            dispatch({
              type: MenuActionTypes[MenuTypes.ARTIST],
              payload: props.id,
            });
          }
        }}
      >
        <DisplayLibraryItem {...props} />
        {type === ItemType.FOLDER && (
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
      {type === ItemType.FOLDER && (
        <div className={classNames("pl-3", !isOpened && "hidden")}>
          {props.contents.length > 0 && props.contents.map((content, i) => (
            <LibraryItem {...content} />
          ))}
        </div>
      )}
    </>
  ) : <></>
};
