import { getCart } from "@/app/dashboard/server"
import { database } from "@/lib/database/client"
import { NextRequest, NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function GET(
    req: NextRequest,
) {
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('id')
    if (!query) {
        return Response.json({ message: 'No query found' })
    }
    const product = await database.products.findFirst({
        where: {
            barcodes: {
                has: query
            }
        }
    });
    if (!product) {
        return Response.json({ message: 'Product not found - ' + query })
    }
    // Get current cart
    const cart = await getCart('679e84dd96e2d39d563e0f76')
    if (!cart) {
        return Response.json({ message: 'Cart inactive' })
    }

    // If already in cart, increment quantity
    const existingProduct = cart.Products.find(x => x.id === query)
    if (existingProduct) {
        await database.carts.update({
            where: {
                id: cart.id
            },
            data: {
                Products: {
                    updateMany: {
                        where: {
                            id: query
                        },
                        data: {
                            quantity: existingProduct.quantity + 1
                        }
                    }
                }
            }
        })
    } else {
        await database.carts.update({
            where: {
                id: cart.id
            },
            data: {
                Products: {
                    push: {
                        id: query,
                        description: product.description,
                        price: product.price,
                        quantity: 1
                    }
                }
            }
        })
    }

    return Response.json({ message: query })


}
