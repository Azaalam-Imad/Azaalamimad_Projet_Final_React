import React from 'react';
import Images from '../constants/Images';
import Caroussel from '../components/Caroussel';
import Caroussel2 from '../components/Caroussel2';
import FashionEcommerce from '../components/Fashen';
import OurBlog from '../components/OurBlog';
import { useNavigate } from 'react-router-dom';
import { motion } from "motion/react"

const Homes = () => {
    const navg= useNavigate()
    return (
        <div>
            <Caroussel />

            <section className="flex flex-wrap justify-center gap-6 px-4 py-10">
                <div className="flex flex-col gap-6 w-full md:w-[45%] lg:w-[30%]">
                    <div className="h-80 overflow-hidden relative">
                        <img src={Images.cards1} alt="" className="h-full w-full object-cover hover:scale-110 duration-300" />
                        <button className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-white px-6 py-2 text-[18px] hover:bg-orange-700 hover:text-white">DRESSES</button>
                    </div>
                    <div className="h-60 overflow-hidden relative">
                        <img src={Images.cards4} alt="" className="h-full w-full object-cover hover:scale-110 duration-300" />
                        <button onClick={()=>navg("/shop")} className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-white px-6 py-2 text-[18px] hover:bg-orange-700 hover:text-white">SUNGLASSES</button>
                    </div>
                </div>

                <div className="flex flex-col gap-6 w-full md:w-[45%] lg:w-[30%]">
                    <div className="h-60 overflow-hidden relative">
                        <img src={Images.cards2} alt="" className="h-full w-full object-cover hover:scale-110 duration-300" />
                        <button onClick={()=>navg("/shop")} className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-white px-6 py-2 text-[18px] hover:bg-orange-700 hover:text-white">WATCHES</button>
                    </div>
                    <div className="h-80 overflow-hidden relative">
                        <img src={Images.cards3} alt="" className="h-full w-full object-cover hover:scale-110 duration-300" />
                        <button onClick={()=>navg("/shop")} className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-white px-6 py-2 text-[18px] hover:bg-orange-700 hover:text-white">FOOTERWEAR</button>
                    </div>
                </div>

                <div className="flex flex-col gap-6 w-full md:w-[45%] lg:w-[30%]">
                    <div className="h-80 overflow-hidden relative">
                        <img src={Images.cards5} alt="" className="h-full w-full object-cover hover:scale-110 duration-300" />
                        <button onClick={()=>navg("/shop")} className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-white px-6 py-2 text-[18px] hover:bg-orange-700 hover:text-white">BAGS</button>
                    </div>
                    <div className="h-60 overflow-hidden relative">
                        <img src={Images.cards6} alt="" className="h-full w-full object-cover hover:scale-110 duration-300" />
                        <button onClick={()=>navg("/shop")} className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-white px-6 py-2 text-[18px] hover:bg-orange-700 hover:text-white">ACCESSORIES</button>
                    </div>
                </div>
            </section>

            <section className="mt-16 px-4">
                <h1 className="text-center font-bold text-3xl mb-6">FEATURED PRODUCTS</h1>
                <Caroussel2 />
            </section>

            <FashionEcommerce />
            <OurBlog />
        </div>
    );
};

export default Homes;
