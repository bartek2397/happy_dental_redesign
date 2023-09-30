import Stripe from "stripe";

export default async function getProducts() {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
        apiVersion: '2023-08-16'
    })
}