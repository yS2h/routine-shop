import clsx from 'clsx'
import { Badge } from '@/components/ui/badge'

type MenuBadgeProps = {
  children: React.ReactNode
  active?: boolean
  onClick?: () => void
}

export default function MenuBadge({ children, active = false, onClick }: MenuBadgeProps) {
  return (
    <button onClick={onClick}>
      <Badge
        variant="outline"
        className={clsx(
          'rounded-[20px] px-3 py-[7px] border-[0.5px] h-auto',
          active ? 'bg-[var(--dark)] text-white' : 'bg-white text-[var(--font)]',
          'border-[var(--stroke)]',
        )}
      >
        {children}
      </Badge>
    </button>
  )
}
