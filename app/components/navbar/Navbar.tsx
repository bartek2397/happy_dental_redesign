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
      <figure className='w-[402px] h-full mt-[26px] relative'>
        <Image
          src={logo}
          alt='Logo'
          fill
          className="object-contain"
        />
      </figure>
      <div className="hidden lg:block mt-[54px]">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={36} color="#fff" />
      </div>
      <div className={`h-[54px] flex mt-[54px] lg:hidden ${isOpen ? 'block bg-[#fff] flex-col w-full h-full' : ''}`}>
        <ul className='flex lg:flex-col justify-between w-[541px] ml-[54px] mr-[52px] text-[#fff] uppercase text-[20px] lg:text-[16px]'>
          <li>Bestsellery</li>
          <li>Nowości</li>
          <li>Happyset</li>
          <li>Promocje</li>
        </ul>
      </div>
      <div className='h-[54px] mt-[54px] flex justify-between ml-[56px] w-[17%] lg:hidden'>
        <Input type='text' icon={SlMagnifier} />
        <div className='relative w-[107px] h-full border border-solid rounded-full'>
          <span className='absolute top-4 left-5 text-white text-lg'>0.00</span>
          <span className='absolute top-3 right-3'>
            <FiShoppingCart size={24} color='#fff' />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
