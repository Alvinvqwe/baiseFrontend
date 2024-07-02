import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

import * as z from "zod";
import { RegisterSchema } from "@/schemas/index";

async function authorize(credentials: any) {
  const { email, password } = credentials;
  //console.log(process.env.BASE_URL + "/auth/login");
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: "credentials", email, password }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const user = await res.json();
  if (user) {
    return {
      userId: user.id,
      name: user.username,
      email: user.email,
    };
  } else {
    return null;
  }
}

export async function signUp(userData: z.infer<typeof RegisterSchema>) {
  //console.log("signup:", { type: "credentials", ...userData });
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: "credentials", ...userData }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error; // 可以重新抛出错误，或者返回一个错误对象
  }
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
