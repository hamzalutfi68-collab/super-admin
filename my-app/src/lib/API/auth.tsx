import apiClient from "./config";
import { toast } from "sonner";

export const loginApiMethod = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    // 1. استدعاء السيرفر
    const response = await apiClient.post("auth/login", { email, password });

    // axios يضع الرد الفعلي داخل .data، والباك إند يضع البيانات داخل .data أيضاً
    const serverResponse = response.data;

    // 2. استخراج التوكن (الحل هنا 👇)
    // نبحث عنه داخل data.data.accessToken لأن الباك إند وضعه داخل كائن
    const token =
      serverResponse?.data?.accessToken ?? // الاحتمال الأقوى بناءً على ApiResponse
      serverResponse?.accessToken ??       // احتمال احتياطي
      serverResponse?.token ??             // احتمال احتياطي آخر
      null;

    if (!token) {
      console.log("Full Server Response:", serverResponse); // للطباعة في حال الفشل
      throw new Error("No token returned from server");
    }

    // 3. تخزين التوكن
    localStorage.setItem("@auth_token", token);

    // يفضل تخزين الـ User أيضاً إذا كنت تحتاجه
    if (serverResponse?.data?.user) {
      localStorage.setItem("@auth_user", JSON.stringify(serverResponse.data.user));
    }

    toast("Logged in successfully");

    // إرجاع التوكن ليستخدمه الـ Form
    return { token, raw: serverResponse };

  } catch (error: any) {
    const message = error?.response?.data?.message ?? error?.message ?? "Login failed";
    toast.error(message);
    throw error;
  }
};
export const SignUpApiMethod = async ({
  email,
  password,
  confirmPassword,
  name,
  role,
  status,
  managerId,
  maxManagedUsers,
}: {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  role: string;
  status: string;
  managerId: string;
  maxManagedUsers: string;
}) => {
  try {
    const payload = {
      email,
      password,
      confirmPassword,
      name,
      role,
      status,
      managerId,
      maxManagedUsers
    };
    console.log("SignUpApiMethod - Sending payload to backend:", payload);
    console.log("SignUpApiMethod - Role value:", role);

    const response = await apiClient.post("/users", payload);
    const serverResponse = response.data;

    // /users endpoint doesn't return tokens (admin-created users)
    const token = serverResponse?.data?.accessToken ?? serverResponse?.accessToken ?? serverResponse?.token ?? null;

    if (token) {
      localStorage.setItem("@auth_token", token);
      if (serverResponse?.data?.user) {
        localStorage.setItem("@auth_user", JSON.stringify(serverResponse.data.user));
      }
    }

    toast("User created successfully");
    return { token, raw: serverResponse };
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error?.message ?? "Sign up failed";
    toast.error(message);
    throw error;
  }
};