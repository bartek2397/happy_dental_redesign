"use client";

import Heading from "@/app/components/Heading";
import Card from "../components/Card";

import Image from "next/image";

import toothbrushes from '../../public/images/Toothbrushes.png'
import woman from '../../public/images/Woman.png'

const Ranking = () => {
  return (
    <section className='max-w-[1440px] m-auto'>
      <div className='font-semibold text-[40px] uppercase py-12'>
        <Heading title='Ranking' center />
      </div>
      <div className="flex flex-wrap px-12 justify-center gap-12">
          <Card className=" flex flex-col items-center bg-[#C5D8DF] "> 
            <Image src={toothbrushes} alt="Toothbrushes" className="flex" />
            <div className="font-sans text-md pt-4">
              <Heading title="Szczoteczek sonicznych" center />
            </div>
          </Card>
          <Card className="flex flex-col items-center bg-[#C5D8DF] p-8">
            <Image src={woman} alt="Woman" />
            <div className="font-sans text-md pt-4">
              <Heading title="Irygatorów do zębów" center />
            </div>
          </Card>
      </div>
    </section>
  );
};

export default Ranking;
