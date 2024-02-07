import React, { useEffect } from "react";
import { Library } from "./sections/Library/Library";
import { Menu } from "./sections/Menu/Menu";
import { useSelector } from "react-redux";

function App() {
  return (
    <div className="App flex p-1 select-none">
      <div className="w-1/4 p-1">
        <Menu />
        <Library />
      </div>
      <div className="w-2/3 p-1"></div>
      <div className="w-1/4 p-1"></div>
    </div>
  );
}

export default App;
