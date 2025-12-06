"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Settings, LogOut, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Users", href: "/users", icon: Users },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col bg-zinc-900 text-white">
      {/* 1. Logo Section */}
      <div className="flex h-16 items-center border-b border-zinc-800 px-6">
        <Layers className="mr-2 h-6 w-6 text-blue-500" />
        <span className="text-lg font-bold tracking-tight">Nexus Admin</span>
      </div>

      {/* 2. Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          {sidebarLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-all",
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                )}
              >
                <item.icon
                  className={cn(
                    "mr-3 h-5 w-5 flex-shrink-0",
                    isActive
                      ? "text-white"
                      : "text-zinc-500 group-hover:text-white"
                  )}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 3. User Profile / Footer */}
      <div className="border-t border-zinc-800 p-4">
        <div className="flex items-center gap-3 mb-4 px-2">
          <div className="h-8 w-8 rounded-full bg-zinc-700 flex items-center justify-center">
            <span className="text-xs font-bold">JD</span>
          </div>
          <div className="text-sm">
            <p className="font-medium">John Doe</p>
            <p className="text-xs text-zinc-500">Super Admin</p>
          </div>
        </div>
        <button className="flex w-full items-center justify-center gap-2 rounded-md border border-zinc-700 bg-transparent px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white">
          <LogOut className="h-4 w-4" />
          Log out
        </button>
      </div>
    </div>
  );
}
