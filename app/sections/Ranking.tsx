"use client";

import Heading from "@/app/components/Heading";
import Card from "../components/Card";

import Image from "next/image";

import toothbrushes from '../../images/Toothbrushes.png'
import woman from '../../images/Woman.png'

const Ranking = () => {
  return (
    <section className='max-w-[1440px] max-h-screen m-auto mb-16 lg:px-8'>
      <div className='font-semibold text-[40px] uppercase py-12'>
        <Heading title='Ranking' center />
      </div>
      <div className="w-full flex justify-between">
        <div className="">
          <Card color="#C5D8DF" className="pb-8">
            <Image src={toothbrushes} alt="Toothbrushes" width={410} height={550} className="" />
            <div className="w-[410px] lg:w-[279px] font-sans text-[32px] lg:text-[24px] uppercase pt-8 px-24 lg:px-8 text-center">
              <Heading title="Szczoteczek sonicznych" center />
            </div>
          </Card>
        </div>
        <div className="">
          <Card  color="#C5D8DF" className="pb-8">
            <Image src={woman} alt="Woman" width={410} height={550} />
            <div className="w-[410px] lg:w-[279px] font-sans text-[32px] lg:text-[24px] uppercase pt-8 px-24 lg:px-12 text-center">
              <Heading title="Irygatorów do zębów" center />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Ranking;
