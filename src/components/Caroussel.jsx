import React, { useRef, useState } from 'react';
import Images from '../constants/Images';
import '../App.css';
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; 

const Caroussel = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navg = useNavigate();

  const images = [Images.carousel3, Images.carousel2, Images.carousel1];

  const scrollCarousel = (direction) => {
    const totalSlides = images.length;
    const newIndex = (currentIndex + direction + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="mx-auto relative overflow-hidden rounded-lg mb-6 w-full max-w-screen">
      <div
        ref={carouselRef}
        className="relative h-[60vh] md:h-[80vh] w-full"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full top-0 left-0"
          >
            <img
              src={images[currentIndex]}
              className="object-cover w-full h-full"
              alt={`Slide ${currentIndex + 1}`}
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute z-40 left-0 bottom-0 w-full h-full flex flex-col items-center justify-center gap-2"
            >
              <h1 className="text-white">Women Collection 2025</h1>
              <h2 className="text-white text-[40px] md:text-[80px] font-bold">New Arrivals</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navg("/shop")}
                className="bg-white px-10 md:px-16 py-3 rounded-full mt-10"
              >
                SHOP NOW
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={() => scrollCarousel(-1)}
        className="absolute top-1/2 left-3 md:left-6 transform -translate-y-1/2 z-40 w-10 h-10 md:w-12 md:h-12 bg-gray-200/50 rounded-full hover:bg-gray-300 flex items-center justify-center transition"
      >
        <FaCircleChevronLeft className="text-gray-600 w-5 md:w-6 h-5 md:h-6" />
      </button>

      <button
        onClick={() => scrollCarousel(1)}
        className="absolute top-1/2 right-3 md:right-6 transform -translate-y-1/2 z-40 w-10 h-10 md:w-12 md:h-12 bg-gray-200/50 rounded-full hover:bg-gray-300 flex items-center justify-center transition"
      >
        <FaCircleChevronRight className="text-gray-600 w-5 md:w-6 h-5 md:h-6" />
      </button>
    </div>
  );
};

export default Caroussel;
