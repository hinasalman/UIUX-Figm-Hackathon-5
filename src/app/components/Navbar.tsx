import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <header className="bg-white shadow-sm border-b mx-auto flex flex-col"> {/* Corrected width class */}
      <div className="bg-black text-white py-2 text-sm flex justify-between items-center px-8 w-full"> {/* Fixed className spacing */}
        <div className="text-center flex-1">
          Summer sale for all swim suits and free express delivery - 50% OFF! {/* Corrected text */}
          <a href='a' className="underline hover:text-slate-300"> {/* Fixed hover class */}
            {" "} Shop Now {" "} {/* Improved readability */}
          </a>
        </div>
        <div className="flex items-center gap-2px"> {/* Simplified gap class */}
          <div className="text-white text-sm font-normal leading-[21px"> {/* Fixed font class */}
            English</div>
          <RiArrowDropDownLine className='text-white text-3xl ' />
       </div>
      </div>
      {/* Main Nvigation */}
       <div className='flex justify-between items-center px-16 py-4'>
        <h1 className='text-2xl font-bold text-black px-20'>Exclusive</h1>

        <nav className='hidden md:flex space-x-8 items-center' >
            <a href='#' className='text-slate-600 hover:text-black underline'>Home</a>
            <a href='#' className='text-slate-600 hover:text-black '>Contact</a>
            <a href='#' className='text-slate-600 hover:text-black '>About</a>
            <a href='#' className='text-slate-600 hover:text-black '>Signup</a>
             </nav>
             {/*Search Icons*/}
             <div className='flex items-center space-x-6'>
              <div className='hidden lg:flex items-center bg-slate-100 round-md px-3 py-2'>
                <input type='text' 
                placeholder='what are you looking for?'
                className='bg-slate-100 outline-none text-sm'
                />
              <CiSearch />
               </div>
               <CiHeart />
               <FaShoppingCart />
             </div>
    


       </div>

    </header>
  );
};

export default Navbar;
