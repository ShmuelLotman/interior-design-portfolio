import Image from 'next/image'
import PostMudroom1 from '@/public/image/post-mudroom-1.png'
import PostMudroom2 from '@/public/image/post-mudroom-2.jpg'
import StudioPost1 from '@/public/image/studio-post-1.jpg'
import StudioPost2 from '@/public/image/studio-post-2.jpg'
import StudioPost3 from '@/public/image/studio-post-3.jpg'
import StudioPost4 from '@/public/image/studio-post-4.jpg'
import StudioPost5 from '@/public/image/studio-post-5.jpg'
import StudioPost6 from '@/public/image/studio-post-6.jpg'
import ClosetPost1 from '@/public/image/closet-post-1.jpg'
import ClosetPost2 from '@/public/image/closet-post-2.jpg'

export default function Gallery() {
  return (
    <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={PostMudroom1}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={PostMudroom2}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={StudioPost1}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={StudioPost2}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={StudioPost4}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={StudioPost3}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={StudioPost5}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={StudioPost6}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={ClosetPost1}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={StudioPost2}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={ClosetPost2}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
