import React, { useState, useContext } from 'react'
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import { GardenContext } from '../context/GardenContext'
import { useNavigate } from 'react-router-dom'
import 'leaflet/dist/leaflet.css'

// Corrige l'icône Leaflet (si vide)
import L from 'leaflet'
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const LocationSelector = ({ onSelect }) => {
  useMapEvents({
    click(e) {
      onSelect([e.latlng.lat, e.latlng.lng])
    },
  })
  return null
}

const CreateGarden = () => {
  const [name, setName] = useState('')
  const [position, setPosition] = useState(null)
  const { addGarden } = useContext(GardenContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!position) return alert('Veuillez sélectionner un emplacement sur la carte.')

    const newGarden = { name, position }
    addGarden(newGarden)
    navigate('/map')
  }

  return (
    <div className="container">
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Créer un nouveau jardin</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }}>
        <label>
          Nom du jardin :
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </label>

        <p style={{ fontSize: '0.9rem', color: '#4b5563' }}>Cliquez sur la carte pour choisir l'emplacement</p>
        <div style={{ height: '300px', marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
          <MapContainer center={[48.8566, 2.3522]} zoom={12} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationSelector onSelect={setPosition} />
            {position && <Marker position={position} />}
          </MapContainer>
        </div>

        <button type="submit" style={{
          padding: '0.7rem 1.5rem',
          backgroundColor: '#1f2937',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
          Ajouter le jardin
        </button>
      </form>
    </div>
  )
}

export default CreateGarden

