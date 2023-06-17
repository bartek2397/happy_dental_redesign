"use client";

import { FiShoppingCart } from "react-icons/fi";
import { SlMagnifier } from "react-icons/sl";
import Input from "../inputs/Input";

import Image from "next/image";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <div className="max-w-[1400px] m-auto flex justify-between ">
      <figure className='max-w-[402px] h-[105px] mt-[26px]'>
        <Image src={logo} alt='Logo' style={{ objectFit: 'cover' }} />
      </figure>
      <div className='h-[54px] flex mt-[54px]'>
        <ul className='flex justify-between w-[541px] ml-[54px] mr-[52px] text-[#fff] uppercase text-[20px]'>
          <li>Bestsellery</li>
          <li>Nowości</li>
          <li>Happyset</li>
          <li>Promocje</li>
        </ul>
      </div>
        <div className='h-[54px] mt-[54px] flex justify-between ml-[56px] w-[230px]'>
          <Input type='text' icon={SlMagnifier} />
          <div className='relative w-[107px] h-full border border-solid rounded-full'>
            <span className='absolute top-4 left-5 text-white text-lg'>
              0.00
            </span>
            <span className='absolute top-3 right-3'>
              <FiShoppingCart size={24} color='#fff' />
            </span>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
