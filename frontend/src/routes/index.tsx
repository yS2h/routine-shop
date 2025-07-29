import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from '@/pages/Home'
import Routine from '@/pages/Routine'
import Upload from '@/pages/Upload'
import Profile from '@/pages/Profile'
import TabBar from '@/components/TabBar'
import RoutineDetail from '@/pages/Routine/Detail'
import Purchase from '@/pages/Home/Detail'

function RouterContent() {
  const location = useLocation()
  const hideTabPaths = ['/sell']

  const shouldHideTabBar = hideTabPaths.includes(location.pathname)

  return (
    <div className="w-full flex justify-center bg-[#f9f9f9]">
      <div className="relative w-full h-screen flex flex-col bg-white shadow-md">
        <div className="flex-1 overflow-y-auto pb-[60px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/routine" element={<Routine />} />
            <Route path="/routine/:id" element={<RoutineDetail />} />
            <Route path="/sell" element={<Purchase />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        {!shouldHideTabBar && (
          <div className="absolute bottom-0 left-0 w-full z-10">
            <TabBar />
          </div>
        )}
      </div>
    </div>
  )
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <RouterContent />
    </BrowserRouter>
  )
}
