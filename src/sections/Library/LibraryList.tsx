import React from "react";
import { LibraryItem, ListItemProps } from "./LibraryItem";
import { LibraryFilterItemProps } from "./LibraryFilterItem";
import ItemType from "../../models/ItemType";

type Props = {
  library: ListItemProps[];
  currentFilter?: LibraryFilterItemProps;
};

export const LibraryList = (props: Props) => {
  return (
    <div className="">
      <ul className="">
        {props.library.map((content, i) =>
          props.currentFilter !== undefined &&
            props.currentFilter.type !== undefined ? (
            props.currentFilter.type === ItemType.ARTIST ? (
              props.currentFilter.type === content.type && (
                <li key={i}><LibraryItem {...content} /></li>
              )
            ) : (
              (content.type === ItemType.PLAYLIST ||
                content.type === ItemType.FOLDER) && (
                <li key={i}><LibraryItem {...content} /></li>
              )
            )
          ) : (
            <li key={i}><LibraryItem {...content} /></li>
          )
        )}
      </ul>
    </div>
  );
};
