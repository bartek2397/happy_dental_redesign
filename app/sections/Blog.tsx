"use client";

import Card from "../components/Card";
import Heading from "../components/Heading";

import Image from "next/image";

import smile from "../../images/smile.png";
import Button from "../components/Button";

const Blog = () => {
  return (
    <section className='max-w-[1440px] m-auto pb-20'>
      <div className='font-semibold text-[40px] py-12 uppercase'>
        <Heading title='Visit our BlogPage' center />
      </div>
      <div className='px-12'>
        <Card color='#BBCBBE' className="p-8">
          <div className='flex flex-col items-center lg:flex-row justify-between gap-12'>
              <Image src={smile} alt='Smile' className="" />
            <div className='flex flex-col justify-center gap-12'>
              <div className='font-sans text-xl w-full text-center uppercase'>
                <Heading
                  title='Wich products strenghten teeth and which destroy them?'
                  center
                />
              </div>
              <div className=" m-auto bg-[#E4EEE3] rounded-[50px]">
                <Button label='Read More' />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Blog;
