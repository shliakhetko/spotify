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
      <div className=""></div>
      {props.library.map((content, i) =>
        props.currentFilter !== undefined &&
        props.currentFilter.type !== undefined ? (
          props.currentFilter.type === ItemType.ARTIST ? (
            props.currentFilter.type === content.type && (
              <LibraryItem key={i} {...content} />
            )
          ) : (
            (content.type === ItemType.PLAYLIST ||
              content.type === ItemType.FOLDER) && (
              <LibraryItem key={i} {...content} />
            )
          )
        ) : (
          <LibraryItem key={i} {...content} />
        )
      )}
    </div>
  );
};
