import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Seal from '../components/Seal'
import FreeBudget from '../components/FreeBudget'
import Timeline from '../components/Timeline'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Seal />
      <FreeBudget />
      <Timeline />
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="contact-section"
        id="contato"
      >
        <h2>Contato</h2>
        <p>Email: contato@vantixsolutions.com</p>
      </motion.section>
    </div>
  )
}

export default Home
