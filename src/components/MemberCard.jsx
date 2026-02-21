import { useState } from 'react'
import { motion } from 'framer-motion'
import './MemberCard.css'

const PLACEHOLDER_DEFAULT = 'https://via.placeholder.com/200'

const MemberCard = ({ member, index = 0, placeholderImage = PLACEHOLDER_DEFAULT }) => {
  const [imgSrc, setImgSrc] = useState(member?.image || placeholderImage)

  const handleImageError = () => {
    setImgSrc(placeholderImage)
  }

  const delay = Number(index) * 0.1

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="member-card"
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className="member-image-container">
        <img src={imgSrc} alt={member?.name ?? ''} onError={handleImageError} />
      </div>
      <h3>{member?.name}</h3>
      <span className="member-role">{member?.role}</span>
    </motion.div>
  )
}

export default MemberCard
