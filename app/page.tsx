"use client";
import { Button } from "@/components/ui/button";
import { VideoGrid } from "@/components/video/VideoGrid";
import { useState, useEffect } from "react";
import { fetchTags } from "@/api/video";
import { Skeleton } from "../components/ui/skeleton";
import { useSession } from "next-auth/react";

interface Tag {
  id: string;
  name: string;
}

export default function Home() {
  const { data: session } = useSession();
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);
  console.log("session", session);

  useEffect(() => {
    const getTags = async () => {
      setLoading(true); // 开始加载时设置为 true
      try {
        const res = await fetchTags();
        if (!res.success) {
          alert(res.message);
        } else {
          setTags(res.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // 数据加载完成时设置为 false
      }
    };
    getTags();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-row gap-3 mt-5 py-3 text-black overflow-x-scroll">
        {loading ? (
          // 显示 Skeleton 组件
          <>
            <Skeleton className="w-24 h-8" />
            <Skeleton className="w-24 h-8" />
            <Skeleton className="w-24 h-8" />
            <Skeleton className="w-24 h-8" />
          </>
        ) : tags.length === 0 ? (
          // 显示提示信息
          <>
            <Skeleton className="w-24 h-8" />
            <Skeleton className="w-24 h-8" />
            <Skeleton className="w-24 h-8" />
            <Skeleton className="w-24 h-8" />
          </>
        ) : (
          // 显示标签按钮
          tags.map((tag) => (
            <Button
              variant="outline"
              key={tag.name}
              className="hover:underline shadow-none flex-shrink-0"
            >
              {tag.name}
            </Button>
          ))
        )}
      </div>
      <h2 className="my-5 ml-5 xl:ml-0 text-2xl font-bold tracking-tight text-gray-900">
        热门视频
      </h2>
      <VideoGrid />
    </div>
  );
}
