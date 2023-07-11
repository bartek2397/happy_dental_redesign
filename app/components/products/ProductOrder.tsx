'use client'

import React from 'react'
import { ProductType } from '@/app/types'
import Button from '../Button'

type ProductOrder = Omit<ProductType, 'id' | 'name' | 'description' | 'imageSrc'>

const ProductOrder = ({ price }: ProductOrder) => {
  return (
    <div>
      <div className='flex'>
        <div>
          {price}
        </div>
          <Button label='Buy Now' className='uppercase'/>
      </div>
    </div>
  )
}

export default ProductOrder
