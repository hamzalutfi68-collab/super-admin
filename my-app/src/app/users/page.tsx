"use client";

import { useState } from "react";
import { UsersTable } from "@/components/users/users-table";
import { Button } from "@/components/ui/button";
import { Plus, Users, UserCheck, UserPlus, ShieldAlert, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddUserForm from "@/components/forms/add-user-form";
import { useLanguage } from "@/context/LanguageContext";

export default function UsersPage() {
  const { t } = useLanguage();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* 1. Header Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between animate-fade-in-down">
        <div>
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-600 to-blue-700 dark:from-white dark:via-blue-100 dark:to-blue-300 bg-clip-text text-transparent">
            {t("users.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {t("users.subtitle")}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="hidden md:flex border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300">
            <Download className="mr-2 h-4 w-4" />
            {t("users.exportCSV")}
          </Button>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-200">
                <Plus className="mr-2 h-4 w-4" />
                {t("users.addUser")}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-2xl">{t("userForm.title")}</DialogTitle>
                <DialogDescription>
                  {t("userForm.description")}
                </DialogDescription>
              </DialogHeader>
              <AddUserForm onSuccess={() => setIsDialogOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* 2. Stats Cards Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Users */}
        <Card className="border-l-4 border-l-blue-500 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">{t("users.totalUsers")}</CardTitle>
            <Users className="h-5 w-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">2,543</div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">+180 {t("users.fromLastMonth")}</p>
          </CardContent>
        </Card>

        {/* Active Users */}
        <Card className="border-l-4 border-l-green-500 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">{t("users.activeNow")}</CardTitle>
            <UserCheck className="h-5 w-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">+573</div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">+201 {t("users.sinceLastHour")}</p>
          </CardContent>
        </Card>

        {/* New Users */}
        <Card className="border-l-4 border-l-purple-500 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">{t("users.newJoiners")}</CardTitle>
            <UserPlus className="h-5 w-5 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">+24</div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{t("users.inLast7Days")}</p>
          </CardContent>
        </Card>

        {/* Suspended/Alert */}
        <Card className="border-l-4 border-l-red-500 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">{t("users.suspended")}</CardTitle>
            <ShieldAlert className="h-5 w-5 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">3</div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{t("users.requiresAttention")}</p>
          </CardContent>
        </Card>
      </div>

      {/* 3. The Table Section */}
      <div className="animate-fade-in-up" style={{ animationDelay: "500ms" }}>
        <UsersTable />
      </div>
    </div>
  );
}