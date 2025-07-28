import { useState } from 'react'
import MenuBadge from '@/components/Menu'
import Search from '@/components/Search'
import EventBanner from '@/components/EventBanner'
import RoutineCard from '@/components/RoutineCard'
import Header from '@/components/Header'

export default function Home() {
  const [selected, setSelected] = useState<string>('전체')

  const dummyRoutines = [
    {
      title: '30일 개미 허리 챌린지',
      author: '김계란',
      price: 3500,
      tag: '운동' as const,
      imageUrl:
        'https://img.freepik.com/free-vector/woman-measuring-her-waist-illustration_53876-43294.jpg?semt=ais_hybrid&w=740',
    },
    {
      title: '하루 1잔 물마시기',
      author: '물먹는하마',
      price: 1000,
      tag: '건강' as const,
      imageUrl: 'https://img.freepik.com/free-photo/clear-water-from-jug_23-2148728723.jpg',
    },
    {
      title: '하루 30분 독서',
      author: '북벌레',
      price: 2000,
      tag: '공부' as const,
      imageUrl:
        'https://images.unsplash.com/photo-1517770413964-df8ca61194a6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8JUVDJUIxJTg1fGVufDB8fDB8fHww',
    },
    {
      title: '청담동 샵) 머릿결 비결',
      author: '청담언니',
      price: 3000,
      tag: '뷰티' as const,
      imageUrl:
        'https://kormedi.com/wp-content/uploads/2018/12/shutterstock_1038740494-580x361.jpg',
    },
  ]
  return (
    <div className="w-full flex justify-center">
      <div className="w-[360px] px-4 relative min-h-screen space-y-6">
        <Header />
        <Search />
        <div className="pt-[70px]" />
        <EventBanner />
        <div className="flex overflow-x-auto no-scrollbar -mx-4 px-4">
          {['전체', '운동', '공부', '건강', '다이어트', '뷰티', '일상', '재테크'].map((label) => (
            <MenuBadge key={label} active={selected === label} onClick={() => setSelected(label)}>
              {label}
            </MenuBadge>
          ))}
        </div>

        <div className="grid grid-cols-1">
          {dummyRoutines
            .filter((routine) => selected === '전체' || routine.tag === selected)
            .map((routine, idx) => (
              <RoutineCard key={idx} {...routine} />
            ))}
        </div>
      </div>
    </div>
  )
}
