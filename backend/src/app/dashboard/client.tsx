"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { checkout, getCart } from "./server";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";

const CART_ID = "679e84dd96e2d39d563e0f76";

export function TableDemo(
  { cart }: { cart: Awaited<ReturnType<typeof getCart>> } // TODO: getUserCurrentCart
) {
  if (cart == undefined) {
    return <div>Cart is inactive.</div>;
  }
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Quantity</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cart.products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.quantity}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell className="text-right">{product.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">
            {cart.products
              .map((x) => x.price * x.quantity)
              .reduce((partialSum, a) => partialSum + a, 0)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

function DashboardPage() {
  const cartQuery = useQuery({
    queryKey: ["cart", CART_ID],
    queryFn: async () => await getCart(CART_ID),
  });

  setTimeout(() => {
    cartQuery.refetch();
  }, 5000);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-y-scroll">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full ">
        <h2 className="text-center text-2xl">Your cart!</h2>
        {cartQuery.isLoading ? (
          "Loading..."
        ) : cartQuery.isError ? (
          "An error occurred"
        ) : cartQuery.data ? (
          <div className="item-sp flex flex-col items-center">
            <div className="border-slate-500 rounded-sm p-2 border ">
              <TableDemo cart={cartQuery.data} />
            </div>
            <Button
              className="w-full mt-10"
              onClick={() => {
                checkout(CART_ID).then(
                  () => (window.location = window.location)
                );
              }}
            >
              Simulate Checkout Sensor
            </Button>
          </div>
        ) : (
          "No cart"
        )}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Made for HackRU Spring 2025
      </footer>
    </div>
  );
}

export default DashboardPage;
