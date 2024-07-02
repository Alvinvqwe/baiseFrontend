"use client";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="w-full max-h-fit mb-10 mt-20 flex">
      <div className="flex flex-col gap-10 w-full h-full min-h-60 mx-1 sm:mx-8 md:mx-20 xl:mx-32 items-center justify-center">
        <div className="w-full h-fit flex flex-row justify-center items-start">
          <div className="flex flex-grow flex-col gap-2 items-start">
            <div className="text-lg font-bold text-black mb-3">站点信息</div>
            <Link
              href="#"
              className="text-xs text-gray-400 underline"
              target="_blank"
            >
              条款和条件
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-400 underline"
              target="_blank"
            >
              隐私声明
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-400 underline"
              target="_blank"
            >
              Cookie 设置
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-400 underline"
              target="_blank"
            >
              网址地图
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-400 underline"
              target="_blank"
            >
              其他
            </Link>
          </div>
          <div className="flex flex-grow flex-col gap-2 items-start">
            <div className="text-lg font-bold text-black mb-3">加入我们</div>
            <Link
              href="#"
              className="text-xs text-gray-400 underline"
              target="_blank"
            >
              内容合作商
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-400 underline"
              target="_blank"
            >
              推广
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-400 underline"
              target="_blank"
            >
              网站站长
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-400 underline"
              target="_blank"
            >
              其他项目
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-400 underline"
              target="_blank"
            >
              新闻媒体
            </Link>
          </div>
          <div className="flex flex-grow flex-col gap-2 items-start">
            <div className="text-lg font-bold text-black mb-3">支持及帮助</div>
            <Link
              href="#"
              className="text-xs text-gray-400 underline"
              target="_blank"
            >
              内容移除
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-400 underline"
              target="_blank"
            >
              寻求帮助
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-400 underline"
              target="_blank"
            >
              常见问题(FAQ)
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-400 underline"
              target="_blank"
            >
              信任与安全
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-400 underline"
              target="_blank"
            >
              家长控制
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-400 underline"
              target="_blank"
            >
              反馈
            </Link>
          </div>
          <div className="flex flex-grow flex-col gap-2 items-start">
            <div className="text-lg font-bold text-black mb-3">探索</div>
            <Link
              href="#"
              className="text-xs text-gray-400 underline"
              target="_blank"
            >
              Telegram 群组
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-400 underline"
              target="_blank"
            >
              X 社区
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-400 underline"
              target="_blank"
            >
              性健康中心
            </Link>
          </div>
        </div>
        <p className="text-md text-gray-400 mt-3 text-center">
          © 2024 BaiseHub
        </p>
      </div>
    </div>
  );
};

export default Footer;
