import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="hero"
      id="inicio"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Tecnologia Inteligente <span>que Gera Resultados</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Desenvolvemos soluções digitais sob medida para automatizar processos,
        aumentar produtividade e impulsionar resultados.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link to="/contato" className="btn">
          Ativar Engine
        </Link>
      </motion.div>
    </motion.section>
  )
}

export default Hero
