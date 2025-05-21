import Link from 'next/link'
import { baseButton } from '@/utils/classNames'
import { EXTERNAL_LINKS } from '@/constants'

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-[#2B2830] px-4 py-6 flex justify-center space-x-4">

      {/* <Link href="#contact" scroll={false}> */}
      <Link href={EXTERNAL_LINKS.kakaoBiz}>
        <span aria-label="광고 문의하기 버튼" className={`${baseButton} bg-[#7129DD] text-white`}>광고 문의하기</span>
      </Link>
      {/* <Link href="#project" scroll={false}> */}
      <Link href={EXTERNAL_LINKS.reviewable}>
        <span aria-label="프로젝트 둘러보기 버튼" className={`${baseButton} bg-[#FFC815] text-[#222222]`}>프로젝트 둘러보기</span>
      </Link>
  </div>
  )
}
