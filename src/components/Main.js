import React from "react";
import { mainData } from "../Assests/data";
const Main = () => {
  return (
    <div className="flex flex-col w-[98%] mx-auto">
      <span>&lt;h1&gt;</span>
      <div className="flex flex-col w-[98%] mx-auto">
        <div className="flex text-[68px] font-bold text-primary">
          {mainData.firstLine.firstWord.map((letter, idx) => (
            <h1 className="" key={idx}>
              {letter.letter}
            </h1>
          ))}
        </div>
        <div className="flex text-[68px] font-bold text-primaryDark">
          {mainData.secondLine.firstWord.map((letter, idx) => (
            <h1 key={idx}>{letter.letter}</h1>
          ))}
          &nbsp;
          {mainData.secondLine.secondWord.map((letter, idx) => (
            <h1
              className={letter.normal === false ? "drop-shadow-2xl " : ""}
              key={idx}>
              {letter.letter}
            </h1>
          ))}
        </div>
        <div className="flex text-[68px] font-bold text-primaryDarker">
          {mainData.thirdLine.firstWord.map((letter, idx) => (
            <h1 className="" key={idx}>
              {letter.letter}
            </h1>
          ))}
          &nbsp;
          {mainData.thirdLine.secondWord.map((letter, idx) => (
            <h1 className="" key={idx}>
              {letter.letter}
            </h1>
          ))}
        </div>
      </div>
      <span>&lt;/h1&gt;</span>
    </div>
  );
};

export default Main;
