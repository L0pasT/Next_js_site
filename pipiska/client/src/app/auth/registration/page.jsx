'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter()

    return (
        <div className="min-h-screen bg-[#D9D9D9] flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
            <h1 className="text-2xl font-bold text-[#000000] mb-6 text-center">Регистрация</h1>

            {/* Блок с полями */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Левая часть — Имя и Фамилия */}
            <div className="space-y-4">
                <div>
                <label className="block text-sm text-[#000000] mb-1">
                    Имя <span className="text-red-500" title="Обязательное поле">*</span>
                </label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#21272E]"
                    required
                />
                </div>

                <div>
                <label className="block text-sm text-[#000000] mb-1">
                    Фамилия <span className="text-red-500" title="Обязательное поле">*</span>
                </label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#21272E]"
                    required
                />
                </div>
            </div>

            {/* Правая часть — логин, пароль */}
            <div className="space-y-4">
                <div>
                <label className="block text-sm text-[#000000] mb-1">Логин</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#21272E]"
                    required
                />
                </div>

                <div className="relative">
                <label className="block text-sm text-[#000000] mb-1">Пароль</label>
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
            </form>

            {/* Блок с кнопками и соглашением */}
            <div className="flex flex-col items-center space-y-4">
            <button
                type="submit"
                className="w-full max-w-sm bg-[#21272E] text-white py-2 rounded-[28px] hover:bg-[#1a1f25] transition"
            >
                Создать аккаунт
            </button>

            <p className="text-xs text-[#5B5D67] text-center max-w-sm">
                Нажимая &quot;Создать аккаунт&quot;, вы соглашаетесь с{' '}
                <a href="#" className="underline text-[#21272E] hover:opacity-80">Пользовательским соглашением</a>.
            </p>
            </div>

            <div className="w-full max-w-sm self-start">
            <button
            onClick={() => router.push('/')}
            className="text-sm text-[#21272E] border border-[#21272E] px-5 py-1 rounded-[28px] hover:bg-[#21272E] hover:text-white transition"
            >
            Назад
            </button>
            </div>
        </div>
        </div>
    )
}
