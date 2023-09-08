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
    metadata: MetadataType
}

type MetadataType = {
    features: string;
}

export type SafeOrder = Omit<Order, 'createdDate' > & {
    createdDate: string
}

type Params = {
    id: string;
}

type SearchParams = {
    id: string;
    name: string;
    description: string;
    imageSrc: string;
    price: string;
    code: string;
    weight: string;
    manufacturer: string;
    available: boolean
    features: string
}

export type SearchParamsTypes = {
    params: Params;
    searchParams: SearchParams;
}