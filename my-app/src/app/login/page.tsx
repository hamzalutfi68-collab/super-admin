import LoginForm from "@/components/forms/login-form";
import { Command } from "lucide-react"; // Icon for the logo
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      {/* ------------------- LEFT SIDE (Brand) ------------------- */}
      <div className="relative hidden h-full flex-col bg-zinc-900 p-10 text-white lg:flex dark:border-r">
        {/* Background Overlay for a bit of texture */}
        <div className="absolute inset-0 bg-zinc-900" />

        {/* Logo Section */}
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Command className="mr-2 h-6 w-6" />
          G&H
        </div>

        {/* Main Text Content - Centered vertically or bottom aligned */}
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This dashboard has saved us countless hours of work and
              helped us deliver stunning designs to our clients faster than ever
              before.&rdquo;
            </p>
            <footer className="text-sm text-zinc-400">Software Engineer</footer>
          </blockquote>
        </div>

        {/* Copyright */}
        <div className="relative z-20 mt-10 flex items-center gap-2 text-sm text-zinc-400">
          <p>© 2025 Acme Inc.</p>
        </div>
      </div>

      {/* ------------------- RIGHT SIDE (Form) ------------------- */}
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          {/* Header Text */}
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Login to your account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to access your admin dashboard
            </p>
          </div>

          {/* The Form Component */}
          <LoginForm />

          {/* Footer / Legal Links */}
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
