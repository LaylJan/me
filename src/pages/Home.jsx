import { useEffect, useState } from "react";
import Webdev from "../assets/Webdev.svg";

const Home = ({ scrollToSection }) => {
  const [page, setPage] = useState("");

  // useEffect(() => {
  //   scrollToSection(page);
  //   console.log(page);
  // }, [page]);

  const scroll = (page) => {
    scrollToSection(page);
    setPage(page);
    console.log(page);
  };

  return (
    <div className="m-6 md:mt-20 ">
      <p className="text-3xl text-white md:text-5xl mb-2 md:mb-5 font-black">
        I'M LYLE JOHN DUMAYAS
      </p>
      <div className="m-1">
        <p className="bg-light-blue inline-flex text-black text-sm md:text-base  font-semibold pl-2 pr-2 rounded-3xl items-center">
          <img src={Webdev} alt="Web Developer" className="mr-2" />
          Web Developer
        </p>
      </div>
      <p className="text-white text-justify font-semibold text-base md:text-lg">
        Im a web developer with 1 year of experience worked on a few projects
        and ready to bring your designs to reality.
      </p>
      <div className="hidden md:block">
        <div className="flex flex-col items-start m-8 text-xl font-bold text-white">
          <button
            onClick={() => scroll("Education")}
            className={"hover:underline"}
          >
            Education
          </button>
          <button
            onClick={() => scroll("Experiences")}
            className="hover:underline"
          >
            Experiences
          </button>
          <button onClick={() => scroll("Skills")} className="hover:underline">
            Skills
          </button>
          <button
            onClick={() => scroll("Projects")}
            className="hover:underline"
          >
            Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
