import React, { useEffect, useState } from "react";
import { library } from "../../data/userData";
import { SectionBigImageItem } from "../../components/sections/SectionBigImageItem";
import { ListSimpleItem } from "../../components/lists/ListSimpleItem";
import ItemType from "../../models/ItemType";
import classNames from "classnames";
import { ImageByColor } from "../../components/graphics/ImageByColor";

export const Home = () => {
  const [currentImage, setCurrentImage] = useState<string | null>(null);

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
            list={library.filter((item) => item.type === ItemType.PLAYLIST)}
          />
        </div>
      </ImageByColor>
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
