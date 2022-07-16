import React, { useEffect, useState } from "react";
import { mainData } from "../Assests/data";
import { motion } from "framer-motion";
const Main = () => {
  const [firstLine, setFirstLine] = useState([]);
  const [secondLine, setSecondLine] = useState([]);
  const [thirdLine, setThirdLine] = useState([]);
  useEffect(() => {
    let temp1 = [...mainData.firstLine];
    console.log(temp1);
    setFirstLine(temp1);
    let temp2 = [...mainData.secondLine];
    setSecondLine(temp2);
    let temp3 = [...mainData.thirdLine];
    setThirdLine(temp3);
  }, []);

  return (
    <div className="flex flex-col w-[98%] mx-auto h-screen mt-10 space-y-2">
      <div className="">
        <h7>&lt;h1&gt;</h7>
        <div className="flex flex-col w-[98%] mx-auto">
          <div className="flex text-[80px] font-[700] text-primary">
            {firstLine.map((letter, idx) => (
              <motion.h1
                whileHover={{
                  color: "#5DECCC",
                  scaleY: [1, 0.9, 0.8, 0.7, 1.3, 1],
                  scaleX: [1, 1.1, 1.2, 1.3, 0.7, 1],
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 0.5,
                }}
                className=""
                key={idx}>
                {letter}
              </motion.h1>
            ))}
          </div>
          <div className="flex text-[80px] font-[700] text-primary ">
            {secondLine.map((letter, idx) => (
              <>
                {letter === "-" ? (
                  <h1 className="" key={idx}>
                    &nbsp;
                  </h1>
                ) : (
                  <motion.h1
                    style={
                      letter === "T"
                        ? {
                            textShadow: "-10px 0px 5px #1DBBDD",
                          }
                        : {}
                    }
                    whileHover={{
                      color: "#5DECCC",
                      scaleY: [1, 0.9, 0.8, 0.7, 1.3, 1],
                      scaleX: [1, 1.1, 1.2, 1.3, 0.7, 1],
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 0.5,
                    }}
                    className=""
                    key={idx}>
                    {letter}
                  </motion.h1>
                )}
              </>
            ))}
          </div>
          <div className="flex text-[80px] font-[700] text-primary">
            {thirdLine.map((letter, idx) => (
              <>
                {letter === "-" ? (
                  <h1 className="" key={idx}>
                    &nbsp;
                  </h1>
                ) : (
                  <motion.h1
                    whileHover={{
                      color: "#5DECCC",
                      scaleY: [1, 0.9, 0.8, 0.7, 1.3, 1],
                      scaleX: [1, 1.1, 1.2, 1.3, 0.7, 1],
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 0.5,
                    }}
                    className=""
                    key={idx}>
                    {letter}
                  </motion.h1>
                )}
              </>
            ))}
          </div>
        </div>
        <h7>&lt;/h1&gt;</h7>
      </div>
      <div className="">
        <h7>&lt;p&gt;</h7>
        <div className="flex flex-col w-[98%] mx-auto">
          <h1 className="text-primarySubHeading">{mainData.subHeading}</h1>
        </div>
        <h7>&lt;/p&gt;</h7>
      </div>
    </div>
  );
};

export default Main;
