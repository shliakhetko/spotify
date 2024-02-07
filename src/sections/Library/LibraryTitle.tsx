import React from "react";
import { VscLibrary } from "react-icons/vsc";

export const LibraryTitle = () => {
  return (
    <div className="h-10 w-full mb-4 p-2 flex items-center text-neutral-500 hover:text-white transition">
      <VscLibrary size={36} />{" "}
      <span className="ml-3 mt-1 font-bold">My library</span>
      <button className=""></button>
      <button className=""></button>
    </div>
  );
};
