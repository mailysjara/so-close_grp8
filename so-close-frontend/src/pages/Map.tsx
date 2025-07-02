import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import type { LatLngExpression } from 'leaflet'

interface Garden {
    id: number
    name: string
    latitude: number
    longitude: number
}

const Map = () => {
    const [gardens, setGardens] = useState<Garden[]>([])

    useEffect(() => {
        fetch('http://localhost:4000/api/gardens') // ou l'URL de ton serveur déployé
            .then(res => res.json())
            .then(data => setGardens(data))
            .catch(err => console.error('Erreur fetch gardens:', err))
    }, [])

    return (
        <div style={{ height: '80vh', margin: '0 2rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                Carte interactive des jardins à Paris
            </h2>
            <MapContainer
                center={[48.8566, 2.3522]}
                zoom={12}
                scrollWheelZoom={true}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {gardens.map((garden) => {
                    const position: LatLngExpression = [garden.latitude, garden.longitude]
                    return (
                        <Marker key={garden.id} position={position}>
                            <Popup>{garden.name}</Popup>
                        </Marker>
                    )
                })}
            </MapContainer>
        </div>
    )
}

export default Map
