import { SignUp } from "@/components/auth/signUp";
import React from "react";

export default function SignUpPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="text-center text-2xl">Welcome to SmartCart!</h2>

        <SignUp />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Made for HackRU Spring 2025
      </footer>
    </div>
  );
}
