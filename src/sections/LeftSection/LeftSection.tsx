import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu } from "../Menu/Menu";
import { Library } from "../Library/Library";
import { ImperativePanelHandle, Panel } from "react-resizable-panels";
import { MenuActionTypes } from "../../redux/action-types/menuActionsTypes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { LayoutActionTypes } from "../../redux/action-types/layoutActionTypes";

type Props = {
  defaultSize: number;
  collapsedSize: number;
  minSize: number;
  maxSize: number;
};

export const LeftSection = (props: Props) => {
  const dispatch = useAppDispatch();

  // const panelRef = useRef<ImperativePanelHandle>(null);
  const widthRef = useRef<HTMLDivElement | null>(null);

  // const [width, setWidth] = useState<number>(0);

  // const screenWidth = useAppSelector((state) => state.layout.screenWidth);

  // const minSize = (props.minSize * screenWidth) / 100;
  // const [isTimeToCollapse, setIsTimeToCollapse] = useState(false);

  const getSize: () => number = () => {
    if (widthRef.current != null) {
      return widthRef.current.clientWidth;
    } else return 0;
  };

  // const onWidthChange = () => {
  //   setWidth(getSize());
  // };

  // const onResize = () => {
  //   console.log(width, minSize);

  //   onWidthChange();

  //   if (panelRef.current) {
  //     console.log(isTimeToCollapse, panelRef.current.isCollapsed());
  //     if(width <= 64) {
  //     panelRef.current.expand();
  //     }
  //     else if (isTimeToCollapse) {
  //       panelRef.current.collapse();
  //     }
  //   }
  // };

  useLayoutEffect(() => {
    document.addEventListener("resize", dispatchLeft);
    dispatchLeft();
    return () => window.removeEventListener("resize", dispatchLeft);
  }, []);

  const dispatchLeft = () => {
    console.log(getSize());
    dispatch({
      type:
        getSize() < props.minSize
          ? LayoutActionTypes.LEFT_SECTION_COLLAPSED
          : LayoutActionTypes.LEFT_SECTION_EXPANDED,
    });
  };

  return (
    <Panel
      // ref={panelRef}
      collapsible={true}
      order={1}
      defaultSize={props.defaultSize}
      collapsedSize={props.collapsedSize}
      minSize={props.minSize}
      maxSize={props.maxSize}
      onResize={dispatchLeft}
      onCollapse={dispatchLeft} 
      className="h-full w-full p-1 bg-red-200"
    >
      <div
        ref={widthRef}
        className="w-full h-full"
        onMouseMove={() => {
          console.log(widthRef.current?.clientWidth);
          dispatchLeft();
        }}
      >
        <Menu />
        <Library />
      </div>
    </Panel>
  );
};
