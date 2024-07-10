import type { NextAuthConfig } from "next-auth";
import { AuthError } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

async function authorize(credentials: any) {
  const { userId, email, accessToken_key } = credentials;
  if (!userId || !email) {
    throw new AuthError("Invalid credentials");
  }
  console.log(userId, email);
  return {
    userId: userId,
    email: email,
    accessToken_key: accessToken_key,
  };
}

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      authorize,
    }),
  ],
} satisfies NextAuthConfig;
