'use client'

import ProductHead from "@/app/components/products/ProductHead";
import { ProductType, SafeUser } from "@/app/types"
import Image from "next/image"

interface ProductClientProps {
    product: ProductType;
    currentUser?: SafeUser | null
}

const ProductClient: React.FC<ProductClientProps> = ({ product, currentUser }) => {
  return (
    <div className="max-w-[1280px] m-auto py-16 px-4">
      <div className="flex justify-between">
        <Image src={product.imageSrc} alt="Image" priority width={302} height={302}/>
        <ProductHead title={product.name} />
      </div>
      <div className="py-10 text-[1.2rem]">
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductClient