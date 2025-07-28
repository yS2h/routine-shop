import { useState } from "react";

export default function Profile() {
  const [nickname, setNickname] = useState("두목님이시다");
  const [editing, setEditing] = useState(false);
  const email = "doomok1@java1.com";
  const point = 50000;

  const handleEditToggle = () => {
    setEditing((prev) => !prev);
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/default-profile.png"
            alt="프로필 이미지"
            className="w-16 h-16 rounded-full object-cover border"
          />
          <div>
            <p className="text-lg font-semibold">{nickname}</p>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
        </div>
        <button className="text-sm text-red-500 underline">로그아웃</button>
      </div>
      <h2 className="text-2xl font-bold">내 프로필</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">닉네임</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            readOnly={!editing}
            className={`mt-1 w-full border rounded px-3 py-2 ${editing ? "" : "bg-gray-100"}`}
          />
          <button
            onClick={handleEditToggle}
            className="px-4 py-2 text-white rounded"
            style={{ backgroundColor: '#57aeff' }}
          >
            {editing ? "저장" : "수정"}
          </button>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">보유 포인트</label>
        <div className="mt-1 px-3 py-2 border rounded bg-gray-100">
          {point.toLocaleString()}P
        </div>
      </div>
    </div>
  );
}
