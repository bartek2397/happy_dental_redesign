'use client'

import { FiShoppingCart } from 'react-icons/fi'
import { SlMagnifier } from 'react-icons/sl'
import Input from '../inputs/Input';

const Navbar = () => {
  return (
    <div className='w-[826px] h-[54px] flex mt-[54px] ml-[54px]'>
      <ul className='flex justify-between w-[541px] text-[#fff] uppercase text-[20px]'>
        <li>Bestsellery</li>
        <li>Nowości</li>
        <li>Happyset</li>
        <li>Promocje</li>
      </ul>
      <div className='flex justify-between ml-[56px] w-[230px]'>
        <Input type='text' icon={SlMagnifier} />
        <span className='block w-[107px] h-full border border-solid rounded-full'></span>
      </div>
    </div>
  );
};

export default Navbar;
