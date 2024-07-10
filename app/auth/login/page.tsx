"use client";
import { useState, useEffect } from "react";
import { Social } from "@/components/auth/social";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import createAxiosInstance from "@/utils/AxiosInstance";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { loginReq } from "@/api/auth";

const LoginPage = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    console.log(values.email, values.password);
    const response = await loginReq(
      "credentials",
      values.email,
      values.password
    );
    if (response.code !== 0) {
      toast({
        description: response.message,
        variant: "destructive",
        duration: 800,
      });
      return;
    }
    console.log(response.data[0]);
    await signIn("credentials", {
      userId: response.data[0].id,
      email: response.data[0].email,
      accessToken_key: response.data[0].accessToken_key,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-gray-100">
      <Card className="w-[400px] shadow-md ">
        <CardHeader>
          <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <h1 className="text-3xl">🔐 登录</h1>
            <p className="text-muted-foregroud text-sm">欢迎访问 BaiseHub</p>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="baisehub@example.com"
                          type="email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="******"
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full">
                登录
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Social />
        </CardFooter>
        <CardFooter className="w-full">
          <Button variant={"link"} className="w-full" size="sm" asChild>
            <Link href="/auth/register">还没有账户？注册</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
