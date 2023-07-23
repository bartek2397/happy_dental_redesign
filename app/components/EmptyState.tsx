'use client'

import background from "../../public/images/unsplash_WFsNCIn8OF4.webp";
import shield from '../../public/images/fluent_shield-error-24-regular.png'
import Image from "next/image";

import Heading from "./Heading";

interface EmptyStateProps {
    title?: string;
    subtitle?: string;

}

const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle }) => {
  return (
    <div className="w-full h-[86vh] bg-background relative">
        <div className="max-w-[1440px] m-auto h-full relative px-4">
          <Image
            src={background}
            alt="Background"
            className="absolute bottom-[0%] right-[50%] translate-x-[50%] w-[80%] max-h-[90vh] "
          />
          <div className="absolute top-3 left-[50%] -translate-x-[50%] w-[1280px] h-[735px]  text-center bg-[#CECECE]/70 backdrop-blur-md drop-shadow-xl rounded-xl z-10 p-24">
            <div className="flex items-center justify-around text-[200px] font-heading font-semibold text-[#463C3C]">
              <Image src={shield} alt="Error" />
              <Heading title='404' center className="text-[200px]" />
            </div>
            <div className="text-center text-[64px] uppercase font-semibold font-heading text-white">{title}</div>
          </div>
        </div>
    </div>
  )
}

export default EmptyState