import { useTab } from '@/contexts/TabContext'
import { processSteps } from '@/constants'

// 삼각형 메타 정보 추출 함수
function getTriangleMeta(idx: number) {
  if (idx === 3) return { show: false, triangleClass: "", triangleColor: "" };

  const base = {
    show: true,
    triangleColor: idx % 2 === 0 ? "#F7F3FF" : "#FFFFFF",
  };

  const triangleMap: Record<number, string> = {
    0: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
    1: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
    2: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
    4: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
    5: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
  };

  return {
    ...base,
    triangleClass: triangleMap[idx] || "",
  };
}


export default function Process() {
  const { activeTab } = useTab();
  const isAdvertiser = activeTab === "advertiser";
  const steps = processSteps[activeTab];
  
  return (
    <section id="process" className="bg-[#1C1A1F] py-16 sm:py-20 md:py-24 text-white relative">

      {/* 상단 역삼각형 */}
      <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 w-[48px] h-[28px]">
        <svg
          viewBox="0 0 48 28"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path d="M24 28L0 0H48L24 28Z" fill="#F6F8FE" />
        </svg>
      </div>
      <div className="max-w-5xl mx-auto px-4 text-center">

        {/* 타이틀 */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="text-[#B380FF]">
            {isAdvertiser ? '광고진행' : '체험단 진행'}
          </span>{' '}
          절차
        </h2>
        <p className="text-sm text-[#DDDDDD] mb-12">
          {isAdvertiser
            ? '간단한 계약부터 리뷰 검수까지 한 번에!'
            : '신청하고, 체험하고, 포인트 받자!'}
        </p>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-3 gap-0 justify-items-center">
          {steps.map((text, idx) => {
              const { show, triangleClass, triangleColor } = getTriangleMeta(idx);
              const isEven = idx % 2 === 0;
              const bgColor = isEven ? "bg-[#F2EEF8]" : "bg-white";

            return (
              <div
                key={idx}
                className={`relative w-full h-[130px] rounded-[12px] ${bgColor} text-black flex items-center justify-center flex-col text-center`}
              >
                {show && (
                  <span
                    className={`absolute w-3 h-3 rotate-45 z-10 ${triangleClass}`}
                    style={{ backgroundColor: triangleColor }}
                  />
                )}
                <p className="text-xs text-[#A76DFF] font-semibold mb-1">
                  Step {String(idx + 1).padStart(2, "0")}
                </p>
                <p className="text-sm font-bold leading-snug px-2 text-[#222222]">{text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
