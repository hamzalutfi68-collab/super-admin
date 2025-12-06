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
    // نفترض endpoint /login يرجع { token: "..." , user: { ... } } أو على الأقل { token }
    const { data } = await apiClient.post("/login", { email, password });

    // تأكد أن السيرفر يرجع token
    const token = data?.token ?? data?.accessToken ?? null;
    if (!token) throw new Error("No token returned from server");

    // خزن التوكن (خيار بسيط — لاحقاً أذكر البديل الآمن)
    localStorage.setItem("@auth_token", token);

    toast("Logged in successfully");
    return { token, raw: data };
  } catch (error: any) {
    // لو ApiError من interceptor رح يكون شكله ApiError
    const message = error?.message ?? "Login failed";
    toast.error(message);
    throw error; // أعد رمي الخطأ عشان الفورم يعرف أنه فشل
  }
};
