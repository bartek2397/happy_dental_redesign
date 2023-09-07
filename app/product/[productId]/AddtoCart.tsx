'use client'

import Button from "@/app/components/Button"
import { useState, useRef } from 'react'
import { PriceContext } from "@/store"

import React from 'react'

interface AddToCardProps {
  disabled: boolean
}

const AddtoCart: React.FC<AddToCardProps> = ({ disabled }) => {
  const [added, setAdded] = useState<boolean>(false)

  const handleAddToCart = () => {
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
    }, 500)
  }
  return (
    <>
      <Button label={added ? 'Adding to Card' : 'Buy Now'} disabled={disabled} onClick={handleAddToCart} className="bg-[#E4EEE3] p-2 text-[0.8rem]" />
    </>
  )
}

export default AddtoCart