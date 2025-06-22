import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Map from './pages/Map'
import CreateGarden from './pages/CreateGarden'
import Navbar from './components/Navbar'
import './index.css'

const App = () => (
  <Router>
    <Navbar />
    <div style={{ height: '80px' }} /> {/* espace pour la navbar fixe */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/create" element={<CreateGarden />} />
    </Routes>
  </Router>
)

export default App

