import { getSession } from "next-auth/react";
interface AuthFetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: BodyInit | null;
}

async function authFetch(url: string, options: AuthFetchOptions = {}) {
  const session = await getSession();
  const token = session?.user?.id;

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
    Authorization: token ? `Bearer ${token}` : "",
  };

  return fetch(process.env.NEXT_PUBLIC_BASE_URL + url, {
    ...options,
    headers,
  });
}

export default authFetch;
