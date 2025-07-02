import React from 'react';
import Images from '../constants/Images';

const Sale = () => {
    return (
        <div>
                        <div className="relative h-[300px] bg-black">
        <img
          alt="Blog Banner"
          src={Images.carousel3}
          className="object-cover w-full h-full opacity-50"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white font-bold text-5xl">Sale</h1>
        </div>
      </div>
        </div>
    );
};

export default Sale;