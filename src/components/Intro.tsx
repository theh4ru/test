import Image from 'next/image'
import { introItems } from '@/constants'

export default function Intro() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
          {introItems.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl px-6 py-10 w-full lg:w-[440px] h-auto lg:h-[500px] text-white flex flex-col items-center text-center shadow-md ${item.bgClass}`}
            >
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-6">{item.title}</h3>
              <Image
                src={item.image}
                alt={item.alt}
                width={120}
                height={120}
                className="mb-6 object-contain h-[120px]"
              />
              <p className="mt-4 text-base sm:text-lg text-[#F0E6FF]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
