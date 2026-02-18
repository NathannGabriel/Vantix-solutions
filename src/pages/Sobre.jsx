import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import TeamSection from '../components/TeamSection'
import AboutContent from '../components/AboutContent'
import './Sobre.css'

const Sobre = () => {
  return (
    <div className="sobre-page">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hero"
      >
        <h1>
          Sobre a <span>Vantix Solutions</span>
        </h1>
        <p>
          Somos uma empresa de tecnologia focada em construir soluções digitais
          de alto impacto para o futuro do seu negócio.
        </p>
      </motion.div>

      <AboutContent />
      <TeamSection />
    </div>
  )
}

export default Sobre
