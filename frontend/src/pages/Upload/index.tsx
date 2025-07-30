import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import {
  format,
  differenceInDays,
  addDays,
  isValid,
  parseISO,
  isBefore,
  isAfter,
  startOfToday,
} from 'date-fns'
import Header from '@/components/Header'
import { useNavigate } from 'react-router-dom'

export default function UploadPage() {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [customCategory, setCustomCategory] = useState('')
  const [thumbnail, setThumbnail] = useState<File | null>(null)
  const [price, setPrice] = useState(1000)
  const [showPriceError, setShowPriceError] = useState(false)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [dailyDetails, setDailyDetails] = useState<string[]>([])

  const scrollRef = useRef<HTMLDivElement>(null)
  const prevScrollTop = useRef<number>(0)
  const todayStr = format(startOfToday(), 'yyyy-MM-dd')
  const navigate = useNavigate()

  const saveScroll = () => {
    if (scrollRef.current) {
      prevScrollTop.current = scrollRef.current.scrollTop
    }
  }

  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = prevScrollTop.current
    }
  }, [dailyDetails])

  useEffect(() => {
    const parsedStart = parseISO(startDate)
    const parsedEnd = parseISO(endDate)
    const today = startOfToday()

    if (!startDate || !endDate || !isValid(parsedStart) || !isValid(parsedEnd)) {
      setDailyDetails([])
      return
    }

    if (isBefore(parsedStart, today)) {
      alert('시작일은 오늘 이후로만 설정 가능합니다.')
      setStartDate('')
      setDailyDetails([])
      return
    }

    console.log(thumbnail)

    if (isAfter(parsedStart, parsedEnd)) {
      alert('종료일은 시작일보다 이후여야 합니다.')
      setEndDate('')
      setDailyDetails([])
      return
    }

    const totalDays = differenceInDays(parsedEnd, parsedStart) + 1
    saveScroll()
    setDailyDetails(Array(totalDays).fill(''))
  }, [startDate, endDate])

  const handleSubmit = () => {
    const today = startOfToday()

    if (!startDate || !endDate) {
      alert('시작일과 종료일을 모두 선택해주세요.')
      return
    }

    const parsedStart = parseISO(startDate)
    const parsedEnd = parseISO(endDate)

    if (!isValid(parsedStart) || !isValid(parsedEnd)) {
      alert('유효하지 않은 날짜입니다.')
      return
    }

    if (isBefore(parsedStart, today)) {
      alert('시작일은 오늘 이후로만 설정 가능합니다.')
      return
    }

    if (isAfter(parsedStart, parsedEnd)) {
      alert('종료일은 시작일보다 이후여야 합니다.')
      return
    }

    if (price < 1000) {
      setShowPriceError(true)
      return
    }

    console.log('폼 제출 완료')

    navigate('/?showNew=1')
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value
    const trimmed = raw.replace(/^0+/, '')
    const value = Number(trimmed)
    setPrice(value)
    setShowPriceError(value < 1000)
  }

  const handleDailyDetailChange = (index: number, value: string) => {
    const updated = [...dailyDetails]
    updated[index] = value
    setDailyDetails(updated)
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-[360px] px-4 relative min-h-screen space-y-6 pb-[120px]">
        <Header />
        <div ref={scrollRef} className="p-4 pb-[100px] h-screen overflow-y-auto">
          <label className="block font-medium mb-1 mt-26">루틴명</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-[10px] mb-2"
            placeholder="예: 매일 아침 스트레칭"
          />

          <label className="block font-medium mb-1">루틴 카테고리</label>
          <div className="flex flex-wrap gap-3 mb-2">
            {['운동', '공부', '뷰티', '다이어트', '기타'].map((cat) => (
              <label key={cat} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={category === cat}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mr-1"
                />
                {cat}
              </label>
            ))}
          </div>
          {category === '기타' && (
            <input
              type="text"
              placeholder="직접 입력"
              value={customCategory}
              onChange={(e) => setCustomCategory(e.target.value)}
              className="w-full p-2 border rounded-[10px] mb-4"
            />
          )}

          <label className="block font-medium mb-1">대표 사진</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
            className="mb-4"
          />

          <label className="block font-medium mb-1">기간</label>
          <div className="flex items-center gap-2 mb-4">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="p-2 border rounded-[10px] w-[45%]"
              min={todayStr}
            />
            <span className="text-sm text-gray-500">~</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="p-2 border rounded-[10px] w-[45%]"
              min={startDate || todayStr}
            />
          </div>

          {dailyDetails.length > 0 && (
            <>
              <label className="block font-medium mb-1">상세 루틴 ({dailyDetails.length}일)</label>
              <div className="max-h-[300px] overflow-y-auto border rounded-[10px] p-2 space-y-2 mb-4">
                {dailyDetails.map((detail, index) => {
                  const date = format(addDays(parseISO(startDate), index), 'yy/MM/dd')
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-28 text-sm text-gray-600 shrink-0">
                        Day {index + 1} ({date})
                      </span>
                      <input
                        type="text"
                        value={detail}
                        onChange={(e) => handleDailyDetailChange(index, e.target.value)}
                        placeholder={`${index + 1}일차 루틴 입력`}
                        className="flex-1 p-1 border rounded-[10px] text-sm"
                      />
                    </div>
                  )
                })}
              </div>
            </>
          )}

          <label className="block font-medium mb-1">금액 (P)</label>
          <input
            type="number"
            value={price === 0 ? '' : price}
            onChange={handlePriceChange}
            className="w-full p-2 border rounded-[10px]"
            min={0}
          />
          {showPriceError && (
            <p className="text-red-500 text-sm mt-1">최소 금액은 1,000P 입니다.</p>
          )}

          <button
            onClick={handleSubmit}
            className="fixed bottom-20 right-4 bg-blue-500 text-white text-3xl w-14 h-14 rounded-full shadow-md flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}
