import { Card, CardContent } from '@/components/ui/card'
import TagChip, { type TagType } from '../TagChip'
import { useNavigate } from 'react-router-dom'

type RoutineCardProps = {
  title: string
  author: string
  price: number
  tag: TagType
  imageUrl: string
}

const RoutineCard = ({ title, author, price, tag, imageUrl }: RoutineCardProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/sell`)
  }

  return (
    <Card className="border-0 shadow-none w-[270px] cursor-pointer" onClick={handleClick}>
      <CardContent className="flex items-start gap-1.5 p-0">
        <img className="w-[90px] h-[90px] object-cover rounded-sm" alt={title} src={imageUrl} />
        <div className="flex flex-col items-start gap-[7px]">
          <div className="flex flex-col items-start gap-1.5 w-full">
            <div className="flex flex-col items-start gap-1.5 w-full">
              <h3 className="text-[14px] font-bold text-variable-collection-font tracking-[0] leading-normal mt-[-1.00px] mr-[-32.00px] w-[148px]">
                {title}
              </h3>
              <p className="text-[9px] font-normal text-variable-collection-font tracking-[-0.32px] leading-normal w-full">
                by {author}
              </p>
            </div>
            <p className="text-[12px] font-bold text-[#0048ff] tracking-[-0.44px] leading-normal w-full">
              {price.toLocaleString()} P
            </p>
          </div>
          <TagChip type={tag} />
        </div>
      </CardContent>
    </Card>
  )
}

export default RoutineCard
