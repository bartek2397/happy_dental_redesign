'use client'

import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { IconType } from 'react-icons'

interface ProductInfoProps {
    code?: string;
    weight?: string;
    manufacturer?: string;
    available?: string;
    icon?: IconType;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ code, weight, manufacturer, available, icon: Icon }) => {
  return (
    <div>
        <ul className="flex flex-col text-[0.9rem] py-4">
            <li>{code ? 'Product Code: ' + code : null}</li>
            <li>{weight ? 'Weight: ' + weight : null}</li>
            <li className="pb-2">{manufacturer ? 'Manufacturer: ' + manufacturer : null}</li>
            <hr />
            <li className="py-2">Availability: {Icon && (<Icon size={16} />)} {available}</li>
        </ul>
    </div>
  )
}

export default ProductInfo