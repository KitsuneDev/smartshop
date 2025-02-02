import Link from "next/link";
import { ShoppingCart, Menu } from "lucide-react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AppSession } from "@/lib/auth/types";

export default async function Header() {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <ShoppingCart className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-gray-800">SmartShopr</span>
        </Link>
        <div className="hidden md:flex space-x-4">
          <NavLinks session={session} />
        </div>
        <div className="md:hidden">
          <KebabMenu session={session} />
        </div>
      </nav>
    </header>
  );
}

function NavLinks({ session }: { session: AppSession | null }) {
  return (
    <>
      <Link href="#features" className="text-gray-600 hover:text-primary">
        Features
      </Link>
      <Link href="#how-it-works" className="text-gray-600 hover:text-primary">
        How It Works
      </Link>
      {session ? (
        <>
          <div className="inline">{session.user.name}</div>
          <Link href="/dashboard" className="text-gray-600 hover:text-primary">
            Start Shopping
          </Link>
        </>
      ) : (
        <>
          <Link
            href="/auth/sign-in"
            className="text-gray-600 hover:text-primary"
          >
            Sign In
          </Link>
          <Link
            href="/auth/sign-up"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition duration-300"
          >
            Sign Up
          </Link>
        </>
      )}
    </>
  );
}

function KebabMenu({ session }: { session: AppSession | null }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href="#features">Features</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="#how-it-works">How It Works</Link>
        </DropdownMenuItem>
        {session ? (
          <>
            <DropdownMenuItem>{session.user.name}</DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard">Start Shopping</Link>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem asChild>
              <Link href="/auth/sign-in">Sign In</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/auth/sign-up">Sign Up</Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
