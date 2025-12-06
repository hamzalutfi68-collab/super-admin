
"use client";
import React, { createContext, useEffect, useState } from "react";
import { decodeToken } from "@/utils/auth";

type AuthState = {
  token: string | null;
  role: string | null;
  user: any | null;
  loading: boolean;
};

const defaultState: AuthState = {
  token: null,
  role: null,
  user: null,
  loading: true,
};

export const AuthContext = createContext<{
  state: AuthState;
  setToken: (t: string | null) => void;
}>({
  state: defaultState,
  setToken: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>(defaultState);

  useEffect(() => {
    const token = localStorage.getItem("@auth_token");
    if (token) {
      const decoded = decodeToken(token);
      setState({
        token,
        role: decoded?.role ?? null,
        user: decoded ?? null,
        loading: false,
      });
    } else {
      setState({ ...defaultState, loading: false });
    }
  }, []);

  const setToken = (t: string | null) => {
    if (t) localStorage.setItem("@auth_token", t);
    else localStorage.removeItem("@auth_token");

    const decoded = t ? decodeToken(t) : null;
    setState({
      token: t,
      role: decoded?.role ?? null,
      user: decoded ?? null,
      loading: false,
    });
  };

  return <AuthContext.Provider value={{ state, setToken }}>{children}</AuthContext.Provider>;
};
