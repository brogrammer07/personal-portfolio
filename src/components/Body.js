import React from "react";
import Main from "./Main";

const Body = () => {
  return (
    <div className="flex-[0.85] bg-primary h-screen ">
      <div className="flex flex-col w-[95%] mx-auto my-4">
        <span>&lt;html&gt;</span>
        <div className="flex flex-col w-[98%] mx-auto">
          <span>&lt;body&gt;</span>
          <Main />
          <span>&lt;/body&gt;</span>
        </div>
        <span>&lt;/html&gt;</span>
      </div>
    </div>
  );
};

export default Body;
