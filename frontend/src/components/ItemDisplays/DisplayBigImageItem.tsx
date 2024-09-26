import React, { useRef } from "react";
import Item from "../../models/Item";
import ItemType from "../../models/ItemType";
import classNames from "classnames";

import "./index.scss";
import useRefWidth from "../../hooks/useRefWidth";
import { PlayButton } from "../buttons/PlayButton";
import Skeleton from "react-loading-skeleton";
import { useAppDispatch } from "../../redux/hooks";
import { Player } from "../../sections/Player/Player";
import { PlayerActionTypes } from "../../redux/action-types/playerActionTypes";

type Props = {
  item: Item | null;
};

export const DisplayBigImageItem = (props: Props) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const width = useRefWidth(ref);

  if (props.item === null)
    return (
      <div className="DisplayBigItemImage h-fit w-fit flex flex-col">
        <div
          className={classNames(
            "w-full relative flex justify-center items-center bg-neutral-800 text-neutral-300"
          )}
          style={{ height: width }}
          ref={ref}
        ></div>
        <div className="mt-2 flex flex-col justify-center text-left leading-tight">
          <span className="text-white text-sm">
            <Skeleton width={120} height={12} />
          </span>
          <span className="text-neutral-400 text-sm">
            <Skeleton width={80} height={10} />
          </span>
        </div>
      </div>
    );

  const type = props.item.type;
  const roundedClass = type === ItemType.ARTIST ? "rounded-full" : "rounded-md";

  return (
    <div className="DisplayBigItemImage h-fit w-fit flex flex-col">
      <div
        className={classNames(
          "w-full relative flex justify-center items-center bg-neutral-800 text-neutral-300",
          roundedClass
        )}
        style={{ height: width }}
        ref={ref}
      >
        {type !== ItemType.FOLDER &&
          props.item.image !== undefined &&
          typeof props.item.image === "string" && (
            <img
              className={classNames("object-cover", roundedClass)}
              alt={props.item.title}
              src={props.item.image}
            />
          )}
        <PlayButton
          className="p-3 right-2 bottom-2 absolute"
          item = {props.item}
        />
      </div>
      <div className="mt-2 flex flex-col justify-center text-left leading-tight">
        <span className="text-white text-sm">{props.item.title}</span>
        <span className="text-neutral-400 text-sm">
          {type === ItemType.ARTIST ? (
            <>Artist</>
          ) : type === ItemType.PLAYLIST ? (
            <>{props.item.owner.length > 0 && props.item.owner[0].title}</>
          ) : (
            type === ItemType.ALBUM && (
              <>{props.item.owner.length > 0 && props.item.owner[0].title}</>
            )
          )}
        </span>
      </div>
    </div>
  );
};
