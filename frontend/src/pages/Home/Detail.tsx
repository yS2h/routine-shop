import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Heart, Star } from 'lucide-react'

export default function Purchase() {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[393px] h-[852px] relative">
        {/* Header Logo */}
        <div className="flex w-[132px] items-center gap-[11.91px] absolute top-[61px] left-[35px] bg-white">
          <img src="" alt="Routine Logo" className="w-[102.23px] h-[17.02px]" />
        </div>

        {/* Product Image */}
        <img
          className="absolute w-[327px] h-[290px] top-[125px] left-[33px] object-cover rounded-lg"
          alt="30일 개미 허리 챌린지 상품 이미지"
          src=""
        />

        {/* Tag */}
        <Badge
          variant="outline"
          className="absolute top-[418px] left-[46px] bg-white rounded-[10px] border-[0.5px] border-solid border-variable-collection-stroke"
        >
          <div className="font-bold text-variable-collection-font text-[15px] text-center tracking-[0]">
            #운동
          </div>
        </Badge>

        {/* Title */}
        <div className="absolute top-[454px] left-[46px] font-extrabold text-variable-collection-font text-[25px] whitespace-nowrap tracking-[0]">
          30일 개미 허리 챌린지
        </div>

        {/* Author */}
        <div className="absolute top-[465px] left-[295px] text-[15px] font-normal text-variable-collection-font whitespace-nowrap">
          by 김계란
        </div>

        {/* Price */}
        <div className="absolute top-[508px] left-[47px] font-bold text-[#0048ff] text-[25px] whitespace-nowrap">
          3,500P
        </div>

        {/* Rating */}
        <div className="inline-flex items-center gap-1 absolute top-[519px] left-[268px]">
          <div className="inline-flex items-center">
            <Star className="w-[14.27px] h-[13.57px] fill-yellow-400 text-yellow-400" />
            <div className="text-xs text-variable-collection-font">4</div>
          </div>
          <div className="text-xs text-[#8f8f8f] underline">후기 15개</div>
        </div>

        {/* Separator */}
        <Separator className="absolute w-[299px] top-[539px] left-12" />

        {/* 설명 + 구매영역 */}
        <div className="absolute w-[393px] h-[252px] top-[600px] left-0">
          <div className="absolute top-0 left-[62px] text-black text-xl">
            <span className="font-extrabold">
              지금부터 단 30일!
              <br />
            </span>
            <span className="text-base">
              폭염보다 뜨거운 개미 허리 만들기 시작!
              <br />
              <br />
              💪 하루 10분이면 OK
              <br />
              📅 30일 루틴 자동 제공
              <br />
              🎯 눈바디 & 체중 기록 가능
              <br />
              <br />
              💡 누적 참가자 12,000명 돌파!
              <br />
              <br />
              "처음엔 힘들었는데…
              <br />
              이젠 거울 보는 게 즐거워요"
              <br />– 사용자 리뷰 ⭐⭐⭐⭐⭐
            </span>
          </div>

          {/* 하단 액션 영역 */}
          <div className="absolute w-[393px] h-[98px] top-[154px] left-0 bg-[#fbfbfb] rounded-t-[30px] shadow-[2px_0px_40px_#00000014]" />

          {/* 구매 버튼 */}
          <Button className="absolute top-[182px] left-60 w-[120px] h-[43px] bg-main rounded-[10px]">
            <div className="font-extrabold text-white text-sm">구매하기</div>
          </Button>

          {/* 장바구니 */}
          <Button
            variant="outline"
            className="absolute top-[182px] left-[95px] w-[120px] h-[43px] bg-white border border-main rounded-[10px]"
          >
            <div className="font-extrabold text-main text-sm">장바구니 담기</div>
          </Button>

          {/* 찜하기 */}
          <div className="flex flex-col w-[35px] h-[43px] items-center absolute top-[182px] left-[35px]">
            <Heart className="w-[30px] h-[30px]" />
            <div className="text-[10px] text-variable-collection-dark text-center">찜하기</div>
          </div>
        </div>
      </div>
    </div>
  )
}
