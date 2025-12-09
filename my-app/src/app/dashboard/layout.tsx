"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative flex h-screen overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-200">
          {/* Animated Background - Dark Mode Only */}
          <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-blue-950 bg-gray-50 animate-gradient-shift">
            <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#1e3a8a10_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a10_1px,transparent_1px)] dark:bg-[size:4rem_4rem]"></div>
            <div className="absolute top-20 right-20 w-96 h-96 dark:bg-blue-600/10 rounded-full blur-3xl dark:animate-pulse-slow"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 dark:bg-blue-500/5 rounded-full blur-3xl dark:animate-pulse-slower"></div>
          </div>

          <div className="relative z-10 flex h-screen overflow-hidden w-full">
            {/* Sidebar - Fixed width */}
            <aside className="hidden w-64 flex-shrink-0 md:block">
              <Sidebar />
            </aside>

            {/* Main Content Area */}
            <div className="flex flex-1 flex-col overflow-hidden">
              {/* Top Header */}
              <Header />

              {/* Scrollable Page Content */}
              <main className="flex-1 overflow-y-auto p-8">
                <div className="mx-auto max-w-7xl">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}