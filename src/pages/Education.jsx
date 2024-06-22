import { useState } from "react";
import Tagumpay from "../assets/Tagumpay.png";

const Education = ({ setPage }) => {
  return (
    <div className="PS text-justify">
      <p className="text-lg">Educational Background:</p>
      <div className="flex mt-5 mb-5 ml-5 items-start space-x-5">
        <img src={Tagumpay} alt="Tagumpay" className="w-28" />
        <div className="flex flex-col">
          <p className="text-base">Tagumpay National High School</p>
          <p className="text-base">2015 - 2019</p>
          <p className="text-base">Rodriguez, Rizal</p>
          <p className="text-base">Junior High School</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
