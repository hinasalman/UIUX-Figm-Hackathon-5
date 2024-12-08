import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
export default function Hero() {
  return (
    <div className='flex justify-center items-center py-10'>
      <div className='max-w-[1440px] flex gap-6 justify-center'>
     <div className='border-r-2 border-neutral-200 p-10 hidden md:block' >
     <ul className='space-y-4'>
  {[
    "Women's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoors",
    "Beauty & Makeup",
    "Kids' Fashion",
    "Travel & Lifestyle",
    "Baby's & toys",
    "Groceries & pets",
    "Sports & Outdoors"
  ].map((item, index) => (
    <li key={index}
      className='flex justify-between items-center text-slate-800 leading-loose hover:underline cursor-pointer hover:text-blue-500 transition-all duration-150'>
        <span>{item}</span>
  {index < 2 && <IoIosArrowForward className='text-lg ml-2'/>}
    </li>
  ))}
</ul>
 </div>

 {/*right side*/}
 <div className='flex items-center bg-black round-lg p-6 px-10'>
 <div className='text-white flex flex-col justify-center spece-y-5 sm:w[180px] md:w-[300px] lg:w-[300px]' >
<div className='flex items-center gap-2'>
<FaApple  className='sm:text-2xl md;text-4xl'/>
<span className='sm:text-sm md:text-base font-semibold'>
    {" "}
    iPhone 14 Series
</span>
</div> 
{/*Heading*/}
<h1 className='sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug'>
    Up to 10% 
</h1>
<h1 className='sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug'>off Voucher</h1>
<Link href={"#products"}
className='underline underline-offset-4 hover:font-semibold flex items-center gap-2'>
Shop Now
<FaArrowRight />
</Link>
 </div>
 {/*image*/}
 <div className='ml-auto'>
    <img src="../iphone.png" alt="iphone" />

 </div>
 

 </div>
  </div>
 </div>
  )

}
