import React from 'react'

const iconClass = 'inline-block w-5 h-5 align-middle mx-0.5'

export const IconWave = () => (
  <span className={iconClass} role="img" aria-label="acenando">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-neon">
      <path d="M7 11c-.5 0-1 .19-1.41.59-.4.41-.59.91-.59 1.41 0 .5.19 1 .59 1.41.41.4.91.59 1.41.59s1-.19 1.41-.59c.4-.41.59-.91.59-1.41 0-.5-.19-1-.59-1.41C8 11.19 7.5 11 7 11zm10 0c-.5 0-1 .19-1.41.59-.4.41-.59.91-.59 1.41 0 .5.19 1 .59 1.41.41.4.91.59 1.41.59s1-.19 1.41-.59c.4-.41.59-.91.59-1.41 0-.5-.19-1-.59-1.41C18 11.19 17.5 11 17 11zm-5-8c-4.42 0-8 2.69-8 6 0 1.89 1.08 3.56 2.78 4.72L11 16.72V20h2v-3.28l2.22-2.22C16.92 12.56 18 10.89 18 9c0-3.31-3.58-6-8-6zm0 10c-1.94 0-4.16-.95-5.47-2.53C5.78 9.58 5 8.42 5 7c0-2.21 2.46-4 5-4s5 1.79 5 4c0 1.42-.78 2.58-2.53 3.47C13.16 12.05 10.94 13 9 13z"/>
    </svg>
  </span>
)

export const IconThink = () => (
  <span className={iconClass} role="img" aria-label="pensando">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-neon">
      <path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.41 2-1.53 2-2.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.21.79 2.33 2 2.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 9.67 10 10.5v10c0 .83.67 1.5 1.5 1.5h.5v2c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2h.5c.48 0 .91-.28 1.09-.68.19-.4.08-.85-.25-1.15l-1.5-1.5z"/>
    </svg>
  </span>
)

export const IconArrow = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)
