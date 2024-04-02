import React from "react";
import { MenuItem } from "./MenuItem";
import { GoHomeFill, GoHome } from "react-icons/go";
import { RiSearchEyeFill, RiSearchEyeLine } from "react-icons/ri";
import { MenuTypes } from "../../redux/enum-types/menuTypes";
import classNames from "classnames";
import { useAppSelector } from "../../redux/hooks";

export const Menu = () => {
  const isSmall = useAppSelector(state=>state.layout.leftSectionCollapsed);

  return (
    <div className={classNames("h-28 py-1 px-2 mb-2 rounded-lg bg-neutral-950", isSmall ? "w-16" : "w-full")}>
      <MenuItem Icon={GoHome} HoverIcon={GoHomeFill} title={"Home"} actionType={MenuTypes.HOME} />
      <MenuItem Icon={RiSearchEyeLine} HoverIcon={RiSearchEyeFill} title={"Search"} actionType={MenuTypes.SEARCH} />
    </div>
  );
};
