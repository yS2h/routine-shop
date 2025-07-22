import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Routine from '@/pages/Routine'
import Upload from '@/pages/Upload'
import Profile from '@/pages/Profile'
import TabBar from '@/components/TabBar'
import Header from '@/components/Header'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <div className="pb-[75px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/routine" element={<Routine />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <TabBar />
    </BrowserRouter>
  )
}
