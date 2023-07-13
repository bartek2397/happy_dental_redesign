"use client";

import type { SafeOrder, ProductType, SafeUser } from "@/app/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Heading from "../Heading";
import Button from "../Button";
import Loader from "../Loader";

interface ProductCardProps {
  data: ProductType;
  order?: SafeOrder;
  currentUser?: SafeUser | null;
}

const ProductCard: React.FC<ProductCardProps> = async ({
  data,
  order,
  currentUser,
}) => {
  const router = useRouter();

  return (
    <div className='max-w-[1440px] m-auto py-4'>
      <div className='flex flex-col md:flex-row items-center justify-between px-4'>
        <Image
          src={data.imageSrc}
          width={302}
          height={302}
          alt={data.name}
          className=''
          priority
        />
        <div className='font-semibold text-lg px-8 overflow-hidden'>
          <Heading title={data.name} subtitle={data.description} />
        </div>
        <div className='w-full flex gap-4 justify-end items-center self-end py-4'>
          <div className='font-heading text-[#909B93]'>{data.price} zł</div>
          <div>
            <Button
              label='Buy Now'
              className='uppercase p-4 drop-shadow-sm'
              color='#E4EEE3'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
