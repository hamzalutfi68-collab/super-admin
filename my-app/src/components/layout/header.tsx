"use client";

import { Bell, Search, Sun, Moon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-gray-200 dark:border-white/10 bg-white dark:bg-black/40 backdrop-blur-xl px-6 shadow-sm dark:shadow-lg transition-colors duration-200">
      {/* Left: Search Bar */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-400" />
          <Input
            type="search"
            placeholder={language === "ar" ? "بحث..." : "Search..."}
            className="w-72 pl-10 bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        {/* Language Toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleLanguage}
          className="hover:bg-gray-100 dark:hover:bg-white/10 transition-colors font-semibold px-3"
        >
          {language === "en" ? "AR" : "EN"}
        </Button>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300 transition-transform hover:rotate-180 duration-500" />
          ) : (
            <Moon className="h-5 w-5 text-gray-600 transition-transform hover:-rotate-12 duration-300" />
          )}
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative hover:bg-gray-100 dark:hover:bg-white/10">
          <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-500 ring-2 ring-white dark:ring-black animate-pulse shadow-lg shadow-blue-500/50" />
        </Button>
      </div>
    </header>
  );
}