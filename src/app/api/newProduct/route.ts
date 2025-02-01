
import { database } from "@/lib/database/client"
import { NextRequest, NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function GET(
    req: NextRequest,
    res: NextResponse
) {
    await database.products.create({
        data: {

            description: "Test Product",
            price: 10,
            barcodes: {
                set: ['123456']
            }

        }
    })

    return Response.json({ message: 'Cart activated' })


}
