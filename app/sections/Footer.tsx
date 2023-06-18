"use client";

import Link from "next/link";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import logo from "../../images/logo.png";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className='w-full h-[367px] bg-[#909B93]'>
      <div className='max-w-[1332px] m-auto py-8 flex justify-between'>
        <div className="w-[30%]">
          <Image src={logo} alt='Logo' />
        </div>
        <ul className='flex justify-between items-center w-[50%] uppercase text-[32px] text-white'>
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
