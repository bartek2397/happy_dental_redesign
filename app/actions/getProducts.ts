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
            name: product.name.toString()
        }))

        return safeProducts;
    } catch (error: any) {
        throw new Error(error)
    }
}