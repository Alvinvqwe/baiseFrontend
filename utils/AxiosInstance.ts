import axios from "axios";
import { getSession } from "next-auth/react";

const createAxiosInstance = async () => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 10000,
  });
  try {
    const session = await getSession();

    if (session && session.user) {
      const accessToken = session.user.accessToken_key;
      console.log("accessToken: ", accessToken);
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${accessToken}`;
      axiosInstance.defaults.headers.common["Content-Type"] =
        "application/json";
    } else {
      axiosInstance.defaults.headers.common["Content-Type"] =
        "application/json";
    }
  } catch (error) {
    console.log(error);
  }
  return axiosInstance;
};

export default createAxiosInstance;
