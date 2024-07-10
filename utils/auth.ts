import NextAuth from "next-auth";
import authConfig from "@/utils/auth.config";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";
import { loginReq } from "@/api/auth";

export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/auth/login",
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 2 * 60 * 60,
  },
  ...authConfig,
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.userId = user.userId;
        token.email = user.email;
        token.accessToken_key = user.accessToken_key;
      }
      // console.log("jwt: ", token);
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user = {
        ...session.user,
        userId: token?.userId as string,
        email: token.email as string,
        accessToken_key: token.accessToken_key as string,
      };
      // console.log("session: ", session);
      return session;
    },

    async signIn({ credentials, account, email, user }) {
      // console.log("signIn:", account, user);
      if (account?.provider === "google") {
        const response = await loginReq(
          account?.provider,
          user?.email as string,
          "",
          user.name as string
        );
        if (response.code !== 0) {
          console.log(response);
          return false;
        }
        user.userId = response.data[0].id;
        user.accessToken_key = response.data[0].accessToken_key;
      } else if (account?.provider === "X") {
        console.log("x login in", account);
      } else {
        console.log("normal login in", account, user, credentials?.user);
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
      // console.log("redirect");
      return baseUrl;
    },
  },
});
