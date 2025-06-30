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
    <div className="mx-auto relative overflow-hidden rounded-lg mb-25 ">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-700 h-[80vh]"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        <div className="w-[100vw] flex-shrink-0 relative">
          <img
            src={Images.carousel3}
            className="object-cover w-[100vw] h-full"
            alt="Slide 1"
          />
          <div className=' absolute z-40 left-0 bottom-0 w-full h-full flex flex-col items-center justify-center gap-2'>
                        <h1 className='text-white'>Women Collection 2025</h1>
                        <h2 className='text-white text-[80px] font-bold'>New Arrivals</h2>
                        <button className='bg-white px-16 py-3 rounded-[50px] mt-10'>SHOP NOW</button>

          </div>
        </div>
        <div className="w-[100vw] flex-shrink-0 relative">
          <img
            src={Images.carousel2}
            className="object-cover w-[100vw] h-full"
            alt="Slide 2"
          />
          <div className='  absolute z-40 left-0 bottom-0 w-full h-full flex flex-col items-center justify-center gap-2'>
                        <h1 className='text-white'>Women Collection 2025</h1>
                        <h2 className='text-white text-[80px] font-bold'>New Arrivals</h2>
                        <button className='bg-white px-16 py-3 rounded-[50px] mt-10'>SHOP NOW</button>

          </div>
          
        </div>
        <div className="w-[100vw] flex-shrink-0 relative">
          <img
            src={Images.carousel1}
            className="object-cover w-[100vw] h-full"
            alt="Slide 3"
          />
          <div className='  absolute z-40 left-0 bottom-0 w-full h-full flex flex-col items-center justify-center gap-2'>
                        <h1 className='text-white'>Women Collection 2025</h1>
                        <h2 className='text-white text-[80px] font-bold'>New Arrivals</h2>
                        <button className='bg-white px-16 py-3 rounded-[50px] mt-10'>SHOP NOW</button>

          </div>
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
