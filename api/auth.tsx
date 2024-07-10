import createAxiosInstance from "@/utils/AxiosInstance";
import bcrypt from "bcryptjs";
import { ApiResponse } from "@/types/api-types";
export const loginReq = async (
  type: string,
  email: string,
  password: string,
  username?: string
) => {
  const apiResponse: ApiResponse = {
    code: 0,
    message: "",
    data: null,
  };
  const axiosInstance = await createAxiosInstance();
  const response = await axiosInstance.post("/auth/login", {
    type: type,
    email: email,
    password: password,
    username: username || "",
  });
  // console.log(response);
  if (!response.data) {
    apiResponse.code = -1;
    apiResponse.message = "Failed to fetch data";
    return apiResponse;
  }
  if (!response.data.success) {
    apiResponse.code = -2;
  }
  apiResponse.data = response.data.data;
  apiResponse.message = response.data.message;
  return apiResponse;
};

export const registerReq = async (
  type: string,
  email: string,
  password: string,
  username: string
) => {
  const apiResponse: ApiResponse = {
    code: 0,
    message: "",
    data: null,
  };
  const axiosInstance = await createAxiosInstance();
  const response = await axiosInstance.post("/auth/register", {
    type: type,
    email: email,
    username: username,
    password: bcrypt.hashSync(password, 10),
  });
  if (!response.data) {
    apiResponse.code = -1;
    apiResponse.message = "Failed to fetch data";
    return apiResponse;
  }
  if (!response.data.success) {
    apiResponse.code = -2;
  }
  apiResponse.data = response.data.data;
  apiResponse.message = response.data.message;
  return apiResponse;
};
