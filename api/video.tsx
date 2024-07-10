import createAxiosInstance from "@/utils/AxiosInstance";
export const fetchVideos = async (page: number) => {
  const axiosInstance = await createAxiosInstance();
  const response = await axiosInstance.post("/video", {
    limit: 20,
    page,
  });
  if (!response.data) {
    throw new Error("Failed to fetch videos");
  }
  const data = response.data;
  console.log(data);
  return {
    data: [],
    totalRecords: 0,
    totalPages: 0,
    currentPage: 0,
  };
};

export const fetchTags = async () => {
  const axiosInstance = await createAxiosInstance();
  const response = await axiosInstance.get("/video/tags");
  if (!response.data) {
    throw new Error("Failed to fetch tags");
  }
  const data = response.data;
  console.log(data);
  return data;
};
