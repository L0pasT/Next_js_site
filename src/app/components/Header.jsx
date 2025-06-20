'use client'
import Link from 'next/link'
import Image from 'next/image'
import SignIn_Btn from './SignIn_Btn'

export default function Header() {

  return (
    <header className="bg-[#DEDEDE] shadow-md h-[80px] flex items-center">
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

        <SignIn_Btn />
      </div>
    </header>
  )
}
