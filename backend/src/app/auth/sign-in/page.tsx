import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SignIn from "@/components/auth/signIn";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { authClient } from "@/lib/auth/client";
import { Sign } from "crypto";
import SignOutButton from "@/components/auth/signOutButton";

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="text-center text-2xl">Welcome to SmartCart!</h2>
        {session ? (
          <div className="flex flex-col gap-4 items-center">
            <p>Logged in as {session.user.email}</p>
            <div className="flex gap-4 flex-row justify-evenly w-full">
              <Button asChild>
                <Link href="/dashboard">Continue</Link>
              </Button>
              <SignOutButton />
            </div>
          </div>
        ) : (
          <SignIn />
        )}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Made for HackRU Spring 2025
      </footer>
    </div>
  );
}
