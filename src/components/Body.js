import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Main from "./Main";
import MySkills from "./MySkills";
import Work from "./Work";
import { motion } from "framer-motion";

const Body = () => {
  return (
    <div className="flex-[0.9] bg-primary h-screen overflow-y-scroll overflow-x-hidden relative">
      <div className="absolute  bottom-16 -left-9">
        <div className="flex space-x-3 text-white items-center rotate-90  ">
          <motion.p
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.2, yoyo: Infinity }}>
            scroll down
          </motion.p>
          <AiOutlineArrowRight />
        </div>
      </div>
      <div className="absolute  bottom-16 -right-9">
        <div className="flex space-x-3 text-white items-center rotate-90  ">
          <motion.p
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.2, yoyo: Infinity }}>
            scroll down
          </motion.p>
          <AiOutlineArrowRight />
        </div>
      </div>

      <div className="flex flex-col w-[95%] mx-auto my-4">
        <h7>&lt;html&gt;</h7>
        <div className="flex flex-col w-[98%] mx-auto">
          <h7>&lt;body&gt;</h7>
          <Main />
          <MySkills />
          <Work />
          <h7>&lt;/body&gt;</h7>
        </div>
        <h7>&lt;/html&gt;</h7>
      </div>
    </div>
  );
};

export default Body;
