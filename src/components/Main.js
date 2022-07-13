import React, { useEffect, useState } from "react";
import { mainData } from "../Assests/data";

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
              <h1 className="" key={idx}>
                {letter}
              </h1>
            ))}
          </div>
          <div className="flex text-[80px] font-[700] text-primary">
            {secondLine.map((letter, idx) => (
              <>
                {letter === "-" ? (
                  <h1 className="" key={idx}>
                    &nbsp;
                  </h1>
                ) : (
                  <h1 className="" key={idx}>
                    {letter}
                  </h1>
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
                  <h1 className="" key={idx}>
                    {letter}
                  </h1>
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
