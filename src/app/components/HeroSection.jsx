'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function HeroSection() {
    const [hover, setHover] = useState(false)

    return (
        <section className="relative bg-[#21272E] h-[640px] overflow-hidden">
        <div className="container mx-auto px-4 h-full flex items-center">
            <div className="relative z-10 max-w-2xl">
            <h1 className="text-[64px] font-bold text-white leading-tight mb-6">
                Профессиональные утилиты для 3D
            </h1>
            <p className="text-[18px] text-white mb-8">
                Создавайте уникальные дизайны с нашими инструментами для 3ds Max. Подписывайтесь на успех!
            </p>

            {/* Кнопка со стрелкой */}
            <button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="group relative inline-flex items-center justify-center border-1 border-[#FFFFFF] bg-[#21272E] text-white font-pt text-[16px] rounded-[28px] overflow-hidden px-6 py-2 transition-all duration-800 ease-out cursor-pointer select-none"
            >
                <span
                className={`transition-all duration-800 ease-out ${
                    hover ? 'mr-1 -translate-x-2' : 'translate-x-0'
                }`}
                >
                Начать
                </span>
                <span
                className={`transition-all duration-800 ease-out whitespace-nowrap overflow-hidden ${
                    hover ? 'opacity-100 max-w-[120px]' : 'opacity-0 max-w-0'
                }`}
                >
                →
                </span>
            </button>
            </div>
        </div>

        {/* Абсолютное изображение */}
        <div className="absolute right-0 top-0 h-full w-[670px]">
            <div className="absolute inset-0 bg-gradient-to-l from-[#21272E] to-transparent w-1/3 z-10"></div>
            <Image
            src="/foto_for_heroheader.webp"
            alt="3D дизайн инструменты"
            fill
            className="object-cover object-right"
            priority
            />
        </div>
        </section>
    )
}
