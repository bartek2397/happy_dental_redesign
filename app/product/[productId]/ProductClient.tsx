"use client";

import Button from "@/app/components/Button";
import ProductHead from "@/app/components/products/ProductHead";
import ProductInfo from "@/app/components/products/ProductInfo";
import { ProductType, SafeUser } from "@/app/types";
import Image from "next/image";

import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'

interface ProductClientProps {
  product: ProductType;
  currentUser?: SafeUser | null;
}

const ProductClient: React.FC<ProductClientProps> = ({
  product,
  currentUser,
}) => {

  const productAvailability = product.available ? 'This product is available' : 'This product is not available';
  const availabilityIcon = product.available ? <BsCheckLg /> : <AiOutlineClose />
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
        <div className='w-[50%] relative'>
            <ProductHead title={product.name} />
            <ProductInfo code={product.code} weight={product.weight} available={productAvailability} icon={availabilityIcon} />
          <div className='flex gap-8 absolute bottom-10'>
            <label className="leading-[35.2px]" htmlFor="itemsNumber">Ilość:</label>
            <input className="w-[20%]" type='number' placeholder='0' id="itemsNumber" />
            <Button label='Add to Cart' className="bg-[#E4EEE3] p-2 text-[0.8rem]" />
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
