import classNames from "classnames";
import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import "../ItemDisplays/index.scss";

interface Props {
  className?: string;
  onClick?: () => void;
  size?: number;
  isPlaying?: boolean;
}

export const PlayButton = (props: Props) => {
  return (
    <button
      className={classNames(
        "rounded-full bg-green-500 text-black",
        props.className
      )}
      onClick={() => props.onClick}
    >
      {props.isPlaying ? <FaPause size={props.size} /> : <FaPlay size={props.size} />}
    </button>
  );
};
