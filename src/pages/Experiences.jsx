import { useState } from "react";
import I7 from "../assets/IntelliSeven.png";
import BUGC from "../assets/BUGC.png";
import SN from "../assets/SN.png";
import Certificates from "./Certificates";

const Experiences = ({ goto, highlight }) => {
  return (
    <div className="font-LS text-justify">
      <p
        className={`text-2xl md:text-3xl font-black transition duration-300 ${
          highlight ? "text-purple-400 drop-shadow-lg" : ""
        }`}
      >
        EXPERIENCES:
      </p>
<div
  onClick={() => goto("https://www.intelliseven.com.ph/")}
  className="mt-2 md:ml-5 hover:bg-white hover:bg-opacity-10 transition duration-200"
>
  {/* Top Section */}
  <div className="flex items-center space-x-5 text-base md:text-xl font-medium mt-2 md:ml-5">

    {/* Fixed image container */}
    <div className="w-24 md:w-28 flex justify-center items-center shrink-0">
      <img
        src={BUGC}
        alt="IntelliSeven"
        className="w-20 md:w-24 object-contain"
      />
    </div>

    {/* Text */}
    <div className="flex flex-col -space-y-1">
      <p className="font-bold">Britannica United Motors</p>

      <div className="flex flex-col">
        <p>June 2025 – March 2026</p>
        <p>Automotive dealership group</p>
        <p>IT Assistant</p>
      </div>
    </div>
  </div>

  {/* Description */}
  <div className="text-base md:text-xl font-medium mb-5 md:ml-5 p-2">
    <p>
      Provide regional on-site and remote IT support for hardware and
      software issues and inventory management across Luzon branches,
      ensuring optimal functionality of all systems and peripherals to
      maintain uninterrupted operations.
    </p>
  </div>
</div>
      <div
  onClick={() => goto("https://en.wikipedia.org/wiki/Solid_North_Party")}
  className="mt-2 md:ml-5 hover:bg-white hover:bg-opacity-10 transition duration-200"
>
  {/* Top Section */}
  <div className="flex items-center space-x-5 text-base md:text-xl font-medium mt-2 md:ml-5">

    {/* Fixed image container */}
    <div className="w-24 md:w-28 flex justify-center items-center shrink-0">
      <img
        src={SN}
        alt="Solid North"
        className="w-20 md:w-23 rounded-full object-cover"
      />
    </div>

    {/* Text */}
    <div className="flex flex-col -space-y-1">
      <p className="font-bold">Solid North Partylist</p>

      <div className="flex flex-col">
        <p>March 2025 - May 2025</p>
        <p>Political Party</p>
        <p>IT Support</p>
      </div>
    </div>
  </div>

  {/* Description */}
  <div className="text-base md:text-xl font-medium mb-5 md:ml-5 p-2">
    <p>
      Resolved hardware and software issues and configured Starlink
      satellite systems to maintain reliable internet connectivity,
      supporting uninterrupted digital tagging operations and efficient
      supporter benefit distribution.
    </p>
  </div>
</div>

<div
  onClick={() => goto("https://www.intelliseven.com.ph/")}
  className="mt-2 md:ml-5 hover:bg-white hover:bg-opacity-10 transition duration-200"
>
  {/* Top Section */}
  <div className="flex items-center space-x-5 text-base md:text-xl font-medium mt-2 md:ml-5">

    {/* Fixed image container */}
    <div className="w-24 md:w-28 flex justify-center items-center shrink-0">
      <img
        src={I7}
        alt="IntelliSeven"
        className="w-20 md:w-24 object-contain"
      />
    </div>

    {/* Text */}
    <div className="flex flex-col -space-y-1">
      <p className="font-bold">IntelliSeven Solutions Inc.</p>

      <div className="flex flex-col">
        <p>February 2024 - May 2024</p>
        <p>Corporate office in Quezon City</p>
        <p>Internship</p>
      </div>
    </div>
  </div>

  {/* Description */}
  <div className="text-base md:text-xl font-medium mb-5 md:ml-5 p-2">
    <p>
      Contributed to the development of a chat admin project, focusing on
      both front-end and back-end tasks mainly using React.js with
      Graphql.
    </p>
  </div>
</div>
    </div>
  );
};

export default Experiences;
