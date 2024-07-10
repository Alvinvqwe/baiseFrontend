// types.d.ts

export interface ApiResponse {
  code: number;
  message: string;
  data: any;
}

export interface User {
  userId: string;
  email: string;
  id: string;
  accessToken_key: string;
}

// ----------------
export interface Video {
  id: string;
  title: string;
  video_url: string;
  coverImage: string;
  views: number;
  likes: number;
  hearts: number;
  uploader_id: number;
}

export interface FetchVideosResponse {
  videos: Video[];
  totalRecords: number;
  totalPages: number;
  currentPage: number;
}

export interface Tag {
  id: string;
  name: string;
}

export interface FetchTagsResponse {
  tags: Tag[];
}

interface Data {
  // 根据你的数据结构定义接口
  [key: string]: any;
}
