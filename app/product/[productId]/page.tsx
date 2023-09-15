import { ProductType } from "@/app/types";

import Image from "next/image";
import ProductHead from "@/app/components/products/ProductHead";
import ProductInfo from "@/app/components/products/ProductInfo";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import getProductById from "@/app/actions/getProductById";
import EmptyState from "@/app/components/EmptyState";
import Button from "@/app/components/Button";
import ProductClient from "./ProductClient";
import ClientOnly from "@/app/components/ClientOnly";

interface IParams {
  productId: string;
}

const ProductPage = async ({ params }: { params: IParams }) => {

    const product = await getProductById(params)

    if (!product) {
        return (
            <ClientOnly>
              <EmptyState />
            </ClientOnly>
        )
    }

    return (
      <ProductClient product={product} />
    )
};



export default ProductPage