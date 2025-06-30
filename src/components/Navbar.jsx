import React from 'react';
import Images from '../constants/Images';
import { Link } from 'react-router-dom';
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";



const Navbar = () => {
    return (
        <div className='relative top-0 left-0 bg-white'>
            <div className='flex items-center justify-between py-3 px-15 fixed w-full  top-0 left-0 bg-white'>
            <img src={Images.Logo} alt="" />
             <ul className=" py-2 flex gap-x-10 text-gray-500">
        <Link to={{ pathname: '/' }} >
          <li>Home</li>
        </Link>
        <Link to={{ pathname: '/shop' }} >
          <li>Shop</li>
        </Link>
        <Link to={{ pathname: '/sale' }} >
          <li>Sale</li>
        </Link>
        <Link to={{ pathname: '/Features' }} >
          <li>Features</li>
        </Link>
        <Link to={{ pathname: '/blog' }} >
          <li>Blog</li>
        </Link>
        <Link to={{ pathname: '/About' }} >
          <li>About</li>
        </Link>
        <Link to={{ pathname: '/Contact' }} >
          <li>Contact</li>
        </Link>
      </ul>
            <div className='flex  '>
            <div className='text-[30px] text-gray-400 pr-[20px] '><FaRegCircleUser /></div>
            <div className='text-[30px] text-gray-400 border-l-2 border-gray-200 pl-[20px]'><MdOutlineShoppingBag /></div>
            </div>
        </div>
        </div>
    );
};

export default Navbar;