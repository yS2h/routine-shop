import MyRoutine from '@/components/MyRoutine'
import { differenceInDays } from 'date-fns'

export default function Routine() {
  const dummyRoutine = {
    id: 1,
    title: '30일 개미 허리 챌린지',
    thumbnailUrl: 'https://i.imgur.com/1xA4Uqu.png',
    verifiedCount: 4,
    totalDays: 30,
    startDate: '2025-07-20',
    category: '운동',
    price: 500,
  }

  const today = new Date()
  const startDate = new Date(dummyRoutine.startDate)
  const daysDiff = differenceInDays(today, startDate)
  const dDayLabel = daysDiff >= 0 ? `D+${daysDiff}` : `D${daysDiff}`
  const progressPercent = Math.round((dummyRoutine.verifiedCount / dummyRoutine.totalDays) * 100)

  const enrichedRoutine = {
    ...dummyRoutine,
    dDayLabel,
    progressPercent,
  }

  return (
    <div className="relative min-h-screen px-4 space-y-6">
      <div className="pt-[150px] px-1 text-base">내 루틴</div>

      <div className="space-y-5">
        <MyRoutine routine={enrichedRoutine} />
      </div>
    </div>
  )
}
