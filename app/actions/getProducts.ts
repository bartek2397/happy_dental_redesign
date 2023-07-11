import prisma from '@/prisma/prismadb'



export default async function getProducts() {
    try {
        const products = await prisma.product.findMany({
            orderBy: {
                name: 'desc'
            }
        })

        const safeProducts = products.map((product) => ({
            ...products,
            id: product.id.toString(),
            name: product.name.toString(),
            description: product.description.toString(),
            imageSrc: product.imageSrc.toString(),
            price: product.price.valueOf
        }))

        return safeProducts;
    } catch (error: any) {
        throw new Error(error)
    }
}