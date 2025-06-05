import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import bidyImage from '../assets/img/bidy/Bidy.png'

interface Project {
  id: number
  title: string
  description: string
  imageUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Holidaze',
    description: 'A holiday booking platform with destination overviews and user reviews.',
    imageUrl: 'https://via.placeholder.com/800x600?text=Holidaze',
  },
  {
    id: 2,
    title: 'Ecom',
    description: 'An e-commerce dashboard for managing products og orders efficiently.',
    imageUrl: 'https://via.placeholder.com/800x600?text=Ecom',
  },
  {
    id: 3,
    title: 'Bidy',
    description: 'A real-time bidding platform for auctions med live updates.',
    imageUrl: bidyImage,
  },
]

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Hero />
      <main className="w-full py-12">
        <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300 mb-12 text-center">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="w-full rounded-xl shadow bg-gray-50 dark:bg-gray-800 overflow-hidden"
            >
              <img
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-5">
                  {project.description}
                </p>
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-block px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold rounded-lg shadow-md transition duration-150"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home
