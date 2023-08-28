import prisma from '@/prisma/prismadb'

interface IParams {
    productId: string;
}

export default async function getProductById(params: IParams) {
    try {
        const {productId} = params

        const product = await prisma.product.findUnique({
            where: {
                id: productId,
            },
            
        })
        
        if (!product) {
            return null
        }

        return {
            ...product,
            id: product.id.toString(),
            name: product.name.toString(),
            description: product.description?.toString(),
            imageSrc: product.imageSrc?.toString(),
            price: product.price.toString(),
            code: product.code?.toString(),
            weight: product.weight?.toString(),
            manufacturer: product.manufacturer?.toString()
        }
    } catch (error: any) {
        throw new Error(error)
    }
}