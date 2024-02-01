import Image from 'next/image'
import { projects } from '@/app/utils/project-data'
import Link from 'next/link'

export default function Projects() {
  return (
    <div className="">
      <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover ">
        <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white ">
          OUR PROJECTS
        </h1>
      </div>
      <div className="container grid grid-cols-2 gap-8 py-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.id}`}
            key={project.id}
            className="relative overflow-hidden rounded-xl group"
          >
            <div>
              <Image
                src={project.imgLinks[project.imgLinks.length - 1]}
                width={480}
                height={380}
                alt=""
                className="w-full"
              />
            </div>
            <div className="absolute bottom-0 flex-col items-center justify-end w-full gap-32 p-12 text-xl text-white transition duration-300 ease-in-out translate-y-full bg-gradient-to-b from-transparent to-black group-hover:translate-y-0">
              <h1 className="text-2xl font-semibold">{project.title}</h1>
              <p className="py-4 ">{project.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
