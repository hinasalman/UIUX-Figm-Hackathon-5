import React from 'react'
import { FaMobileAlt } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
export default function category() {
  return (
    <div className='w-full flex justify-center items-center mt-10 md-1'>
        <div className='sm:w-full md:w-[80%] pb-10'>
            <div className='flex flex-col sm:pl[6%] md:pl-0'>
                <h3 className='text-red-500 font-bold border-1-8 border-red-500 pl-3 ml-1'> Categories</h3>
                <div className='flex'>
                    <h1 className='text-slate-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4'>
                  {" "}
                  Browse By Category
                    </h1>
                </div>
            </div>
            {/*Categories*/}
            <div className='flex sm:flex-col md:flex-row sm:justify-center md:justify-between mt-5 sm:flex-wrap lg:flex-nowrap gap-5 sm:gap-8' >
         {/*Box 1*/}
         <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center curser-pointer relative'>
         <FaMobileAlt className='text-8xl font-bold'/>
            <p className='font-norml'>phones</p>
         </div>
          {/*Box 2*/}
          <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center curser-pointer relative'>
         <HiOutlineDesktopComputer className='text-8xl font-bold'/>
            <p className='font-norml'>Computer</p>
         </div>
         {/*Box 3*/}
         <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center curser-pointer relative'>
            <BsSmartwatch className='text-8xl font-bold'/>
            <p className='font-norml'>Smartwatch</p>
         </div>
         {/*Box 4*/}
         <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center curser-pointer relative'>
            <FaCamera className='text-8xl font-bold'/>
            <p className='font-norml'>Camera</p>
         </div>
         {/*box 5*/}
         <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center curser-pointer relative'>
            <FaHeadphones className='text-8xl font-bold'/>
            <p className='font-norml'>Headphone</p>
         </div>
          {/*box 6*/}
          <div className='group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center curser-pointer relative'>
            <IoGameController className='text-8xl font-bold'/>
            <p className='font-norml'>Gaming</p>
         </div>
        </div>
        </div>
    </div>
  )
}
