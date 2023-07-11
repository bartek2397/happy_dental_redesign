import Link from "next/link";

import { Breadcrumbs, Stack, Typography } from "@mui/material";
import Heading from "../components/Heading";
import HappyClient from "./HappyClient";
import getProducts from "../actions/getProducts";
import ProductCard from "../components/products/ProductCard";

const Happysets = async () => {

  const products = await getProducts()

  
    return (
      <main className='max-w-full h-screen px-4'>
        <HappyClient>
        {products.map((product) => (
              <ProductCard key={product.id} id={product.id} name={product.name} description={product.description} imageSrc={product.imageSrc} price={product.price} />
            ))}
        </HappyClient>
      </main>
  )
};

export default Happysets;
