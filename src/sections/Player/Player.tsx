import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaRandom } from "react-icons/fa";
import {
  FaPause,
  FaPlay,
  FaBackwardStep,
  FaForwardStep,
} from "react-icons/fa6";
import { SlLoop } from "react-icons/sl";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import classNames from "classnames";
import { PlayerActionTypes } from "../../redux/action-types/playerActionTypes";
import ReactPlayer from "react-player";
import { Duration } from "../../components/other/Duration";
import { AudioURL } from "../../models/url";

export const Player = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.player);
  const playing = state.isPlaying;

  const playerRef = useRef<ReactPlayer | null>(null);

  const url = useState<AudioURL | null>(null);
  // "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3"

  // const [playing, setPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const [played, setPlayed] = useState<number>(0);
  const [seeking, setSeeking] = useState<boolean>(false);

  const handlePlay = () => {
    // setPlaying(true);
    dispatch({ type: PlayerActionTypes.SET_PLAY });
  };

  const handlePause = () => {
    // setPlaying(false);
    dispatch({ type: PlayerActionTypes.SET_PAUSE });
  };

  const handleProgress = (state: any) => {
    setProgress(state.played);
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  const handleSeekMouseDown = (e: any) => {
    setSeeking(true);
  };

  const handleSeekChange = (e: any) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = (e: any) => {
    playerRef.current?.seekTo(parseFloat(e.target.value));
    setSeeking(false);
  };

  const handleEnded = () => {
    dispatch({ type: PlayerActionTypes.PLAY_NEXT });
  };

  useMemo(() => {
    setPlayed((prevPlayed) => {
      if (!seeking && prevPlayed !== progress) {
        return progress;
      }
      return prevPlayed;
    });
  }, [progress, seeking]);

  return (
    <div className="w-1/3 min-w-[20rem] w-full flex justify-center items-center flex-col">
      <div className="w-fit flex justify-between items-center space-x-2 ">
        <button
          className={classNames(
            state.remix ? "text-green-500" : "text-neutral-300",
            "p-2"
          )}
          onClick={() => {
            dispatch({ type: PlayerActionTypes.REMIX });
          }}
        >
          <FaRandom />
        </button>
        <button
          className={classNames("text-neutral-300", "p-2")}
          onClick={() => {
            dispatch({ type: PlayerActionTypes.PLAY_PREVIOUS });
          }}
        >
          <FaBackwardStep />
        </button>
        <button
          className={classNames("rounded-full text-black bg-white", "p-3")}
          onClick={() => {
            dispatch({
              type: playing
                ? PlayerActionTypes.SET_PAUSE
                : PlayerActionTypes.SET_PLAY,
            });
          }}
        >
          {playing ? <FaPause /> : <FaPlay />}
        </button>
        <button
          className={classNames("text-neutral-300", "p-2")}
          onClick={() => {
            dispatch({ type: PlayerActionTypes.PLAY_NEXT });
          }}
        >
          <FaForwardStep />
        </button>
        <button
          className={classNames(
            state.loop != 0 ? "text-green-500" : "text-neutral-300",
            "relative",
            "p-2"
          )}
          onClick={() => {
            dispatch({ type: PlayerActionTypes.LOOP });
          }}
        >
          <SlLoop />
          {state.loop == 2 && (
            <span className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-2/5 text-[7px]">
              1
            </span>
          )}
        </button>
      </div>
      <div className="w-2/3 flex justify-between items-center space-x-3">
        <span className="text-neutral-200 text-sm w-12 text-center">
          <Duration seconds={duration * played} />
        </span>
        <input
          id="slider"
          className="w-full"
          type="range"
          min={0}
          max={1}
          step="any"
          value={played}
          onMouseDown={handleSeekMouseDown}
          onChange={handleSeekChange}
          onMouseUp={handleSeekMouseUp}
          // className="w-full h-1 rounded-full appearance-none bg-neutral-600 accent-white"
        />
        <span className="text-neutral-200 text-sm w-12 text-center">
          <Duration seconds={duration} />
        </span>
      </div>
      {
        <ReactPlayer
          height={0}
          width={0}
          ref={playerRef}
          url={state.playing?.audio || undefined}
          volume={state.volume}
          playing={playing}
          onPlay={handlePlay}
          onPause={handlePause}
          onProgress={handleProgress}
          onDuration={handleDuration}
          loop={false}
          onEnded={handleEnded}
        />
      }
    </div>
  );
};
