import React, { useEffect, useState } from "react";
import { getRandomItems, library } from "../../data/userData";
import { SectionBigImageItem } from "../../components/sections/SectionBigImageItem";
import { ListSimpleItem } from "../../components/lists/ListSimpleItem";
import ItemType from "../../models/ItemType";
import classNames from "classnames";
import { ImageByColor } from "../../components/graphics/ImageByColor";
import Item from "../../models/Item";

export const Home = () => {
  const [simpleList, setSimpleList] = useState<Item[]>([]);
  const [yourPlaylists, setYourPlaylists] = useState<Item[]>([]);
  const [madeForYou, setMadeForYou] = useState<Item[]>([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState<Item[]>([]);
  const [favoriteArtists, setFavoriteArtists] = useState<Item[]>([]);

  useEffect(() => {
    if(simpleList.length !== 0) return;
    getRandomItems([ItemType.PLAYLIST], 8).then((items) => {setSimpleList(items)});
    getRandomItems([ItemType.PLAYLIST], 8).then((items) => {setYourPlaylists(items)});
    getRandomItems([ItemType.PLAYLIST], 8).then((items) => {setMadeForYou(items)});
    getRandomItems([ItemType.PLAYLIST], 8).then((items) => {setRecentlyPlayed(items)});
    getRandomItems([ItemType.ARTIST], 8).then((items) => {setFavoriteArtists(items)});
  });

  return (
    <div className="max-h-[100%-6rem] h-full">
      <ImageByColor
        className={classNames(
          "min-h-64 w-[calc(100%+14px)] rounded-t-lg duration-500",
          "bg-slate-700"
        )}
      >
        <div className="min-h-64 h-full w-full pt-20 px-5 bg-gradient-to-t from-neutral-950 to-[rgba(10,10,10,0.6)]">
          <ListSimpleItem
            list={simpleList}
            isSekeleton={simpleList.length === 0}
          />
        </div>
      </ImageByColor>
      <SectionBigImageItem
        title="Your playlists"
        list={yourPlaylists}
        isExtendable={true}
        isSekeleton={yourPlaylists.length === 0}
      />
      <SectionBigImageItem
        title="Made For You"
        list={madeForYou}
        isExtendable={true}
        isSekeleton={madeForYou.length === 0}
      />
      <SectionBigImageItem
        title="Recently played"
        list={recentlyPlayed}
        isExtendable={true}
        isSekeleton={recentlyPlayed.length === 0}
      />
      <SectionBigImageItem
        title="Your favorite artists"
        list={favoriteArtists}
        isExtendable={true}
        isSekeleton={favoriteArtists.length === 0}
      />
    </div>
  );
};
