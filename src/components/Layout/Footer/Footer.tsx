import Image from 'next/image'
import Link from "next/link";
import { EXTERNAL_LINKS, ICONS } from '@/constants'

export default function Footer() {
  return (
    <footer className="bg-[#F6F8FE] text-sm text-gray-800 pt-12 pb-36 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* 왼쪽 */}
        <div>
          {/* 로고 */}
          <Link href={EXTERNAL_LINKS.reviewable}>
            <Image
              src={ICONS.logo}
              alt="리뷰어블 로고"
              width={130}
              height={40}
              priority
            />
          </Link>
          <p className="text-sm mt-2 text-[#222222]">개인정보처리방침</p>
          <p className="text-xs text-[#999999] mt-2">Copyright 2025. 리뷰어블 Inc. all rights reserved.</p>
        </div>

        {/* 오른쪽 */}
        <div className="text-sm text-gray-700">
          <h4 className="font-semibold text-[#222222] mb-2">킵고잉더블유</h4>
          <p>대표 : 왕선영 | 경기도 양주시 독바위로 287번길 38(옥정동, 라피아노)</p>
          <p className="mt-1 text-[#333333]">사업자등록번호: 231-11-08185 | email: <a href={EXTERNAL_LINKS.email}>sw.owrang@reviewable.kr</a></p>
          <div className="flex text-[#333333] space-x-2 mt-2">
            <a href={EXTERNAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
              <Image src={ICONS.instagram} alt="Instagram" width={24} height={24} />
            </a>
            <a href={EXTERNAL_LINKS.naverBlog} target="_blank" rel="noopener noreferrer">
              <Image src={ICONS.naverBlog} alt="Naver Blog" width={24} height={24} />
            </a>
            <a href={EXTERNAL_LINKS.kakaoBiz} target="_blank" rel="noopener noreferrer">
              <Image src={ICONS.kakaoBiz} alt="Kakao Talk" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
