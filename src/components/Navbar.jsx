import React, { useContext, useState } from 'react';
import Images from '../constants/Images';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Mycontext } from '../context/Context';

const Navbar = () => {
  const [shopinstat,setShopinstat]=useState(false)
  console.log(shopinstat);
  const {datashop,cont,prixtot,supprodcart}= useContext(Mycontext)
  
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const navig = useNavigate()
  const [show,setShow]=useState(false)
  const [length,setLength]= useState(datashop.length)
 if(length>=1){
setShow(true)
 }

  return (
    <div className="relative z-50 w-full h-[10vh]">
      <div className="flex items-center justify-between py-4 px-6 md:px-12 fixed top-0 left-0 w-full bg-white shadow-md">
        
        <img src={Images.Logo} alt="Logo" className="w-24 md:w-32" />

        <ul className="hidden md:flex gap-x-8 text-gray-600 text-sm font-medium">
          <Link to="/"><li>Home</li></Link>
          <Link to="/shop"><li>Shop</li></Link>
          <Link to="/sale"><li>Sale</li></Link>
          <Link to="/Features"><li>Features</li></Link>
          <Link to="/blog"><li>Blog</li></Link>
          <Link to="/About"><li>About</li></Link>
          <Link to="/Contact"><li>Contact</li></Link>
          
        </ul>

        <div className="hidden md:flex items-center">
          
          <Link to="/Acount"><FaRegCircleUser className="text-[25px] text-gray-500 mr-4" /></Link>
          <div className='relative cursor-pointer' onClick={()=>setShopinstat((!shopinstat))}><MdOutlineShoppingBag  className="text-[25px] text-gray-500" />
            <span className='absolute bg-black text-white text-[13px] top-[-9px] right-[-9px] w-[18px] h-[18px] rounded-[50%] flex items-center justify-center'> {datashop.length}</span>
          </div>
        </div>

        <div className="md:hidden flex items-center space-x-5 text-gray-700 text-[25px]">
          <MdOutlineShoppingBag onClick={()=>setShopinstat((!shopinstat))} />
          <Link to="/Acount"><FaRegCircleUser className="text-[25px] text-gray-500 mr-4" /></Link>
          <div onClick={toggleMenu}>
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </div>
        </div>
      </div>
      {
  shopinstat && (
    <div className='w-[20rem] max-h-[25rem] bg-white fixed right-5 top-15 shadow-lg p-2 flex flex-col gap-5'>
      {datashop.length === 0 ? (
        <p className="text-center text-gray-500 mt-10 mb-10">Your shopping cart is empty!</p>
      ) : (
        <>
          <div className='w-full h-[70%] overflow-y-scroll'>
            {datashop.map((e, index) => (
              <div key={index} className='w-full h-[45%] mb-8 flex gap-3'>
                <div className='h-full w-[35%]'>
                  <img src={Images[e[0].image]} alt="" className='w-full' />
                </div>
                <div className='w-[60%]'>
                  <p className='text-black/70'>{e[0].name}</p>
                  <p className='text-black/45'>{cont} x ${e[0].price}</p>
                  <button
                    onClick={() => supprodcart(e[0].id)}
                    className= "text-red-500 hover:underline cursor-pointer b "
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className='text-end'>Subtotal: ${prixtot}</p>
          <div className='flex justify-between'>
            <button
              onClick={() => {
                navig("/Carts");
                setShopinstat(false);
              }}
              className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-700 cursor-pointer mt-4 sm:mt-0"
            >
              View Cart
            </button>
            <button
              onClick={() => {
                navig("/chekout");
                setShopinstat(false);
              }}
              className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-700 cursor-pointer mt-4 sm:mt-0"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}

      {menuOpen && (
        <div className="md:hidden fixed top-[10vh] left-0 w-full bg-white shadow-md z-40">
          <ul className="flex flex-col items-center gap-5 py-6 text-gray-700 text-base font-medium">
            <Link to="/" onClick={toggleMenu}><li>Home</li></Link>
            <Link to="/shop" onClick={toggleMenu}><li>Shop</li></Link>
            <Link to="/sale" onClick={toggleMenu}><li>Sale</li></Link>
            <Link to="/Features" onClick={toggleMenu}><li>Features</li></Link>
            <Link to="/blog" onClick={toggleMenu}><li>Blog</li></Link>
            <Link to="/About" onClick={toggleMenu}><li>About</li></Link>
            <Link to="/Contact" onClick={toggleMenu}><li>Contact</li></Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
