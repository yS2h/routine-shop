// Move Login component here
export default function Login() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-white">
            <div className="flex flex-col items-center px-6 space-y-4">
                <h1 className="text-3xl font-bold text-blue-500">Routine #</h1>

                <input
                    type="text"
                    placeholder="Id"
                    className="w-64 border rounded p-2"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-64 border rounded p-2"
                />
                <button
                    onClick={() => {
                        localStorage.setItem("isLoggedIn", "true");
                        window.location.reload();
                    }}
                    className="w-64 bg-[#57aeff] text-white py-2 rounded"
                >
                    Log in
                </button>

                <div className="mt-4 text-sm text-gray-600">SNS 계정으로 이용하기</div>
                <img src="/images/kakao.png" alt="kakao login" className="w-40" />
                <img src="/images/naver.png" alt="naver login" className="w-40" />
            </div>
        </div>
    );
}