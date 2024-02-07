import React from "react";
import { LibraryItem, LibraryListItemType, ListItemProps } from "./LibraryItem";
import { LibraryFilterItemProps } from "./LibraryFilterItem";

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
          props.currentFilter.type === LibraryListItemType.ARTIST ? (
            props.currentFilter.type === content.type && (
              <LibraryItem key={i} {...content} />
            )
          ) : (
            (content.type === LibraryListItemType.PLAYLIST ||
              content.type === LibraryListItemType.FOLDER) && (
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
