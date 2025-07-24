import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { format, addDays, isSameDay } from 'date-fns'
import RoutineVerificationCard from '@/components/VerificationCard'

interface VerifiedInfo {
  verified: boolean
  date?: string
}

export default function RoutineDetailPage() {
  const { id } = useParams()
  const totalDays = 30

  const startDate = new Date()
  const today = new Date()
  const STORAGE_KEY = `routine-${id}-verifications`

  const getInitialState = (): VerifiedInfo[] => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch {
        return Array(totalDays).fill({ verified: false })
      }
    }
    return Array(totalDays).fill({ verified: false })
  }

  const [verifiedDays, setVerifiedDays] = useState<VerifiedInfo[]>(getInitialState)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(verifiedDays))
  }, [verifiedDays])

  const handleVerify = (index: number, currentDate: Date) => {
    if (verifiedDays[index].verified) return
    if (!isSameDay(today, currentDate)) return

    const updated = [...verifiedDays]
    updated[index] = {
      verified: true,
      date: new Date().toISOString(),
    }
    setVerifiedDays(updated)
  }

  return (
    <div className="p-5 pt-8 mt-20">
      <h3 className="text-lg font-semibold text-black mb-1">30일 개미 허리 챌린지</h3>
      <p className="text-xs text-gray-500 mb-5">
        {format(startDate, 'yy/MM/dd')} ~ {format(addDays(startDate, totalDays - 1), 'yy/MM/dd')}
      </p>

      <div className="space-y-2">
        {Array.from({ length: totalDays }, (_, index) => {
          const day = index + 1
          const currentDate = addDays(startDate, index)

          return (
            <RoutineVerificationCard
              key={day}
              day={day}
              currentDate={currentDate}
              today={today}
              verifiedInfo={verifiedDays[index]}
              onVerify={() => handleVerify(index, currentDate)}
            />
          )
        })}
      </div>
    </div>
  )
}
