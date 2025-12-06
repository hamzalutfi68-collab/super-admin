"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";
import RHFInput from "../react-hook-forms/rhf-input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { loginformSchema } from "@/lib/form/auth";

import { loginApiMethod } from "../../lib/API/auth";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

function LoginForm() {
  const form = useForm<z.infer<typeof loginformSchema>>({
    resolver: zodResolver(loginformSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const router = useRouter();
  const { setToken } = useContext(AuthContext);

  const onSubmit = async (values: z.infer<typeof loginformSchema>) => {
    try {
      const { token } = await loginApiMethod(values);

      // 1) خزّن التوكن داخل الكونتيكست
      setToken(token);

      // 2) فك التوكن موجود بالكونتيكست → بيطلع الدور (role)

      // 3) روح على السوبر أدمن داشبورد
      router.push("/dashboard");
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <RHFInput
          name="email"
          label="Email"
          type="email"
          placeholder="example@mail.com"
        />
        <RHFInput
          name="password"
          label="Password"
          type="password"
          placeholder="••••••••"
        />

        <Button type="submit" variant="default" className="w-full mt-2 p-6">
          Login
        </Button>
      </form>
    </FormProvider>
  );
}

export default LoginForm;
