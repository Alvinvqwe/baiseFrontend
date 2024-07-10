import {
  IconEye,
  IconUserSquareRounded,
  IconThumbUp,
  IconHeart,
} from "@tabler/icons-react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import HoverVideoPlayer from "react-hover-video-player";
import { Suspense } from "react";
import Image from "next/image";
import { Video } from "@/types/api-types";

export const VideoCard: React.FC<{ video: Video }> = ({ video }) => {
  return (
    <div className="w-full h-60 flex flex-col items-center justify-center">
      <Suspense fallback={<Skeleton className="w-full h-full relative" />}>
        <Link
          href={`/video/${video.id}`}
          key={video.id}
          className="w-full h-full bg-black"
        >
          <HoverVideoPlayer
            videoSrc={
              process.env.NEXT_PUBLIC_BASE_URL +
              "/video/shortClips/" +
              video.video_url
            }
            pausedOverlay={
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/video/image/${video.video_url}`}
                alt="thumbnail"
                // width={0}
                // height={0}
                style={{ objectFit: "cover" }}
                fill
                priority
                unoptimized
              />
            }
            loadingOverlay={<Skeleton className="w-full h-full" />}
            preload="metadata"
            muted={true}
            loop={true}
            volume={0.8}
            className="w-full h-full bg-black" // Tailwind CSS 类
            restartOnPaused
            sizingMode="container"
          />
        </Link>
      </Suspense>
      <div className="mt-0 w-full">
        <div className="flex justify-between">
          <Link
            href="#"
            className="flex text-center ml-0 w-[120px] gap-1 text-sm text-gray-700"
          >
            <IconUserSquareRounded
              stroke={2}
              width={15}
              height={20}
              color="black"
            />
            {video.uploader_id}
          </Link>
          <div className="text-sm font-medium text-gray-900 flex justify-between w-[130px] h-[20px]">
            <div className="flex gap-1">
              <IconEye stroke={2} width={15} height={20} color="black" />
              {video.views}
            </div>
            <div className="flex gap-1">
              <IconThumbUp stroke={2} width={15} height={20} color="black" />
              {video.likes}
            </div>
            <div className="flex gap-1">
              <IconHeart stroke={2} width={15} height={20} color="black" />
              {video.hearts}
            </div>
          </div>
        </div>
        <p className="mt-0 w-full text-sm text-gray-500 leading-tight line-clamp-2">
          {video.title}
        </p>
      </div>
    </div>
  );
};
