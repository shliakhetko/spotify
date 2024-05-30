import React, { useEffect, useRef, useState } from "react";
import Item from "../../models/Item";
import ItemType from "../../models/ItemType";
import useRefWidth from "../../hooks/useRefWidth";
import classNames from "classnames";
import { DisplaySimpleItem } from "../ItemDisplays/DisplaySimpleItem";
import { ChangeColorContainer } from "../containers/ChangeColorContainer";
import Playlist from "../../models/Items/Playlist";

interface Props {
  list: Item[];
}

export const ListSimpleItem = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const width = useRefWidth(ref);
  const [render, setRender] = useState<boolean>(false);

  const numberInRow = width > 1000 ? 4 : 2;

  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 50);
  });

  const list = [...props.list].slice(0, 8);

  return (
    <div className="pt-1 pb-6" ref={ref}>
      <ul
        className={classNames("grid", !render && "opacity-0")}
        style={{
          gridTemplateColumns: `repeat(${numberInRow}, minmax(0, 1fr))`,
        }}
      >
        {list.map(
          (item, i) =>
            item.type !== ItemType.FOLDER && (
              <li key={i} className="h-fit w-full p-1 cursor-pointer">
                <ChangeColorContainer item={item as Playlist}>
                  <DisplaySimpleItem {...item} />
                </ChangeColorContainer>
              </li>
            )
        )}
      </ul>
    </div>
  );
};
