import React from "react";
import Item from "../../models/Item";
import classNames from "classnames";
import ItemType from "../../models/ItemType";
import { CiFolderOn } from "react-icons/ci";
import Skeleton from "react-loading-skeleton";

export const DisplayLibraryItem = (props: { item: Item | null, isPlaying?: boolean, showArtist?: boolean }) => {
  if (props.item === null)
    return (
      <div className="p-2 flex">
        <div
          className={classNames(
            "min-h-12 min-w-12 max-h-12 -mt-1 max-w-12 flex justify-center items-center text-neutral-300"
        )}
        >
          <Skeleton width={48} height={48} />
        </div>
        <div className="ml-4 mt-1 flex flex-col justify-center text-left leading-tight">
          <span className="text-white whitespace-nowrap">
            <Skeleton width={120} height={12}/>
          </span>
          <span className="text-neutral-400 whitespace-nowrap">
            <Skeleton width={80} height={10} />
          </span>
        </div>
      </div>
    );

  const type = props.item.type;
  const roundedClass = type === ItemType.ARTIST ? "rounded-full" : "rounded-md";

  return (
    <div className="p-2 flex">
      <div
        className={classNames(
          "min-h-12 min-w-12 max-h-12 max-w-12 flex justify-center items-center bg-neutral-800 text-neutral-300",
          roundedClass
        )}
      >
        {type === ItemType.FOLDER ? (
          <CiFolderOn size={32} />
        ) : (
          props.item.image !== undefined &&
          typeof props.item.image === "string" && (
            <img
              className={classNames("h-12 w-12 object-cover", roundedClass)}
              alt={props.item.title}
              src={props.item.image}
            />
          )
        )}
      </div>
      <div className="ml-4 mt-1 flex flex-col justify-center text-left leading-tight">
        <span className={classNames(props.isPlaying ? "text-green-500" : "text-white", "whitespace-nowrap")}>{props.item.title}</span>
        <span className="text-neutral-400 whitespace-nowrap">
          {type === ItemType.TRACK ? (
            <>{props.showArtist && props.item.owner[0].title}</>
          ) :type === ItemType.FOLDER ? (
            <>{props.item.contents.length} Playlists</>
          ) : type === ItemType.ARTIST ? (
            <>Artist</>
          ) : type === ItemType.PLAYLIST ? (
            <>
              Playlist •{" "}
              {props.item.owner.length > 0 && props.item.owner[0].title}
            </>
          ) : (
            type === ItemType.ALBUM && (
              <>
                Album •{" "}
                {props.item.owner.length > 0 && props.item.owner[0].title}
              </>
            )
          )}
        </span>
      </div>
    </div>
  );
};
