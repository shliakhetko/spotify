import classNames from "classnames";
import React from "react";
import { FaPlay } from "react-icons/fa";
import "../ItemDisplays/index.scss";

interface Props {
  className?: string;
  onClick?: () => void;
  size?: number
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
      <FaPlay size={props.size} />
    </button>
  );
};
