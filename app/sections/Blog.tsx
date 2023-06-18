"use client";

import Card from "../components/Card";
import Heading from "../components/Heading";

import Image from "next/image";

import smile from "../../images/smile.png";
import Button from "../components/Button";

const Blog = () => {
  return (
    <section className='w-full max-w-[1332px] m-auto'>
      <div className='font-semibold text-[40px] py-12 uppercase'>
        <Heading title='Visit our BlogPage' center />
      </div>
      <div className=''>
        <Card width={1280} height={693} color='#BBCBBE'>
          <div className='flex justify-between'>
            <div className=''>
              <Image src={smile} alt='Smile' />
            </div>
            <div className='flex flex-col justify-between'>
              <div className='font-sans text-[36px] w-[408px] h-[146px] uppercase'>
                <Heading
                  title='Wich products strenghten teeeth and which destroy them?'
                  center
                />
              </div>
              <div className="w-[244px] h-[122px] m-auto mt-[117px] bg-[#E4EEE3] rounded-[50px]">
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
