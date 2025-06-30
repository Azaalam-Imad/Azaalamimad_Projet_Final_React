import React, { useRef, useState } from 'react';
import Images from '../constants/Images';
import '../App.css';
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const Caroussel = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollCarousel = (direction) => {
    const totalSlides = carouselRef.current.children.length;
    const newIndex = (currentIndex + direction + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="mx-auto relative overflow-hidden rounded-lg">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-700 h-80"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        <div className="w-[100vw] flex-shrink-0">
          <img
            src={Images.carousel3}
            className="object-cover w-[100vw] h-full"
            alt="Slide 1"
          />
        </div>
        <div className="w-[100vw] flex-shrink-0">
          <img
            src={Images.carousel2}
            className="object-cover w-[100vw] h-full"
            alt="Slide 2"
          />
        </div>
        <div className="w-[100vw] flex-shrink-0">
          <img
            src={Images.carousel1}
            className="object-cover w-[100vw] h-full"
            alt="Slide 3"
          />
        </div>
      </div>

      
      <button
        onClick={() => scrollCarousel(-1)}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 z-40 w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 transition"
      >
        <FaCircleChevronLeft className="text-gray-600 w-5 h-5 mx-auto" />
      </button>

      
      <button
        onClick={() => scrollCarousel(1)}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 z-40 w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 transition"
      >
        <FaCircleChevronRight className="text-gray-600 w-5 h-5 mx-auto" />
      </button>
    </div>
  );
};

export default Caroussel;
