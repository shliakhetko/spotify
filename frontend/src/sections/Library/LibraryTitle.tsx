import React from "react";
import { VscLibrary } from "react-icons/vsc";
import { useAppSelector } from "../../redux/hooks";
import classNames from "classnames";

export const LibraryTitle = () => {
  const isSmall = useAppSelector((state) => state.layout.leftSectionCollapsed);

  return (
    // <div className="h-10 w-full mb-4 p-2 flex items-center text-neutral-500 hover:text-white transition">
    <div
      className={classNames(
        "h-10 mb-4 p-2 flex items-center",
        isSmall ? "w-16" : "w-full"
      )}
    >
      <div>
        <VscLibrary size={36} />
      </div>
      <span className="ml-3 mt-1 font-bold whitespace-nowrap">My library</span>
    </div>
  );
};
