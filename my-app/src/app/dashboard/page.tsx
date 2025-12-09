"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  DollarSign,
  Activity,
  CreditCard,
  ArrowUpRight,
  Download,
} from "lucide-react";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { useLanguage } from "@/context/LanguageContext";

export default function DashboardPage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between animate-fade-in-down">
        <div>
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-600 to-blue-700 dark:from-white dark:via-blue-100 dark:to-blue-300 bg-clip-text text-transparent">
            {t("dashboard.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {t("dashboard.subtitle")}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg shadow-blue-500/30 transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 flex items-center gap-2 border border-blue-500/50">
            <Download className="h-4 w-4" />
            {t("dashboard.downloadReport")}
          </button>
        </div>
      </div>

      {/* 1. Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">{t("dashboard.totalRevenue")}</CardTitle>
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30 animate-float">
              <DollarSign className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">$45,231.89</div>
            <p className="text-xs text-green-500 dark:text-green-400 flex items-center mt-2 font-medium">
              <ArrowUpRight className="h-3 w-3 mr-1" /> +20.1% {t("dashboard.fromLastMonth")}
            </p>
          </CardContent>
        </Card>

        <Card className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">{t("dashboard.subscriptions")}</CardTitle>
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 animate-float" style={{ animationDelay: "200ms" }}>
              <Users className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">+2,350</div>
            <p className="text-xs text-green-500 dark:text-green-400 flex items-center mt-2 font-medium">
              <ArrowUpRight className="h-3 w-3 mr-1" /> +180.1% {t("dashboard.fromLastMonth")}
            </p>
          </CardContent>
        </Card>

        <Card className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">{t("dashboard.sales")}</CardTitle>
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30 animate-float" style={{ animationDelay: "400ms" }}>
              <CreditCard className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">+12,234</div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 font-medium">
              +19% {t("dashboard.fromLastMonth")}
            </p>
          </CardContent>
        </Card>

        <Card className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">{t("dashboard.activeNow")}</CardTitle>
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30 animate-float" style={{ animationDelay: "600ms" }}>
              <Activity className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">+573</div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 font-medium">
              +201 {t("dashboard.sinceLastHour")}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 2. Content Section: Chart & List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Revenue Chart (Taking up 4 columns) */}
        <Card className="col-span-4 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
          <CardHeader>
            <CardTitle className="text-xl">{t("dashboard.revenueOverview")}</CardTitle>
            <CardDescription>
              {t("dashboard.monthlyRevenueDesc")}
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <RevenueChart />
          </CardContent>
        </Card>

        {/* Recent Sales List (Taking up 3 columns) */}
        <Card className="col-span-3 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <CardHeader>
            <CardTitle className="text-xl">{t("dashboard.recentSales")}</CardTitle>
            <CardDescription>{t("dashboard.salesThisMonth")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Sale Item 1 */}
              <div className="flex items-center animate-slide-in-left" style={{ animationDelay: "700ms" }}>
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/30">
                  OM
                </div>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                    Olivia Martin
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    olivia.martin@email.com
                  </p>
                </div>
                <div className="ml-auto font-semibold text-green-600 dark:text-green-400">+$1,999.00</div>
              </div>

              {/* Sale Item 2 */}
              <div className="flex items-center animate-slide-in-left" style={{ animationDelay: "800ms" }}>
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-green-500/30">
                  JL
                </div>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                    Jackson Lee
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    jackson.lee@email.com
                  </p>
                </div>
                <div className="ml-auto font-semibold text-green-600 dark:text-green-400">+$39.00</div>
              </div>

              {/* Sale Item 3 */}
              <div className="flex items-center animate-slide-in-left" style={{ animationDelay: "900ms" }}>
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-orange-500/30">
                  IN
                </div>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                    Isabella Nguyen
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    isabella.ng@email.com
                  </p>
                </div>
                <div className="ml-auto font-semibold text-green-600 dark:text-green-400">+$299.00</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
