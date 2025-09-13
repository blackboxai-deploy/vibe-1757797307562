import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hello World App',
  description: 'A modern, stylistic Hello World application built with Next.js',
  keywords: 'hello world, nextjs, react, tailwind css',
  authors: [{ name: 'Hello World App' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen bg-gradient-to-br from-slate-50 to-blue-50`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}