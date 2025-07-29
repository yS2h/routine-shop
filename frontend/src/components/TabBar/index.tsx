import { useNavigate, useLocation } from 'react-router-dom'
import HomeIcon from '@/components/icons/HomeIcon'
import RoutineIcon from '@/components/icons/RoutineIcon'
import UploadIcon from '@/components/icons/UploadIcon'
import ProfileIcon from '@/components/icons/ProfileIcon'

const TabBar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const tabItems = [
    { label: 'Home', Icon: HomeIcon, path: '/' },
    { label: 'Routine', Icon: RoutineIcon, path: '/routine' },
    { label: 'Upload', Icon: UploadIcon, path: '/upload' },
    { label: 'Profile', Icon: ProfileIcon, path: '/profile' },
  ]

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[393px] h-[75px] bg-[#fcfcfc] rounded-t-[30px] shadow-[0px_-2px_8px_rgba(0,0,0,0.05)] z-50">
      <div className="flex justify-evenly items-end h-full mx-auto pb-[6px] px-6">
        {tabItems.map(({ label, Icon, path }) => {
          const isSelected =
            path === '/'
              ? location.pathname === '/' || location.pathname === '/login'
              : location.pathname.startsWith(path)
          return (
            <button
              key={label}
              onClick={() => navigate(path)}
              className="flex flex-col items-center gap-[3px]"
            >
              <Icon isSelected={isSelected} />
              <div
                className={`text-[10px] font-light leading-normal ${
                  isSelected ? 'text-[color:var(--main)]' : 'text-[color:var(--icon)]'
                }`}
              >
                {label}
              </div>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default TabBar
