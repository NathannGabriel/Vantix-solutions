import { motion } from 'framer-motion'
import MemberCard from './MemberCard'
import './TeamSection.css'
import nathanImg from '../assets/nathan.jpg'
import felipeImg from '../assets/felipe.jpg'
import mateusImg from '../assets/mateus.jpg'
import angeloImg from '../assets/angelo.jpg'
import giusephImg from '../assets/giuseph.jpg'

const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/200'

const MEMBERS = [
  { id: 1, name: 'Nathan', role: 'CEO & Fundador', github: 'https://github.com/nathan', linkedin: '#', image: nathanImg },
  { id: 2, name: 'Felipe', role: 'Desenvolvedor Full Stack', github: 'https://github.com/felipe', linkedin: '#', image: felipeImg },
  { id: 3, name: 'Mateus', role: 'UX/UI Designer', github: 'https://github.com/mateus', linkedin: '#', image: mateusImg },
  { id: 4, name: 'Angelo', role: 'Marketing Digital', github: 'https://github.com/angelo', linkedin: '#', image: angeloImg },
  { id: 5, name: 'Giuseph', role: 'Marketing Digital', github: 'https://github.com/giuseph', linkedin: '#', image: giusephImg },
]

const TeamSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="team-section"
      id="team"
    >
      <div className="team-header">
        <h2>Nosso Time</h2>
        <p>Conheça as pessoas por trás da Vantix Solutions</p>
      </div>
      <div className="team-grid">
        {MEMBERS.map((member, index) => (
          <MemberCard key={member.id} member={member} index={index} placeholderImage={PLACEHOLDER_IMAGE} />
        ))}
      </div>
    </motion.section>
  )
}

export default TeamSection
