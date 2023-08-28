'use client'

import React from 'react'
import Heading from '../Heading'

interface ProductHeadProps {
    title: string;
    subtitle?: string;
}

const ProductHead: React.FC<ProductHeadProps> = ({ title, subtitle }) => {
  return (
    <div className='text-[1.4rem] w-[80%]'>
        <Heading title={title} subtitle={subtitle} center />
    </div>
  )
}

export default ProductHead
