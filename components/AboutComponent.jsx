import Image from 'next/image'

export default function AboutComponent() {
  return (
    <div className="container py-16" id="about">
      <div className="flex items-center justify-between pb-4">
        <a
          className="py-4 text-3xl font-extrabold leading-tight text-gray-800 lg:text-5xl"
          href="#"
        >
          About the founder
        </a>
        <p className="tracking-wider text-gray-400">LET&apos;S WORK TOGETHER</p>
      </div>
      <div className="grid lg:grid-cols-2 place-items-start place-content-center">
        <div>
          <Image
            src="/image/blums.jpg"
            width={500}
            height={500}
            alt=""
            className="max-md:hidden"
          />
        </div>

        <div className="items-center">
          <p className="px-12 pb-4 ">
            Hi! I&apos;m Bluma, founder of Hickory Lane Interiors. As your
            designer, my passion lies in crafting inviting, warm spaces that
            resonate with your unique taste and lifestyle. My approach centers
            around understanding your vision and preferences intimately. <br />
            <br />
            From there, I blend my design expertise with your desires,
            transforming each room into a sanctuary of comfort and style.
            Whether it&apos;s the heartwarming embrace of a living room, the
            lively charm of a kitchen, or the tranquil retreat of a bedroom, my
            goal is to weave together colors, textures, and furnishings that not
            only look stunning but feel right for you. Let&apos;s collaborate to
            transform your house into a home – a haven of warmth and joy,
            uniquely yours.
          </p>
          <div className="flex px-12 pt-4 gap-x-4 "></div>
        </div>
      </div>
    </div>
  )
}
