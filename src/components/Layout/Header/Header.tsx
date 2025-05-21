import Image from 'next/image'
import Link from 'next/link'
import { EXTERNAL_LINKS, ICONS } from '@/constants'

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-4">
        {/* 로고 */}
        <Link href={EXTERNAL_LINKS.reviewable}>
          <Image
            src={ICONS.logo}
            alt="리뷰어블 로고"
            width={160}
            height={48}
            priority
          />
        </Link>

        {/* 내비게이션 */}
        <nav className="hidden md:flex space-x-12">
        <a href="#about" className="text-sm font-semibold text-[#333333] hover:text-purple-600">ABOUT</a>
          <a href="#benefit" className="text-sm font-semibold text-[#333333] hover:text-purple-600">BENEFIT</a>
          <a href="#process" className="text-sm font-semibold text-[#333333] hover:text-purple-600">PROCESS</a>
        </nav>

        {/* CTA 버튼 */}
        <Link
          href={EXTERNAL_LINKS.kakaoBiz}
          className="hidden md:inline-block bg-[#2F2938] text-white text-base font-bold px-6 py-2.5 rounded-md hover:bg-gray-900 transition"
        >
          광고문의 →
        </Link>
      </div>
    </header>
  )
}
