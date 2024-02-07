import React from "react";
import { LibraryListItemType } from "./LibraryItem";
import { RxCross2 } from "react-icons/rx";
import classNames from "classnames";

export type LibraryFilterItemProps = {
  title: string;
  type: LibraryListItemType.ARTIST | LibraryListItemType.PLAYLIST | undefined;
};

interface Props extends LibraryFilterItemProps {
  onClick: () => void;
  currentFilter: LibraryFilterItemProps;
}

export const LibraryFilterItem = (props: Props) => {
  return (
    <button
      className={classNames(
        props.type === undefined ? "w-8" : "px-3",
        "h-8 flex justify-center items-center rounded-full transition",
        props.currentFilter.type === props.type
          ? "bg-white text-neutral-800"
          : "text-white bg-neutral-800 hover:bg-neutral-700"
      )}
      onClick={props.onClick}
    >
      {props.type === undefined ? <RxCross2 /> : props.title}
    </button>
  );
};
