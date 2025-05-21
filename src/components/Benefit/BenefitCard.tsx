import Image from 'next/image'
import type { BenefitItem } from '@/constants/benefitData';

type BenefitCardProps = {
  item: BenefitItem;
};

export default function BenefitCard({ item }: BenefitCardProps) {
  return (
    // 카드 스타일
    <div
      className="bg-white w-full max-w-[631px]
        h-auto md:h-[380px] lg:h-[480px]
        rounded-[16px] px-6 sm:px-8 md:px-10 py-8 md:py-10
        text-left shadow-md relative"
    >
      <p className="text-sm text-[#A76DFF] font-semibold mb-2">
        Benefit {item.id}
      </p>

      {/* 제목 */}
      <p className="text-[15px] font-semibold leading-snug text-[#222222] whitespace-pre-line">
        {item.title}
      </p>
      {item.highlight && (
        <p className="text-lg font-bold text-[#222222] mt-1">
          <span className="relative inline-block">
            <span className="relative z-10">{item.highlight}</span>
            <span
              aria-hidden
              className="absolute left-0 top-1/2 w-full h-[0.6em] bg-[#FFDD00] z-0 translate-y-[-40%] rounded-sm"
            ></span>
          </span>
        </p>
      )}
      {item.description && (
        <p className="text-[15px] font-semibold leading-snug text-[#222222]">{item.description}</p>
      )}

      {/* 아이콘 이미지 */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8">
        <Image
          src={item.image}
          alt={`benefit-${item.id}`}
          width={96}
          height={96}
          className="w-20 sm:w-20 md:w-30 lg:w-40 h-auto"
        />
      </div>
    </div>
  )
}
