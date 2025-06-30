import React, { useRef, useState, useEffect } from 'react';
import Images from '../constants/Images';
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import ddata from "../json/produit.json";

const Caroussel2 = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1); // Small screen
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2); // Medium screen
      } else {
        setItemsPerSlide(4); // Large screen
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);

    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const chunkedProducts = [];
  for (let i = 0; i < ddata.length; i += itemsPerSlide) {
    chunkedProducts.push(ddata.slice(i, i + itemsPerSlide));
  }

  const scrollCarousel = (direction) => {
    const totalSlides = chunkedProducts.length;
    const newIndex = (currentIndex + direction + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="mx-auto relative overflow-hidden rounded-lg mb-25 mt-10">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {chunkedProducts.map((group, idx) => (
          <div key={idx} className="w-[100vw] flex-shrink-0 flex justify-center gap-4">
            {group.map(product => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden group w-[80vw] sm:w-[45vw] md:w-[22vw]">
                <div className="relative h-[60vh] w-[21vw] bg-black">
                  <img
                    src={Images[product.image]}
                    alt={product.name}
                    className="w-full h-[100%] object-cover group-hover:opacity-50 transition-transform duration-300"
                  />
                  {product.onSale && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">Sale</span>
                  )}
                  <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 hover:text-amber-800 cursor-pointer">{product.name}</h3>
                  <span className="text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={() => scrollCarousel(-1)}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 z-40 w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 transition"
      >
        <FaCircleChevronLeft className="text-gray-400 w-9 h-9  mx-auto" />
      </button>
      <button
        onClick={() => scrollCarousel(1)}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 z-40 w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 transition"
      >
        <FaCircleChevronRight className="text-gray-400 w-9 h-9 mx-auto" />
      </button>
    </div>
  );
};

export default Caroussel2;
