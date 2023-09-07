import getProductById from "@/app/actions/getProductById";
import EmptyState from "@/app/components/EmptyState";
import ProductClient from "./ProductClient";
import { ProductType } from "@/app/types";

interface IParams {
    productId: string;
}

const ProductPage = async ({ params }: { params: IParams }) => {

    const product = await getProductById(params)

    if (!product) {
        return (
            <EmptyState />
        )
    }
  return (
    <div>
        <ProductClient  />
    </div>
  )
}

export default ProductPage