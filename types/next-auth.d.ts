// types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  /**
   * Extends the built-in User model from NextAuth.js
   */
  interface User {
    userId?: string;
  }
}
