import React, { useState } from "react";
import { LibraryFilterItem, LibraryFilterItemProps } from "./LibraryFilterItem";
import ItemType from "../../models/ItemType";

const filters: LibraryFilterItemProps[] = [
  {
    title: "Playlists",
    type: ItemType.PLAYLIST,
  },
  {
    title: "Artists",
    type: ItemType.ARTIST,
  },
];

type Props = {
  currentFilter: LibraryFilterItemProps;
  noneFilter: LibraryFilterItemProps;
  setCurrentFilter: React.Dispatch<
    React.SetStateAction<LibraryFilterItemProps>
  >;
};

export const LibraryFilter = (props: Props) => {
  const { currentFilter, noneFilter, setCurrentFilter } = props;
  // const [currentFilter, setCurrentFilter] = useState(noneFilter);

  return (
    <div className="flex space-x-2 mb-3">
      {currentFilter.type !== undefined && (
        <LibraryFilterItem
          {...noneFilter}
          onClick={() => {
            setCurrentFilter(noneFilter);
          }}
          currentFilter={currentFilter}
        />
      )}
      {filters.map(
        (content, i) =>
          (currentFilter.type === content.type ||
            currentFilter.type === undefined) && (
            <LibraryFilterItem
              key={i}
              {...content}
              onClick={() => {
                setCurrentFilter(content);
              }}
              currentFilter={currentFilter}
            />
          )
      )}
    </div>
  );
};
