import React, { useState } from "react";
import bulletPoint from "../Assests/bulletPoint.svg";
import { workData } from "../Assests/data";
const Work = () => {
  const [workIndex, setWorkIndex] = useState(0);
  return (
    <div className="flex flex-col w-[98%] mx-auto space-y-3 ">
      <h7>&lt;div&gt;</h7>
      <div className="flex flex-col w-[98%] mx-auto space-y-4">
        <div className="">
          <h7>&lt;h2&gt;</h7>
          <div className="flex flex-col w-[98%] mx-auto">
            <div className="flex items-center space-x-3 text-[27px]">
              <h2 className="text-secondary">{workData.number}</h2>
              <h2 className="text-primary">{workData.title}</h2>
              <div className="bg-[#012E3D] w-[20rem] h-[1px]"></div>
            </div>
          </div>
          <h7>&lt;/h2&gt;</h7>
        </div>
        <div className="space-y-5">
          <h7>&lt;p&gt;</h7>
          <div className=" w-[98%] mx-auto">
            <div className="w-[65%] flex space-x-10">
              <div className="flex-[0.2] border-l-[1px] border-[#012E3D] h-[20rem]">
                {workData.work.map((work, idx) => (
                  <div
                    onClick={() => setWorkIndex(idx)}
                    key={idx}
                    className={`${
                      workIndex === idx
                        ? "border-l-[2px] border-[#5DECCC] bg-[#102340] text-secondary"
                        : "text-primarySub"
                    } px-5 py-2 cursor-pointer transition-all duration-150`}>
                    {work.company}
                  </div>
                ))}
              </div>
              <div className="flex-[0.8] flex flex-col space-y-10">
                <div className="space-y-2">
                  <div className=" text-[24px] flex space-x-3">
                    <h3 className="text-primary">
                      {workData.work[workIndex].title}
                    </h3>
                    <h3 className="text-secondary">
                      @ {workData.work[workIndex].company}
                    </h3>
                  </div>
                  <p className="text-primarySub text-[13px]">
                    {workData.work[workIndex].date}
                  </p>
                </div>
                <div className="w-full flex flex-col space-y-5 mt-6">
                  {workData.work[workIndex].description.map((desc, idx) => (
                    <div className="flex space-x-6">
                      <img className="" src={bulletPoint} alt="" />
                      <p
                        key={idx}
                        className="text-primaryDetails font-[100] text-[15px]">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <h7>&lt;/p&gt;</h7>
        </div>
      </div>
      <h7>&lt;/div&gt;</h7>
    </div>
  );
};

export default Work;
