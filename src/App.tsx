import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProjectPage from './pages/ProjectPage'
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Route>
    </Routes>
  )
}

export default App
