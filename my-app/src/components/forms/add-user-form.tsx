"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";
import RHFInput from "../react-hook-forms/rhf-input";
import RHFSelect from "../react-hook-forms/rhf-select";
import { Button } from "../ui/button";
import { userFormSchema } from "@/lib/form/user";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SignUpApiMethod } from "@/lib/API/auth";

interface AddUserFormProps {
    onSuccess?: () => void;
}

function AddUserForm({ onSuccess }: AddUserFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const { t } = useLanguage();

    const form = useForm<z.infer<typeof userFormSchema>>({
        resolver: zodResolver(userFormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "user",
            status: "active",
            managerId: "",
            maxManagedUsers: '',
        },
        mode: "onChange",
    });

    const selectedRole = form.watch("role");
    const showMaxManagedUsers = selectedRole === "admin" || selectedRole === "superAdmin";

    const onSubmit = async (values: z.infer<typeof userFormSchema>) => {
        try {
            setIsLoading(true);
            console.log("Creating user with values:", values);
            console.log("Role being sent:", values.role);
            console.log("Status being sent:", values.status);

            // Call the backend API to create user (exclude confirmPassword)
            const response = await SignUpApiMethod({
                email: values.email,
                password: values.password,
                confirmPassword: values.confirmPassword,
                name: values.name,
                role: values.role,
                status: values.status,
                managerId: values.managerId || "",
                maxManagedUsers: values.maxManagedUsers || '',
            });

            console.log("User created successfully:", response);
            form.reset();
            onSuccess?.();
        } catch (error) {
            console.error("Error creating user:", error);
            // Error is already handled by SignUpApiMethod with toast
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <RHFInput
                    name="name"
                    label={t("userForm.name")}
                    type="text"
                    placeholder={t("userForm.namePlaceholder")}
                />

                <RHFInput
                    name="email"
                    label={t("userForm.email")}
                    type="email"
                    placeholder={t("userForm.emailPlaceholder")}
                />

                <RHFInput
                    name="password"
                    label={t("userForm.password")}
                    type="password"
                    placeholder="••••••••"
                />

                <RHFInput
                    name="confirmPassword"
                    label={t("userForm.confirmPassword")}
                    type="password"
                    placeholder="••••••••"
                />

                <RHFSelect
                    name="role"
                    label={t("userForm.role")}
                    placeholder={t("userForm.selectRole")}
                    options={[
                        { value: "user", label: t("userForm.roleUser") },
                        { value: "admin", label: t("userForm.roleAdmin") },
                        { value: "superAdmin", label: t("userForm.roleSuperAdmin") },
                    ]}
                />

                <RHFSelect
                    name="status"
                    label={t("userForm.status")}
                    placeholder={t("userForm.selectStatus")}
                    options={[
                        { value: "active", label: t("userForm.statusActive") },
                        { value: "blocked", label: t("userForm.statusBlocked") },
                    ]}
                />

                {showMaxManagedUsers && (
                    <RHFInput
                        name="maxManagedUsers"
                        label={t("userForm.maxManagedUsers")}
                        type="text"
                        placeholder="1"
                    />
                )}

                <div className="flex justify-end gap-3 pt-4">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => form.reset()}
                        disabled={isLoading}
                        className="border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300"
                    >
                        {t("userForm.cancel")}
                    </Button>
                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-200"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                {t("userForm.creating")}
                            </>
                        ) : (
                            t("userForm.createUser")
                        )}
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
}

export default AddUserForm;
