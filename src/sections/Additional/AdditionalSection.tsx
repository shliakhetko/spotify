import React from "react";
import { Panel, PanelResizeHandle } from "react-resizable-panels";

export const AdditionalSection = () => {
  return false ? (
    <>
      <PanelResizeHandle />
      <Panel
        order={3}
        defaultSize={20}
        maxSize={20}
        minSize={15}
        className="h-full w-full p-1"
      >
        <div className="h-full w-full rounded-lg bg-neutral-950">
          {/* Track, Queue */}
        </div>
      </Panel>
    </>
  ) : (
    <></>
  );
};
