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

type Props = {
  item:Playlist
}

export const PlaylistSection = (props:Props) => {
  const dispatch = useAppDispatch();
  const item = props.item;
  const playingPlayilist = useAppSelector((state) => state.player.playlist);
  const width = useAppSelector((state) => state.layout.screenWidth);

  // const [item, setItem] = useState<Playlist | null>(null);

  const recomendations = (item && [...item.contents]) || [];

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
              <PlayButton
                item = {props.item}
                className="p-5"
                size={16}
              />
            </div>
            <div className="mt-4 mb-10">
              <table className="w-full text-neutral-400">
                <tbody>
                  <tr className="">
                    <td className="border-b border-neutral-700 pb-2 text-center">
                      #
                    </td>
                    <td className="border-b border-neutral-700 pb-2">Title</td>
                    <td className="border-b border-neutral-700 pb-2">
                      Upload Date
                    </td>
                  </tr>
                  <tr className="mb-3" />
                  {item.contents.map((track, i) => (
                    <PlaylistItem
                      index={i}
                      track={track}
                      width={width}
                      isNumbered={true}
                    />
                  ))}
                </tbody>
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
