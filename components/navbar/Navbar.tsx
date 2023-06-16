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
        <div className='relative w-[107px] h-full border border-solid rounded-full'>
          <span className='absolute top-4 left-5 text-white text-lg'>0.00</span>
          <span className='absolute top-3 right-3'><FiShoppingCart size={24} color='#fff' /></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
