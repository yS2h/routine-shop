import { useEffect, useState } from "react";
import Login from "@/pages/Login"; // 로그인 화면 컴포넌트
import MyProfile from "./MyProfile"; // 기존의 프로필 화면

export default function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  return isLoggedIn ? <MyProfile /> : <Login />;
}