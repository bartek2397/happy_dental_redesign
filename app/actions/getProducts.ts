import prisma from '@/prisma/prismadb'



export default async function getProducts() {
    try {
        const products = await prisma.product.findMany({
            take: 4,
            orderBy: {
                name: 'asc'
            },
        })

        const safeProducts = products.map((product) => ({
            ...products,
            id: product.id.toString(),
            name: product.name.toString(),
            description: product.description.toString(),
            imageSrc: product.imageSrc?.toString(),
            price: product.price.toString(),
            code: product.code?.toString(),
            weight: product.weight?.toString(),
            manufacturer: product.manufacturer?.toString(),
        }))

        return safeProducts;
    } catch (error: any) {
        throw new Error(error)
    }
}