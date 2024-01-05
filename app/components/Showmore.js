"use client";
// In your Next.js page

import React, { useState } from "react";
import Image from "next/image";
import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";

const ProjectCardODD = ({ project }) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 justify-between md:flex place-items-center py-5">
      <div className="w-full lg:w-1/3">
        <Image
          src={project.image}
          layout="responsive"
          alt={`Project ${project.no}`}
          className="images grayscale hover:grayscale-0 rounded-lg origin-center rotate-12 "
          width={100}
          height={100}
        />
      </div>
      <div className="w-full lg:w-1/2">
        <p className="text-xl font-bold">0{project.no}</p>
        <p className="py-3 text-xl font-bold">{project.projectname}</p>
        <p className="py-3">{project.projdesc}</p>
        <Link className=" flex place-items-center gap-1" href={project.link}>
          Visit website <LuExternalLink />
        </Link>
      </div>
    </div>
  );
};
const ProjectCardEVEN = ({ project }) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4  justify-between md:flex   place-items-center py-10">
      <div className="w-full lg:w-1/2">
        <p className="text-xl font-bold">0{project.no}</p>
        <p className="py-3 text-xl font-bold">{project.projectname}</p>
        <p className="py-3">{project.projdesc}</p>
        <Link className=" flex place-items-center gap-1" href={project.link}>
          Visit website <LuExternalLink />
        </Link>
      </div>
      <div className="w-full  lg:w-1/3">
        <Image
          src={project.image}
          layout="responsive"
          alt={`Project ${project.no}`}
          className="images grayscale hover:grayscale-0 rounded-lg origin-center -rotate-12"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

const ShowMoreButton = () => {
  const [isHidden, setIsHidden] = useState(true);

  const projects = [
    {
      no: 1,
      projectname:
        "Moram Napu - Gaming Outreach and Digital Marketing Platform",
      image: "/images/moram.png",
      link: "https://www.moramnapu.com/",
      projdesc:
        "Welcome to Moram Napu, a cutting-edge project built with Next.js, Tailwind CSS, and Nodemailer, revolutionizing the landscape of Gaming Outreach and Digital Marketing. Moram Napu is designed to elevate gaming brands and companies by providing exceptional services in Gaming Outreach, Content Management, and Fullstack Digital Marketing.",
    },
    {
      no: 2,
      projectname: "Dijitization: Revolutionizing Digital Transformation",
      image: "/images/diji.png",
      link: "https://dijitization.com/",
      projdesc:
        "Welcome to Dijitization, your gateway to streamlined digital processes and transformative technology. Built on the foundations of Next.js, Tailwind CSS, and Nodemailer, Dijitization is an innovative platform designed to assist individuals and organizations in achieving their digital goals seamlessly.",
    },
    {
      no: 3,
      projectname: "Digitech Ladder: Stepping Towards Digital Success",
      image: "/images/digi.png",
      link: "https://www.digitechladder.com/",
      projdesc:
        "Embark on a revolutionary digital journey with the ReactNXT Mega App, a robust platform meticulously crafted using React.js and Next.js, leveraging an array of cutting-edge packages. This innovative project seamlessly combines the power of React's component-based architecture with Next.js's server-side rendering and routing capabilities, resulting in a dynamic and efficient web application.",
    },
    {
      no: 4,
      projectname: "The Esport School ",
      image: "/images/esport.png",
      link: "https://www.esportsschool.online/",
      projdesc:
        "Welcome to EsportsHub Academy, your ultimate destination for mastering the dynamic world of esports. Whether you aspire to become a top-tier player, a skilled coach, a strategic manager, or an event organizing maestro, we are here to guide you toward your esports dreams.",
    },
  ];
  const proje = [
    {
      no: 5,
      projectname: "DevLine Blog ",
      image: "/images/devl.png",
      link: "https://devline.thisisvikasmourya.vercel.app/category/webdev",
      projdesc:
        "Embark on a journey through the techscape with DevLine Blog, a dynamic website meticulously crafted using ReactJS and GraphQL. DevLine stands as a testament to the fusion of cutting-edge technology and insightful content, providing a platform where developers and tech enthusiasts can immerse themselves in a world of knowledge.",
    },
    {
      no: 6,
      projectname: "Nexthome Rentals",
      image: "/images/next.png",
      link: "https://nexthome1.vercel.app/rentals",
      projdesc:
        "Welcome to Nexthome Rentals, your gateway to a hassle-free and convenient rental experience. Crafted with precision using the MERN (MongoDB, Express.js, React.js, Node.js) stack and empowered by Redux, Nexthome Rentals is redefining the way you search for your next place to live.",
    },
  ];

  const handleShowMore = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="text-white bg-black">
      <div className="max-w-screen-xl mx-auto md:px-8 px-4 py-20">
        <div>
          <h1 className="text-[48px] tracking-[-0.96px] leading-[70px] py-1 text-center ">
            My{" "}
            <span className="text-[48px] font-extrabold tracking-[-0.96px]">
              {" "}
              Projects
            </span>
          </h1>
        </div>
        {projects.map((project) => (
          <div key={project.no}>
            {project.no % 2 === 0 ? (
              <ProjectCardODD project={project} />
            ) : (
              <ProjectCardEVEN project={project} />
            )}
          </div>
        ))}
        {isHidden && (
          <div>
            {proje.map((project) => (
              <div key={project.no}>
                {project.no % 2 === 0 ? (
                  <ProjectCardODD project={project} />
                ) : (
                  <ProjectCardEVEN project={project} />
                )}
              </div>
            ))}
          </div>
        )}
        <div className="text-center ">
          <button onClick={handleShowMore}>
            {isHidden ? "Show Less Project" : "Show More Project"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowMoreButton;
