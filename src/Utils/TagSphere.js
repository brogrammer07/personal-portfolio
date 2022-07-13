import React, { useEffect, useState } from "react";
import TagCloud from "TagCloud";
import { mySkillsData } from "../Assests/data";
const TagSphere = () => {
  const [myTags, setMyTags] = useState(mySkillsData.words);
  useEffect(() => {
    TagCloud(".tagcloud", myTags, {
      radius: 330,
      itemClass: "text-secondary text-2xl font-bold ",
    });
  }, [myTags]);
  return <div className="tagcloud"></div>;
};

export default TagSphere;
