import React from "react";
import HeroImage from "../assets/photo2.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  const SocalLinks = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/shitoletushar3132",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/shitoletushar3132",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:shitoletushar3132@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/main_resume.pdf",
      sytle: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full p-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-20">
          <h2 className="text-4xl md:text-7xl font-bold text-white">
            I'm a{" "}
            <span className="text-fuchsia-400"> Full Stack Developer</span>
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a dedicated software developer with 2 years of experience in
            building dynamic and user-friendly web applications using
            TypeScript, JavaScript, React.js, Node.js, Express.js, Next.js,
            Tailwind CSS, and MongoDB. Passionate about DevOps, I specialize in
            streamlining workflows, automating deployments, and ensuring
            seamless CI/CD pipelines to deliver scalable, high-quality software
            solutions.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center 
              rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 
              cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img
            src={HeroImage}
            loading="lazy"
            alt="Tushar Shitole - Full Stack Developer"
            className="rounded-2xl mx-auto w-2/4 md:w-full "
          />
          <div className=" lg:hidden">
            <ul className="flex">
              {SocalLinks.map(({ id, child, href, style, download }) => (
                <li
                  key={id}
                  className={
                    "flex rounded-lg mt-3 justify-between items-center h-10 px-4 hover:scale-125 hover:bg-gray-700 duration-300"
                  }
                >
                  <a
                    href={href}
                    className="flex justify-between items-center text-white w-full"
                    download={download}
                    target={href.startsWith("mailto:") ? "_self" : "_blank"}
                    rel={
                      href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                  >
                    {child}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
