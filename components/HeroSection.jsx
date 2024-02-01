import Image from 'next/image'
import Link from 'next/link'
import { TbArrowUpRight } from 'react-icons/tb'

export default function HeroSection() {
  return (
    <div className="bg-zinc-50 h-screen flex items-center">
      <div className="container py-8 text-center lg:py-0 lg:text-left lg:flex lg:justify-between xl:pb-16 lg:pb-8">
        <div className="lg:w-1/2">
          <p className="tracking-widest">FROM HOUSE TO HOME, BY DESIGN</p>
          <h1 className="py-4 text-3xl font-extrabold leading-tight text-gray-800 xl:text-6xl lg:text-4xl">
            Find your comfort zone.
          </h1>
          <p className="pb-6 text-gray-500 xl:pb-10">
            Hickory Lane Interiors specializes in turning your design
            aspirations into stunning realities. With a touch of creativity and
            expertise, we ensure every space tells your story beautifully.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 "
          >
            Contact us now <TbArrowUpRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        <div className="w-1/2">
          <Image
            src="/image/kitchen.png"
            width={800}
            height={500}
            alt=""
            className="absolute right-0 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px]  hidden lg:block"
          />
        </div>
      </div>
    </div>
  )
}
