// src/pages/ProjectPage.tsx
import { useParams } from 'react-router-dom'
import Bidy from './Bidy' // Anta at Bidy.tsx ligger i samme mappe

const projects = [
  { title: 'Prosjekt 1', description: 'Dette er et testprosjekt.', id: 1 },
  { title: 'Prosjekt 2', description: 'Et annet kult prosjekt.', id: 2 },
  // Merk at vi ikke trenger en fyldig beskrivelse for prosjekter som skal rendres
  // via egne komponenter (f.eks. Bidy).
  { title: 'Bidy – Semester Project', description: '', id: 3 },
]

const ProjectPage: React.FC = () => {
  const { id } = useParams()
  const numericId = Number(id)
  const projectEntry = projects.find(p => p.id === numericId)

  if (!projectEntry) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold">Prosjekt ikke funnet</h2>
        <p>Vennligst sjekk at du har oppgitt riktig ID.</p>
      </div>
    )
  }

  // Hvis id === 3, rendrer vi hele Bidy-komponenten
  if (numericId === 3) {
    return <Bidy />
  }

  // For alle andre prosjekter: vis enkel tittel + beskrivelse
  return (
    <div className="min-h-screen bg-white p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{projectEntry.title}</h1>
      <p className="text-lg text-gray-700">{projectEntry.description}</p>
    </div>
  )
}

export default ProjectPage
