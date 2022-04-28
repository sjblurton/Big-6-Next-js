import React, { createContext, useContext, useState } from "react";
import { AuthService } from "../service/authService";
import { FirestoreService } from "../service/firestoreService";

const authContext = createContext();

export default function useAuth() {
  return useContext(authContext);
}

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const loginWithGoogle = async () => {
    const { error, user } = await AuthService.loginWithGoogle();
    setUser(user ?? null);
    setError(error ?? "");
    user && FirestoreService.createCollection(user);
  };

  const logout = async () => {
    const auth = await AuthService.logout();
    setUser(null);
    setError(auth?.error ?? "");
  };
  const value = { user, error, loginWithGoogle, logout, setUser };

  return <authContext.Provider value={value} {...props} />;
}
