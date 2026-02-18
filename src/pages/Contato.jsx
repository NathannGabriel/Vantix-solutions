import { useState } from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import './Contato.css'

const Contato = () => {
  return (
    <div className="contato-page">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hero"
      >
        <h1>Fale com a Vantix Solutions</h1>
      </motion.div>

      <ContactForm />
    </div>
  )
}

export default Contato
