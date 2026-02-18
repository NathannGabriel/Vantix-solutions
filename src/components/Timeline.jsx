import { motion } from 'framer-motion'
import './Timeline.css'

const Timeline = () => {
  const events = [
    {
      year: '2026',
      title: 'Fundação',
      description: 'Criação da Vantix Solutions com foco em software sob medida.',
    },
    {
      year: 'Futuro',
      title: 'Expansão',
      description: 'Expansão nacional e internacional.',
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="timeline"
    >
      <h2 className="timeline-title">
        <span>Trajetória</span> Vantix Solutions
      </h2>
      <div className="timeline-line">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="event"
          >
            <h3>{event.year} — {event.title}</h3>
            <p>{event.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Timeline
