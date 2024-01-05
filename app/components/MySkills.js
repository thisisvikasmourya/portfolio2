import React from "react";
import { BsFiletypeHtml } from "react-icons/bs";
import { BsFiletypeCss } from "react-icons/bs";
import { BsFiletypeScss } from "react-icons/bs";
import { RiJavascriptLine, RiReactjsFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { FaGithubAlt } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandBootstrap } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { SiWebpack } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { FaSass } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { SiHeroku } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { BiLogoNetlify } from "react-icons/bi";
import { SiJsonwebtokens } from "react-icons/si";

import { TbApi } from "react-icons/tb";

const MySkills = () => {
  return (
    <div className="py-20" id="Skill">
      <div className="max-w-screen-xl mx-auto md:px-8 px-4">
        <div>
          <h1 className="text-[48px] tracking-[-0.96px] leading-[70px] py-6 text-center ">
            My{" "}
            <span className="text-[48px] font-extrabold tracking-[-0.96px]">
              {" "}
              Skills
            </span>
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1  place-items-center ">
          <div className="grid lg:grid-rows-2 grid-rows-1 gap-3 place-items-center  text-center py-2">
            <div className="text-xl font-semibold">Frontend Dev.</div>
            <div className="grid lg:grid-cols-6 grid-cols-3 gap-3 place-items-center  ">
              {" "}
              <div className="text-[30px] border-2 border-black text-center  rounded-lg lg:p-6 p-6">
                <BsFiletypeHtml />
              </div>
              <div className="text-[30px] border-2 border-black text-center  rounded-lg lg:p-6 p-6">
                <BsFiletypeCss />
              </div>
              <div className="text-[30px] border-2 border-black text-center  rounded-lg lg:p-6 p-6">
                <SiTailwindcss />
              </div>
              <div className="text-[30px] border-2 border-black text-center  rounded-lg lg:p-6 p-6">
                <RiJavascriptLine />
              </div>
              <div className="text-[30px] border-2 border-black text-center  rounded-lg lg:p-6 p-6">
                <RiReactjsFill />
              </div>
              <div className="text-[30px] border-2 border-black text-center  rounded-lg lg:p-6 p-6">
                <TbBrandNextjs />
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="grid lg:grid-rows-2 grid-rows-1 gap-3 place-items-center py-2 ">
              <div className="text-xl font-semibold">Backend Dev.</div>
              <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 place-items-center  ">
                {" "}
                <div className="text-[30px] border-2 border-black text-center  rounded-lg lg:p-6 p-6">
                  <IoLogoNodejs />
                </div>
                <div className="text-[30px] border-2 border-black text-center  rounded-lg lg:p-6 p-6">
                  <TbApi />
                </div>
                <div className="text-[30px] border-2 border-black text-center  rounded-lg lg:p-6 p-6">
                  <SiExpress />
                </div>
                <div className="text-[30px] border-2 border-black text-center  rounded-lg lg:p-6 p-6">
                  <SiJsonwebtokens />
                </div>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="grid lg:grid-rows-2 grid-rows-1 gap-3 place-items-center text-center py-2 ">
              <div className="text-xl font-semibold">
                DB Mgmt / Deploy & Hosting
              </div>
              <div className="grid lg:grid-cols-6 grid-cols-3 gap-3 place-items-center  ">
                {" "}
                <div className="text-[30px] border-2 border-black text-center  rounded-lg lg:p-6 p-6">
                  <DiMongodb />
                </div>
                <div className="text-[30px] border-2 border-black text-center  rounded-lg lg:p-6 p-6">
                  <SiPostgresql />
                </div>
                <div className="text-[30px] border-2 border-black text-center  rounded-lg lg:p-6 p-6">
                  <TbBrandMysql />
                </div>
                <div className="text-[30px] border-2 border-black text-center  rounded-lg lg:p-6 p-6">
                  <SiHeroku />
                </div>
                <div className="text-[30px] border-2 border-black text-center  rounded-lg lg:p-6 p-6">
                  <BiLogoNetlify />
                </div>
                <div className="text-[30px] border-2 border-black text-center  rounded-lg lg:p-6 p-6">
                  <IoLogoVercel />
                </div>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="grid lg:grid-rows-2 grid-rows-1 gap-3  place-items-center  text-center py-2">
              <div className="text-xl font-semibold">
                Ver. Ctrl / State Mgmt
              </div>
              <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 place-items-center  ">
                <div className="text-[30px] border-2 border-black text-center  rounded-lg lg:p-6 p-6">
                  <FaGithubAlt />
                </div>
                <div className="text-[30px] border-2 border-black text-center  rounded-lg lg:p-6 p-6">
                  <FaGitAlt />
                </div>
                <div className="text-[30px] border-2 border-black text-center  rounded-lg lg:p-6 p-6">
                  <SiRedux />
                </div>
                <div className="text-[30px] border-2 border-black text-center  rounded-lg lg:p-6 p-6">
                  <FaGitAlt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
