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
    <div className="flex flex-col w-[98%] mx-auto h-screen">
      <h7>&lt;h1&gt;</h7>
      <div className="flex flex-col w-[98%] mx-auto">
        <div className="flex text-[68px] font-bold text-primary">
          {firstLine.map((letter, idx) => (
            <h1 className="" key={idx}>
              {letter}
            </h1>
          ))}
        </div>
        <div className="flex text-[68px] font-bold text-primary">
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
        <div className="flex text-[68px] font-bold text-primary">
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

      <h7>&lt;p&gt;</h7>
      <div className="flex flex-col w-[98%] mx-auto">
        <h1 className="text-primarySubHeading">{mainData.subHeading}</h1>
      </div>
      <h7>&lt;/p&gt;</h7>
    </div>
  );
};

export default Main;
