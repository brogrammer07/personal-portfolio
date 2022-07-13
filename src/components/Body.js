import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Main from "./Main";
import MySkills from "./MySkills";

const Body = () => {
  return (
    <div className="flex-[0.9] bg-primary h-screen overflow-y-scroll overflow-x-hidden relative">
      <div className="absolute  bottom-16 -left-9">
        <div className="flex space-x-3 text-white items-center rotate-90  ">
          <p>scroll down</p>
          <AiOutlineArrowRight />
        </div>
      </div>
      <div className="absolute  bottom-16 -right-9">
        <div className="flex space-x-3 text-white items-center rotate-90  ">
          <p>scroll down</p>
          <AiOutlineArrowRight />
        </div>
      </div>

      <div className="flex flex-col w-[95%] mx-auto my-4">
        <h7>&lt;html&gt;</h7>
        <div className="flex flex-col w-[98%] mx-auto">
          <h7>&lt;body&gt;</h7>
          <Main />
          <MySkills />
          <h7>&lt;/body&gt;</h7>
        </div>
        <h7>&lt;/html&gt;</h7>
      </div>
    </div>
  );
};

export default Body;
