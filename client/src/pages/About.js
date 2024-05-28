import React, { useState } from "react";
import Title from "../components/Title";

export default function About() {
  const experience = 6;
  const experienceYear = 2022;
  const currentYear = new Date().getFullYear();

  function getExpereinceYears() {
    if (currentYear > experienceYear) {
      const diffInYears = currentYear - experienceYear;
      return experience + diffInYears;
    }
    return experience;
  }

  return (
    <main className="page container ">
      <div className="py-10 px-1 md:py-16 lg:py-20 h-full w-full">
        <div className="w-full flex justify-center">
          <Title title="About Me" />
        </div>

        <div className="my-10 lg:my-16 mx-4 space-y-8">
          <div className="space-y-12">
            <div className="text-base leading-8">
              I'm a website designer and developer from Nigeria, Africa. I
              currently have <b>{getExpereinceYears()} years</b> of hands-on
              experience in building website applications and creating
              functionalities to simplify complex features with{" "}
              <b> MERN Stack and Next JS</b>. I have worked with some of the
              best tools to optimize, speed up and secure websites.
            </div>
            <div className="text-base leading-8">
              With great attention to detail and documentations, I can
              effectively use Object Data Models, Object Relational Models such
              as Mongoose and Prisma, variety of State management tools
              including Zod, React Redux, Zustand and Redux Toolkit. I'm
              experienced in API routing, API calls and testing with Postman,
              setting proper HTTP requests and responses, middlewares,
              authentication and authorization.
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Title title="Education" />
          </div>
          <div className="text-base leading-8">
            I am a Computer Science Graduate, <b>B.Sc</b> from the prestigious
            University of Abuja, Nigeria. I am also a Computer Science Graduate{" "}
            <b>OND</b> from Delta State Polytechnic Oghara, Nigeria, having
            completed high school and earning the relevant high school
            certificates
          </div>
          <div className="text-base leading-8">
            Education has no end, so I am consistently on a learning curve.
          </div>
        </div>
      </div>
    </main>
  );
}
