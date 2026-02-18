import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './FreeBudget.css'

const FreeBudget = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="free-budget"
    >
      <h2>
        <span>Orçamento 100% Gratuito</span>
      </h2>
      <p>
        Solicite uma análise do seu projeto sem custo algum. Nossa equipe
        avalia suas necessidades e retorna com uma proposta personalizada.
      </p>
      <Link to="/contato" className="budget-btn">
        Solicitar Orçamento
      </Link>
    </motion.section>
  )
}

export default FreeBudget
