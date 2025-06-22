import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-brand">So-Close</div>
      <div className="navbar-links">
        <Link to="/" className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}>
          Accueil
        </Link>
        <Link to="/map" className={`navbar-link ${location.pathname === '/map' ? 'active' : ''}`}>
          Carte des jardins
        </Link>
	<Link to="/create" className={`navbar-link ${location.pathname === '/create' ? 'active' : ''}`}>
 	 Créer un jardin
	</Link>
      </div>
    </nav>
  )
}

export default Navbar

