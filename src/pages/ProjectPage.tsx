
import { useParams } from 'react-router-dom'

const projects = [
  { title: 'Prosjekt 1', description: 'Dette er et testprosjekt.', id: 1 },
  { title: 'Prosjekt 2', description: 'Et annet kult prosjekt.', id: 2 },
  { title: 'Prosjekt 3', description: 'Et tredje prosjekt for demo.', id: 3 },
]

const ProjectPage: React.FC = () => {
  const { id } = useParams()
  const project = projects.find(p => p.id === Number(id))

  if (!project) return <div className="p-6">Prosjekt ikke funnet</div>

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-4 text-gray-700">{project.description}</p>
    </div>
  )
}

export default ProjectPage
