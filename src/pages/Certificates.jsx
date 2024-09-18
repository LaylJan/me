import { useState } from "react";
import cs50x from "../assets/certs/CS50x.png";
import i7 from "../assets/certs/I7.jpg";
import javaFun from "../assets/certs/Java fundumentals.png";
import next from "../assets/next.svg";

const Certificates = ({}) => {
  const slides = [
    { id: 1, image: cs50x, text: "CS50x Certificate" },
    { id: 2, image: javaFun, text: "Java Fundamentals Certificate" },
    { id: 3, image: i7, text: "I7 Certificate" },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex flex-col min-w-full items-center justify-center"
            >
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-1/2"
              />
              <p className="text-center mt-4 text-lg font-semibold">
                {slide.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2"
      >
        Prev
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4"
      >
        <img
          src={next}
          alt="Next Slide"
          className="w-12 h-12 hover:bg-white hover:bg-opacity-10 transition duration-200"
        />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4">
        {slides.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-3 w-3 rounded-full mx-2 cursor-pointer ${
              currentSlide === idx ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
