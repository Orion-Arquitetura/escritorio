import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hub Orion Arquitetura',
  description: 'Bem-vindo à Orion Arquitetura',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <link rel="icon" href="/orion-estrela.png" sizes="any" />
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
