import { FetchVideosResponse } from "@/types/api-types";
export const fetchVideos = async (
  page: number
): Promise<FetchVideosResponse> => {
  const response = await fetch(`http://localhost:7000?page=${page}`);
  if (!response.ok) {
    throw new Error("Failed to fetch videos");
  }
  const data: FetchVideosResponse = await response.json();
  return data;
};

export const fetchTags = async () => {
  const response = await fetch("http://localhost:7000/tags");
  if (!response.ok) {
    throw new Error("Failed to fetch tags");
  }
  const data = await response.json();
  return data;
};
