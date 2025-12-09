"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";
import RHFInput from "../react-hook-forms/rhf-input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { loginformSchema } from "@/lib/form/auth";

import { loginApiMethod } from "../../lib/API/auth";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { Loader2, Eye, EyeOff } from "lucide-react";

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
      setIsLoading(true);
      console.log("Submitting values:", values);
      const { token } = await loginApiMethod(values);
      console.log("Full API Response:", Response);
      // 1) خزّن التوكن داخل الكونتيكست
      setToken(token);

      // 2) فك التوكن موجود بالكونتيكست → بيطلع الدور (role)

      // 3) روح على السوبر أدمن داشبورد
      router.push("/dashboard");
    } catch (error) {
      console.log("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <RHFInput
          name="email"
          label="Email"
          type="email"
          placeholder="example@mail.com"
        />

        <div className="relative">
          <RHFInput
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[38px] text-gray-400 hover:text-blue-400 transition-colors focus:outline-none"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-blue-600 focus:ring-blue-500 focus:ring-2 transition-all cursor-pointer"
            />
            <span className="text-gray-300 group-hover:text-white transition-colors">
              Remember me
            </span>
          </label>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            Forgot password?
          </a>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg shadow-blue-500/30 transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-[1.02] border border-blue-500/50"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </Button>
      </form>
    </FormProvider>
  );
}

export default LoginForm;
