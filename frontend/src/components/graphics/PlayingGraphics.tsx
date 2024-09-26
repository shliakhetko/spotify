import classNames from "classnames";
import React from "react";
import "./index.scss";

interface Props {
  className?: string;
  size?: number | string;
}

export const PlayingGraphics = (props: Props) => {
  return (
    <ul
      className={classNames("PlayingGraphics flex items-end space-x-0.5", props.className)}
      style={{maxHeight: props.size || 16, minHeight: props.size || 16, height: props.size || 16, width: props.size || 16 }}
    >
      <li className="w-1/4 bg-green-500" style={{ maxHeight: props.size || 16}}/>
      <li className="w-1/4 bg-green-500" style={{ maxHeight: props.size || 16}}/>
      <li className="w-1/4 bg-green-500" style={{ maxHeight: props.size || 16}}/>
      <li className="w-1/4 bg-green-500" style={{ maxHeight: props.size || 16}}/>
    </ul>
  );
};
