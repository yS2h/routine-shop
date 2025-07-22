import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="absolute w-[132px] h-[26px] top-[61px] left-[35px]">
      <Link to="/" className="flex items-center">
        <img src="/logo.svg" alt="logo" className="w-[132px] h-[26px] cursor-pointer" />
      </Link>
    </div>
  )
}
