// src/Home.tsx
import React from 'react'

const projects = [
  { title: 'Prosjekt 1', description: 'Dette er et testprosjekt.', id: 1 },
  { title: 'Prosjekt 2', description: 'Et annet kult prosjekt.', id: 2 },
  { title: 'Prosjekt 3', description: 'Et tredje prosjekt for demo.', id: 3 },
]

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-7xl text-gray-800 font-bold mb-6 text-center">Min Portefølje</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
