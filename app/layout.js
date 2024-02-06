import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'Hickory Lane Interiors',
  description: 'From House to Home, By Design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Toaster position="top-center" />
        {children}
        <Footer />
      </body>
    </html>
  )
}
