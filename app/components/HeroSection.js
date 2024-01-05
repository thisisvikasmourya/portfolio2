import React from "react";
import Image from "next/image";
import Logo from "@/public/images/profile.png";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:px-8 px-4 ">
      <div className="flex lg:flex-row flex-col  justify-between md:flex   place-items-center py-16">
        <div>
          <h1 className="lg:text-[48px] text-[28px] tracking-[-0.96px] lg:leading-[56px] leading-[45px]">
            Hello I'm{" "}
            <span className="lg:text-[48px] text-[28px] font-extrabold tracking-[-0.96px]">
              {" "}
              Vikas Mourya.
            </span>
          </h1>
          <h1 className="lg:text-[48px] text-[28px] font-extrabold tracking-[-0.96px]">
            Full-stack{" "}
            <span className="textt lg:text-[48px] text-[28px] font-extrabold text-white lg:leading-[56px] leading-[45px]">
              Developer
            </span>
          </h1>
          <h1 className="lg:text-[48px] text-[28px] tracking-[-0.96px]">
            Based In{" "}
            <span className="lg:text-[48px] text-[28px] font-extrabold tracking-[-0.96px] ">
              India
            </span>
          </h1>
          <p className="w-full  lg:w-1/2">
            {" "}
            MERN developer adept at meeting user needs with high-quality, clean
            code. Strong in design, development, and deployment. Collaborates
            for flawless applications.
          </p>
        </div>
        <div>
          <Image
            src={Logo}
            layout="responsive"
            alt="hello iam"
            className="images grayscale hover:grayscale-0"
          />
        </div>
      </div>
      <div className="flex flex-row place-items-center ">
        <div className="flex list-none gap-5 text-[20px]">
          <Link
            href="https://twitter.com/i/flow/login"
            className="border-black text-white bg-black  border-2 p-[16px] rounded-lg"
          >
            <FaXTwitter />
          </Link>
          <Link
            href={"https://www.instagram.com/thisisvikasmourya/"}
            className="border-black border-2 p-[16px] rounded-lg"
          >
            <FaInstagram />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/vikas-mourya-74b006194/"}
            className="border-black border-2 p-[16px] rounded-lg"
          >
            <FaLinkedinIn />
          </Link>
        </div>

        <hr className=" mx-5 px-4 border-2 border-black w-full" />
      </div>
    </div>
  );
};

export default HeroSection;
