import { Order, Product, User } from "@prisma/client";

export type SafeNumber = number | `${number}`;

export type SafeUser = Omit<User, 'createdAt' | 'updatedAt' | 'emailVerified'> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string| null
}

export type ProductType = {
    id: string;
    name: string;
    description: string;
    imageSrc: string;
    price: string;
    code: string;
    weight: string;
    available: boolean
}

export type SafeOrder = Omit<Order, 'createdDate' > & {
    createdDate: string
}