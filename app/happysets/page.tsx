import Link from "next/link";

import { Breadcrumbs, Stack, Typography } from "@mui/material";
import Heading from "../components/Heading";
import HappyClient from "./HappyClient";
import getProducts from "../actions/getProducts";
import ProductCard from "../components/products/ProductCard";
import getCurrentUser from "../actions/getCurrentUser";

const Happysets = async () => {

  const products = await getProducts()
  const currentUser = await getCurrentUser()
  
    return (
      <main className='max-w-full px-4'>
        <HappyClient>
          {products.map((product) => (
                <ProductCard key={product.id} currentUser={currentUser} data={product} />
              ))}
        </HappyClient>
      </main>
  )
};

export default Happysets;
