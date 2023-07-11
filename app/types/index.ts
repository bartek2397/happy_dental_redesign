import { Order, Product, User } from "@prisma/client";

export type SafeNumber = number | `${number}`;

export type SafeUser = Omit<User, 'createdAt' | 'updatedAt' | 'emailVerified'> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string| null
}

export type SafeProduct = Omit<Product, 'name'> & {
    name: string;
}

export type SafeOrder = Omit<Order, 'createdDate' > & {
    createdDate: string
}