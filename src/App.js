import React from "react";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="overflow-y-scroll overflow-x-hidden ">
      <div className="flex">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
};

export default App;
