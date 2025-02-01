"use server";

import { auth } from "@/lib/auth";
import { database } from "@/lib/database/client";
import { headers } from "next/headers";

export async function getUserCurrentCart() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    throw new Error("No session found");
  }
  const userDb = await database.user.findUnique({
    where: {
      id: session.user.id,
    },
    include: {
      carts: {
        include: {},
      },
    },
  });

  return userDb?.carts;
}

export async function setUserCurrentCart(cartId: string) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return;
  }

  if (cartId) {
    await database.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        carts: {
          connect: {
            id: cartId,
          },
        },
      },
    });
  } else {
    await database.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        carts: {
          disconnect: true,
        },
      },
    });
  }
}

export async function getCart(cartId: string) {
  console.log(cartId);
  const result = await database.carts.findUnique({
    where: {
      id: cartId,
    },
  });
  return result;
}
