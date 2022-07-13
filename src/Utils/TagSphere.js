import React, { useEffect } from "react";
import TagCloud from "TagCloud";
const TagSphere = () => {
  console.log("yo");
  useEffect(() => {
    const myTags = [
      "JavaScript",
      "CSS",
      "HTML",
      "Vscode",
      "Figma",
      "React",
      "NextJS",
      "git",
      "Firebase",
      "NodeJS",
      "Express",
      "MongoDB",
      "Mongoose",
      "UI/UX",
      "Figma",
    ];
    TagCloud(".tagcloud", myTags, {
      radius: 250,
      itemClass: "text-secondary text-2xl font-bold ",
    });
  }, [myTags]);
  return <div className="tagcloud"></div>;
};

export default TagSphere;
