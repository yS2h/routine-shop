import Header from '@/components/Header'
import { useState } from 'react'

export default function Profile() {
  const [nickname, setNickname] = useState('두목님이시다')
  const [editing, setEditing] = useState(false)
  const email = 'doomok1@java1.com'
  const point = 50000

  const handleEditToggle = () => {
    setEditing((prev) => !prev)
  }

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value)
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-[360px] px-4 relative min-h-screen space-y-6 pb-[120px] pt-30">
        <Header />
        <div className="p-4 space-y-6">
          <h2 className="text-lg">내 프로필</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/default-profile.png"
                alt="프로필 이미지"
                className="w-15 aspect-square rounded-full object-cover border"
              />
              <div>
                <p className="text-lg font-semibold">{nickname}</p>
                <p className="text-sm text-gray-500">{email}</p>
              </div>
            </div>
            <button className="text-xs text-red-500 underline whitespace-nowrap">로그아웃</button>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">닉네임</label>
            <div className="flex gap-2 mt-1">
              <input
                type="text"
                value={nickname}
                onChange={handleNicknameChange}
                readOnly={!editing}
                className={`w-full border px-3 py-1.5 text-sm rounded-[10px] ${editing ? '' : 'bg-gray-100'}`}
                style={{ height: '40px' }}
              />
              <button
                onClick={handleEditToggle}
                style={{
                  backgroundColor: 'var(--main)',
                  color: 'white',
                  width: '60px',
                  height: '40px',
                  fontSize: '12px',
                  borderRadius: '10px',
                  lineHeight: '1',
                }}
              >
                {editing ? '저장' : '수정'}
              </button>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">보유 포인트</label>
            <div
              className="mt-1 text-sm border bg-gray-100 text-gray-700 px-3 py-1.5 rounded-[10px] flex items-center"
              style={{ height: '40px' }}
            >
              {point.toLocaleString()}P
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
