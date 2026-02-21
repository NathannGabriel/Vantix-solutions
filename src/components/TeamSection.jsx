import { useState, useCallback, useEffect } from 'react'
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
  { id: 5, name: 'Giuseph', role: 'Marketing Digital', github: 'https://github.com/giuseph66', linkedin: '#', image: giusephImg },
]

const CAROUSEL_BREAKPOINT = 768

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < CAROUSEL_BREAKPOINT : false
  )

  const updateMode = useCallback(() => {
    setIsMobile(window.innerWidth < CAROUSEL_BREAKPOINT)
  }, [])

  useEffect(() => {
    updateMode()
    window.addEventListener('resize', updateMode)
    return () => window.removeEventListener('resize', updateMode)
  }, [updateMode])

  const slidesToShow = 1
  const maxIndex = Math.max(0, MEMBERS.length - slidesToShow)
  const goPrev = () => setCurrentIndex((i) => (i <= 0 ? maxIndex : i - 1))
  const goNext = () => setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1))

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="team-section max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20"
      id="team"
    >
      <div className="team-header text-center mb-12 md:mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-neon to-indigo-500 bg-clip-text text-transparent">
          Nosso Time
        </h2>
        <p className="text-text-secondary text-lg">
          Conheça as pessoas por trás da Vantix Solutions
        </p>
      </div>

      {isMobile ? (
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex h-full cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x
              if (swipe < -40) goNext()
              else if (swipe > 40) goPrev()
            }}
            animate={{ x: `-${currentIndex * (100 / MEMBERS.length)}%` }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            style={{ width: `${MEMBERS.length * 100}%`, touchAction: 'none' }}
          >
            {MEMBERS.map((member, index) => (
              <div
                key={member.id}
                className="flex-shrink-0 flex justify-center px-4"
                style={{ width: `${100 / MEMBERS.length}%` }}
              >
                <MemberCard member={member} index={index} placeholderImage={PLACEHOLDER_IMAGE} />
              </div>
            ))}
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              type="button"
              onClick={goPrev}
              className="w-12 h-12 rounded-full bg-panel border-2 border-neon text-neon flex items-center justify-center hover:bg-neon hover:text-dark transition-all active:scale-90 z-20"
              aria-label="Membro anterior"
            >
              <span className="text-2xl">‹</span>
            </button>

            <div className="flex gap-3">
              {MEMBERS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-8 bg-neon' : 'bg-gray-600'
                    }`}
                  aria-label={`Ir para membro ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="w-12 h-12 rounded-full bg-panel border-2 border-neon text-neon flex items-center justify-center hover:bg-neon hover:text-dark transition-all active:scale-90 z-20"
              aria-label="Próximo membro"
            >
              <span className="text-2xl">›</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="team-grid">
          {MEMBERS.map((member, index) => (
            <MemberCard key={member.id} member={member} index={index} placeholderImage={PLACEHOLDER_IMAGE} />
          ))}
        </div>
      )}
    </motion.section>
  )
}

export default TeamSection
