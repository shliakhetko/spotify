import React, { useState } from "react";
import Track from "../../models/Items/Track";
import { FaPause, FaPlay } from "react-icons/fa";
import { DisplayLibraryItem } from "../../components/ItemDisplays/DisplayLibraryItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { PlayerActionTypes } from "../../redux/action-types/playerActionTypes";
import { PlayingGraphics } from "../../components/graphics/PlayingGraphics";
import classNames from "classnames";
import { getItem } from "../../data/userData";

type Props = {
  track: Track;
  index: number;
  width?: number;
  isNumbered?: boolean;
};

export const PlaylistItem = (props: Props) => {
  const isPlaying = useAppSelector((state) => state.player.isPlaying);
  const isCurrentTrackSame = useAppSelector(
    (state) => state.player.playing && state.player.playing.id == props.track.id
  );
  const dispatch = useAppDispatch();
  const [hover, setHover] = useState(false);

  return (
    <tr
      key={props.index}
      className="hover:bg-neutral-700"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={() => {
        if (isCurrentTrackSame) {
          if (isPlaying) dispatch({ type: PlayerActionTypes.SET_PAUSE });
          else dispatch({ type: PlayerActionTypes.SET_PLAY });
        } else
        getItem(props.track.type, props.track.id).then((item) => {
          dispatch({ type: PlayerActionTypes.PLAY_NEW, payload: item });
        });
      }}
    >
      {props.isNumbered && (
        <td key={1} className="border-l-md">
          <div className="w-full flex justify-center relative">
            {isCurrentTrackSame ? (
              hover ? (isPlaying ? (
                <FaPause size={12} className="text-white" />
              ) : (
                <FaPlay size={12} className="text-white" />
              )) : (
                !isPlaying && <span className="mx-0.5 text-green-500">{props.index + 1}</span>
              )
            ) : hover ? (
              <FaPlay size={12} className="text-white" />
            ) : (
              <span className="mx-0.5">{props.index + 1}</span>
            )}
            <PlayingGraphics
              className={classNames(
                "absolute",
                (!isCurrentTrackSame || hover || !isPlaying) && "opacity-0"
              )}
            />
          </div>
        </td>
      )}
      <td key={2} className="relative">
        {!props.isNumbered && hover && <div className="absolute left-0 top-0 translate-x-[0.525rem] translate-y-[0.525rem] h-[3rem] w-[3.05rem] flex justify-center items-center">
          {(isPlaying && isCurrentTrackSame ? (
              <FaPause size={12} className="text-white absolute z-30" />
            ) : (
              <FaPlay size={12} className="text-white absolute z-30" />
            ))}
             <div className="h-[3rem] w-[3.05rem] bg-black opacity-30 rounded-md"></div>
        </div>}
        <DisplayLibraryItem
          item={props.track}
          isPlaying={isCurrentTrackSame || false}
        />
      </td>
      <td key={3} className="">
        {new Date(props.track.date).toLocaleDateString("en-US")}
      </td>
    </tr>
  );
};
