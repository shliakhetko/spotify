import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu } from "../Menu/Menu";
import { Library } from "../Library/Library";
import { ImperativePanelHandle, Panel } from "react-resizable-panels";
import { MenuActionTypes } from "../../redux/action-types/menuActionsTypes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { LayoutActionTypes } from "../../redux/action-types/layoutActionTypes";
import useRefWidth from "../../hooks/useRefWidth";

type Props = {
  collapsedSize: number;
  minSize: number;
};

export const LeftSection = (props: Props) => {
  const dispatch = useAppDispatch();

  const panelRef = useRef<ImperativePanelHandle>(null);
  const widthRef = useRef<HTMLDivElement | null>(null);

  const width = useRefWidth(widthRef);

  // const screenWidth = useAppSelector((state) => state.layout.screenWidth);

  // const minSize = (props.minSize * screenWidth) / 100;
  // const [isTimeToCollapse, setIsTimeToCollapse] = useState(false);

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
    if (!panelRef.current) return;
    const collapsed = width < props.minSize;

    dispatch({
      type: LayoutActionTypes.SET_LEFT_SECTION,
      payload: collapsed,
    });
    if (!collapsed) {
      panelRef.current.expand();
    } else {
      panelRef.current.collapse();
    }
  };

  return (
    <Panel
      ref={panelRef}
      collapsible={true}
      order={1}
      defaultSize={20}
      collapsedSize={props.collapsedSize}
      minSize={props.minSize}
      maxSize={75}
      onResize={dispatchLeft}
      onCollapse={dispatchLeft}
      className="h-full w-full p-1"
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
