import { useNavigate } from 'react-router-dom'

interface MyRoutineProps {
  routine: {
    id: number
    title: string
    thumbnailUrl: string
    dDayLabel: string
    verifiedCount: number
    progressPercent: number
  }
}

const MyRoutine = ({ routine }: MyRoutineProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/routine/${routine.id}`)
  }

  return (
    <div onClick={handleClick} className="flex items-center bg-blue-100 rounded-xl p-3 mb-3">
      <img
        src={routine.thumbnailUrl}
        alt="썸네일"
        className="w-14 h-14 rounded object-cover mr-4"
      />
      <div className="flex-1">
        <h2 className="text-sm font-bold">{routine.title}</h2>
        <p className="text-xs text-gray-600">
          {routine.dDayLabel ?? 'D-Day 정보 없음'} · {routine.verifiedCount}회 인증
        </p>
      </div>
      <div className="text-blue-500 font-bold text-sm">{routine.progressPercent}%</div>
    </div>
  )
}

export default MyRoutine
