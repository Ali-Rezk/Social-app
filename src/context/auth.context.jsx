import { createContext, useEffect, useState } from "react";
import { getUserData } from "../apis/userdata.api";

export const auth = createContext(null);

export default function AuthContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(null);
  const [userData, setUserData] = useState(null);

  async function getUserDataFn() {
    const res = await getUserData();
    setUserData(res.user);
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(localStorage.getItem("token"));
      getUserDataFn();
    }
  }, []);

  return (
    <auth.Provider value={{ isLogin, setIsLogin, userData }}>
      {children}
    </auth.Provider>
  );
}
