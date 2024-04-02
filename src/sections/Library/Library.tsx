import React, { useState } from "react";
import { LibraryTitle } from "./LibraryTitle";
import { LibraryFilter } from "./LibraryFilter";
import { LibraryList } from "./LibraryList";
import { library } from "../../data/userData";
import { LibraryFilterItemProps } from "./LibraryFilterItem";

export const Library = () => {
  const noneFilter: LibraryFilterItemProps = { type: undefined, title: "" };
  const [currentFilter, setCurrentFilter] = useState(noneFilter);

  return (
    <div className="h-[calc(100%-7.5rem)] w-full p-2 rounded-lg bg-neutral-950">
      <LibraryTitle />
      <LibraryFilter
        currentFilter={currentFilter}
        noneFilter={noneFilter}
        setCurrentFilter={setCurrentFilter}
      />
      <LibraryList library={library} currentFilter={currentFilter}/>
    </div>
  );
};
