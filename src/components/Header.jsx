import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Header.css'

const Header = () => {
  const location = useLocation()

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="header"
    >
      <Link to="/" className="logo-link">
        <h1>VANTIX SOLUTIONS</h1>
      </Link>
      <nav>
        <Link
          to="/"
          className={location.pathname === '/' ? 'active' : ''}
        >
          Início
        </Link>
        <Link
          to="/sobre"
          className={location.pathname === '/sobre' ? 'active' : ''}
        >
          Sobre
        </Link>
        <Link
          to="/contato"
          className={location.pathname === '/contato' ? 'active' : ''}
        >
          Contato
        </Link>
      </nav>
    </motion.header>
  )
}

export default Header
