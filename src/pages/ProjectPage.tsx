import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Bidy from './Bidy'
import Essenza from './Essenza'
import bidyImage from '../assets/img/bidy/Bidy.png'
import essenzaImage from '../assets/img/essenza/essenza.webp'

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
    title: 'Essenza',
    description: 'An e-commerce site built in one week, using Zustand and custom hooks for state and form validation.',
    imageUrl: essenzaImage,
  },
  {
    id: 3,
    title: 'Bidy',
    description: 'A real-time bidding platform for auctions with live updates.',
    imageUrl: bidyImage,
  },
]

const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>()

  if (!id) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-12">
        <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300 mb-12 text-center">
          Projects
        </h1>
        <div className="px-4 sm:px-6 lg:px-2 xl:px-0">
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
        </div>
      </div>
    )
  }

  const numericId = Number(id)
  const projectEntry = projects.find((p) => p.id === numericId)

  if (!projectEntry) {
    return (
      <div className="p-6 text-gray-800 dark:text-gray-100">
        <h2 className="text-xl font-semibold">Project not found</h2>
        <p>Please check that the URL contains a valid project ID.</p>
        <Link
          to="/projects"
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ← Back to projects
        </Link>
      </div>
    )
  }
if (numericId === 2) {
  return <Essenza />
}
  if (numericId === 3) {
    return <Bidy />
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-12">
      <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-xl shadow overflow-hidden">
        <img
          src={projectEntry.imageUrl}
          alt={`${projectEntry.title} screenshot`}
          className="w-full h-auto"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-blue-800 dark:text-blue-300">
            {projectEntry.title}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            {projectEntry.description}
          </p>
          <Link
            to="/projects"
            className="inline-block px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold rounded-lg shadow-md transition duration-150"
          >
            ← Back to projects
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
