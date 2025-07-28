import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Routine from '@/pages/Routine'
import Upload from '@/pages/Upload'
import Profile from '@/pages/Profile'
import TabBar from '@/components/TabBar'
import RoutineDetail from '@/pages/Routine/Detail'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className="w-full flex justify-center bg-[#f9f9f9]">
        <div className="relative w-[360px] h-screen flex flex-col bg-white shadow-md">
          <div className="flex-1 overflow-y-auto pb-[60px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/routine" element={<Routine />} />
              <Route path="/routine/:id" element={<RoutineDetail />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
          <div className="absolute bottom-0 left-0 w-full z-10">
            <TabBar />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
