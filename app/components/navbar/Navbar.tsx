"use client";

import { FiShoppingCart } from "react-icons/fi";
import { SlMagnifier } from "react-icons/sl";
import Input from "../inputs/Input";

import Image from "next/image";
import logo from "../../../images/logo.png";

import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuOpen = (
      <div className='w-[100vw] h-screen bg-[#C5D8DF]'>
        <ul className="flex flex-col">
          <li>
            <Link href='/'>Bestsellers</Link>
          </li>
        </ul>
      </div>
  );

  const toggleHandler = () => {
    return isOpen ? menuOpen : null;
  };
  return (
    <div className='w-full bg-background h-[14vh]'>
      <nav className='max-w-[1440px] m-auto h-full flex justify-between relative '>
        <Image
          src={logo}
          alt='Logo'
          fill
          className='object-contain max-w-[50%] lg:max-w-[25%]'
        />
        <div className='block lg:hidden mt-[54px] fixed right-0 -top-10 z-50'>
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            onToggle={toggleHandler}
            size={36}
            color={`${isOpen ? "#000" : "#fff"}`}
            rounded
          />
        </div>
        <ul
          className={`w-[100%] h-[100vh] fixed z-30 ${
            isOpen
              ? "flex bg-[#C5D8DF] rounded-md flex-col right-0 justify-between py-8  items-center"
              : "hidden lg:left-[50%] lg:-translate-x-[50%] lg:top-10 lg:flex -right-50 lg:flex-row  justify-between gap-4 xl:gap-20 text-[#fff] uppercase text-sm"
          }`}>
          <Link className="h-[25%] w-[75%] text-center leading-[220px] border-t border-solid border-1px border-black" href='/'>Bestsellers</Link>
          <Link className="h-[25%] w-full text-center leading-[220px] border-t border-solid border-1px border-black" href='/'>New</Link>
          <Link className="h-[25%] w-full text-center leading-[220px] border-t border-solid border-1px border-black" href='/happysets'>Happysets</Link>
          <Link className="h-[25%] w-full text-center leading-[220px] border-y border-solid border-1px border-black" href='/'>Sales</Link>
        </ul>
        <div className='my-10 lg:flex justify-between gap-8 hidden absolute right-0 h-[40%]'>
          <Input type='text' icon={SlMagnifier} />
          <Input type='text' icon={FiShoppingCart} value='0.00' disabled />
        </div>
      </nav>
    </div>
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
//           <Link>Bestsellery</Link>
//           <Link>Nowości</Link>
//           <Link>Happyset</Link>
//           <Link>Promocje</Link>
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
