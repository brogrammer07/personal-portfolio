import React from "react";
import { mySkillsData } from "../Assests/data";
import SkillsProgressBar from "../Utils/SkillsProgressBar";
import TagSphere from "../Utils/TagSphere";

const MySkills = () => {
  return (
    <div className="grid grid-cols-2 pr-16">
      <div className="flex flex-col w-[98%] mx-auto space-y-3 self-center">
        <h7>&lt;div&gt;</h7>
        <div className="flex flex-col w-[98%] mx-auto space-y-4">
          <div className="">
            <h7>&lt;h2&gt;</h7>
            <div className="flex flex-col w-[98%] mx-auto">
              <div className="flex items-center space-x-3 text-[27px]">
                <h2 className="text-secondary">{mySkillsData.number}</h2>
                <h2 className="text-primary">{mySkillsData.title}</h2>
                <div className="bg-[#012E3D] w-[20rem] h-[1px]"></div>
              </div>
            </div>
            <h7>&lt;/h2&gt;</h7>
          </div>
          <div className="">
            <h7>&lt;p&gt;</h7>
            <div className="flex flex-col w-[98%] mx-auto space-y-7">
              {mySkillsData.skills.map((skill, idx) => (
                <div key={idx} className="flex flex-col space-y-2">
                  <p className="text-white">{skill.skill}</p>
                  <SkillsProgressBar
                    index={idx}
                    color={skill.color}
                    progress={skill.progress}
                  />
                </div>
              ))}
            </div>
            <h7>&lt;/p&gt;</h7>
          </div>
        </div>
        <h7>&lt;/div&gt;</h7>
      </div>
      <div>
        <TagSphere />
      </div>
    </div>
  );
};

export default MySkills;
