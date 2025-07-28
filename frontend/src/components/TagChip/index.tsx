import { Badge } from '@/components/ui/badge'

const TAG_TEXT_MAP = {
  운동: '#운동',
  다이어트: '#다이어트',
  뷰티: '#뷰티',
  공부: '#공부',
  건강: '#건강',
  재테크: '#재테크',
} as const

export type TagType = keyof typeof TAG_TEXT_MAP

const TagChip = ({ type }: { type: TagType }) => {
  return (
    <Badge
      variant="outline"
      className="h-[17px] px-3.5 py-2.5 bg-white rounded-[10px] border-[0.5px] border-solid border-variable-collection-stroke items-center justify-center "
    >
      <span className="text-[9px] text-variable-collection-font  whitespace-nowrap leading-normal mt-[-6.50px] mb-[-5.50px] ml-[-8.00px] mr-[-8.00px] ">
        {TAG_TEXT_MAP[type]}
      </span>
    </Badge>
  )
}

export default TagChip
