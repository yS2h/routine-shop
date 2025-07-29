
import Header from '@/components/Header'
import PurchaseBar from '@/components/PurchaseBar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Star } from 'lucide-react'

export default function Purchase() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[360px] px-4 relative min-h-screen space-y-6 pb-[120px] pt-28">
        <Header />
        <div className="space-y-4">
          <img
            src="https://img.freepik.com/free-vector/woman-measuring-her-waist-illustration_53876-43294.jpg?semt=ais_hybrid&w=740"
            alt="루틴 이미지"
            className="w-full h-[290px] object-cover rounded-xl"
          />

          <Badge className="bg-white border border-[var(--stroke)] rounded-[20px] w-fit px-4 py-1 text-[15px] font-bold text-[var(--font)]">
            #운동
          </Badge>
          <div className="flex justify-between items-start">
            <div className="text-[25px] font-extrabold text-[var(--font)] leading-tight">
              30일 개미 허리 챌린지
            </div>
            <div className="text-sm text-[var(--font)] whitespace-nowrap">by 김계란</div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-[25px] font-bold text-[#0048ff]">3,500P</div>
            <div className="flex items-center gap-1 text-xs text-[var(--font)]">
              <Star className="w-[14px] h-[14px] fill-[#ffd400] text-[#ffd400]" />
              <span>4</span>
              <span className="text-[#8f8f8f] underline ml-1">후기 15개</span>
            </div>
          </div>

          <Separator />

          <div className="text-[15px] text-[var(--font)] leading-relaxed whitespace-pre-line px-2">
            <span className="font-extrabold">지금부터 단 30일!{'\n'}</span>
            폭염보다 뜨거운 개미 허리 만들기 시작!{'\n\n'}
            💪 하루 10분이면 OK{'\n'}
            📅 30일 루틴 자동 제공{'\n'}
            🎯 눈바디 & 체중 기록 가능{'\n\n'}
            💡 누적 참가자 12,000명 돌파!{'\n\n'}
            {'"'}처음엔 힘들었는데… 이젠 거울 보는 게 즐거워요{'"'}
            {'\n'}– 사용자 리뷰 ⭐⭐⭐⭐⭐
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-10">
        <PurchaseBar />

      </div>
    </div>
  )
}
