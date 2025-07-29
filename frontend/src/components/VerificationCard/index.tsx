import { format, isSameDay } from 'date-fns'

interface VerifiedInfo {
  verified: boolean
  date?: string
}

interface VerificationCardProps {
  day: number
  currentDate: Date
  today: Date
  verifiedInfo: VerifiedInfo
  onVerify: () => void
}

export default function VerificationCard({
  day,
  currentDate,
  today,
  verifiedInfo,
  onVerify,
}: VerificationCardProps) {
  const isVerified = verifiedInfo.verified
  const isToday = isSameDay(today, currentDate)

  const displayDate =
    isVerified && verifiedInfo.date
      ? `인증일: ${format(new Date(verifiedInfo.date), 'yyyy/MM/dd')}`
      : format(currentDate, 'MM/dd')

  return (
    <div className="flex items-center justify-between bg-white border rounded-xl px-4 py-3 shadow-sm">
      <div className="flex items-center gap-3">
        <img src="/health.svg" alt="health icon" className="w-6 h-6" />
        <div>
          <div className="text-sm font-medium text-gray-900">Day {day}</div>
          <div className={`text-xs ${isVerified ? 'text-blue-500' : 'text-gray-400'}`}>
            {displayDate}
          </div>
        </div>
      </div>
      {isVerified ? (
        <img src="/check.svg" alt="check" className="w-5 h-5" />
      ) : isToday ? (
        <button
          onClick={onVerify}
          className="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full"
        >
          인증하기
        </button>
      ) : (
        <div className="text-gray-400 text-sm">당일 인증</div>
      )}
    </div>
  )
}
