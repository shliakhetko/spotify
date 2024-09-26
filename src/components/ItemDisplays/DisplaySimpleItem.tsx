import React, { useState } from "react";
import Item from "../../models/Item";
import classNames from "classnames";
import ItemType from "../../models/ItemType";
import { CiFolderOn } from "react-icons/ci";
import { PlayButton } from "../buttons/PlayButton";
import { PlayingGraphics } from "../graphics/PlayingGraphics";
import Skeleton from "react-loading-skeleton";
import { PlayerActionTypes } from "../../redux/action-types/playerActionTypes";
import { useAppDispatch } from "../../redux/hooks";

type Props = {
  item: Item | null;
};

export const DisplaySimpleItem = (props: Props) => {
  const dispatch = useAppDispatch();
  const [hover, setHover] = useState<boolean>(false);

  if (props.item === null)
    return (
      <div
        className="relative flex w-full rounded-md bg-[rgba(38,38,38,0.7)]"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <div
          className={classNames(
            "min-h-12 min-w-12 max-h-12 max-w-12 flex justify-center items-center text-neutral-300"
          )}
        >
          {
            <Skeleton
              width={48}
              height={48}
              className="h-12 w-12 object-cover"
            />
          }
        </div>
      </div>
    );

  const type = props.item.type;
  const roundedClass =
    type === ItemType.ARTIST ? "rounded-full" : "rounded-l-md";

  return (
    <div
      className="relative flex w-full rounded-md bg-[rgba(38,38,38,0.7)]"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div
        className={classNames(
          "min-h-12 min-w-12 max-h-12 max-w-12 flex justify-center items-center text-neutral-300",
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
      <div className="ml-2 flex flex-col justify-center text-left leading-tight pr-12">
        <span className="font-bold text-sm text-white">{props.item.title}</span>
      </div>
      <div className="absolute top-0 right-2 h-full flex items-center">
        {false ? (
          <PlayingGraphics className={"mr-2"} />
        ) : (
          hover && (
            <PlayButton
              className="p-2 shadow-2xl"
              size={10}
              item = {props.item}
            />
          )
        )}
      </div>
    </div>
  );
};
