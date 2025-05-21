import { useTab } from '@/contexts/TabContext'
import { sayItems } from '@/constants'
import { useState, useEffect } from 'react'

export default function SaySection() {
  const { activeTab, setActiveTab } = useTab()
  const items = activeTab === 'advertiser' ? sayItems.advertiser : sayItems.reviewer

  const [isSingleColumn, setIsSingleColumn] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSingleColumn(window.innerWidth < 640) // Tailwind의 sm 기준
    }

    handleResize() // 초기 실행
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="bg-[#F6F8FE] py-16 sm:py-20 md:py-24 w-full relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 text-center">

        {/* 타이틀 */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#222222] mb-2">서로 입장에</h2>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#222222] mb-10">
          같이 <span className="text-[#7129DD]">고민</span>하는 서비스
        </h2>

        {/* 탭 버튼 */}
        <div className="flex justify-center items-center space-x-6 mb-12 text-sm font-semibold">
          {['advertiser', 'reviewer'].map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type as 'advertiser' | 'reviewer')}
              className={`px-6 py-2.5 rounded-full transition font-semibold ${
                activeTab === type
                  ? 'bg-[#7129DD] text-white'
                  : 'bg-[#F2EEF8] text-[#D6C9EB] border border-[#D1C1E9]'
              }`}
            >
              Say, {type === 'advertiser' ? '광고주' : '리뷰어'}
            </button>
          ))}
        </div>
        
        {/* 카드 영역 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(({ title, author }, idx) => {
        const [line1, line2] = title.split('\n')

        return (
          // 카드 배경
          <div
            key={idx}
            className="relative bg-no-repeat bg-contain bg-center px-6 py-8 text-center"
            style={{
              backgroundImage: 'url("/images/saySection/dashed-card.svg")',
              backgroundSize: '100% 100%',
              height: '220px',
            }}
          >
            {/* 카드 내용 */}
            <div className="relative z-10 flex flex-col h-full justify-center">
              <p className="text-[#7129DD] text-sm font-medium mb-3">Interview</p>
              <div className="text-base leading-snug text-[#222222] mb-3">
                <p className="font-bold">{line1}</p>
                <p>{line2}</p>
              </div>
              <p className="text-xs text-[#888888]">{author}</p>
            </div>
          </div>
        )
      })}
    </div>


      {/* 하단 그라데이션 삼각형 */}
        {!isSingleColumn && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[80px] z-0 pointer-events-none">
            <svg viewBox="0 0 1440 80" className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="triangleGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F6F8FE" />
                  <stop offset="100%" stopColor="#FFFFFF" />
                </linearGradient>
              </defs>
              <polygon points="0,0 720,80 1440,0" fill="url(#triangleGradient)" />
            </svg>
          </div>
        )}
      </div>
    </section>
  )
}
