import React from "react";
import { LibraryItem, LibraryListItemType, ListItemProps } from "./LibraryItem";
import { LibraryFilterItemProps } from "./LibraryFilterItem";

type Props = {
  library: ListItemProps[];
  currentFilter?: LibraryFilterItemProps;
};

export const LibraryList = (props: Props) => {
  return (
    <div className="max-h-[calc(100%-6.35rem)] h-full pr-4 overflow-y-hidden hover:pr-1 hover:overflow-y-scroll">
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
