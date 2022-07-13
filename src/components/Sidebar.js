import React from "react";
import logo from "../Assests/logo.svg";
import { sidebarData } from "../Assests/data";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className="flex-[0.10] h-screen bg-primaryLight flex items-center flex-col py-9 justify-between">
      <div className="flex flex-col items-center space-y-4">
        <img
          src={logo}
          alt="Logo"
          className="cursor-pointer w-[75px] h-[75px]"
        />
        <p className="text-primarySidebar text-[13px]">
          {sidebarData.subTitle}
        </p>
      </div>
      <div className="flex flex-col items-center space-y-8">
        {sidebarData.options.map((op, idx) => (
          <h1
            className="text-primarySidebar cursor-pointer hover:text-primarySidebarHover duration-150 transition-all"
            key={idx}>
            {op.title}
          </h1>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="https://www.linkedin.com/in/tushar-tomar-882708213/"
          target="_blank"
          className="text-[#A0ADCA] hover:text-white transition-all duration-150"
          rel="noreferrer">
          <FaLinkedinIn size={25} />
        </a>
        <a
          href="https://www.instagram.com/t.u.s.h.a.r0_0/"
          target="_blank"
          className="text-[#A0ADCA] hover:text-white transition-all duration-150"
          rel="noreferrer">
          <AiFillInstagram size={25} />
        </a>
        <a
          href="https://github.com/brogrammer07"
          target="_blank"
          className="text-[#A0ADCA] hover:text-white transition-all duration-150"
          rel="noreferrer">
          <AiFillGithub size={25} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
