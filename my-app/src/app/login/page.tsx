import LoginForm from "@/components/forms/login-form";
import { Command, Sparkles, Shield } from "lucide-react"; // Icons
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Animated Gradient Background - Black, White, Blue */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-950 animate-gradient-shift">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a10_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        {/* Glowing Blue Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="container relative z-10 h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        {/* ------------------- LEFT SIDE (Brand) ------------------- */}
        <div className="relative hidden h-full flex-col p-10 text-white lg:flex">
          {/* Glassmorphic overlay - Dark theme */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-md border-r border-white/10" />

          {/* Logo Section with animation */}
          <div className="relative z-20 flex items-center text-lg font-bold animate-fade-in-down">
            <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 backdrop-blur-sm border border-blue-500/30 shadow-lg shadow-blue-500/20 animate-float">
              <Command className="h-6 w-6" />
            </div>
            <span className="text-2xl bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              G&H
            </span>
          </div>

          {/* Main Text Content - Centered */}
          <div className="relative z-20 my-auto animate-fade-in space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-5 py-2.5 backdrop-blur-sm border border-blue-500/30 animate-slide-in-left">
              <Shield className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-100">Secure & Trusted Platform</span>
            </div>
            <blockquote className="space-y-6">
              <p className="text-3xl font-bold leading-relaxed text-white">
                &ldquo;The most powerful admin dashboard for modern businesses.&rdquo;
              </p>
              <footer className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-sm font-bold shadow-lg shadow-blue-500/30">
                  SE
                </div>
                <div>
                  <div className="text-base font-semibold text-white">Software Engineer</div>
                  <div className="text-sm text-gray-400">Tech Company</div>
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Copyright */}
          <div className="relative z-20 flex items-center gap-2 text-sm text-gray-400">
            <p>© 2025 G&H Inc. All rights reserved.</p>
          </div>
        </div>

        {/* ------------------- RIGHT SIDE (Form) ------------------- */}
        <div className="lg:p-8 flex items-center justify-center h-full">
          <div className="mx-auto w-full max-w-md animate-fade-in-up">
            {/* Glassmorphic Card - Dark theme */}
            <div className="rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-2xl shadow-2xl border border-white/20 dark:border-white/10 p-10 space-y-6 animate-scale-in">
              {/* Header Text */}
              <div className="flex flex-col space-y-3 text-center">
                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                  Welcome Back
                </h1>
                <p className="text-sm text-gray-300">
                  Enter your credentials to access your admin dashboard
                </p>
              </div>

              {/* The Form Component */}
              <LoginForm />

              {/* Footer / Legal Links */}
              <p className="text-center text-xs text-gray-400">
                By continuing, you agree to our{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-blue-400 transition-colors font-medium text-blue-300"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-blue-400 transition-colors font-medium text-blue-300"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
