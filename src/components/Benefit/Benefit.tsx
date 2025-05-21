import { useTab } from '@/contexts/TabContext'
import { benefitData } from "@/constants/benefitData";
import BenefitCard from './BenefitCard'

export default function Benefit() {
  const { activeTab } = useTab()
  const isAdvertiser = activeTab === 'advertiser'
  const benefits = benefitData[activeTab];

  return (
    <section id="benefit" className="bg-[#F6F8FE] py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 text-center">
        <p className="text-sm text-[#333333] mb-2">이 모든 고민을 한번에 해결!</p>
        <h2 className="text-3xl font-bold text-[#222222] mb-12">
          <span className="text-[#7129DD]">
            {isAdvertiser ? '광고주' : '리뷰어'}
          </span>{' '}
          혜택
        </h2>

        {/* 카드 그리드 */}
        <div
          className={`grid ${
            isAdvertiser ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'
          } gap-8 justify-items-center`}
        >
          {/* 카드 */}
          {benefits.map((item, idx) => (
            <BenefitCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
