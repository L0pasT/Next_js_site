'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter()

    return (
    <div className="min-h-screen bg-[#D9D9D9] flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-bold text-[#000000] mb-2">Регистрация</h1>
            <p className="text-sm text-[#5B5D67] mb-6">Заполните форму для создания аккаунта</p>

            <form className="space-y-4">
            <div>
                <label className="block text-sm text-[#000000] mb-1">Имя пользователя</label>
                <input
                type="text"
                className="text-black w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#21272E]"
                placeholder="Ваш никнейм"
                required
                />
            </div>

            <div>
                <label className="block text-sm text-[#000000] mb-1">Логин (почта или телефон)</label>
                <input
                type="text"
                className="text-black w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#21272E]"
                placeholder="email@example.com или +79991234567"
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
                Создать
            </button>
            </form>

            <button
            onClick={() => router.push('/')}
            className="inline-block mt-6 text-sm text-[#21272E] border border-[#21272E] px-4 py-1 rounded hover:bg-[#21272E] hover:text-white transition"
            >
            Вернуться на главную
            </button>
        </div>
    </div>
    )
}
