import React, { useState } from "react";
import Item from "../../models/Item";
import Playlist from "../../models/Items/Playlist";
import { useAppDispatch } from "../../redux/hooks";
import { MenuActionTypes } from "../../redux/action-types/menuActionsTypes";

type Props = {
  item: Playlist;
  children: React.ReactNode;
};

export const ChangeColorContainer = (props: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="h-full w-full"
      onMouseEnter={() => {
        dispatch({
          type: MenuActionTypes.SET_CURRENT_COLOR,
          payload: props.item.image || null,
        });
      }}
      onMouseLeave={() => {
        dispatch({ type: MenuActionTypes.SET_CURRENT_COLOR, payload: null });
      }}
    >
      {props.children}
    </div>
  );
};
