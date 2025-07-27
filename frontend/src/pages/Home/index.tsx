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
        'https://private-user-images.githubusercontent.com/141344997/471197181-66263e45-82b3-4a94-a895-444fe4353b4c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTM2MTgxODEsIm5iZiI6MTc1MzYxNzg4MSwicGF0aCI6Ii8xNDEzNDQ5OTcvNDcxMTk3MTgxLTY2MjYzZTQ1LTgyYjMtNGE5NC1hODk1LTQ0NGZlNDM1M2I0Yy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcyN1QxMjA0NDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yMzVhOWVmYzVlZWJkMjYwYzJjZmJjOWUxM2Y3Yjg4NTY2MjgxYjdkNzk1MjE1M2Q1M2UzNWU0MzdlZTcwZmQ0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.gmn-mkxkvjgtftasoKvfJMbPw4QPOL-8EDu8bCKJfvc',
    },
    {
      title: '하루 1잔 물마시기',
      author: '물먹는하마',
      price: 1000,
      tag: '건강' as const,
      imageUrl:
        'https://private-user-images.githubusercontent.com/141344997/471201295-0db7cc47-b354-4287-9aa4-f9da8fd93790.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTM2MTk4NDUsIm5iZiI6MTc1MzYxOTU0NSwicGF0aCI6Ii8xNDEzNDQ5OTcvNDcxMjAxMjk1LTBkYjdjYzQ3LWIzNTQtNDI4Ny05YWE0LWY5ZGE4ZmQ5Mzc5MC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcyN1QxMjMyMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00N2M0OWIwZmNlMDA4Y2U0ZDIyMzFkYzcyZTZkYmVkY2U2NjZjNTlkNjI0YTljZTNiY2I4M2QwYWFiOGFmZTkzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.qaWo_m3umbZ3N8hxsaBTVKbNpqF9tTOiAYkZH7J5L6Q',
    },
    {
      title: '하루 30분 독서',
      author: '북벌레',
      price: 2000,
      tag: '공부' as const,
      imageUrl:
        'https://private-user-images.githubusercontent.com/141344997/471203301-4bbc11c9-b594-4719-b9e1-5a5973987790.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTM2MTk4NDUsIm5iZiI6MTc1MzYxOTU0NSwicGF0aCI6Ii8xNDEzNDQ5OTcvNDcxMjAzMzAxLTRiYmMxMWM5LWI1OTQtNDcxOS1iOWUxLTVhNTk3Mzk4Nzc5MC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcyN1QxMjMyMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iYzgyYjAzZDY3MTRiYWQ3MzU4YTVkNmY2ZjMxNjdhNGQxNWQ1MjQzODlmMTVmMGRmMGI0ZTQ2MzE3Y2YxNWIyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.sdpmFdn7srafP9QXb6iuzZxVqwl67KGU5JXAX5ub98M',
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
        <div className="flex gap-0.5 overflow-x-auto no-scrollbar -mx-4 px-4">
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
