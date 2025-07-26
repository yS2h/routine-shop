import { useEffect, useState } from "react";

// Move Login component here
function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 space-y-4 bg-white">
      <h1 className="text-3xl font-bold text-blue-500">Routine #</h1>

      <input
        type="text"
        placeholder="Id"
        className="w-full max-w-xs border rounded p-2"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full max-w-xs border rounded p-2"
      />
      <button
        onClick={() => {
          localStorage.setItem("isLoggedIn", "true");
          window.location.reload();
        }}
        className="w-full max-w-xs bg-[#57aeff] text-white py-2 rounded"
      >
        Log in
      </button>

      <div className="mt-4 text-sm text-gray-600">SNS 계정으로 이용하기</div>
      <img src="/images/kakao.png" alt="kakao login" className="w-40" />
      <img src="/images/naver.png" alt="naver login" className="w-40" />
    </div>
  );
}

export default function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-xl font-bold">프로필 화면입니다</h1>
    </div>
  );
}