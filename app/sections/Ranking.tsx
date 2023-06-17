"use client";

import Heading from "@/app/components/Heading";
import Card from "../components/Card";

import Image from "next/image";

import toothbrushes from '../../images/Toothbrushes.png'
import woman from '../../images/Woman.png'

const Ranking = () => {
  return (
    <section className='w-full max-w-[1332px] m-auto'>
      <div className='font-semibold text-[40px] uppercase py-12'>
        <Heading title='Ranking' center />
      </div>
      <div className="flex justify-between">
        <Card width={628} height={872} color="#C5D8DF">
          <Image src={toothbrushes} alt="Toothbrushes" width={410} height={550} />
          <div className="w-[410px] font-sans text-[32px] uppercase py-8 px-24 text-center">
            <Heading title="Szczoteczek sonicznych" center />
          </div>
        </Card>
        <Card width={628} height={872} color="#C5D8DF">
          <Image src={woman} alt="Woman" width={410} height={550} />
          <div className="w-[410px] font-sans text-[32px] uppercase py-8 px-24 text-center">
            <Heading title="Irygatorów do zębów" center />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Ranking;
