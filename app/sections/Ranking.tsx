"use client";

import Heading from "@/app/components/Heading";
import Card from "../components/Card";

import Image from "next/image";

import toothbrushes from '../../images/Toothbrushes.png'
import woman from '../../images/Woman.png'

const Ranking = () => {
  return (
    <section className='max-w-[1440px] m-auto'>
      <div className='font-semibold text-[40px] uppercase py-12'>
        <Heading title='Ranking' center />
      </div>
      <div className="w-full flex flex-wrap justify-center gap-12">
        <div className="">
          <Card className="w-full text-center bg-[#C5D8DF]">
            <Image src={toothbrushes} alt="Toothbrushes" className="p-8 lg:p-0" />
            <div className="w-[410px] font-sans text-[24px] lg:text-[32px] uppercase pb-4 lg:py-8 px-24  text-center">
              <Heading title="Szczoteczek sonicznych" center />
            </div>
          </Card>
        </div>
        <div className="">
          <Card className="w-full bg-[#C5D8DF]">
            <Image src={woman} alt="Woman" width={410} height={550} className="p-8 lg:p-0" />
            <div className="w-[410px] font-sans text-[24px] lg:text-[32px] uppercase pb-4 lg:py-8 px-24  text-center">
              <Heading title="Irygatorów do zębów" center />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Ranking;
