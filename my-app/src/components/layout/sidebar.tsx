"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Settings, LogOut, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const sidebarLinks = [
  { name: "sidebar.dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "sidebar.users", href: "/users", icon: Users },
  { name: "sidebar.settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <div className="flex h-full w-64 flex-col bg-white dark:bg-black/40 backdrop-blur-xl border-r border-gray-200 dark:border-white/10 text-gray-900 dark:text-white transition-colors duration-200">
      {/* 1. Logo Section */}
      <div className="flex h-16 items-center border-b border-gray-200 dark:border-white/10 px-6 animate-fade-in-down">
        <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg shadow-blue-500/20 animate-float">
          <Layers className="h-5 w-5 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-600 to-blue-700 dark:from-white dark:via-blue-100 dark:to-blue-200 bg-clip-text text-transparent">
          Nexus Admin
        </span>
      </div>

      {/* 2. Navigation */}
      <div className="flex-1 overflow-y-auto py-6">
        <nav className="space-y-2 px-3">
          {sidebarLinks.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative flex items-center rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 animate-slide-in-left",
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {isActive && (
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 opacity-100"></div>
                )}
                <item.icon
                  className={cn(
                    "relative z-10 mr-3 h-5 w-5 flex-shrink-0 transition-transform group-hover:scale-110",
                    isActive
                      ? "text-white"
                      : "text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  )}
                />
                <span className="relative z-10">{t(item.name)}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 3. User Profile / Footer */}
      <div className="border-t border-gray-200 dark:border-white/10 p-4 animate-fade-in-up">
        <div className="flex items-center gap-3 mb-4 px-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <span className="text-sm font-bold text-white">JD</span>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-gray-900 dark:text-white">John Doe</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{t("sidebar.superAdmin")}</p>
          </div>
        </div>
        <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-4 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20">
          <LogOut className="h-4 w-4" />
          {t("sidebar.logout")}
        </button>
      </div>
    </div>
  );
}
