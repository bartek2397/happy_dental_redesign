import { create } from 'zustand'
import { persist } from "zustand/middleware";
import { AddCartType } from "./app/types/AddCartType";

type CartState = {
  isOpen: boolean;
  cart: AddCartType[];
  toggleCart: () => void;
  clearCart: () => void;
  addProduct: (item: AddCartType) => void;
  removeProduct: (item: AddCartType) => void;
  updateCartValue: () => number;
};

export const useCartStore = create<CartState>()(
  persist((set, get) => ({
    cartValue: '0',
    cart: [],
    isOpen: false,
    toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
    addProduct: (item) =>
      set((state) => {
        const existingItem = state.cart.find(
          (cartItem) => cartItem.id === item.id
        )
        if (existingItem) {
            const updatedCart = state.cart.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity! + 1}
                }
                return cartItem
            })
            return {cart: updatedCart}
        } else {
            return { cart: [...state.cart, { ...item, quantity: 1}]}
        }
      }),
      removeProduct: (item) =>
      set((state) => {
        const existingItem = state.cart.find((cartItem) => cartItem.id === item.id)
        if (existingItem && existingItem.quantity! > 1) {
            const updatedCart = state.cart.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity! - 1 }
                }
                return cartItem
            })
            return {cart: updatedCart}
        } else {
            const filteredCart = state.cart.filter((cartItem) => cartItem.id !== item.id)
            return { cart: filteredCart}
        }
      }),
      clearCart: () => set((state) => ({ cart: []})),
      updateCartValue: () => {
        const { cart } = get();
        if (cart.length) {
          return cart.map(item => item.price).reduce((prev, curr) => prev + curr)
        }
        return 0
      } 
  }),
  { name: 'cart-store'}
  )
);
