import { Calendar, CheckCircle } from 'lucide-react'
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

  return (
    <div
      onClick={() => navigate(`/routine/${routine.id}`)}
      className="relative w-[320px] h-[95px] rounded-[10px] overflow-hidden bg-[linear-gradient(180deg,rgba(116,188,255,1)_0%,rgba(133,190,216,0.8)_100%)] cursor-pointer"
    >
      <div className="absolute top-4 left-[255px] w-[57px] h-[61px]">
        <div className="relative w-[55px] h-[61px]">
          <div className="relative h-[55px] top-1.5 bg-white/20 rounded-full">
            <div className="absolute inset-0 rounded-full">
              <svg className="w-full h-full transform -rotate-0" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.6"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#FFE066"
                  strokeWidth="3"
                  strokeDasharray={`${routine.progressPercent}, ${100 - routine.progressPercent}`}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="absolute top-[26px] left-[15px] text-white text-xs font-bold text-center leading-[9px]">
            {routine.progressPercent}%
          </div>
        </div>
      </div>

      <div className="absolute top-[23px] left-[90px] text-white text-base font-bold leading-none whitespace-nowrap">
        {routine.title}
      </div>

      <img
        src={routine.thumbnailUrl}
        alt="루틴 이미지"
        className="absolute top-[20px] left-[16px] w-[62px] h-[58px] object-cover rounded-[8px]"
      />

      <div className="absolute top-[53px] left-[90px] flex items-center gap-[3px]">
        <Calendar className="w-[20px] h-[20px] text-white" />
        <span className="text-white text-[13px] leading-[9px] tracking-[1.5px] font-normal">
          {routine.dDayLabel ?? 'D-Day 정보 없음'}
        </span>
      </div>

      <div className="absolute top-[53px] left-[150px] flex items-center gap-[6px]">
        <CheckCircle className="w-[20px] h-[20px] text-white" />
        <span className="text-white text-[13px] leading-[9px] tracking-[1.5px] font-normal">
          {routine.verifiedCount}회 인증
        </span>
      </div>
    </div>
  )
}

export default MyRoutine
