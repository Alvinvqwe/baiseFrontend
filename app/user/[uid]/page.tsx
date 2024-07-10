"use client";
import { getSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { User } from "@/types/api-types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { VideoGrid } from "@/components/video/VideoGrid";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InputTags } from "@/components/InputTags";

const UserPage = () => {
  const [user, setUser] = useState<User>({} as User);
  const [tags, setTags] = useState<string[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const session = await getSession();
      if (session?.user) {
        setUser(session.user);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-full h-64 relative flex flex-row bg-gray-200">
        <div className="w-36 h-36 absolute left-2 bottom-2 bg-slate-400 border-black">
          avatar
        </div>
        <div className="w-108 h-20 flex flex-col absolute bottom-2 left-40">
          <p>{user.email}</p>
          <p>0 订阅者</p>
          <p>0 粉丝</p>
        </div>
      </div>
      <div className="w-full min-h-screen flex flex-row">
        <div className="w-[80%] h-full">
          <Tabs defaultValue="videos" className="w-full h-full">
            <TabsList className=" bg-white h-full">
              <TabsTrigger value="videos">我的视频</TabsTrigger>
              <TabsTrigger value="likes">我的喜欢</TabsTrigger>
              <TabsTrigger value="hearts">我的收藏</TabsTrigger>
              <TabsTrigger value="followers">我的粉丝</TabsTrigger>
              <TabsTrigger value="followings">我的关注</TabsTrigger>
            </TabsList>
            <TabsContent value="videos">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">上传视频</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>上传视频</DialogTitle>
                    <DialogDescription>感谢您的分享</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        标题
                      </Label>
                      <Input
                        id="title"
                        placeholder="视频标题"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        描述
                      </Label>
                      <Input
                        id="description"
                        placeholder="视频描述"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        上传文件
                      </Label>
                      <Input
                        id="upload"
                        placeholder="视频文件"
                        type="file"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        权限
                      </Label>
                      <Select defaultValue={"public"}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="访问权限" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>访问权限</SelectLabel>
                            <SelectItem value="public">公开</SelectItem>
                            <SelectItem value="private">私有</SelectItem>
                            <SelectItem value="followers_only">
                              仅粉丝
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        标签
                      </Label>
                      <InputTags
                        value={tags}
                        onChange={setTags}
                        placeholder="添加标签"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">上传视频</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Accordion
                type="multiple"
                defaultValue={["item-1", "item-2"]}
                className="w-[95%]"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>我发布的视频</AccordionTrigger>
                  <AccordionContent>
                    <VideoGrid />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>正在审核的视频</AccordionTrigger>
                  <AccordionContent>
                    <VideoGrid />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="likes">
              <VideoGrid />
            </TabsContent>
            <TabsContent value="hearts">
              <VideoGrid />
            </TabsContent>
            <TabsContent value="followers">
              Change your password here.
            </TabsContent>
            <TabsContent value="followings">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
        <div className="w-[20%] flex flex-col border-l-2">
          <div className="text-xl text-center mt-10">个人简介</div>
          <div className="text-md text-left mt-5 ml-3">上次登录时间: 昨天</div>
          <div className="text-md text-left mt-5 ml-3">上次登录IP: 杭州</div>
          <div className="text-md text-left mt-5 ml-3">会员等级: free</div>{" "}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
