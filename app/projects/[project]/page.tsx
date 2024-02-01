'use client'
import { useParams } from 'next/navigation'
import { projects } from '@/app/utils/project-data'
import Image from 'next/image'

const Project = () => {
  const params = useParams()
  const currentProject = projects.find((p) => p.id === Number(params.project))

  return (
    <div>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          {currentProject.title}
        </h2>
        <p className="mb-4 text-2xl lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          {currentProject.subtitle}
        </p>
        <p className="mb-4 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          {currentProject.description}
        </p>
      </div>
      <div className="gap-2 flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row px-8 mb-48">
        {currentProject.imgLinks.map((img) => (
          <div key={img.src}>
            <Image
              className="h-auto w-auto rounded-lg"
              src={img}
              alt="design_image"
              height={600}
              width={600}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
