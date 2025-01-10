import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/monogo.png";
import node from "../assets/node.png";
import bootstrap from "../assets/bootstrap.png";
import typescript from "../assets/ts-logo-256.png";
import postgresSql from "../assets/PostgresSQL.png";
import express from "../assets/Express.png";
import aws from "../assets/AWS.png";
import docker from "../assets/Docker.png";
import liunx from "../assets/Linux.png"

const Experience = () => {
  const techs = [
    {
      id: 14,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-300",
    },

    {
      id: 15,
      src: express,
      title: "Express",
      style: "shadow-black",
    },

    {
      id: 6,
      src: node,
      title: "Node Js",
      style: "shadow-emerald-800",
    },

    {
      id: 7,
      src: postgresSql,
      title: "PostGreSql",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },

    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },

    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },

    { id: 16, src: aws, title: "AWS", style: "shadow-yellow-500" },
    { id: 17, src: docker, title: "Docker", style: "shadow-[#0db7ed]" },

    {
      id:18, src:liunx, title:"Linux", style:"shadow-yellow-600"
    },

    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },

    {
      id: 12,
      src: bootstrap,
      title: "BootStrap",
      style: "shadow-[#7C4DFF]",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
