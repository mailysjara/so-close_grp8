import React from 'react'

const features = [
  {
    icon: '🌱',
    title: 'Plantation collaborative',
    description: 'Organisez vos plantations selon les saisons et coordonnez-vous avec vos voisins'
  },
  {
    icon: '🗓️',
    title: 'Planification intelligente',
    description: 'Suivez le calendrier des cultures et optimisez vos récoltes'
  },
  {
    icon: '👥',
    title: 'Communauté active',
    description: 'Partagez conseils, astuces et expériences avec d\'autres jardiniers urbains'
  },
  {
    icon: '📊',
    title: 'Suivi des progrès',
    description: 'Documentez l\'évolution de votre jardin et mesurez votre impact'
  }
]

const Features = () => (
  <div className="main-content">
    <div className="description">
      Faire de chaque quartier parisien un écosystème comestible vivant, durable et participatif.
      Et si cultiver la ville devenait un projet collectif ? Avec So-Close, Paris se végétalise quartier par quartier,
      grâce à une plateforme citoyenne où les amateurs comme les passionnés se retrouvent pour créer ou rejoindre un jardin comestible.
      Planifiez vos plantations selon les saisons et la biodiversité locale, organisez les tâches entre voisins,
      partagez vos astuces, vos réussites (et même vos ratés !) — et suivez ensemble l'évolution de votre coin de verdure.
      So-Close, c'est bien plus qu'un outil : c'est une communauté engagée, un carnet de bord vivant, et un moteur d'action
      pour verdir la ville, un potager à la fois.
    </div>

    <div className="features">
      {features.map((feature, index) => (
        <div key={index} className="feature">
          <div className="feature-icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>

    <div style={{ textAlign: 'center' }}>
      <a href="#" className="cta-button">Rejoindre la communauté</a>
    </div>
  </div>
)

export default Features

