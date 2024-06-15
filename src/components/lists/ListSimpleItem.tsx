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
  isSekeleton?: boolean;
}

export const ListSimpleItem = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const width = useRefWidth(ref);
  const [render, setRender] = useState<boolean>(false);

  const numberInRow = width > 1000 ? 4 : 2;
  const emptySimpleList = new Array<null>(8).fill(null);

  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 50);
  });

  if (props.isSekeleton)
    return (
      <div className="pt-1 pb-6" ref={ref}>
        <ul
          className={classNames("grid", !render && "opacity-0")}
          style={{
            gridTemplateColumns: `repeat(${numberInRow}, minmax(0, 1fr))`,
          }}
        >
          {emptySimpleList.map((item, i) => (
            <li key={i} className="h-fit w-full p-1 cursor-pointer">
              <DisplaySimpleItem item={null} />
            </li>
          ))}
        </ul>
      </div>
    );

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
                  <DisplaySimpleItem item={item || null} />
                </ChangeColorContainer>
              </li>
            )
        )}
      </ul>
    </div>
  );
};
