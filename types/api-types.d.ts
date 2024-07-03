// types.d.ts
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
