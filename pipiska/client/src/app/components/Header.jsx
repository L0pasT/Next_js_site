'use client'
import Link from 'next/link'
import Image from 'next/image'
import SignIn_Btn from './SignIn_Btn'

export default function Header() {

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-[80px] flex items-center">
      <div className="container mx-auto px-4 flex justify-between items-center">

        <div className="flex items-center space-x-3">
          <Image src="/artrender_logo.webp" alt="artrender" width={75} height={75} className="object-contain" priority />
          <Link
            href="/"
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#21272E] after:transition-all after:duration-300 hover:after:w-full"
          >
            Главная
          </Link>
        </div>

        <div className="flex-1 flex justify-center">
          <nav className="flex space-x-6 text-[18px] font-pt text-gray-600">
            <Link href="/">Главная</Link>
            <Link href="#tools">Инструменты</Link>
            <Link href="#gallery">Галерея</Link>
            <Link href="#services">Услуги</Link>
          </nav>
        </div>

        <SignIn_Btn />
      </div>
    </header>
  )
}
