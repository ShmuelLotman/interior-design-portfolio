import Image from 'next/image'
import Bedroom from '@/public/image/badroom.jpg'
import GalleryImg from '@/public/image/gallery2.jpg'
import GalleryImg2 from '@/public/image/gallery.jpg'
import Swiper1 from '@/public/image/swiper1.jpg'
import Gallery11 from '@/public/image/gallery11.jpg'
import Gallery14 from '@/public/image/gallery14.jpg'
import Living from '@/public/image/living.jpg'
import Gallery15 from '@/public/image/gallery15.jpg'
import Gallery12 from '@/public/image/gallery12.jpg'
import Gallery7 from '@/public/image/gallery7.jpg'
import Gallery3 from '@/public/image/gallery3.jpg'

export default function Gallery() {
  return (
    <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={Bedroom}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={GalleryImg}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={GalleryImg2}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={Swiper1}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={Gallery11}
            alt=""
          />
        </div>
        <div>
          <Image className="h-auto max-w-full rounded-lg" src={Living} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={Gallery14}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={Gallery15}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={Gallery12}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={Gallery7}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={Gallery11}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={Gallery3}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
