import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getItem, getMultipleItems } from "../../data/userData";
import Item from "../../models/Item";
import classNames from "classnames";
import { ImageByColor } from "../../components/graphics/ImageByColor";
import { PlayButton } from "../../components/buttons/PlayButton";
import { PlaylistItem } from "./PlaylistItem";
import Artist from "../../models/Items/Artist";
import { ListBigImageItem } from "../../components/lists/ListBigImageItem";

type Props = {
  item: Artist;
};

export const ArtistSection = (props: Props) => {
  const content = props.item;
  const width = useAppSelector((state) => state.layout.screenWidth);

  // const [item, setItem] = useState<Artist | null>(null);
  const [item, setItem] = useState<Artist>(content);
  const [discography, setDiscography] = useState<Item[]>(content.playlists);

  useEffect(() => {
    if (content !== item) {
      getItem(content.type, content.id).then((item) => {
        const newItem = item as Artist;
        setItem(newItem);
        if (newItem.playlists.length === 0) return;
        getMultipleItems(
          newItem.playlists[0].type,
          newItem.playlists.map((playlist) => playlist.id)
        ).then((items) => {
          setDiscography(items);
        });
      });
    }
    // if (item.playlists.length === 0) return;
    //     getMultipleItems(
    //       item.playlists[0].type,
    //       item.playlists.map((playlist) => playlist.id)
    //     ).then((items) => {
    //       setDiscography(items);
    //     });
  }, [props.item]);

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
              className="h-40 w-40 rounded-full"
              src={item.image}
              alt={"Image " + item.title}
            />
            <div className="ml-4 flex flex-col">
              <span>Confirmed Artist</span>
              <span className="text-[2.5em] font-bold">{item.title}</span>
              <div className="flex">
                <span className="font-semibold">{item.title}</span>
                <span className="ml-2 text-neutral-400">
                  • {item.tracks.length} tracks
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-[rgba(10,10,10,0.3)]">
            <div>
              <PlayButton className="p-5" size={16} item={props.item} />
            </div>
            <span className="mt-6 text-[1.25rem] font-bold">Popular</span>
            <div className="mt-4 mb-10">
              <table className="w-full text-neutral-400">
                <tbody>
                  <tr className="mb-3" />
                  {item.tracks.map((track, i) => (
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
            {item.playlists.length > 0 && (
              <>
                <span className="text-[1.25rem] font-bold">Discography</span>
                <div className="mt-4">
                  <ListBigImageItem list={discography} isExtended={false} />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
