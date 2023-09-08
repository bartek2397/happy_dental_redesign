import { ProductType, SearchParamsTypes } from "@/app/types";

import Image from "next/image";
import ProductHead from "@/app/components/products/ProductHead";
import ProductInfo from "@/app/components/products/ProductInfo";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import AddtoCart from "./AddtoCart";

const ProductPage = async ({ searchParams }: SearchParamsTypes) => {
    const availabilityIcon = searchParams.available ? <BsCheckLg size={32} color="#38a84a" /> : <AiOutlineClose size={32} color="#bf0d0d" />
    return (
      <div className='max-w-[1280px] m-auto py-16 px-4'>
        <div className='flex flex-col items-center justify-between gap-4 md:flex-row basis-1/6'>
          <Image
            src={searchParams.imageSrc}
            alt='Image'
            priority
            width={302}
            height={302}
          />
          <div className='md:w-[50%] relative basis-6/12'>
              <ProductHead title={searchParams.name} />
              <ProductInfo code={searchParams.code} weight={searchParams.weight} available={availabilityIcon} price={searchParams.price} />
  
            <div className='flex gap-10 absolute '>
              <label className="leading-[35.2px]" htmlFor="itemsNumber">Quantity:</label>
              <input className="w-[20%]" type='number' placeholder='0' id="itemsNumber" />
              <AddtoCart {...searchParams}/>
            </div>
          </div>
        </div>
        <div className='pt-20 md:py-10 text-[1.2rem] text-center md:text-justify'>
          <p>{searchParams.description}</p>
        </div>
      </div>
    );
}

export default ProductPage