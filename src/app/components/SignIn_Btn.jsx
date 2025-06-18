'use client'
import { useState } from 'react'

export default function SignIn_Btn() {
  const [hover, setHover] = useState(false)

  return (
    <div
      className={
        `group relative inline-flex items-center justify-center border-2 border-[#21272E] bg-[#21272E] text-white font-pt text-[16px] rounded-[5px] overflow-hidden px-4 py-2 transition-all duration-800 ease-out cursor-pointer select-none w-[200px]`
      }
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span
        className={`transition-all duration-800 ease-out ${
          hover ? 'mr-1 -translate-x-2' : 'translate-x-0'
        }`}
      >
        Вход
      </span>
      <span
        className={`transition-all duration-800 ease-out whitespace-nowrap overflow-hidden ${
          hover ? 'opacity-100 max-w-[120px]' : 'opacity-0 max-w-0'
        }`}
      >
        /Регистрация
      </span>
    </div>
  )
}
