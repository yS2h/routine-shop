import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'

export default function PurchaseBar() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[393px] h-[98px] z-50">
      <div className="relative w-full h-full px-[35px] py-[27px]">
        <div className="absolute inset-0 bg-[#fbfbfb] rounded-t-[30px] shadow-[2px_0px_40px_#00000014] z-0" />
        <div className="relative z-10 flex justify-center items-center h-full gap-[15px]">
          <div className="flex flex-col items-center w-[36px] h-[43px]">
            <Heart className="w-[30px] h-[30px] text-[var(--main)]" />
            <div className="w-[35px] text-[10px] text-[var(--font)] text-center font-light leading-none">
              찜하기
            </div>
          </div>

          <Button className="w-[120px] h-[43px] bg-white border-2 !border-[rgba(87,174,255,0.4)] rounded-[10px] hover:bg-gray-50">
            <div className="text-sm font-bold text-[var(--main)] whitespace-nowrap">
              장바구니 담기
            </div>
          </Button>

          <Button className="w-[120px] h-[43px] bg-[var(--main)] rounded-[10px] hover:opacity-90">
            <div className="text-sm font-bold text-white whitespace-nowrap ">구매하기</div>
          </Button>
        </div>
      </div>
    </div>
  )
}
