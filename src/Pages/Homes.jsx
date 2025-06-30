import React from 'react';
import Images from '../constants/Images';
import Caroussel from '../components/Caroussel';
import Caroussel2 from '../components/Caroussel2';

const Homes = () => {
    return (
        <div>
            <Caroussel />

            <section className='flex justify-center gap-6'>
                <div className='flex flex-col gap-6'>
                    <div className='h-[70vh] w-[30vw] overflow-hidden relative '>
                        <img src={Images.cards1} alt="" className='h-full w-full hover:scale-110  ' />
                        <button className='absolute left-[50%] translate-[-50%] bottom-0 bg-white px-15 py-3 text-[20px] hover:bg-orange-700 hover:text-white'>DRESSES</button>
                    </div>
                    <div className='h-[55vh] overflow-hidden relative'>
                        <img src={Images.cards4} alt="" className='h-full w-full hover:scale-110' />
                        <button className='absolute left-[50%] translate-[-50%] bottom-0 bg-white px-15 py-3 text-[20px] hover:bg-orange-700 hover:text-white'>SUNGLASSES</button>
                    </div>
                </div>
                 <div className='flex flex-col gap-6'>
                    <div className='h-[55vh] overflow-hidden relative'>
                        <img src={Images.cards2} alt="" className='h-full w-full hover:scale-110' />
                        <button className='absolute left-[50%] translate-[-50%] bottom-0 bg-white px-15 py-3 text-[20px] hover:bg-orange-700 hover:text-white'>WATCHES</button>
                    </div>
                    <div className='h-[70vh] w-[30vw] overflow-hidden relative'>
                        <img src={Images.cards3} alt="" className='h-full w-full hover:scale-110' />
                        <button className='absolute left-[50%] translate-[-50%] bottom-0 bg-white px-15 py-3 text-[20px] hover:bg-orange-700 hover:text-white'>FOOTERWEAR</button>
                    </div>
                    
                </div>
                 <div className='flex flex-col gap-6'>
                    <div className='h-[70vh] w-[30vw] overflow-hidden relative'>
                        <img src={Images.cards5} alt="" className='h-full w-full hover:scale-110' />
                        <button className='absolute left-[50%] translate-[-50%] bottom-0 bg-white px-15 py-3 text-[20px] hover:bg-orange-700 hover:text-white'>BAGS</button>
                    </div>
                    <div className='h-[55vh] overflow-hidden relative'>
                        <img src={Images.cards6} alt="" className='h-full w-full hover:scale-110' />
                        <button className='absolute left-[50%] translate-[-50%] bottom-0 bg-white px-15 py-3 text-[20px] hover:bg-orange-700 hover:text-white'>ACCESSORIES</button>
                    </div>
                </div>
                
            </section>
            <Caroussel2 />
            
           
        </div>
    );
};

export default Homes;