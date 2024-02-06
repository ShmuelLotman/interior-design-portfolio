'use client'

import Image from 'next/image'
import logo from '../public/logo.png'
import Navigation from './Navigation'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()

  return (
    <div className="sticky inset-x-0 top-0 z-10 bg-opacity-60 bg-zinc-100 backdrop-blur-lg">
      <div className="container flex items-center justify-between py-8 ">
        <Image
          src={logo}
          alt="logo"
          className="w-60 h-8 cursor-pointer"
          onClick={() => router.push('/')}
        />

        <Navigation />
      </div>
    </div>
  )
}
