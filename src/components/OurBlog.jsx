import React from 'react';
import BlogData from '../json/BlogData.json';
import Images from '../constants/Images';
import { motion } from "motion/react"

const OurBlog = () => {
  return (
    <div className="pb-20">
      <h1 className="text-center text-[35px] font-bold pt-15 pb-10">Our Blog</h1>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {BlogData.map((e, i) => (
          <div
            key={i}
            className="w-full sm:w-[45%] md:w-[30%] lg:w-[25%] h-[70vh] flex flex-col"
          >
            <div className="w-full overflow-hidden rounded-lg shadow-lg">
              <img
                src={Images[e.imag]}
                alt={e.title}
                className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="text-[17px] pt-3 font-semibold">{e.title}</p>
            <p className="text-[15px] text-gray-500 pt-2">{e.by}</p>
            <p className="text-[16px] text-gray-600 pt-2">{e.psedicreb}</p>
          </div>
        ))}
      </div>

      <h1 className="pt-20 pb-20 text-center text-[30px] font-bold">
        @ FOLLOW US ON INSTAGRAM
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300 text-center max-w-5xl mx-auto">
        <div className="px-6 py-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Free Delivery Worldwide</h3>
          <p className="text-sm text-gray-500 italic">Mirum est notare quam littera gothica</p>
        </div>

        <div className="px-6 py-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">30 Days Return</h3>
          <p className="text-sm text-gray-500 italic">Simply return it within 30 days for an exchange.</p>
        </div>

        <div className="px-6 py-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Store Opening</h3>
          <p className="text-sm text-gray-500 italic">Shop open from Monday to Sunday</p>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
