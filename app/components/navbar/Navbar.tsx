"use client";

import { FiShoppingCart } from "react-icons/fi";
import { SlMagnifier } from "react-icons/sl";

import Image from "next/image";
import logo from "../../../public/images/logo.png";

import { Spin as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import Link from "next/link";
import Button from "../Button";
import NavInput from "../inputs/NavInput";
import { SafeUser } from "@/app/types";
import UserMenu from "./UserMenu";
import { useRouter } from "next/navigation";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const Menu = () => {
    return (
      <>
        <ul
          className={`fixed z-30   ${
            isOpen
              ? "w-[50vw] h-[100vh] flex bg-[#e4eee3ba] backdrop-blur-sm rounded-md flex-col right-0 items-center animate-slideIn"
              : "absolute w-[50vw] h-[100vh] flex bg-[#e4eee3ba] backdrop-blur-lg rounded-md flex-col right-[-100%] items-center animate-slideOut lg:w-[40%] lg:h-[14vh] lg:flex-row lg:uppercase  lg:right-[50%] lg:-top-10 lg:translate-x-[50%] lg:bg-transparent"
          }`}>
          <div className={`${isOpen ? 'py-24' : 'py-24'} lg:hidden`}>
            {currentUser ? (
              <UserMenu currentUser={currentUser} />
            ) : (
              <div>
                <Button
                  className={`font-normal px-8 py-2 text-sm hover:bg-[#C5D8DF] transition lg:hidden`}
                  color='#E4EEE3'
                  label='Sign In'
                  link='/sign-in'
                  onClick={() => setIsOpen(false)}
                />
                <Button
                  className='font-normal px-8 py-2 text-sm hover:bg-[#C5D8DF] transition lg:hidden '
                  color='#E4EEE3'
                  label='Sign Up'
                  link='/sign-up'
                  onClick={() => setIsOpen(false)}
                />
              </div>
            )}
          </div>

          <Link
            className={`h-[10%] w-full text-center leading-[10vh] uppercase max-lg:hover:bg-[#C5D8DF] transition hover:drop-shadow-md lg:text-white ${
              isOpen ? "" : ""
            } `}
            href='/'
            onClick={() => setIsOpen(false)}>
            Bestsellers
          </Link>
          <Link
            className={`h-[10%] w-full text-center leading-[10vh] uppercase lg:text-white transition max-lg:hover:bg-[#C5D8DF] hover:drop-shadow-md ${
              isOpen ? "" : ""
            } `}
            href='/'
            onClick={() => setIsOpen(false)}>
            New
          </Link>
          <Link
            className={`h-[10%] w-full text-center leading-[10vh] uppercase lg:text-white transition max-lg:hover:bg-[#C5D8DF] hover:drop-shadow-md ${
              isOpen ? "" : ""
            } `}
            href='/happysets'
            onClick={() => setIsOpen(false)}>
            Happysets
          </Link>
          <Link
            className={`h-[10%] w-full text-center leading-[10vh] uppercase lg:text-white transition max-lg:hover:bg-[#C5D8DF] hover:drop-shadow-md ${
              isOpen ? "" : ""
            } `}
            href='/'
            onClick={() => setIsOpen(false)}>
            Sales
          </Link>
        </ul>
      </>
    );
  };

  const handleToggle = () => {
    return isOpen ? Menu : null;
  };

  const router = useRouter()

  return (
    <div className='w-full bg-background h-[14vh] px-4'>
      <nav className='max-w-[1440px] m-auto h-full flex justify-between relative '>
          <Image
            src={logo}
            alt='Logo'
            fill
            sizes="(max-width: 1023px) 40%, 25%"
            className="object-contain max-w-[40%] lg:max-w-[25%]"
            onClick={() => router.push('/')}
            priority
          />
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
        <div className='hidden lg:flex flex-col absolute right-0'>
          {currentUser ? (
            <UserMenu currentUser={currentUser} />
          ) : (
          <div className='flex gap-16 items-center mx-6 mt-2 text-white '>
            <p className='hover:underline cursor-pointer'>
              <Link href='/sign-in'>Sign in</Link>
            </p>
            <p className='hover:underline cursor-pointer'>
              <Link href='/sign-up'>Sign Up</Link>
            </p>
          </div>
          )}
        </div>
          <div className=' lg:flex justify-between gap-2 hidden absolute top-10 right-0 h-[40%]'>
            <NavInput type='text' icon={SlMagnifier} />
            <NavInput type='text' icon={FiShoppingCart} value='0.00' disabled />
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
