import Stripe from "stripe";

export default async function getProducts() {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
        apiVersion: '2023-08-16'
    })

    const products = await stripe.prices.list()

    const productsWithPrices = await Promise.all(
        products.data.map(async (product) => {
            const prices = await stripe.prices.list({ product: product.id })
            return {
                id: product.id,
                name: product.name,
                price: prices.data[0].unit_amount,
                imageSrc: product.images[0],
                description: product.description,
                currency: prices.data[0].currency
            }
        })
    )
    return productsWithPrices
}
