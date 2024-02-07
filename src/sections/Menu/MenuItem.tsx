import React, { useState } from "react";
import { IconType } from "react-icons";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  MenuSectionType,
  stringToMenuSectionType,
} from "../../redux/reducers/menuReducer";
import { MenuActionTypes } from "../../redux/action-types/menuActionsTypes";
import { MenuTypes } from "../../redux/enum-types";

type Props = {
  Icon: IconType;
  HoverIcon?: IconType;
  title: string;
  actionType: MenuTypes;
};

export const MenuItem = (props: Props) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.menu.section);

  const iconSize = 36;

  const [isHover, setHover] = useState(false);
  const isSelected =
    state === MenuSectionType[props.actionType as keyof typeof MenuSectionType];

  const Icon: IconType = props.Icon;
  const HoverIcon: IconType = props.HoverIcon || props.Icon;

  return (
    <button
      className={classNames(
        "h-1/2 w-full p-2 flex items-center hover:text-white transition",
        isSelected ? "text-white" : "text-neutral-400"
      )}
      onClick={() => {
        dispatch({
          type: MenuActionTypes[props.actionType],
        });
        console.log(state);
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div className="">
        {isSelected ? <HoverIcon size={iconSize} /> : <Icon size={iconSize} />}
      </div>
      <span
        className={classNames(
          "ml-3 mt-1 font-bold md:block hidden",
          isHover && "underline"
        )}
      >
        {props.title}
      </span>
    </button>
  );
};
