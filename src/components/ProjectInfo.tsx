import { useTab } from '@/contexts/TabContext'
import { projectInfoList } from '@/constants'

export default function ProjectInfo() {
  const { activeTab } = useTab()
  if (activeTab !== 'advertiser') return null

  return (
    <section className="bg-[#1B1723] py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* 상단 타이틀 */}
        <div className="mb-12">
          <div className="flex justify-center mb-2">
            <span className="text-yellow-300 text-2xl">✨</span>
          </div>
          <h2 className="text-3xl font-bold text-white">
            실제 지역주민의 <span className="text-[#B380FF]">양질의 리뷰</span>
          </h2>
        </div>

        {/* 카드 */}
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-md mx-auto px-8 py-10 text-left relative">
          {/* 제목 */}
          <h3 className="text-lg font-bold text-[#222222] mb-6">
            리뷰어블 <span className="font-extrabold">프로젝트</span>
          </h3>

          {/* 항목 리스트 */}
          <ul className="space-y-3 mb-8 text-sm">
            {projectInfoList.map((text, idx) => (
              <li key={idx} className="flex items-center gap-2 px-4 py-2 bg-[#F2F4F9] rounded">
                <span className="text-yellow-400">✨</span>
                <span className="text-[#333333]">{text}</span>
              </li>
            ))}
          </ul>

          {/* 가격 정보 */}
          <div className="flex justify-between items-center text-sm mb-4">
            <span className="font-semibold text-[#222222]">리뷰 1건당</span>
            <span className="text-[#7129DD] font-bold text-xl">15,000원</span>
          </div>

          {/* 패키지 박스 */}
          <div className="bg-[#7129DD] text-white font-bold rounded-lg text-center py-3 text-base">
            <span className="inline-flex items-center justify-center text-[#7129DD] bg-white border border-[#7129DD] rounded-full w-10 h-10 text-sm font-medium">
              10건
            </span>
            <span className="text-xl align-middle">150,000원</span>
          </div>

          {/* VAT 표기 */}
          <p className="text-right text-[10px] text-[#999999] mt-2">VAT 별도</p>
        </div>
      </div>
    </section>
  )
}
