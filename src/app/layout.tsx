import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
"use client"
import './globals.css'
import { Poppins, Montserrat } from 'next/font/google'
import { AuthContextProvider } from './Contexts/AuthContext'
const montserrat = Montserrat({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", '800', "900"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <AuthContextProvider>
        <html lang="en">
          <body className={montserrat.className}>{children}</body>
        </html>
      </AuthContextProvider>
  )
}
