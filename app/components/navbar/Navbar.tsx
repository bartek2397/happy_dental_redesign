"use client";

import { FiShoppingCart } from "react-icons/fi";
import { SlMagnifier } from "react-icons/sl";
import Input from "../inputs/Input";

import Image from "next/image";
import logo from "../../../images/logo.png";

import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import Link from "next/link";
import Button from "../Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const Menu = () => {
    return (
      <>
        <ul
          className={`fixed z-30   ${
            isOpen
              ? "w-[50vw] h-[100vh] flex backdrop-blur-lg rounded-md flex-col right-0 items-center animate-slideIn"
              : "absolute w-[50vw] h-[100vh] flex backdrop-blur-lg rounded-md flex-col right-[-100%] overflow-hidden items-center animate-slideOut lg:w-[40%] lg:h-[14vh] lg:flex-row lg:uppercase  lg:right-[50%] lg:-top-10 lg:translate-x-[50%] lg:bg-transparent"
          }`}
        >
        <div className={`${isOpen ? 'flex gap-4 pt-24' : 'flex gap-4 pt-24 animate-slideOut'}  `}>
          <Button
            className='font-normal px-8 py-2 text-sm'
            color='#E4EEE3'
            label='Sign In'
          />
          <Button
            className='font-normal px-8 py-2 text-sm'
            color='#E4EEE3'
            label='Sign Up'
          />
        </div>
          <Link
            className={`h-[10%] w-[75%] text-center text-white leading-[10vh]  ${
              isOpen ? "" : ""
            } `}
            href='/'
            onClick={() => setIsOpen(false)}
          >
            Bestsellers
          </Link>
          <Link
            className={`h-[10%] w-[75%] text-center leading-[10vh]   lg:text-white ${
              isOpen ? "" : ""
            } `}
            href='/'
            onClick={() => setIsOpen(false)}
          >
            New
          </Link>
          <Link
            className={`h-[10%] w-[75%] text-center leading-[10vh]  lg:text-white ${
              isOpen ? "" : ""
            } `}
            href='/happysets'
            onClick={() => setIsOpen(false)}
          >
            Happysets
          </Link>
          <Link
            className={`h-[10%] w-[75%] text-center leading-[10vh] lg:text-white ${
              isOpen ? "" : ""
            } `}
            href='/'
            onClick={() => setIsOpen(false)}
          >
            Sales
          </Link>
        </ul>
      </>
    );
  };

  const handleToggle = () => {
    return isOpen ? Menu : null;
  };

  return (
    <div className='w-full bg-background h-[14vh] '>
      <nav className='max-w-[1440px] m-auto h-full flex justify-between relative '>
        <Link href='/'>
          <Image
            src={logo}
            alt='Logo'
            fill
            className='object-contain max-w-[40%] lg:max-w-[25%]'
          />
        </Link>
        <div className='block lg:hidden fixed right-5 top-[4%] z-50'>
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            onToggle={handleToggle}
            size={36}
            color={`${isOpen ? "#000" : "#fff"}`}
            rounded
          />
        </div>
        <Menu />
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
