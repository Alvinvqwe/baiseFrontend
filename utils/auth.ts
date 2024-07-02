import NextAuth from "next-auth";
import authConfig from "@/utils/auth.config";

export const { auth, handlers, signIn, signOut } = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt", maxAge: 2 * 60 * 60 },
  ...authConfig,
  callbacks: {
    async jwt({ token, user }) {
      // console.log("jwt: ", token, user);
      if (user) {
        return { token, user };
      }
      return token;
    },
    async session({ session, token }) {
      // 将 token 中的信息存储在 session 中
      console.log("session: ", session, token);

      if (token.user) {
        return { ...session, user: token.user };
      }
      return session;
    },

    async signIn({ credentials, account, email, user }) {
      //console.log("signIn:", account, user);
      if (account?.provider === "google") {
        //console.log("google login in", account);
        const res = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + "/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: account.token_type + " " + account.access_token,
            },
            body: JSON.stringify({
              type: account?.provider,
              email: user.email,
              username: user.name,
              avatar_url: user.image,
            }),
          }
        );
        if (!res.ok) {
          console.error("Failed to login:", res.status);
          return false; // handle errors appropriately
        }

        const data = await res.json(); // properly reading the JSON response
        console.log("google login response:", JSON.stringify(data));
        //console.log("google login response:2", user);
        if (data?.id) {
          user.userId = data.id;
        }
        console.log("google login response:3", { ...user, userid: data.id });
        //this.session?.user.userId = res.id;
      } else if (account?.provider === "X") {
        console.log("x login in", account);
      } else {
        console.log("normal login in", account, email, user);
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
});
