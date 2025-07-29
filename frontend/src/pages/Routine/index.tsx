import Header from '@/components/Header'
import MyRoutine from '@/components/MyRoutine'
import { differenceInDays } from 'date-fns'

export default function Routine() {
  const dummyRoutine = {
    id: 1,
    title: '30일 개미 허리 챌린지',
    thumbnailUrl:
      'https://img.freepik.com/free-vector/woman-measuring-her-waist-illustration_53876-43294.jpg?semt=ais_hybrid&w=740',
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
    <div className="w-full flex justify-center">
      <div className="w-[360px] px-4 relative min-h-screen space-y-6 pb-[120px]">
        <Header />
        <div className="pt-[130px] px-1 text-base">내 루틴</div>

        <div className="space-y-5 flex flex-col items-center">
          <MyRoutine routine={enrichedRoutine} />
        </div>
      </div>
    </div>
  )
}
