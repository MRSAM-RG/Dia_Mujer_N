import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Día Internacional de la Mujer | Para Mi Amor',
  description: 'Una celebración especial del Día Internacional de la Mujer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-pink-50 to-purple-50 min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 