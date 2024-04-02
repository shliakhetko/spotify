import React from 'react'
import Item from '../../models/Item'
import classNames from 'classnames'
import ItemType from '../../models/ItemType';
import { CiFolderOn } from 'react-icons/ci';

export const DisplayLibraryItem = (props: Item) => {
  const type = props.type;
  const roundedClass =
    type === ItemType.ARTIST ? "rounded-full" : "rounded-md";

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
          props.image !== undefined &&
          typeof props.image === "string" && (
            <img
              className={classNames("h-12 w-12 object-cover", roundedClass)}
              alt={props.title}
              src={props.image}
            />
          )
        )}
      </div>
      <div className="ml-4 mt-1 flex flex-col justify-center text-left leading-tight">
        <span className="text-white whitespace-nowrap">{props.title}</span>
        <span className="text-neutral-400 whitespace-nowrap">
          {type === ItemType.FOLDER ? (
            <>{props.contents.length} Playlists</>
          ) : type === ItemType.ARTIST ? (
            <>Artist</>
          ) : type === ItemType.PLAYLIST ? (
            <>Playlist • {props.owner.length > 0 && props.owner[0].title}</>
          ) : (
            type === ItemType.ALBUM && <>Album • {props.owner.length > 0 && props.owner[0].title}</>
          )}
        </span>
      </div>
    </div>
  )
}
