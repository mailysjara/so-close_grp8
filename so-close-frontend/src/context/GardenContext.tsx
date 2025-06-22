  import React, { createContext, useState } from 'react'

  type Garden = {
    name: string
    latitude: number
    longitude: number
  }

  type GardenContextType = {
    gardens: Garden[]
    addGarden: (garden: Garden) => void
  }

  export const GardenContext = createContext<GardenContextType | undefined>(undefined)

  interface Props {
    children: React.ReactNode
  }

  export const GardenProvider = ({ children }: Props) => {
    const [gardens, setGardens] = useState<Garden[]>([])

    const addGarden = (garden: Garden) => {
      setGardens((prev) => [...prev, garden])
    }

    return (
        <GardenContext.Provider value={{ gardens, addGarden }}>
          {children}
        </GardenContext.Provider>
    )
  }


