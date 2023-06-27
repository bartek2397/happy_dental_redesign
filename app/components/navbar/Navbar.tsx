"use client";

import { FiShoppingCart } from "react-icons/fi";
import { SlMagnifier } from "react-icons/sl";
import Input from "../inputs/Input";

import Image from "next/image";
import logo from "../../../images/logo.png";

import { Spin as Hamburger } from 'hamburger-react'
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <nav className='max-w-[1440px] m-auto h-[14%] flex justify-between '>
      <figure className='w-[50%] lg:w-[25%] relative'>
        <Image
          src={logo}
          alt='Logo'
          fill
          className="object-contain"
        />
      </figure>
      <div className="block lg:hidden mt-[54px]">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={36} color="#fff" />
      </div>
      <div className={` ${isOpen ? 'block bg-[#333] flex-col w-full h-full' : 'h-[54px] lg:flex mt-[54px] hidden'}`}>
        <ul className='flex flex-col lg:flex-row mx-8 justify-between gap-4 xl:gap-20 text-[#fff] uppercase text-sm'>
          <li>Bestsellery</li>
          <li>Nowości</li>
          <li>Happyset</li>
          <li>Promocje</li>
        </ul>
      </div>
      <div className='my-10 lg:flex justify-between gap-8 hidden'>
        <Input type='text' icon={SlMagnifier} />
        <Input type='text' icon={FiShoppingCart} value="0.00" disabled />
      </div>
    </nav>
  );
};

export default Navbar;
// 
// "use client";

// import { FiShoppingCart } from "react-icons/fi";
// import { SlMagnifier } from "react-icons/sl";
// import Input from "../inputs/Input";

// import Image from "next/image";
// import logo from "../../../images/logo.png";

// import { Spin as Hamburger } from 'hamburger-react'
// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false)
//   return (
//     <nav className='max-w-[1440px] m-auto flex justify-between '>
//       <figure className='w-[402px] mt-[26px] relative'>
//         <Image
//           src={logo}
//           alt='Logo'
//           fill
//           className="object-contain"
//         />
//       </figure>
//       <div className="hidden lg:block mt-[54px]">
//         <Hamburger toggled={isOpen} toggle={setIsOpen} size={36} color="#fff" />
//       </div>
//       <div className={` ${isOpen ? 'block bg-[#fff] flex-col w-full h-full' : 'h-[54px] flex justify-between mt-[54px] lg:hidden'}`}>
//         <ul className='flex lg:flex-col justify-between gap-8 ml-[54px] mr-[52px] text-[#fff] uppercase text-[20px] lg:text-[16px]'>
//           <li>Bestsellery</li>
//           <li>Nowości</li>
//           <li>Happyset</li>
//           <li>Promocje</li>
//         </ul>
//       <div className='flex justify-between gap-8 lg:hidden'>
//         <Input type='text' icon={SlMagnifier} />
//         <Input type='text' icon={FiShoppingCart} value="0.00" disabled />
//       </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// 