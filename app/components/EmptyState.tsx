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
    <div className="bg-background relative">
        {/* <Image
            src={background}
            alt="Background"
            className="absolute bottom-[0%] right-[50%] translate-x-[50%] w-[80%] max-h-[90vh] "
          /> */}
          <div className="absolute bg-white backdrop-blur-sm z-10">
            <Image src={shield} alt="Error" />
            <Heading title='404' className="text-[200px]" />
            <div>{title}</div>
          </div>
    </div>
  )
}

export default EmptyState