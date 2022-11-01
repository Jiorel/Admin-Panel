import React, { createContext, useContext, useState, useEffect } from "react";
import { Login, Signup, User } from "types";
import * as api from "api";

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  login: (data: Login) => Promise<void>;
  signup: (data: Signup) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  loading: true,
  user: null,
  login: () => Promise.resolve(),
  signup: () => Promise.resolve(),
  logout: () => void 0,
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const handleLogin = async (data: Login) => {
    const response = await api.login(data);

    localStorage.setItem("user", JSON.stringify(response.data.user));
    setUser(response.data.user);
  };

  const handleSignup = async (data: Signup) => {
    const response = await api.signup(data);

    localStorage.setItem("user", JSON.stringify(response.data.user));
    setUser(response.data.user);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const localStorageUser = localStorage.getItem("user");

    if (localStorageUser) {
      setUser(JSON.parse(localStorageUser));
    }

    setLoading(false);
  }, []);

  const value: AuthContextValue = {
    user,
    loading,
    login: handleLogin,
    signup: handleSignup,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
