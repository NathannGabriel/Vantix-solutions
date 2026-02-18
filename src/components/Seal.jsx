import { motion } from 'framer-motion'
import './Seal.css'

const Seal = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="seal-area"
    >
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="seal"
      >
        <span>Vantix Solutions</span>
        <p>Empresa Júnior</p>
      </motion.div>
    </motion.section>
  )
}

export default Seal
