import { Badge } from '@/components/ui/badge'

const TAG_TEXT_MAP = {
  운동: '#운동',
  다이어트: '#다이어트',
  뷰티: '#뷰티',
  일상: '#일상',
  재테크: '#재테크',
} as const

type TagType = keyof typeof TAG_TEXT_MAP

const TagChip = ({ type }: { type: TagType }) => {
  return (
    <Badge
      variant="outline"
      className="h-[17px] px-1 py-[1px] rounded-[10px] border-[0.5px] border-variable-collection-stroke bg-white inline-flex items-center justify-center "
    >
      <span className="text-[8px] text-variable-collection-font  whitespace-nowrap ">
        {TAG_TEXT_MAP[type]}
      </span>
    </Badge>
  )
}

export default TagChip
