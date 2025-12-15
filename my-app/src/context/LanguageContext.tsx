"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (key: string) => string;
}

const translations = {
    en: {
        // Common
        "common.loading": "Loading...",
        "common.search": "Search...",
        "common.filter": "Filter",
        "common.previous": "Previous",
        "common.next": "Next",

        // Dashboard
        "dashboard.title": "Dashboard",
        "dashboard.subtitle": "Overview of your system's performance.",
        "dashboard.downloadReport": "Download Report",
        "dashboard.totalRevenue": "Total Revenue",
        "dashboard.subscriptions": "Subscriptions",
        "dashboard.sales": "Sales",
        "dashboard.activeNow": "Active Now",
        "dashboard.fromLastMonth": "from last month",
        "dashboard.sinceLastHour": "since last hour",
        "dashboard.revenueOverview": "Revenue Overview",
        "dashboard.monthlyRevenueDesc": "Monthly revenue analysis for the current year.",
        "dashboard.recentSales": "Recent Sales",
        "dashboard.salesThisMonth": "You made 265 sales this month.",
        "dashboard.monthlyRevenueLabel": "Monthly Revenue",
        "dashboard.vsLastYear": "vs last year",

        // Users
        "users.title": "User Management",
        "users.subtitle": "Overview of team members, roles, and permissions.",
        "users.addUser": "Add User",
        "users.exportCSV": "Export CSV",
        "users.totalUsers": "Total Users",
        "users.activeNow": "Active Now",
        "users.newJoiners": "New Joiners",
        "users.suspended": "Suspended",
        "users.fromLastMonth": "from last month",
        "users.sinceLastHour": "since last hour",
        "users.inLast7Days": "In the last 7 days",
        "users.requiresAttention": "Requires attention",
        "users.searchUsers": "Search users...",
        "users.user": "User",
        "users.role": "Role",
        "users.status": "Status",
        "users.lastActive": "Last Active",
        "users.actions": "Actions",

        // Sidebar
        "sidebar.dashboard": "Dashboard",
        "sidebar.users": "Users",
        "sidebar.settings": "Settings",
        "sidebar.logout": "Log out",
        "sidebar.superAdmin": "Super Admin",

        // Login
        "login.title": "Welcome Back",
        "login.subtitle": "Sign in to your account to continue",
        "login.email": "Email",
        "login.password": "Password",
        "login.rememberMe": "Remember me",
        "login.forgotPassword": "Forgot password?",
        "login.signIn": "Sign In",
        "login.secureAndTrusted": "Secure & Trusted Platform",

        // User Form
        "userForm.title": "Add New User",
        "userForm.description": "Create a new user account with role and permissions.",
        "userForm.name": "Full Name",
        "userForm.namePlaceholder": "Enter full name",
        "userForm.email": "Email Address",
        "userForm.emailPlaceholder": "user@example.com",
        "userForm.password": "Password",
        "userForm.confirmPassword": "Confirm Password",
        "userForm.role": "Role",
        "userForm.selectRole": "Select a role",
        "userForm.roleUser": "User",
        "userForm.roleAdmin": "Admin",
        "userForm.roleSuperAdmin": "Super Admin",
        "userForm.status": "Status",
        "userForm.selectStatus": "Select status",
        "userForm.statusActive": "Active",
        "userForm.statusBlocked": "Blocked",
        "userForm.maxManagedUsers": "Max Managed Users",
        "userForm.cancel": "Cancel",
        "userForm.createUser": "Create User",
        "userForm.creating": "Creating...",
    },
    ar: {
        // Common
        "common.loading": "جاري التحميل...",
        "common.search": "بحث...",
        "common.filter": "تصفية",
        "common.previous": "السابق",
        "common.next": "التالي",

        // Dashboard
        "dashboard.title": "لوحة التحكم",
        "dashboard.subtitle": "نظرة عامة على أداء نظامك.",
        "dashboard.downloadReport": "تحميل التقرير",
        "dashboard.totalRevenue": "إجمالي الإيرادات",
        "dashboard.subscriptions": "الاشتراكات",
        "dashboard.sales": "المبيعات",
        "dashboard.activeNow": "نشط الآن",
        "dashboard.fromLastMonth": "من الشهر الماضي",
        "dashboard.sinceLastHour": "منذ الساعة الأخيرة",
        "dashboard.revenueOverview": "نظرة عامة على الإيرادات",
        "dashboard.monthlyRevenueDesc": "تحليل الإيرادات الشهرية للعام الحالي.",
        "dashboard.recentSales": "المبيعات الأخيرة",
        "dashboard.salesThisMonth": "لقد قمت بـ 265 عملية بيع هذا الشهر.",
        "dashboard.monthlyRevenueLabel": "الإيرادات الشهرية",
        "dashboard.vsLastYear": "مقارنة بالعام الماضي",

        // Users
        "users.title": "إدارة المستخدمين",
        "users.subtitle": "نظرة عامة على أعضاء الفريق والأدوار والصلاحيات.",
        "users.addUser": "إضافة مستخدم",
        "users.exportCSV": "تصدير CSV",
        "users.totalUsers": "إجمالي المستخدمين",
        "users.activeNow": "نشط الآن",
        "users.newJoiners": "منضمون جدد",
        "users.suspended": "معلق",
        "users.fromLastMonth": "من الشهر الماضي",
        "users.sinceLastHour": "منذ الساعة الأخيرة",
        "users.inLast7Days": "في آخر 7 أيام",
        "users.requiresAttention": "يتطلب الانتباه",
        "users.searchUsers": "البحث عن المستخدمين...",
        "users.user": "المستخدم",
        "users.role": "الدور",
        "users.status": "الحالة",
        "users.lastActive": "آخر نشاط",
        "users.actions": "الإجراءات",

        // Sidebar
        "sidebar.dashboard": "لوحة التحكم",
        "sidebar.users": "المستخدمون",
        "sidebar.settings": "الإعدادات",
        "sidebar.logout": "تسجيل الخروج",
        "sidebar.superAdmin": "مدير النظام",

        // Login
        "login.title": "مرحباً بعودتك",
        "login.subtitle": "قم بتسجيل الدخول إلى حسابك للمتابعة",
        "login.email": "البريد الإلكتروني",
        "login.password": "كلمة المرور",
        "login.rememberMe": "تذكرني",
        "login.forgotPassword": "نسيت كلمة المرور؟",
        "login.signIn": "تسجيل الدخول",
        "login.secureAndTrusted": "منصة آمنة وموثوقة",

        // User Form
        "userForm.title": "إضافة مستخدم جديد",
        "userForm.description": "إنشاء حساب مستخدم جديد مع الدور والصلاحيات.",
        "userForm.name": "الاسم الكامل",
        "userForm.namePlaceholder": "أدخل الاسم الكامل",
        "userForm.email": "البريد الإلكتروني",
        "userForm.emailPlaceholder": "user@example.com",
        "userForm.password": "كلمة المرور",
        "userForm.confirmPassword": "تأكيد كلمة المرور",
        "userForm.role": "الدور",
        "userForm.selectRole": "اختر الدور",
        "userForm.roleUser": "مستخدم",
        "userForm.roleAdmin": "مدير",
        "userForm.roleSuperAdmin": "مدير النظام",
        "userForm.status": "الحالة",
        "userForm.selectStatus": "اختر الحالة",
        "userForm.statusActive": "نشط",
        "userForm.statusBlocked": "محظور",
        "userForm.maxManagedUsers": "الحد الأقصى للمستخدمين المدارين",
        "userForm.cancel": "إلغاء",
        "userForm.createUser": "إنشاء مستخدم",
        "userForm.creating": "جاري الإنشاء...",
    },
};

const LanguageContext = createContext<LanguageContextType>({
    language: "en",
    toggleLanguage: () => { },
    t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (typeof window !== "undefined") {
            const savedLanguage = localStorage.getItem("language") as Language | null;
            if (savedLanguage) {
                setLanguage(savedLanguage);
            }
        }
    }, []);

    useEffect(() => {
        if (mounted && typeof window !== "undefined") {
            localStorage.setItem("language", language);
            document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
            document.documentElement.lang = language;
        }
    }, [language, mounted]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "ar" : "en"));
    };

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations.en] || key;
    };

    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    return context;
}
