"use client";
import React from "react";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth/client";

function SignOutButton() {
  return (
    <Button
      variant={"destructive"}
      onClick={() => {
        authClient.signOut().then(() => {
          window.location.href = "/";
        });
      }}
    >
      Sign Out
    </Button>
  );
}

export default SignOutButton;
