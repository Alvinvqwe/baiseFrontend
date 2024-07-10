"use client";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { IoMdMenu } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavigationMenus } from "./menu";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Header = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const handleUserIconClick = () => {
    if (status !== "authenticated") {
      router.push("/auth/login");
    }
  };
  const headLinks = [
    { link: "#", label: "隐私与安全" },
    { link: "#", label: "账户安全" },
    { link: "#", label: "技术支持" },
  ];
  const headItems = headLinks.map((item) => (
    <Link
      href={item.link}
      key={item.label}
      className="text-xs text-black underline"
    >
      {item.label}
    </Link>
  ));

  return (
    <div className="w-full max-h-fit flex justify-center">
      <div className="h-full w-full mx-1 sm:mx-8 md:mx-20 xl:mx-32">
        <div className="flex h-4 gap-5 items-center justify-center">
          {headItems}
        </div>
        <div className="flex h-15 gap-5 p-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 xl:hidden text-black border-gray-200"
              >
                <IoMdMenu className="text-3xl" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="text-black">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-black"
                >
                  Dashboard
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="font-bold text-3xl items-center justify-center text-black">
            BaiseHub
          </div>
          <div className="relative flex-1 xl:ml-16">
            <IoMdSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-border pl-8 py-2 sm:w-[80%] xl:w-[800px] text-black focus:bg-white bg-white"
            />
          </div>
          <div className="flex space-x-3 items-center justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="text-black border-none"
                  onClick={handleUserIconClick}
                >
                  <FaRegUser className="text-3xl" />
                </Button>
              </DropdownMenuTrigger>
              {session && status === "authenticated" ? (
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>我的账户</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => router.push(`/user/${session.user?.userId}`)}
                  >
                    个人中心
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              ) : null}
            </DropdownMenu>
          </div>
        </div>
        <div className="hidden xl:block items-start w-full">
          <NavigationMenus />
        </div>
      </div>
    </div>
  );
};

export default Header;
