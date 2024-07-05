import { useState } from "react";
import cs50x from "../assets/certs/CS50x.png";
import neu from "../assets/certs/NEU.jpg";
import javaFun from "../assets/certs/Java fundumentals.png";

const Certificates = ({ setPage }) => {
  return (
    <div>
      <div className="flex justify-between p-2">
        <img className="cw-45 m-5" src={cs50x} alt="" />
        <img className="cw-45 m-5" src={neu} alt="" />
      </div>
      <div className="flex justify-between p-2">
        <img className="cw-45 m-5" src={javaFun} alt="" />
      </div>
    </div>
  );
};

export default Certificates;
