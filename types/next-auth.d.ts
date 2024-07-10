// types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  /**
   * Extends the built-in User model from NextAuth.js
   */
  interface User {
    userId?: string;
    accessToken_key?: string;
  }
  interface Session {
    user: {
      userId: string;
      email: string;
      id: string;
      accessToken_key: string;
    };
  }
}
