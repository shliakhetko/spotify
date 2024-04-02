import React, { useEffect, useLayoutEffect, useState } from "react";
import { LeftSection } from "./sections/LeftSection/LeftSection";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useAppDispatch } from "./redux/hooks";
import { LayoutActionTypes } from "./redux/action-types/layoutActionTypes";
import { config } from "process";
import { leftSectionSize } from "./config";

function App() {
  const dispatch = useAppDispatch();
  const [minSize, setMinSize] = useState(5);

  useLayoutEffect(() => {
    dispatch({
      type: LayoutActionTypes.SCREEN_WIDTH,
      payload: window.innerWidth,
    });
    const onSreenChange = () => {
      setMinSize((leftSectionSize / window.innerWidth) * 100);
    };
    window.addEventListener("resize", onSreenChange);
    onSreenChange();
    return () => window.removeEventListener("resize", onSreenChange);
  }, []);

  return (
    <div className="App max-h-full flex select-none">
      <PanelGroup direction="horizontal" className="h-full w-full flex p-1">
        <LeftSection
          defaultSize={25}
          minSize={minSize*4}
          collapsedSize={minSize}
          maxSize={75}
        />
        <PanelResizeHandle />
        <Panel order={2} defaultSize={50} minSize={25} maxSize={50}>
          <div className="w-2/3 p-1"></div>
        </Panel>
        <PanelResizeHandle />
        <Panel order={3} defaultSize={25}>
          <div className="w-1/4 p-1"></div>
        </Panel>
      </PanelGroup>
    </div>
  );
}

export default App;
