import React from 'react';
import Images from '../constants/Images';
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";


const Caroussel = () => {
   
			let currentIndex = 0;

			function scrollCarousel(direction) {
				const carousel = document.getElementById("carousel");
				const totalSlides = carousel.children.length;
				currentIndex =
					(currentIndex + direction + totalSlides) % totalSlides;
				carousel.style.transform = `translateX(-${
					currentIndex * 100
				}%)`;
			}
		
    return (
        <>
        
            <body className="bg-amber-800 flex items-center justify-center h-[70vh] mt-40">
		<div className="relative w-full max-w-4xl mx-auto ">
			<div className="overflow-hidden relative rounded-lg bg-amber-600 h-100">
			</div>

			<button
				className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none"
				onclick={()=>scrollCarousel(-1)}
			>
				<FaCircleChevronLeft />

			</button>
			<button
				className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none"
				onclick={()=>scrollCarousel(1)}
			>
				<FaCircleChevronRight className='text-blue-400' />

			</button>
		</div>

		
	</body>
      
        </>
        
    );
};

export default Caroussel;