"use client";
import {
  IconCamera,
  IconFlame,
  IconEye,
  IconStar,
  IconHome,
  IconClock,
  IconPlaylist,
  IconDeviceTv,
  IconArrowsRandom,
  IconNewSection,
  IconAward,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import HoverVideoPlayer from "react-hover-video-player";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";

export const Discover = () => {
  const videoCategories = [
    { path: "/categories/Hottest", name: "热门推荐", icon: <IconStar /> },
    { path: "/categories/Recommended", name: "最热视频", icon: <IconFlame /> },
    { path: "/categories/MostViews", name: "最多观看", icon: <IconEye /> },
    { path: "/categories/TopRates", name: "高分视频", icon: <IconStar /> },
    { path: "/categories/PupularVideos", name: "流行自拍", icon: <IconHome /> },
    { path: "/categories/Shortiest", name: "短视频", icon: <IconClock /> },
    { path: "/categories/PlayList", name: "播放列表", icon: <IconPlaylist /> },
    { path: "/categories/Channel", name: "频道", icon: <IconDeviceTv /> },
    {
      path: "/categories/Random",
      name: "随机视频",
      icon: <IconArrowsRandom />,
    },
    { path: "/categories/Newest", name: "最新视频", icon: <IconNewSection /> },
    { path: "/categories/BestVideos", name: "最佳视频", icon: <IconAward /> },
  ];

  return (
    <ul className="min-w-fit w-fit flex flex-grow flex-col list-disc p-3 gap-1 justify-start">
      <div className="text-xl text-black mb-5">发现视频</div>
      {videoCategories.map((category, index) => (
        <li key={index} className="flex items-center gap-2 hover:underline">
          {category.icon}
          <Link href={category.path}>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
};

interface VideoCardProps {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  vidoeSrc: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  title,
  thumbnail,
  duration,
  vidoeSrc,
}) => (
  <div className="w-[160px] h-[120px] items-center justify-center">
    <Suspense fallback={<Skeleton className="w-full h-full" />}>
      <Link href={`/Video/${id}`} className="w-full h-[90px]">
        <HoverVideoPlayer
          videoSrc={vidoeSrc}
          pausedOverlay={
            <Image
              src={thumbnail}
              alt="thumbnail"
              width={160}
              height={90}
              style={{ objectFit: "cover" }}
              priority
            />
          }
          loadingOverlay={<Skeleton className="w-full h-full" />}
          preload="auto"
          muted={true}
          loop={true}
          volume={0.8}
          className="w-full h-[90px]"
          restartOnPaused
        />
      </Link>
      <p className="py-0 mt-0 w-full h-[20px] text-sm text-black leading-tight line-clamp-2">
        {title}
      </p>
    </Suspense>
  </div>
);

export const Hottest = (id: Number) => {
  const hottestList = [
    {
      id: 1,
      title: "test",
      thumbnail: "/test_cover.jpg",
      duration: "2:30",
      vidoeSrc: "/test_clips.mp4",
    },
    {
      id: 2,
      title: "test",
      thumbnail: "/test_cover.jpg",
      duration: "2:30",
      vidoeSrc: "/test_clips.mp4",
    },
    {
      id: 3,
      title: "test",
      thumbnail: "/test_cover.jpg",
      duration: "2:30",
      vidoeSrc: "/test_clips.mp4",
    },
    {
      id: 4,
      title: "test",
      thumbnail: "/test_cover.jpg",
      duration: "2:30",
      vidoeSrc: "/test_clips.mp4",
    },
    {
      id: 5,
      title: "test",
      thumbnail: "/test_cover.jpg",
      duration: "2:30",
      vidoeSrc: "/test_clips.mp4",
    },
  ];
  return (
    <div className="min-w-fit w-fit flex flex-grow justify-start">
      <div className="w-full h-full grid grid-cols-2 gap-3 p-3">
        <div className="w-[160px] h-[120px] text-xl text-black items-center justify-center">
          热门视频
          <p className="w-full h-12 mt-2 text-xs text-gray-900 font-normal border ">
            我是广告！！
          </p>
        </div>
        {hottestList.length > 0 ? (
          hottestList.map((video) => <VideoCard key={video.id} {...video} />)
        ) : (
          <p>No videos available.</p>
        )}
      </div>
    </div>
  );
};

export const Recommended = (id: Number) => {
  const hottestList = [
    {
      id: 1,
      title: "test",
      thumbnail: "/test_cover.jpg",
      duration: "2:30",
      vidoeSrc: "/test_clips.mp4",
    },
    {
      id: 2,
      title: "test",
      thumbnail: "/test_cover.jpg",
      duration: "2:30",
      vidoeSrc: "/test_clips.mp4",
    },
    {
      id: 3,
      title: "test",
      thumbnail: "/test_cover.jpg",
      duration: "2:30",
      vidoeSrc: "/test_clips.mp4",
    },
    {
      id: 4,
      title: "test",
      thumbnail: "/test_cover.jpg",
      duration: "2:30",
      vidoeSrc: "/test_clips.mp4",
    },
    {
      id: 5,
      title: "test",
      thumbnail: "/test_cover.jpg",
      duration: "2:30",
      vidoeSrc: "/test_clips.mp4",
    },
    {
      id: 6,
      title: "test",
      thumbnail: "/test_cover.jpg",
      duration: "2:30",
      vidoeSrc: "/test_clips.mp4",
    },
    {
      id: 7,
      title: "test",
      thumbnail: "/test_cover.jpg",
      duration: "2:30",
      vidoeSrc: "/test_clips.mp4",
    },
  ];
  return (
    <div className="min-w-fit w-fit flex flex-grow justify-start p-3">
      <div className="w-[500px] max-h-[380px] h-full mx-auto  overflow-y-auto">
        <div className="w-full h-[120px] text-xl text-black items-center justify-center">
          推荐视频
          <p className="w-full text-sm text-gray-400">
            欢迎观看，以下是推荐视频! 我是广告！！
          </p>
          <p className="w-full text-sm text-gray-400">
            欢迎观看，以下是推荐视频! 我是广告！！
          </p>
          <p className="w-full text-sm text-gray-400">
            欢迎观看，以下是推荐视频! 我是广告！！
          </p>
        </div>
        <div className="w-full grid grid-cols-3 gap-1">
          {hottestList.length > 0 ? (
            hottestList.map((video) => <VideoCard key={video.id} {...video} />)
          ) : (
            <p>No videos available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export const Searches = () => {
  const keyWords = [
    "欧美",
    "日韩",
    "大屁股",
    "动漫",
    "无码",
    "三级片",
    "模特",
    "18岁",
    "美女",
  ];
  return (
    <div className="min-w-fit w-fit flex flex-grow justify-start">
      <div className="w-[200px] h-fit flex flex-wrap flex-row gap-1 text-black">
        <div className="w-full span h-5 text-black">搜索热词</div>
        {keyWords.map((keyWord) => (
          <Button
            variant="outline"
            key={keyWord}
            className="border-none hover:underline"
          >
            {keyWord}
          </Button>
        ))}
      </div>
    </div>
  );
};

export const Orientation = () => {
  const keyWords = [
    "所有",
    "同性恋",
    "跨性别",
    "直男直女",
    "欧美",
    "亚洲",
    "动漫",
  ];
  return (
    <div className="min-w-fit w-fit flex flex-grow justify-start">
      <div className="w-[200px] h-fit flex flex-wrap flex-col gap-1 text-black">
        <div className="w-full span h-5 text-black mb-5 ml-3">性取向</div>
        {keyWords.map((keyWord) => (
          <Button
            variant="outline"
            key={keyWord}
            className="border-none hover:underline shadow-none"
          >
            {keyWord}
          </Button>
        ))}
      </div>
    </div>
  );
};

export const Tags = () => {
  return <div>Tags</div>;
};
