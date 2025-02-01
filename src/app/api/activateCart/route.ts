
import { database } from "@/lib/database/client"
import { NextRequest, NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function GET(
) {
    await database.carts.create({
        data: {
            id: '679e84dd96e2d39d563e0f76',
            cartNumber: 1,
            Products: {
                set: []
            }

        }
    })

    return Response.json({ message: 'Cart activated' })


}
