import React from "react";
import { MenuItem } from "./MenuItem";
import { GoHomeFill, GoHome } from "react-icons/go";
import { RiSearchEyeFill, RiSearchEyeLine } from "react-icons/ri";

export const Menu = () => {
  return (
    <div className="h-28 md:w-full w-16 py-1 px-2 mb-2 rounded-lg bg-neutral-950">
      <MenuItem Icon={GoHome} HoverIcon={GoHomeFill} title={"Home"} actionType={"HOME"} />
      <MenuItem Icon={RiSearchEyeLine} HoverIcon={RiSearchEyeFill} title={"Search"} actionType={"SEARCH"} />
    </div>
  );
};
