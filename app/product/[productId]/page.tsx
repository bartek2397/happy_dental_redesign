import { ProductType } from "@/app/types";

import Image from "next/image";
import ProductHead from "@/app/components/products/ProductHead";
import ProductInfo from "@/app/components/products/ProductInfo";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import getProductById from "@/app/actions/getProductById";
import EmptyState from "@/app/components/EmptyState";
import Button from "@/app/components/Button";

const ProductPage = async ({ params }: { params: IParams }) => {

    const product = await getProductById(params)

    if (!product) {
        return (
            <EmptyState />
        )
    }

    const availabilityIcon = product.available ? <BsCheckLg size={32} color="#38a84a" /> : <AiOutlineClose size={32} color="#bf0d0d" />
  return (
    <div className='max-w-[1280px] m-auto py-16 px-4'>
      <div className='flex flex-col items-center justify-between gap-4 md:flex-row basis-1/6'>
        <Image
          src={product.imageSrc}
          alt='Image'
          priority
          width={302}
          height={302}
        />
        <div className='md:w-[50%] relative basis-6/12'>
            <ProductHead title={product.name} />
            <ProductInfo code={product.code} weight={product.weight} available={availabilityIcon} price={product.price} />

          <div className='flex gap-10 absolute '>
            <label className="leading-[35.2px]" htmlFor="itemsNumber">Quantity:</label>
            <input className="w-[20%]" type='number' placeholder='0' id="itemsNumber" />
            <Button label='Add to Cart' className="bg-[#E4EEE3] p-2 text-[0.8rem]" />
          </div>
        </div>
      </div>
      <div className='pt-20 md:py-10 text-[1.2rem] text-center md:text-justify'>
        <p>{product.description}</p>
      </div>
    </div>
  );
};



export default ProductPage