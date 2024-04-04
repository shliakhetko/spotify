import React, { useEffect, useState } from "react";
import { library } from "../../data/userData";
import { SectionBigImageItem } from "../../components/sections/SectionBigImageItem";
import { ListSimpleItem } from "../../components/lists/ListSimpleItem";
import ItemType from "../../models/ItemType";
import { FastAverageColor } from "fast-average-color";
import classNames from "classnames";

export const Home = () => {
  const fac = new FastAverageColor();
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [currentColor, setCurrentColor] = useState<string | null>(null);

  useEffect(() => {
    if (currentImage) {
      fac
        .getColorAsync(currentImage)
        .then((color) => {
          setCurrentColor(color.hex);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  });

  return (
    <div className="max-h-[100%-6rem] h-full">
      <div
        className={classNames(
          "min-h-64 w-[calc(100%+14px)] rounded-t-lg duration-500",
          "bg-slate-700"
        )}
        style={{ backgroundColor: (currentImage && currentColor) || "" }}
      >
        <div className="min-h-64 h-full w-full pt-20 px-5 bg-gradient-to-t from-neutral-950 to-[rgba(10,10,10,0.6)]">
          <ListSimpleItem
            list={library.filter((item) => item.type === ItemType.PLAYLIST)}
            setCurrentImage={setCurrentImage}
          />
        </div>
      </div>
      <SectionBigImageItem
        title="Your playlists"
        list={library}
        isExtendable={true}
      />
      <SectionBigImageItem
        title="Your playlists"
        list={library}
        isExtendable={true}
      />
      <SectionBigImageItem
        title="Your playlists"
        list={library}
        isExtendable={true}
      />
      <SectionBigImageItem
        title="Your playlists"
        list={library}
        isExtendable={true}
      />
      <SectionBigImageItem
        title="Your playlists"
        list={library}
        isExtendable={true}
      />
    </div>
  );
};
