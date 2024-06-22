import React, { useEffect, useState } from "react";
import { LibraryItem, ListItemProps } from "./LibraryItem";
import { LibraryFilterItemProps } from "./LibraryFilterItem";
import ItemType from "../../models/ItemType";

type Props = {
  library: ListItemProps[] | null;
  currentFilter?: LibraryFilterItemProps;
};

export const LibraryList = (props: Props) => {
  const [library, setLibrary] = useState<ListItemProps[] | null>(null);

  useEffect(() => {
    if (props.library && props.library[0] !== null)
      setLibrary(props.library);
  });

  return (
    <div className="max-h-[calc(100%-6.35rem)] h-full pr-4 overflow-x-hidden overflow-y-hidden hover:pr-1 hover:overflow-y-scroll">
      <ul className="">
        {library
          && library.map((content, i) =>
              content === null ? (
                <li key={i}>
                  <LibraryItem item={content} />
                </li>
              ) : props.currentFilter !== undefined &&
                props.currentFilter.type !== undefined ? (
                props.currentFilter.type === ItemType.ARTIST ? (
                  props.currentFilter.type === content.type && (
                    <li key={i}>
                      <LibraryItem item={content} />
                    </li>
                  )
                ) : (
                  (content.type === ItemType.PLAYLIST ||
                    content.type === ItemType.FOLDER) && (
                    <li key={i}>
                      <LibraryItem item={content} />
                    </li>
                  )
                )
              ) : (
                props.library !== null && (
                  <li key={i}>
                    <LibraryItem item={content} />
                  </li>
                )
              )
            )
          }
      </ul>
    </div>
  );
};
