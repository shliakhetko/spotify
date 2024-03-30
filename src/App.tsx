import React, { useEffect } from "react";
import { Library } from "./sections/Library/Library";
import { Menu } from "./sections/Menu/Menu";
import { useSelector } from "react-redux";
import { PlayerSection } from "./sections/Player/PlayerSection";

function App() {
  return (
    <div className="App flex p-1 flex flex-col select-none">
      <div className="w-full h-full">
        <div className="w-1/4 h-full p-1">
          <Menu />
          <Library />
        </div>
        <div className="w-2/3 h-full p-1"></div>
        <div className="w-1/4 h-full p-1"></div>
      </div>
      <PlayerSection />
    </div>
  );
}

export default App;
