import {jwtDecode} from "jwt-decode";

export type DecodedToken = {
  // ضيف الحقول اللي السيرفر يرجعها داخل الـ payload
  id?: number | string;
  email?: string;
  role?: string;
  exp?: number;
  iat?: number;
  [key: string]: any;
};

export const getToken = () => {
  try {
    return localStorage.getItem("@auth_token");
  } catch {
    return null;
  }
};

export const decodeToken = (token?: string): DecodedToken | null => {
  try {
    if (!token) token = getToken() || undefined;
    if (!token) return null;
    return jwtDecode<DecodedToken>(token);
  } catch {
    return null;
  }
};

export const getUserRoleFromToken = () => {
  const decoded = decodeToken();
  return decoded?.role ?? null;
};

export const isTokenExpired = (token?: string) => {
  const decoded = decodeToken(token);
  if (!decoded?.exp) return false; // لو ما فيه expiry، افترض لا
  const now = Math.floor(Date.now() / 1000);
  return decoded.exp < now;
};