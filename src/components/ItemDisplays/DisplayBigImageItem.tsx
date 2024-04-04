import React, { useRef } from 'react'
import Item from '../../models/Item';
import ItemType from '../../models/ItemType';
import classNames from 'classnames';

import "./index.scss";
import useRefWidth from '../../hooks/useRefWidth';
import { PlayButton } from '../buttons/PlayButton';

export const DisplayBigImageItem = (props: Item) => {
  const ref = useRef<HTMLDivElement>(null);
  const width = useRefWidth(ref);

  const type = props.type;
  const roundedClass =
    type === ItemType.ARTIST ? "rounded-full" : "rounded-md";

  return (
    <div className="DisplayBigItemImage h-fit w-fit flex flex-col">
      <div
        className={classNames(
          "w-full relative flex justify-center items-center bg-neutral-800 text-neutral-300",
          roundedClass
        )}
        style={{height:width}}
        ref={ref}
      >
        {type !== ItemType.FOLDER && (
          props.image !== undefined &&
          typeof props.image === "string" && (
            <img
              className={classNames("object-cover", roundedClass)}
              alt={props.title}
              src={props.image}
            />
          )
        )}
        <PlayButton className='p-3 right-2 bottom-2 absolute'/>
      </div>
      <div className="mt-2 flex flex-col justify-center text-left leading-tight">
        <span className="text-white text-sm">{props.title}</span>
        <span className="text-neutral-400 text-sm">
          {type === ItemType.ARTIST ? (
            <>Artist</>
          ) : type === ItemType.PLAYLIST ? (
            <>{props.owner.length > 0 && props.owner[0].title}</>
          ) : (
            type === ItemType.ALBUM && <>{props.owner.length > 0 && props.owner[0].title}</>
          )}
        </span>
      </div>
    </div>
  )
}