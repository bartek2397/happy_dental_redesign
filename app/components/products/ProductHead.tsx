'use client'

import React from 'react'
import Heading from '../Heading'

interface ProductHeadProps {
    title: string;
    subtitle?: string;
}

const ProductHead: React.FC<ProductHeadProps> = ({ title, subtitle }) => {
  return (
    <div className='text-[1.4rem]'>
        <Heading title={title} subtitle={subtitle} />
    </div>
  )
}

export default ProductHead
