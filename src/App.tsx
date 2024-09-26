import React, { useEffect, useLayoutEffect, useState } from "react";
import { LeftSection } from "./sections/LeftSection/LeftSection";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useAppDispatch } from "./redux/hooks";
import { LayoutActionTypes } from "./redux/action-types/layoutActionTypes";
import { config } from "process";
import { leftSectionSize } from "./config";
import { PlayerSection } from "./sections/Player/PlayerSection";
import { MainSection } from "./sections/Main/MainSection";
import { AdditionalSection } from "./sections/Additional/AdditionalSection";
import 'react-loading-skeleton/dist/skeleton.css';

function App() {
  const dispatch = useAppDispatch();
  const [minSize, setMinSize] = useState<number>(0);

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
    <div className="App max-h-full flex flex-col select-none">
      <PanelGroup direction="horizontal" className="h-full w-full flex p-1">
        <LeftSection minSize={minSize * 4} collapsedSize={minSize} />
        <PanelResizeHandle />
        <MainSection />
        <AdditionalSection />
      </PanelGroup>
      <PlayerSection />
    </div>
  );
}

export default App;
