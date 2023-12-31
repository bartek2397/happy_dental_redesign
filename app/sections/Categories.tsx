"use client";

import Heading from "@/app/components/Heading";
import categories from "../../constants";

const Categories = () => {
  return (
    <section className='w-full lg:px-8 '>
      <div className='font-semibold text-[40px] py-12 uppercase'>
        <Heading title='Categories' center />
      </div>
      <div className=''>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1440px] m-auto'>
          {categories.map((category) => (
            <div className="w-full" key={category.id}>
              <div className='h-[302px] bg-[#BBCBBE] m-0 relative'>
                <span className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                  {category.icon}
                </span>
              </div>
              <div className='mt-[16px] font-sans text-[#463C3C] text-[24px] px-12 uppercase'>
                <Heading title={category.title} center />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
