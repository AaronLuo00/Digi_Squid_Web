import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DigitalSquid Games - AI-Native Tournament Platform',
  description: 'Where AI Meets Survival Gaming. Push the boundaries of digital survival in an AI-driven world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-primary`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
