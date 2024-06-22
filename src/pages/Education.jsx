import { useState } from "react";
import TNHS from "../assets/Tagumpay.png";
import NEU from "../assets/New Era.svg";

const Education = ({ setPage }) => {
  return (
    <div className="PS text-justify">
      <p className="text-lg">Educational Background:</p>
      <div className="flex mt-5 mb-5 ml-5 items-center space-x-5">
        <img src={TNHS} alt="Tagumpay" className="w-32" />
        <div className="flex flex-col">
          <p className="text-sm">Tagumpay National High School</p>
          <p className="text-sm">2015 - 2019</p>
          <p className="text-sm">Rodriguez, Rizal</p>
          <p className="text-sm">Junior High School</p>
        </div>
      </div>
      <div className="flex mt-5 mb-5 ml-5 items-center space-x-5">
        <img src={NEU} alt="New Era" className="w-32" />
        <div className="flex flex-col">
          <p className="text-sm">New Era University</p>
          <p className="text-sm">2019 - 2021</p>
          <p className="text-sm">Quezon City</p>
          <p className="text-sm">
            TVL - Information and Communication Technology{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
