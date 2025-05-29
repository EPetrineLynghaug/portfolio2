import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bidy from './pages/Bidy'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<Bidy />} />
    </Routes>
  )
}
export default App
