import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Mycontext } from '../context/Context';
import Images from '../constants/Images';

const Checkout = () => {
  const { datashop, cont, prixtot, supprodcart } = useContext(Mycontext);

  return (
    <div className='flex flex-col md:flex-row px-4 md:px-12 pt-20 gap-6'>
      
      <div className='w-full md:w-1/2 py-2 px-2 flex flex-col gap-5'>
        <div className='flex justify-between items-center'>
          <p className='text-black text-[22px] font-bold'>Contact</p>
          <Link to={"/Contact"} className='text-blue-500 text-sm hover:underline'>Login</Link>
        </div>

        <input type="text" placeholder='Email or mobile phone' className='border border-gray-300 rounded px-3 py-2 w-full' />

        <label className='text-black/80 flex items-center gap-2 text-sm'>
          <input type="checkbox" /> Email me with news and offers
        </label>

        <h2 className='text-black text-[22px] font-bold'>Delivery</h2>

        <div className='flex flex-col sm:flex-row gap-2'>
          <input type="text" placeholder='First Name' className='border border-gray-300 rounded px-3 py-2 w-full' />
          <input type="text" placeholder='Last Name' className='border border-gray-300 rounded px-3 py-2 w-full' />
        </div>

        <input type="text" placeholder='Address' className='border border-gray-300 rounded px-3 py-2 w-full' />
        <input type="text" placeholder='Apartment, suite, etc.' className='border border-gray-300 rounded px-3 py-2 w-full' />

        <div className='flex flex-col sm:flex-row gap-2'>
          <input type="text" placeholder='Postal Code' className='border border-gray-300 rounded px-3 py-2 w-full' />
          <input type="text" placeholder='City' className='border border-gray-300 rounded px-3 py-2 w-full' />
        </div>

        <h2 className='text-black text-[22px] font-bold'>Payment</h2>
        <p className='text-sm text-gray-500'>All transactions are secure and encrypted.</p>

        <button className="bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-700 transition mt-4">
          Pay Now
        </button>
      </div>

      <div className='w-full md:w-1/2 py-4 px-2'>
        <div className='flex flex-col gap-4'>
          {datashop.map((e, index) => (
            <div key={index} className='flex gap-3 border-b pb-3'>
              <div className='w-[25%]'>
                <img
                  src={Images[e[0].image]}
                  alt={e[0].name}
                  className='w-full h-full rounded-xl object-cover cursor-pointer'
                  onClick={() => supprodcart(e[0].id)}
                />
              </div>
              <div className='w-[75%] flex flex-col justify-center'>
                <p className='text-black font-medium'>{e[0].name}</p>
                <p className='text-gray-500 text-sm'>{cont} x ${e[0].price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-4 flex justify-between text-lg font-semibold'>
          <span>Total:</span>
          <span>${prixtot}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
