"use client";

import type { SafeOrder, ProductType, SafeUser } from "@/app/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import ProductHead from "./ProductHead";
import Link from "next/link";
import ProductOrder from "./ProductOrder";
import Heading from "../Heading";
import Button from "../Button";

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
    <div onClick={() => router.push(`/happysets/${data.id}`)} className="py-4">
      <div className='flex flex-col items-center justify-between'>
        <Image
          src={data.imageSrc}
          width={302}
          height={302}
          alt={data.name}
          className="py-4 w-[302px] h-[302px]"
        />
        <Heading title={data.name} subtitle={data.description} center />
        <div className='w-full flex justify-between py-4'>
          <div>{data.price}</div>
          <div>
            <Button label='Buy Now' className='uppercase py-4' color="#E4EEE3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
