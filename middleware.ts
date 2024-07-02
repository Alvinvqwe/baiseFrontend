import NextAuth from "next-auth";
import authConfig from "@/utils/auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  publicRoutes,
  authRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);

// 将路由模式转换为正则表达式
const routeToRegex = (route: string) => {
  // 将动态路由和通配符转换为正则表达式
  const pattern = route
    .replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    .replace(/\\\[.*?\\\]/g, "[^/]+")
    .replace(/\\\*/g, ".*");
  return new RegExp(`^${pattern}$`);
};

// 生成公共路由的正则表达式列表
const publicRouteRegexes = publicRoutes.map(routeToRegex);

// 检查路径是否为公共路由
const isPublicPath = (pathname: string) => {
  return publicRouteRegexes.some((regex) => regex.test(pathname));
};

export default auth((req) => {
  // req.auth
  const { nextUrl } = req;
  const isLoggedin = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute =
    publicRoutes.includes(nextUrl.pathname) || isPublicPath(nextUrl.pathname);

  console.log(nextUrl.pathname, isPublicRoute);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return;
  }

  if (isAuthRoute) {
    if (isLoggedin) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!isLoggedin && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }
  return;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  //matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
