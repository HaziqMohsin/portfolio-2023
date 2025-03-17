import React from "react";

type Props = {};

const Education = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center w-full relative px-4 py-14">
      <h1 className="text-center text-5xl mb-5 font-bold">Education</h1>
      <div className="">
        <h2 className="font-bold text-xl">Bachelor in Software Engineer</h2>
        <h3 className="text-lg">Universiti Kuala Lumpur (MIIT)</h3>
        <span>2012-2016</span>
      </div>
    </div>
  );
};

export default Education;
