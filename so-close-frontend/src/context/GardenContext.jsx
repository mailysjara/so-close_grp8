import React, { createContext, useState } from 'react'

export const GardenContext = createContext()

export const GardenProvider = ({ children }) => {
  const [gardens, setGardens] = useState([
    { name: 'Jardin partagé de Belleville', position: [48.8708, 2.3891] },
    { name: 'Le Jardin sur le Toit – 20e', position: [48.8695, 2.4086] },
    { name: 'Le Jardin du Trocadéro', position: [48.8625, 2.2889] }
  ])

  const addGarden = (garden) => {
    setGardens(prev => [...prev, garden])
  }

  return (
    <GardenContext.Provider value={{ gardens, addGarden }}>
      {children}
    </GardenContext.Provider>
  )
}

