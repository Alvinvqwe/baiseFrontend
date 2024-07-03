"user client";
import React, { useState, useEffect } from "react";
import { VideoCard } from "@/components/video/VideoCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { fetchVideos } from "@/api/video";
import { Video } from "@/types/api-types";
import { Skeleton } from "../ui/skeleton";

export const VideoGrid: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      setLoading(true); // 开始加载时设置为true
      try {
        const res = await fetchVideos(currentPage);
        setVideos(res.data);
        console.log(res.data);
        setTotalPages(res.totalPages);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // 完成加载时设置为false
      }
    };
    getVideos();
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-fit grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 ">
        {loading ? (
          // 显示 Skeleton 组件
          <>
            <Skeleton className="w-full h-60" />
            <Skeleton className="w-full h-60" />
            <Skeleton className="w-full h-60" />
            <Skeleton className="w-full h-60" />
          </>
        ) : videos.length === 0 ? (
          // 显示 Skeleton 组件
          <>
            <Skeleton className="w-full h-60" />
            <Skeleton className="w-full h-60" />
            <Skeleton className="w-full h-60" />
            <Skeleton className="w-full h-60" />
          </>
        ) : (
          // 显示 VideoCard 组件
          videos.map((video) => <VideoCard key={video.id} video={video} />)
        )}
        <div className="w-full h-full border-2 border-black text-black">
          广告
        </div>
      </div>

      <Pagination className="text-black mt-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(currentPage - 1)}
              className={
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink href="#" onClick={() => handlePageChange(i + 1)}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(currentPage + 1)}
              className={
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
