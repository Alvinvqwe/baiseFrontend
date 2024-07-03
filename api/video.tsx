import { FetchVideosResponse } from "@/types/api-types";
export const fetchVideos = async (page: number) => {
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/video/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ limit: 20, page }),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch videos");
  }
  const data = await response.json();
  return data;
};

export const fetchTags = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/video/tags"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch tags");
  }
  const data = await response.json();
  console.log(data);
  return data;
};
