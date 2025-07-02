import React from 'react';
import Images from '../constants/Images';
import { motion } from "motion/react"

const About = () => {
    return (
        <>
        <div className="relative h-[300px] bg-black mb-30">
                    <img
                      alt="Blog Banner"
                      src={Images.carousel3}
                      className="object-cover w-full h-full opacity-50"
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                      <h1 className="text-white font-bold text-5xl">About</h1>
                    </div>
                  </div>
        <div className='w-full px-4 md:px-10 py-10'>
            
            
            <div className='flex flex-col lg:flex-row gap-6 items-center'>
                
                <div className='  h-[70vh] w-[30vw] max-md:w-full'>
                    <img src={Images.shopy4} alt="Our story" className='w-full h-full ' />
                </div>

                <div className='w-full lg:w-1/2 text-gray-600'>
                    <h1 className='text-3xl font-semibold text-black mb-6'>Our story</h1>

                    <p className='mb-6'>
Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.                    </p>

                    <div className='border-l-4 border-black pl-4 italic'>
                        <p>
                            Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
                        </p>
                        <span className='block mt-2 text-black font-medium'>- Steve Job's</span>
                    </div>
                </div>
            </div>
        </div></>
    );
};

export default About;
