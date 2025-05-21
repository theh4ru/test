export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-white text-center py-16 sm:py-20 md:py-28 w-full"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* 메인 제목 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#222222]">
          진짜 이웃의 리뷰,<br />
          <span className="text-[#7129DD]">리뷰어블</span>
        </h1>

        {/* 서브 텍스트 */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#333333]">
          우리 동네에서 시작되는
          <span className="font-bold"> 가치 순환✨</span>
        </p>
      </div>
    </section>
  )
}
