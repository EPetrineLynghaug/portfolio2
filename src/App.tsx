import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProjectPage from './pages/ProjectPage'
import Home from './pages/Home'
import Bidy from './pages/Bidy'


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/bidy" element={<Bidy />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Route>
    </Routes>
  )
}
export default App
