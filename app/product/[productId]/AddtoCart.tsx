'use client'

import Button from "@/app/components/Button"
import { useState } from 'react'
import { useCartStore } from "@/store"
import { AddCartType } from "@/app/types/AddCartType"

import React from 'react'

const AddtoCart = ({ id, name, price, quantity, imageSrc }: AddCartType) => {
  const [added, setAdded] = useState<boolean>(false)
  const cartStore = useCartStore()

  const handleAddToCart = () => {
    cartStore.addProduct({ id, name, price, quantity, imageSrc })
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
    }, 500)
  }
  return (
    <>
      <Button label={added ? 'Adding to Card' : 'Buy Now'} disabled={added} onClick={handleAddToCart} className="bg-[#E4EEE3] p-2 text-[0.8rem]" />
    </>
  )
}

export default AddtoCart