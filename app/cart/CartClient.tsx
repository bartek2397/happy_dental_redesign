'use client'

import Image from "next/image"
import { useCartStore } from "@/store"
import Heading from "../components/Heading"
import Button from "../components/Button"

const CartClient = () => {
    const cartStore = useCartStore()

    const totalPrice = cartStore.cart.reduce((acc, item) => {
        return acc + item.price! * item.quantity!
      }, 0)

  return (
    <section className="max-w-full">
        <div className="max-w-[1440px] py-6 px-6 m-auto">
            <Heading title="Your Products" />
        </div>
        <div className="flex">
            <div>
                {/* mapped products added to cart */}
            </div>
            <div>
                <Heading title="Summary" className="font-bold"/>
                <div className="flex">
                    <Heading title="Total Price" className="font-semibold" />
                    <span>{totalPrice}</span>
                </div>
                <Button label="Checkout" />
            </div>
        </div>
    </section>
  )
}

export default CartClient