import React, { useRef, useState, useEffect } from 'react';
import Images from '../constants/Images';
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import ddata from "../json/produit.json";
import { Link } from 'react-router-dom';

const Caroussel2 = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerSlide(1);
      else if (width < 768) setItemsPerSlide(2);
      else if (width < 1024) setItemsPerSlide(3);
      else setItemsPerSlide(4);
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
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
    <div className="mx-auto relative overflow-hidden mb-16">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {chunkedProducts.map((group, idx) => (
          <div
            key={idx}
            className="w-full flex-shrink-0 flex justify-center gap-4 px-4"
          >
            {group.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden group flex-1 max-w-xs"
              >
                <div className="relative h-[300px] bg-black">
                  <img
                    src={Images[product.image]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:opacity-50 transition duration-300"
                  />
                  {product.onSale && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                      Sale
                    </span>
                  )}
                  <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full opacity-0 group-hover:opacity-100 transition duration-300">
                    Add to Cart
                  </button>
                </div>
                <div className="p-4">
                  <Link to={`/ProductDetailPage/${product.id}`}>
                    <h3 className="font-medium text-gray-800 mb-2 hover:text-amber-800 cursor-pointer">
                      {product.name}
                    </h3>
                  </Link>
                  <span className="text-lg font-semibold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={() => scrollCarousel(-1)}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 w-10 h-10 bg-gray-200/70 rounded-full hover:bg-gray-300 transition"
      >
        <FaCircleChevronLeft className="text-gray-700 w-6 h-6 mx-auto" />
      </button>
      <button
        onClick={() => scrollCarousel(1)}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 w-10 h-10 bg-gray-200/70 rounded-full hover:bg-gray-300 transition"
      >
        <FaCircleChevronRight className="text-gray-700 w-6 h-6 mx-auto" />
      </button>
    </div>
  );
};

export default Caroussel2;
