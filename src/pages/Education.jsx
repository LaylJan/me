import { useState } from "react";
import Tagumpay from "../assets/Tagumpay.png";

const Education = ({ setPage }) => {
  return (
    <div className="PS text-justify">
      <p className=""></p>
      <p>Educational Background:</p>
      <img src={Tagumpay} alt="Tagumpay" className="w-20" />
    </div>
  );
};

export default Education;
