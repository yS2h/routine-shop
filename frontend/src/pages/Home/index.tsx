import { useState } from 'react'
import MenuBadge from '@/components/Menu'
import Search from '@/components/Search'
import EventBanner from '@/components/EventBanner'

export default function Home() {
    const [selected, setSelected] = useState<string>('전체')

    return (
        <div className="relative min-h-screen px-4 space-y-6">
            <Search />
            <EventBanner />

            <div className="pt-[150px]">🏠 홈 페이지</div>

            <div className="flex gap-2">
                {['전체', '운동', '공부'].map((label) => (
                    <MenuBadge key={label} active={selected === label} onClick={() => setSelected(label)}>
                        {label}
                    </MenuBadge>
                ))}
            </div>
        </div>
    )
}