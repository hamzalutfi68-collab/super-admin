"use client";

import { TrendingUp } from "lucide-react";

export function RevenueChart() {
    // Mock data for the chart
    const data = [
        { month: "Jan", revenue: 4000 },
        { month: "Feb", revenue: 3000 },
        { month: "Mar", revenue: 5000 },
        { month: "Apr", revenue: 4500 },
        { month: "May", revenue: 6000 },
        { month: "Jun", revenue: 5500 },
        { month: "Jul", revenue: 7000 },
        { month: "Aug", revenue: 6500 },
        { month: "Sep", revenue: 8000 },
        { month: "Oct", revenue: 7500 },
        { month: "Nov", revenue: 9000 },
        { month: "Dec", revenue: 8500 },
    ];

    const maxRevenue = Math.max(...data.map((d) => d.revenue));

    return (
        <div className="space-y-4">
            {/* Chart Area */}
            <div className="h-[300px] flex items-end justify-between gap-2 px-4">
                {data.map((item, index) => {
                    const height = (item.revenue / maxRevenue) * 100;
                    return (
                        <div
                            key={item.month}
                            className="flex-1 flex flex-col items-center gap-2 group"
                        >
                            {/* Bar */}
                            <div className="w-full flex flex-col items-center justify-end h-full">
                                <div
                                    className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all duration-500 hover:from-blue-500 hover:to-blue-300 cursor-pointer relative group-hover:shadow-lg group-hover:shadow-blue-500/50 animate-scale-in"
                                    style={{
                                        height: `${height}%`,
                                        animationDelay: `${index * 50}ms`,
                                    }}
                                >
                                    {/* Tooltip on hover */}
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                                        ${item.revenue.toLocaleString()}
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                                    </div>
                                </div>
                            </div>
                            {/* Month Label */}
                            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                                {item.month}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-600 to-blue-400"></div>
                    <span className="text-sm text-gray-300">Monthly Revenue</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">+12.5% vs last year</span>
                </div>
            </div>
        </div>
    );
}
