import { motion } from 'framer-motion'
import './AboutContent.css'

const AboutContent = () => {
  const cards = [
    {
      title: 'Missão',
      content:
        'Transformar negócios através da tecnologia, simplificando processos e potencializando resultados.',
    },
    {
      title: 'Visão',
      content:
        'Ser referência global em soluções digitais inteligentes, reconhecida pela inovação e excelência.',
    },
    {
      title: 'Valores',
      content:
        'Inovação constante • Qualidade técnica • Transparência total • Compromisso com o cliente',
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="about-content"
    >
      <div className="about-text">
        <div className="card">
          <p>
            A Vantix Solutions desenvolve softwares sob medida, sistemas
            inteligentes e automações para empresas de qualquer ramo.
          </p>
          <p>
            Unimos engenharia de software, inteligência artificial e design
            moderno para entregar produtos rápidos, seguros e escaláveis.
          </p>
        </div>
      </div>

      <div className="grid">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="card"
          >
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default AboutContent
