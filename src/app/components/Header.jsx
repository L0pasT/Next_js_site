'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [hover, setHover] = useState(false)

  return (
    <header className="bg-white shadow-md h-[80px] flex items-center">
      <div className="container mx-auto px-4 flex justify-between items-center">

        <div className="flex items-center space-x-3">
          <Image src="/artrender_logo.webp" alt="artrender" width={75} height={75} className="object-contain" priority />
          <Link href="/" className="text-[24px] font-bold text-gray-800 font-rubik">ArtRender.info</Link>
        </div>

        <div className="flex-1 flex justify-center">
          <nav className="flex space-x-6 text-[18px] font-pt text-gray-600">
            <Link href="/">Главная</Link>
            <Link href="#tools">Инструменты</Link>
            <Link href="#gallery">Галерея</Link>
            <Link href="#services">Услуги</Link>
          </nav>
        </div>

        <div
          className={`group relative inline-flex items-center justify-center border-2 border-[#21272E] bg-[#21272E] text-white font-pt text-[16px] rounded-[28px] overflow-hidden px-4 py-1 transition-all duration-300 cursor-pointer select-none ${
            hover ? 'w-auto max-w-[240px]' : 'w-[120px]'
          }`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="flex items-center justify-center w-full">
            <span
              className={`transition-transform duration-300 ease-in-out ${
                hover ? '-translate-x-2' : 'translate-x-0'
              }`}
            >
              Вход
            </span>
            <span
              className={`transition-all duration-300 ease-in-out ml-1 whitespace-nowrap ${
                hover ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
              }`}
            >
              /Регистрация
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
