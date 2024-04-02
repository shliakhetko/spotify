import classNames from "classnames";
import React, { useState } from "react";
import { IconType } from "react-icons";
import { CiFolderOn } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { MenuActionTypes } from "../../redux/action-types/menuActionsTypes";
import { MenuTypes } from "../../redux/enum-types/menuTypes";

export enum LibraryListItemType {
  PLAYLIST = "playlist",
  ARTIST = "artist",
  FOLDER = "folder",
}

interface Playlist {
  title: string;
  type: LibraryListItemType.PLAYLIST;
  id: string;
  owner: string;
  image?: HTMLImageElement | string;
}

interface Artist {
  title: string;
  id: string;
  type: LibraryListItemType.ARTIST;
  image?: HTMLImageElement | string;
}

type FolderContent = Folder | Playlist;

interface Folder {
  title: string;
  type: LibraryListItemType.FOLDER;
  contents: FolderContent[];
}

export type ListItemProps = Playlist | Artist | Folder;

export const LibraryItem = (props: ListItemProps) => {
  const dispatch = useAppDispatch();
  const isSmall = useAppSelector((state) => state.layout.leftSectionCollapsed);

  const type = props.type;
  const roundedClass =
    type === LibraryListItemType.ARTIST ? "rounded-full" : "rounded-md";

  const [isOpened, setOpened] = useState(false);

  return (
    <>
      <button
        className={classNames("w-full flex hover:bg-neutral-900 rounded-md relative", !isSmall && "p-2")}
        onClick={() => {
          if (type === LibraryListItemType.PLAYLIST) {
            dispatch({
              type: MenuActionTypes[MenuTypes.PLAYLIST],
              payload: props.id,
            });
          }
          if (type === LibraryListItemType.ARTIST) {
            dispatch({
              type: MenuActionTypes[MenuTypes.ARTIST],
              payload: props.id,
            });
          }
        }}
      >
        <div
          className={classNames(
            "max-h-12 min-h-12 max-w-12 min-w-12 flex justify-center items-center bg-neutral-800 text-neutral-300",
            roundedClass
          )}
        >
          {type === LibraryListItemType.FOLDER ? (
            <CiFolderOn size={32} />
          ) : (
            props.image !== undefined &&
            typeof props.image === "string" && (
              <img
                className={classNames("object-cover", roundedClass)}
                alt={props.title}
                src={props.image}
              />
            )
          )}
        </div>
        <div className="ml-4 mt-1 flex flex-col justify-center text-left leading-tight">
          {!isSmall && <><span className="text-white">{props.title}</span>
          <span className="text-neutral-400">
            {type === LibraryListItemType.FOLDER ? (
              <>{props.contents.length} Playlists</>
            ) : type === LibraryListItemType.ARTIST ? (
              <>Artist</>
            ) : (
              type === LibraryListItemType.PLAYLIST && (
                <>Playlist • {props.owner}</>
              )
            )}
          </span></>}
        </div>
        {type === LibraryListItemType.FOLDER && (
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
      {type === LibraryListItemType.FOLDER && (
        <div className={classNames("pl-3", !isOpened && "hidden")}>
          {props.contents.map((content, i) => (
            <LibraryItem key={i} {...content} />
          ))}
        </div>
      )}
    </>
  );
};
