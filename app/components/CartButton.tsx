'use client'

import { useCartStore } from "@/store";
import Link from "next/link";
import { IconType } from "react-icons"

interface CartButtonProps {
    icon: IconType;
    link?: string;
    className?: string;
    label: number;
    onClick?: () => void
}

const CartButton: React.FC<CartButtonProps> = ({ icon: Icon, link, className, label, onClick }) => {
    const { updateCartValue } = useCartStore()
  return (
    <button onClick={onClick} className={`uppercase rounded-[50px] text-center font-heading relative w-[50%] h-full text-white  bg-transparent border-solid border font-normal ${className ?? ''}`}>
        {Icon && (
        <Icon size={24} className="absolute right-4 top-[50%] -translate-y-[50%]" />
      )}
      <Link href={`${link}`}>
        {label}
      </Link>
    </button>
  )
}



export default CartButton