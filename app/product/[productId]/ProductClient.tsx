'use client'

import { ProductType, SafeUser } from "@/app/types"
import axios from "axios"

interface ProductClientProps {
    productId: ProductType;
    currentUser?: SafeUser | null
}

const ProductClient: React.FC<ProductClientProps> = ({ productId, currentUser }) => {
  return (
    <div>ProductClient</div>
  )
}

export default ProductClient