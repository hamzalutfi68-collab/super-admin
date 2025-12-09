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