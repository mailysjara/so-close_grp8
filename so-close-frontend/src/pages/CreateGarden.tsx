import { useState, useContext } from 'react'
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import L from 'leaflet'
import type { LeafletMouseEvent } from 'leaflet'
import { GardenContext } from '../context/GardenContext'
import { useNavigate } from 'react-router-dom'
import 'leaflet/dist/leaflet.css'
import './CreateGarden.css'

// Fix Leaflet icon path issue
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

interface LocationSelectorProps {
  onSelect: (position: L.LatLng) => void
}

const LocationSelector = ({ onSelect }: LocationSelectorProps) => {
  useMapEvents({
    click(e: LeafletMouseEvent) {
      onSelect(new L.LatLng(e.latlng.lat, e.latlng.lng))
    },
  })
  return null
}

const CreateGarden = () => {
  const [name, setName] = useState<string>('')
  const [position, setPosition] = useState<L.LatLng | null>(null)
  const context = useContext(GardenContext)
  const navigate = useNavigate()

  if (!context) {
    throw new Error('GardenContext non défini')
  }

  const { addGarden } = context

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!position) return alert('Veuillez sélectionner un emplacement sur la carte.')

    const newGarden = {
      name,
      latitude: position.lat,
      longitude: position.lng,
    }
    addGarden(newGarden)
    navigate('/map')
  }

  return (
      <div className="create-garden-container">
        <h2>Créer un nouveau jardin</h2>
        <form onSubmit={handleSubmit} className="garden-form">
          <label>
            Nom du jardin :
            <input type="text" value={name} onChange={e => setName(e.target.value)} required />
          </label>

          <p className="map-instruction">Cliquez sur la carte pour choisir l'emplacement</p>
          <div className="map-wrapper">
            <MapContainer center={[48.8566, 2.3522]} zoom={12} className="leaflet-map">
              <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LocationSelector onSelect={setPosition} />
              {position && <Marker position={position} />}
            </MapContainer>
          </div>

          <button type="submit" className="submit-button">
            Ajouter le jardin
          </button>
        </form>
      </div>
  )
}

export default CreateGarden
