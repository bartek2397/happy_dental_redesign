"use client";

import Link from "next/link";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import logo from "../../public/images/logo.png";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className='w-full h-[367px] bg-[#909B93]'>
      <div className='max-w-[1332px] py-8 mx-auto flex flex-col justify-between relative'>
        <div className="absolute top-0 left-[50%] lg:left-0 -translate-x-[50%] lg:-translate-x-0 pt-6 sm:pt-2">
          <Image src={logo} alt='Logo' className="object-contain" priority />
        </div>
        <ul className='flex flex-col lg:flex-row lg:w-[50%] justify-between lg:absolute lg:right-0 gap-12 pt-20 lg:pt-0 items-center w-full uppercase text-xl text-white'>
          <li>About us</li>
          <li>Contact</li>
          <li>
            <div className='flex w-[142px] justify-between'>
              <span>
                <Link href='/'>
                  <BsFacebook size={32} color='#fff' />
                </Link>
              </span>
              <span>
                <Link href='/'>
                  <BsInstagram size={32} color='#fff' />
                </Link>
              </span>
              <span>
                <Link href='/'>
                  <BsYoutube size={32} color='#fff' />
                </Link>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
