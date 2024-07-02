"use client";
import { Button } from "@/components/ui/button";
import { VideoGrid } from "@/components/video/VideoGrid";
import { useState, useEffect } from "react";
import { fetchTags } from "@/api/video";

interface Tag {
  id: string;
  name: string;
}

export default function Home() {
  const [tags, setTags] = useState<Tag[]>([]);
  useEffect(() => {
    const getTags = async () => {
      try {
        const res = await fetchTags();
        if (!res.success) {
          alert(res.message);
        }
        setTags(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getTags();
  });
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-row gap-3 mt-5 py-3 text-black overflow-x-scroll">
        {tags.map((tag) => (
          <Button
            variant="outline"
            key={tag.id}
            className="hover:underline shadow-none flex-shrink-0"
          >
            {tag.name}
          </Button>
        ))}
      </div>
      <h2 className="my-5 ml-5 xl:ml-0 text-2xl font-bold tracking-tight text-gray-900">
        热门视频
      </h2>
      <VideoGrid />
    </div>
  );
}
