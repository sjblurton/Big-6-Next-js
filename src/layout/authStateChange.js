import React, { useEffect, useState } from "react";
import useAuth from "../hooks/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { HeroLoader } from "../../components/loading";

const AuthStateChange = ({ children }) => {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      user !== null ? setUser(user) : setUser(null);
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <HeroLoader />;
  }
  return children;
};

export default AuthStateChange;
