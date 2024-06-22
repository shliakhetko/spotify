import classNames from "classnames";
import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import "../ItemDisplays/index.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Item from "../../models/Item";
import { PlayerActionTypes } from "../../redux/action-types/playerActionTypes";

interface Props {
  className?: string;
  onClick?: () => void;
  item?: Item;
  size?: number;
}

export const PlayButton = (props: Props) => {
  const dispatch = useAppDispatch();

  const isPlaying = useAppSelector((state) => state.player.isPlaying);
  const playlist = useAppSelector((state) => state.player.playlist);
  const isCurrentPlaylistSame = playlist === props.item;

  const handleClick = () => {
    if (isCurrentPlaylistSame) {
      if (isPlaying) {
        dispatch({
          type: PlayerActionTypes.SET_PAUSE,
        });
      } else {
        dispatch({
          type: PlayerActionTypes.SET_PLAY,
        });
      }
    } else {
      dispatch({
        type: PlayerActionTypes.PLAY_NEW,
        payload: props.item,
      });
    }
  };

  return (
    <button
      className={classNames(
        "rounded-full bg-green-500 text-black",
        props.className
      )}
      onClick={props.onClick || handleClick}
    >
      {isCurrentPlaylistSame && isPlaying ? (
        <FaPause size={props.size} />
      ) : (
        <FaPlay size={props.size} />
      )}
    </button>
  );
};
