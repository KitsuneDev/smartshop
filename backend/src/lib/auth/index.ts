import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { database } from "../database/client";
import { passkey } from "better-auth/plugins/passkey";
//import { magicLink } from "better-auth/plugins";

export const auth = betterAuth({
    database: prismaAdapter(database, {
        provider: "mongodb", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: {
        enabled: true
    },
    plugins: [
        passkey(),
        //magicLink()
    ]

})