import React, { useState, useEffect } from 'react';
import Images from '../constants/Images'
import { useNavigate } from 'react-router-dom';
import { motion } from "motion/react"

const FashionEcommerce = () => {
  const navg= useNavigate()
  const [timeLeft, setTimeLeft] = useState({
    days: 74,
    hours: 12,
    minutes: 26,
    seconds: 60
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
    
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         
<div className="relative group">
  <div className="bg-gray-50 rounded-lg overflow-hidden aspect-square h-[78vh] w-full">
    <img
      src={Images.bnr8}
      alt=""
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute top-20 inset-0 flex flex-col items-center justify-center text-white transition-transform duration-500 ">
      <div className="text-center mb-8 ">
        <h2 className="text-2xl md:text-6xl font-light mb-2">The Beauty</h2>
        <h1 className="text-3xl md:text-8xl font-bold tracking-wider">LOOKBOOK</h1>
      </div>
      <button onClick={()=>navg("/shop")} className="bg-white text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
        VIEW COLLECTION
      </button>
    </div>
  </div>
</div>


          <div className="space-y-8 group">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className='h-[40vh] overflow-y-hidden'>
                <img src={Images.shopit} alt="" className='h-[50vh] w-full'/>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Boxy2 T-Shirt with Roll Sleeve</h3>
                <p className="text-2xl font-bold text-gray-900 mb-6">$20.00</p>
                
                <div className="grid grid-cols-4 gap-2 mb-6">
                  <div className="border border-gray-300 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-gray-900">-{timeLeft.days}</div>
                    <div className="text-sm text-gray-500">days</div>
                  </div>
                  <div className="border border-gray-300 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-gray-900">-{timeLeft.hours}</div>
                    <div className="text-sm text-gray-500">hrs</div>
                  </div>
                  <div className="border border-gray-300 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-gray-900">-{timeLeft.minutes}</div>
                    <div className="text-sm text-gray-500">mins</div>
                  </div>
                  <div className="border border-gray-300 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-gray-900">-{timeLeft.seconds}</div>
                    <div className="text-sm text-gray-500">secs</div>
                  </div>
                </div>
                
                
              </div>
            </div>

           
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default FashionEcommerce;