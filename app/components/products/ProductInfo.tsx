"use client";

import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { IconType } from "react-icons";
import { ReactElement } from "react";

interface ProductInfoProps {
  code?: string;
  weight?: string;
  manufacturer?: string;
  available?: ReactElement | null;
  price: string;
  icon?: IconType;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  code,
  weight,
  manufacturer,
  available,
  price,
  icon: Icon,
}) => {
  return (
    <div>
      <ul className='flex flex-col text-[0.9rem] py-4 basis-4/12'>
        <li>{code ? "Product Code: " + code : null}</li>
        <li>{weight ? "Weight: " + weight : null}</li>
        <li className='pb-2'>
          {manufacturer ? "Manufacturer: " + manufacturer : null}
        </li>
        <hr />
        <li className='py-2 flex items-center justify-between'>
          <span className="basis-1/6">Availability:</span> <span className="basis-11/12">{available}</span>
        </li>
        <li className="text-[2rem] basis-1/12">{price} PLN</li>
      </ul>
    </div>
  );
};

export default ProductInfo;
