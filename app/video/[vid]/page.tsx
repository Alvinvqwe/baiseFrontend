"use client";
import Image from "next/image";
import {
  FiThumbsUp,
  FiThumbsDown,
  FiHeart,
  FiFlag,
  FiShare,
} from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

import { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { VideoCard } from "@/components/video/VideoCard";
import { VideoGrid } from "@/components/video/VideoGrid";
import { videoSource, videoOptions } from "@/components/players/plyr.config";
const PlyrVideo = dynamic(() => import("@/components/players/PlyrVideo"), {
  ssr: false,
});

const CommentCard = ({ id }: { id: string }) => {
  return (
    <div className="w-full h-fit flex flex-col gap-2">
      <div className="flex flex-row justify-start items-center gap-2">
        <Avatar className="h-10 w-10">
          <AvatarImage
            src="https://github.com/shadcn.png"
            className="h-full w-full object-cover"
          />
        </Avatar>
        <h1 className="text-lg font-bold">Brad Newman</h1>
        <p className="text-sm font-medium">1 hour ago</p>
      </div>
      <p className="text-sm font-medium">
        "This is Another April Fools Prank Isn't It?", xxxxxxxxxxxxxxxxxxxxxxx
      </p>
    </div>
  );
};

const Comment = ({ videoId }: { videoId: string }) => {
  const [comments, setComments] = useState();
  return (
    <div className="w-full h-fit">
      <CommentCard id="1" />
    </div>
  );
};

const VideoPage = () => {
  return (
    <div className="w-full h-fit">
      <div className="w-full flex flex-row gap-1 py-5">
        <div className="lg:flex-grow lg:w-4/5 flex flex-col gap-3">
          <PlyrVideo
            source={videoSource}
            options={videoOptions}
            className="w-full"
          />
          <div className="w-full h-fit">
            <Image
              src="/ads_c.png"
              alt="logo"
              width={0}
              height={0}
              style={{
                // width: "70%",
                // height: "auto",
                objectFit: "fill",
              }}
              unoptimized={true}
              className="mx-auto w-fit h-fit max-w-full"
            />
          </div>
          <div className="w-full h-fit flex flex-col gap-2">
            <h1 className="text-2xl font-bold">小姨子被我绑架啦!</h1>
            <div className="flex flex-col sm:flex-row justify-between gap-2">
              <ul className="flex flex-row items-center gap-3 text-md">
                <li>4.7M 次观看</li>
                <li className="flex flex-row justify-between items-center gap-1">
                  <FiThumbsUp />
                  %86
                </li>
                <li>2周前</li>
              </ul>
              <ul className="flex flex-row items-center gap-0">
                <li className="items-center">
                  <Button
                    variant="ghost"
                    className="gap-x-1.5 h-full border-b-2 border-white hover:border-black rounded-none"
                  >
                    <FiThumbsUp />
                    6K
                  </Button>
                </li>
                <li className="items-center">
                  <Button
                    variant="ghost"
                    className="gap-x-1.5 h-full border-b-2 border-white hover:border-black rounded-none"
                  >
                    <FiThumbsDown />
                    1K
                  </Button>
                </li>
                <li className="items-center">
                  <Button
                    variant="ghost"
                    className="gap-x-1.5 h-full border-b-2 border-white hover:border-black rounded-none"
                  >
                    <FiHeart />
                    5K
                  </Button>
                </li>
                <li className="items-center">
                  <Button
                    variant="ghost"
                    className="gap-x-1.5 h-full border-b-2 border-white hover:border-black rounded-none"
                  >
                    <FiFlag />
                    举报
                  </Button>
                </li>
                <li className="items-center">
                  <Button
                    variant="ghost"
                    className="gap-x-1.5 h-full border-b-2 border-white hover:border-black rounded-none"
                  >
                    <FiShare />
                    分享
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full h-fit flex flex-row justify-between">
            <div className="items-center flex flex-row gap-3">
              <Avatar className="h-20 w-20">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="h-full w-full object-cover"
                />
              </Avatar>
              <div className="flex flex-col h-fit gap-1 items-center justify-evenly">
                <h1 className="text-lg font-bold">Brad Newman</h1>
                <div className="text-sm flex flex-col sm:flex-row gap-3 justify-start items-start">
                  <p>1180 视频</p>
                  <p>151K 订阅者</p>
                </div>
              </div>
            </div>
            <div className="h-full w-24 sm:w-48 border border-black">
              <Button
                variant="ghost"
                className="h-full w-full rounded-none hover:underline"
              >
                关注
              </Button>
            </div>
          </div>
          <div className="w-full h-fit my-5">
            <h1 className="text-xl font-bold my-3">相似视频</h1>
            {/* <div className="w-full h-fit grid grid-cols-1 gap-y-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 ">
              <VideoGrid />
            </div> */}
            <VideoGrid />
            <div className="w-full h-fit my-5">
              <Button
                variant="ghost"
                className="h-full w-full rounded-none hover:underline"
              >
                加载更多
              </Button>
            </div>
          </div>
          <div className="w-full h-fit justify-start my-3">
            <h1 className="text-xl font-bold my-1">所有评论</h1>
            <p className="text-sm">
              <Link href={"/login"} className="underline font-bold">
                登录
              </Link>
              或
              <Link href={"/register"} className="underline font-bold">
                注册
              </Link>
              马上射条评论!
            </p>
            <div className="fit flex flex-col py-5">
              <Comment videoId="1" />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-grow flex-col gap-1 lg:w-1/5">
          <div className="w-full gap-8 flex">
            <div className="w-full h-fit flex flex-col gap-2">
              <Image
                src="/ads_a.gif"
                alt="logo"
                width={0}
                height={0}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "fill",
                }}
                unoptimized={true}
              />
              <Image
                src="/ads_b.gif"
                alt="logo"
                width={0}
                height={0}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "fill",
                }}
                unoptimized={true}
              />
            </div>
          </div>
          <div className="w-full h-fit my-5">
            <p className="text-xl font-bold my-3 px-2">推荐视频</p>
            <div className="w-full h-fit flex flex-col gap-2 px-5">
              <div className="w-full h-8">
                <Button
                  variant="ghost"
                  className="h-full w-full rounded-none hover:underline"
                >
                  加载更多
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit pt-5">
        <Image
          src="/ads_d.gif"
          alt="logo"
          width={0}
          height={0}
          style={{
            // width: "70%",
            // height: "auto",
            objectFit: "fill",
          }}
          unoptimized={true}
          className="mx-auto w-fit h-fit max-w-full"
        />
      </div>
    </div>
  );
};

export default VideoPage;
