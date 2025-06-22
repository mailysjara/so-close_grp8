import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {GardenProvider} from "./context/GardenContext.tsx";

const rootElement = document.getElementById('root')

if (!rootElement) {
    throw new Error("Impossible de trouver l'élément root dans le DOM.")
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <GardenProvider>
            <App />
        </GardenProvider>
    </React.StrictMode>
)
