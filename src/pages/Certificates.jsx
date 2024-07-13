import { useState } from "react";
import cs50x from "../assets/certs/CS50x.png";
import neu from "../assets/certs/NEU.jpg";
import i7 from "../assets/certs/I7.jpg";
import javaFun from "../assets/certs/Java fundumentals.png";

const Certificates = ({ setPage }) => {
  return (
    <div>
      <div className="md:flex justify-between p-2">
        <img className="w-full md:w-cw45 p-5" src={i7} alt="" />
        <img className="w-full md:w-cw45 p-5" src={cs50x} alt="" />
      </div>
      <div className="flex justify-between p-2">
        <img className="w-full md:w-cw45 p-5" src={javaFun} alt="" />
        <img className="w-full md:w-cw45 p-5" src={neu} alt="" />
      </div>
    </div>
  );
};

export default Certificates;
