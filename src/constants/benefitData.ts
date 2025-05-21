export type BenefitItem = {
  id: string;
  title: string;
  description?: string;
  image: string;
  highlight?: string;
};

export const benefitData = {
  advertiser: [
    {
      id: '01',
      title: '타 플랫폼 대비',
      highlight: '최대 50% 이상',
      description: '저렴한 광고비',
      image: '/images/benefit/benefit1.svg'
    },
    {
      id: '02',
      title: '단독 지역 모집으로',
      highlight: '단골고객 유지 등',
      description: '구매전환율 UP',
      image: '/images/benefit/benefit2.svg'
    },
    {
      id: '03',
      title: '기준에 맞는 리뷰\n작성시 포인트 지급',
      highlight: '양질 리뷰 보장',
      description: '',
      image: '/images/benefit/benefit3.svg'
    },
    {
      id: '04',
      title: '광고주 부담 NO',
      highlight: '리뷰어블 자체',
      description: '포인트 제공',
      image: '/images/benefit/benefit4.svg'
    }
  ],
  reviewer: [
    {
      id: '01',
      title: '제공내역 이외에',
      highlight: '최대 1만원',
      description: '포인트 제공',
      image: '/images/benefit/benefit4.svg'
    },
    {
      id: '02',
      title: '단독 지역',
      highlight: '검증된 업장 위주',
      description: '프로젝트 등록',
      image: '/images/benefit/benefit2.svg'
    }
  ]
}