// routes.config.ts

import {
  Discover,
  Hottest,
  Orientation,
  Recommended,
  Searches,
  Tags,
} from "@/components/headerPage/components";
interface Child {
  index: number;
  component: React.ComponentType<any>;
}

export interface MenuItem {
  title: string;
  hasContent: boolean;
  href?: string;
  children?: Child[];
  description?: string;
}

export const menuItems: MenuItem[] = [
  {
    title: "主页",
    hasContent: false,
    href: "/",
  },
  {
    title: "视频推荐",
    hasContent: true,
    children: [
      { index: 0, component: Discover },
      { index: 1, component: Hottest },
      { index: 2, component: Recommended },
    ],
  },
  {
    title: "视频分类",
    hasContent: true,
    children: [
      { index: 4, component: Orientation },
      { index: 6, component: Recommended },
      { index: 7, component: Searches },
    ],
  },
  {
    title: "社区",
    hasContent: false,
    href: "#",
  },
];
