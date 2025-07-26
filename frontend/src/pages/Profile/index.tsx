import { useEffect, useState } from 'react'
import Login from "../Login/index";
export default function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  if (!isLoggedIn) {
    return <Login/>;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4">
      <h1 className="text-2xl font-bold mb-4">내 프로필 화면입니다</h1>
      <button
        onClick={() => {
          localStorage.removeItem("isLoggedIn");
          window.location.reload();
        }}
        className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        로그아웃
      </button>
    </div>
  );
}