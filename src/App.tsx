import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProjectPage from './pages/ProjectPage'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
