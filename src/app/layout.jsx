// app/layout.js
import './globals.css'
import { Rubik, PT_Sans_Caption } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-rubik' })
const ptSans = PT_Sans_Caption({ subsets: ['latin'], weight: ['400'], variable: '--font-pt' })

export const metadata = {
  title: 'ArtRender',
  description: 'Профессиональные утилиты для 3D дизайнеров',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${rubik.variable} ${ptSans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
