'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-[#D9D9D9] flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-[#000000] mb-2">Вход</h1>
        <p className="text-sm text-[#5B5D67] mb-6">Введите данные для входа в систему</p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-[#000000] mb-1">Почта или имя пользователя</label>
            <input
              type="email"
              className="text-black w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#21272E]"
              placeholder="yourmail@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-[#000000] mb-1">Пароль</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="text-black w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#21272E]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-[#21272E] hover:underline"
              >
                {showPassword ? 'Скрыть' : 'Показать'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#21272E] text-white py-2 rounded hover:bg-[#1a1f25] transition"
          >
            Войти
          </button>
        </form>

        <p className="text-sm text-[#5B5D67] mt-6">
          Нет аккаунта?{' '}
          <Link href="/auth/registration" className="text-[#21272E] hover:underline">
            Зарегистрироваться
          </Link>
        </p>

        <Link
          href="/"
          className="inline-block mt-4 text-sm text-[#21272E] border border-[#21272E] px-4 py-1 rounded hover:bg-[#21272E] hover:text-white transition"
        >
          Назад
        </Link>
      </div>
    </div>
  )
}
