'use client'

import { SafeOrder, ProductType } from '@/app/types'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import ProductHead from './ProductHead';
import Link from 'next/link';
import ProductOrder from './ProductOrder';


const ProductCard = async ({ id, name, description, imageSrc, price }: ProductType) => {


    const router = useRouter()
  return (
    <div>
        <Link href={{
            pathname: `/product/${id}`,
            query: { name, id, description },
        }}>
            <div className='flex justify-between'>
                <Image src={imageSrc} width={302} height={302} alt='Bamboo Toothbrush' />
                <ProductHead title='Bamboo Toothbrushes' subtitle='Bundle of three brushes, many colors to choose from' />
                <ProductOrder price={price} />
            </div>
        </Link>
    </div>
  )
}

export default ProductCard;