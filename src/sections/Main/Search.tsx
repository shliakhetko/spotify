import React, { useEffect, useState } from "react";
import { getMultipleTypeItems, shuffle } from "../../data/userData";
import ItemType from "../../models/ItemType";
import Item from "../../models/Item";
import { DisplayLibraryItem } from "../../components/ItemDisplays/DisplayLibraryItem";
import Playlist from "../../models/Items/Playlist";
import Track from "../../models/Items/Track";
import Artist from "../../models/Items/Artist";
import { SectionBigImageItem } from "../../components/sections/SectionBigImageItem";

interface SearchResults {
  playlists: Playlist[];
  tracks: Track[];
  aritsts: Artist[];
}

export const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [items, setItems] = useState<Item[]>([]);

  const searchParametrs = ["title"];

  const [searchResults, setSearchResults] = useState<SearchResults | null>(
    null
  );

  const hadleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setSearchResults(splitItems(search()));
  };

  const search = () => {
    return items.filter((item) =>
      searchParametrs.some(
        (param) =>
          checkItem((item as any)[param]) ||
          (item.type !== ItemType.ARTIST &&
            item.owner.some((owner) => checkItem((owner as any)[param]))) ||
          (item.type === ItemType.ARTIST &&
            (item.playlists.some((subitem) =>
              checkItem((subitem as any)[param])
            ) ||
              item.tracks.some((subitem) =>
                checkItem((subitem as any)[param])
              ))) ||
          (item.type === ItemType.PLAYLIST &&
            item.contents.some((subitem) => checkItem((subitem as any)[param])))
      )
    );
  };

  const checkItem: (parametr: any) => boolean = (parametr: any) => {
    return searchValue
      .split(" ")
      .some((word) =>
        parametr.toString().toLowerCase().includes(word.toLowerCase())
      );
  };

  const splitItems = (items: Item[]) => {
    const answer: SearchResults = {
      playlists: [],
      tracks: [],
      aritsts: [],
    };

    items.forEach((item) => {
      if (item.type === ItemType.PLAYLIST) {
        answer.playlists.push(item as Playlist);
      } else if (item.type === ItemType.TRACK) {
        answer.tracks.push(item as Track);
      } else if (item.type === ItemType.ARTIST) {
        answer.aritsts.push(item as Artist);
      }
    });

    return answer;
  };

  useEffect(() => {
    getMultipleTypeItems([
      ItemType.TRACK,
      ItemType.ARTIST,
      ItemType.PLAYLIST,
    ]).then((items) => {
      setItems(items);
    });
  }, []);

  return (
    <div className="h-full pt-2">
      <div className="w-full pl-28">
        <input
          className="select-all p-3 w-full rounded-full bg-neutral-800 placeholder:text-neutral-400 border border-transparent hover:border-neutral-600"
          type="search"
          name="search"
          value={searchValue}
          onChange={hadleSearch}
          placeholder="What do you want to play?"
        />
      </div>
      {searchResults && searchValue !== "" ? (
        <>
          {searchResults.tracks && searchResults.tracks[0] && searchResults.tracks[0].image && (
            <div className="p-4">
              <span className={"text-xl font-bold pb-4"}>Top result</span>
              <div className="flex items-end p-4 pt-4 rounded-xl bg-neutral-800">
                <img
                  className="h-40 w-40"
                  src={searchResults.tracks[0].image}
                  alt={"Image " + searchResults.tracks[0].title}
                />
                <div className="ml-4 flex flex-col">
                  <span className="text-[2.5em] font-bold">
                    {searchResults.tracks[0].title}
                  </span>
                  <div className="flex space-x-1.5">
                    <span className="text-neutral-400">Song</span>
                    <span>•</span>
                    <span className="font-semibold">
                        {searchResults.tracks[0].owner[0].title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <ul className="p-4">
            {searchResults.tracks.length !== 0 &&
              searchResults.tracks.slice(1, 5).map((item, i) => (
                <li key={i}>
                  <DisplayLibraryItem item={item} />
                </li>
              ))}
          </ul>
          {searchResults.aritsts.length > 0 && (
            <SectionBigImageItem
              title="Artists"
              list={searchResults.aritsts}
              isExtendable={true}
            />
          )}
          {searchResults.playlists.length > 0 && (
            <SectionBigImageItem
              title="Playlists"
              list={searchResults.playlists}
              isExtendable={true}
            />
          )}
        </>
      ) : (
        <>
          <SectionBigImageItem
            title="Tracks"
            list={shuffle(splitItems(items).tracks)}
            isExtendable={true}
            isSekeleton={splitItems(items).tracks.length === 0}
          />
          <SectionBigImageItem
            title="Playlists"
            list={shuffle(splitItems(items).playlists)}
            isExtendable={true}
            isSekeleton={splitItems(items).playlists.length === 0}
          />
          <SectionBigImageItem
            title="Artists"
            list={shuffle(splitItems(items).aritsts)}
            isExtendable={true}
            isSekeleton={splitItems(items).aritsts.length === 0}
          />
        </>
      )}
    </div>
  );
};
