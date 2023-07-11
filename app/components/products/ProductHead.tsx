'use client'

import React from 'react'
import Heading from '../Heading'

interface ProductHeadProps {
    title: string;
    subtitle?: string;
}

const ProductHead: React.FC<ProductHeadProps> = ({ title, subtitle }) => {
  return (
    <div className='w-[calc(100%/3)]'>
        <Heading title={title} subtitle={subtitle} />
    </div>
  )
}

export default ProductHead
