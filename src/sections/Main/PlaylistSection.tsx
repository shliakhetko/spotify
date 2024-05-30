import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getItem } from "../../data/userData";
import { Identificator } from "../../models/ID";
import Item from "../../models/Item";
import Playlist from "../../models/Items/Playlist";
import classNames from "classnames";
import { ImageByColor } from "../../components/graphics/ImageByColor";
import { LayoutActionTypes } from "../../redux/action-types/layoutActionTypes";
import { PlayButton } from "../../components/buttons/PlayButton";
import { PlaylistItem } from "./PlaylistItem";
import { Player } from "../Player/Player";
import { PlayerActionTypes } from "../../redux/action-types/playerActionTypes";

export const PlaylistSection = () => {
  const dispatch = useAppDispatch();
  const content = useAppSelector(
    (state) => state.menu.content as Playlist | Identificator
  );
  const playingPlayilist = useAppSelector(
    (state) => state.player.playlist
  );
  const width = useAppSelector((state) => state.layout.screenWidth);

  const [item, setItem] = useState<Playlist | null>(null);

  const recomendations = item && [...item.contents] || [];

  useEffect(() => {
    if (content?.type === "id")
      getItem(content.getType, content.id as string).then((res) => {
        const currentItem = res as Playlist;
        setItem(currentItem);
        dispatch({
          type: LayoutActionTypes.SET_CURRENT_COLOR,
          payload: currentItem?.image || null,
        });
      });
    else {
      setItem(content as Playlist);
      dispatch({
        type: LayoutActionTypes.SET_CURRENT_COLOR,
        payload: content?.image || null,
      });
    }
  }, []);

  return (
    <div className="h-full relative">
      <ImageByColor
        className={classNames(
          "min-h-[30rem] w-[calc(100%+14px)] rounded-t-lg duration-500 flex items-end absolute left-0 top-0 z-0",
          "bg-slate-700"
        )}
      >
        <div className="min-h-[22.5rem] h-full w-full pt-20 px-5 bg-gradient-to-t from-neutral-950 to-[rgba(10,10,10,0)]"></div>
      </ImageByColor>
      {item && (
        <div className="h-full w-full absolute left-0 top-0 z-10">
          <div className="flex items-end p-4 pt-16">
            <img
              className="h-40"
              src={item.image}
              alt={"Image " + item.title}
            />
            <div className="ml-4 flex flex-col">
              <span>Public playlist</span>
              <span className="text-[2.5em] font-bold">{item.title}</span>
              <div className="flex">
                <span className="font-semibold">{item.title}</span>
                <span className="ml-2 text-neutral-400">
                  • {item.contents.length} tracks
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-[rgba(10,10,10,0.3)]">
            <div>
              <button onClick={()=>{
                dispatch({type:PlayerActionTypes.PLAY_NEW, payload: item});
              }}>
                <PlayButton className="p-5" size={16} isPlaying={(playingPlayilist && content.id === playingPlayilist.id) || false} />
              </button>
            </div>
            <div className="mt-4 mb-10">
              <table className="w-full text-neutral-400">
                <tr className="">
                  <td className="border-b border-neutral-700 pb-2 text-center">#</td>
                  <td className="border-b border-neutral-700 pb-2">Title</td>
                  <td className="border-b border-neutral-700 pb-2">Upload Date</td>
                </tr>
                <div className="mb-3"/>
                {item.contents.map((track, i) => (
                  <PlaylistItem index={i} track={track} width={width} isNumbered={true}/>
                ))}
              </table>
            </div>
            <span className="text-[1.25rem] font-bold">Recomendations</span>
            <div className="mt-4">
              <table className="w-full text-neutral-400">
                {recomendations.map((track, i) => (
                  <PlaylistItem index={i} track={track} width={width} />
                ))}
              </table>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};
