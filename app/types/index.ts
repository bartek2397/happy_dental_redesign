import { Order, Product, User } from "@prisma/client";

export type SafeUser = Omit<User, 'createdAt' | 'updatedAt' | 'emailVerified'> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string| null
}

export type ProductType = {
    name: string
    unit_amount: number | null
    quantity?: number | 1
    image: string
    id: string
    description: string | null
  }

export type SafeOrder = Omit<Order, 'createdDate' > & {
    createdDate: string
}

