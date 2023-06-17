"use client";

import Heading from "@/components/Heading";
import categories from "../constants";

const Categories = () => {
  return (
    <section className='w-full h-[144px] '>
      <div className='font-semibold text-[40px] py-12'>
        <Heading title='Categories' center />
      </div>

      <div className='grid grid-cols-4 grid-rows-3 gap-6 max-w-[1280px] m-auto'>
        {categories.map((category) => (
          <div key={category.id}>
            <div
              className='w-[302px] h-[302px] bg-[#BBCBBE] m-0 relative'
            >
              <span className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                {category.icon}
              </span>
            </div>
            <div className="mt-[16px] font-sans text-[#463C3C] text-[24px] px-12 uppercase">
                <Heading title={category.title} center />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
