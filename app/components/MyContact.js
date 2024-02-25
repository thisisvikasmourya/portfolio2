import React from "react";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

const MyContact = () => {
  return (
    <div id="Contact">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-16">
        <div className="flex lg:flex-row flex-col justify-between   gap-16 ">
          {" "}
          <div className="grid grid-rows-4 gap-5  basis-1/2	">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 text-[16px] border-2 border-black rounded-[4px]"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full p-4 text-[16px] border-2 border-black rounded-[4px]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 text-[16px] border-2 border-black rounded-[4px]"
            />
            <input
              type="text"
              placeholder="Message"
              className="w-full p-4 text-[16px] border-2 border-black rounded-[4px]"
            />
            <div>
              <div className="flex flex-row">
                <div className="flex list-none  gap-5 text-[20px]">
                  <button className="bg-black text-white py-2 px-4 rounded-[4px]">
                    Get In Touch
                  </button>
                  <Link
                    href="https://twitter.com/i/flow/login"
                    className="border-black text-white bg-black  border-2 p-[16px] rounded-lg"
                  >
                    <FaXTwitter />
                  </Link>
                  <Link
                    href={"https://www.instagram.com/thisisvikasmourya_/"}
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
              </div>
            </div>
          </div>
          <div>
            <div className="basis-1/2">
              <h1 className="text-[48px] font-extrabold tracking-[-0.96px]">
                Let's{" "}
                <span className="textt text-[48px] font-extrabold text-white leading-[56px]">
                  talk
                </span>{" "}
                for a
              </h1>
              <h1 className="text-[48px] tracking-[-0.96px]">
                <span className="text-[48px] font-extrabold tracking-[-0.96px] ">
                  Something special
                </span>
              </h1>
              <p className="w-full py-5">
                {" "}
                "Have a question, opportunity, or just want to connect?
                <br /> With two years of experience as a Full Stack MERN
                Developer, <br />
                I'm ready to discuss your needs. Reach out and let's start the
                conversation!"
              </p>
              <p className="text-[22px] font-semibold">
                vikasmourya053@gmail.com
              </p>
              <p className="text-[24px] font-semibold">+91 9324884374</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyContact;
