"use client";

import Button from "@/app/components/Button";
import ProductHead from "@/app/components/products/ProductHead";
import ProductInfo from "@/app/components/products/ProductInfo";
import { ProductType, SafeUser } from "@/app/types";
import Image from "next/image";

interface ProductClientProps {
  product: ProductType;
  currentUser?: SafeUser | null;
}

const ProductClient: React.FC<ProductClientProps> = ({
  product,
  currentUser,
}) => {
  return (
    <div className='max-w-[1280px] m-auto py-16 px-4'>
      <div className='flex justify-around'>
        <Image
          src={product.imageSrc}
          alt='Image'
          priority
          width={302}
          height={302}
        />
        <div className='flex flex-col w-[40%]'>
          <ProductHead title={product.name} />
          <ProductInfo code={product.code} weight={product.weight} />
          <div className='justify-end'>
            <input type='number' placeholder='0' />
            <Button label='Add to Cart' />
          </div>
        </div>
      </div>
      <div className='py-10 text-[1.2rem]'>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductClient;
