'use client'
import Image from 'next/image'
import { TbArrowNarrowRight } from 'react-icons/tb'
import { projects } from '@/app/utils/project-data'
import Link from 'next/link'

export default function CatalogueSection() {
  const items = [
    {
      id: '01',
      catagory: 'BEDROOM SETUP',
      title: 'Cossy Bedroom Setup',
      image: '/image/badroom.jpg',
      description:
        'family drowing room with a clean and comfortable design for your family.',
    },
    {
      id: '02',
      catagory: 'KITCHING SETUP',
      title: 'Neat & Clean Kitchen',
      image: '/image/kitchen1.jpg',
      description:
        'family drowing room with a clean and comfortable design for your family.',
    },
    {
      id: '03',
      catagory: 'DROWING SETUP',
      title: 'Family Drowing Room',
      image: '/image/drowing.jpg',
      description:
        'family drowing room with a clean and comfortable design for your family.',
    },
    {
      id: '04',
      catagory: 'LIVING SETUP',
      title: 'Clean Family Room',
      image: '/image/living.jpg',
      description:
        'family drowing room with a clean and comfortable design for your family.',
    },
  ]

  return (
    <div
      className={`grid gap-8 divide-gray-300 lg:divide-x lg:gap-0 lg:grid-cols-${
        projects.length > 4 ? 4 : projects.length
      } md:grid-cols-${projects.length > 4 ? 4 : projects.length} align-center`}
    >
      {projects.map((item) => (
        <div key={item.id} className="relative overflow-hidden group">
          <div>
            <Image
              src={item.imgLinks[item.imgLinks.length - 1]}
              width={380}
              height={100}
              alt=""
              className="w-full "
            />
          </div>
          <div className="absolute top-0 p-8 m-12 bg-white bg-opacity-60 backdrop-blur">
            <div className="flex justify-between pb-4 ">
              <p className="text-sm">{item.subtitle}</p>
              <span className="text-sm ">{item.id}</span>
            </div>
            <Link
              className="block text-xl font-semibold"
              href={`/projects/${item.id}`}
            >
              {item.title}
            </Link>
            <p className="py-4 text-gray-500">{item.description}</p>
            <Link
              href={`/projects/${item.id}`}
              className="inline-flex items-center font-medium"
            >
              See Details <TbArrowNarrowRight className="ml-2 text-xl " />
            </Link>
          </div>

          <div className="inset-0 flex-col items-center justify-end hidden gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 md:flex md:absolute group-hover:translate-y-full md:border-b-0 bg-zinc-100">
            <p className="tracking-wider -rotate-90 ">{item.title} </p>
            <span className="">{item.id}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
