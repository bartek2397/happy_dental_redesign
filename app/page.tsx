"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import logo from "../images/logo.png";
import background from "../images/unsplash_WFsNCIn8OF4.webp";

import Heading from "@/components/Heading";
import Button from "@/components/Button";

import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import Categories from "./Categories";

export default function Home() {
  return (
    <>
      <section className='bg-background w-full h-screen'>
        <div className='max-w-[1440px] m-auto flex'>
          <Navbar />
        </div>
        <div className='max-w-[1440px] h-[calc(100vh-131px)] m-auto relative'>
          <div className='absolute bottom-0'>
            <Image src={background} alt='Background' width={1440} />
            <div className='absolute top-[10%] left-[8%] tracking-wider text-[96px] font-heading font-bold text-white uppercase'>
              <Heading title='Healthy' />
            </div>
            <div className='absolute top-[10%] right-[12%] tracking-wider text-[96px] font-heading font-bold text-white uppercase'>
              <Heading title='Clean' />
            </div>
            <div className='absolute top-[30%] w-[361px] left-0 text-white text-right uppercase font-sans font-light text-[40px]'>
              <Heading title='Your teeth will feel the difference' />
            </div>
            <div className='w-[244px] h-[122px] absolute bottom-20 right-0 bg-[#E4EEE3] text-center leading-[122px] font-heading font-semibold rounded-full'>
              <Button label='Buy Now' onClick={() => {}} />
            </div>
            <div className='flex w-[142px] justify-between absolute bottom-[10%]'>
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
          </div>
        </div>
      </section>
      <Categories />
    </>
  );
}
