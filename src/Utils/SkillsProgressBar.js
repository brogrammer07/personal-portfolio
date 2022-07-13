import React, { useEffect, useState } from "react";

const SkillsProgressBar = ({ color, progress, index }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      let counter = 0;
      const interval = setInterval(() => {
        counter += 1;
        setWidth(counter);
        if (counter === progress) {
          clearInterval(interval);
        }
      }, 10);
    }, 300 * index);
  }, []);

  return (
    <div className={`w-[20rem] h-[2px] bg-[#012E3D]`}>
      <div
        style={{
          backgroundColor: color,
          width: `${width}%`,
        }}
        className="h-[2px]"></div>
    </div>
  );
};

export default SkillsProgressBar;
