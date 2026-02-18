import { useState } from 'react'
import { motion } from 'framer-motion'
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    origem: '',
    produto: '',
    investimento: '',
    ajuda: '',
  })

  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const formatPhone = (value) => {
    let v = value.replace(/\D/g, '')
    if (v.length > 11) v = v.slice(0, 11)
    v = v.replace(/^(\d{2})(\d)/, '($1) $2')
    v = v.replace(/(\d{5})(\d)/, '$1-$2')
    return v
  }

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value)
    setFormData((prev) => ({ ...prev, telefone: formatted }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('')

    // Simulação de envio - substitua pela integração real com EmailJS
    setTimeout(() => {
      setStatus('Mensagem enviada com sucesso!')
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        origem: '',
        produto: '',
        investimento: '',
        ajuda: '',
      })
      setIsSubmitting(false)
    }, 1500)

    // Para usar EmailJS, descomente e configure:
    /*
    emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', e.target)
      .then(() => {
        setStatus('Mensagem enviada com sucesso!')
        setFormData({ ... })
      })
      .catch((error) => {
        setStatus('Erro ao enviar mensagem. Por favor, tente novamente.')
      })
      .finally(() => setIsSubmitting(false))
    */
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="contact-form"
      onSubmit={handleSubmit}
    >
      <div className="field">
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <label>* Nome</label>
      </div>

      <div className="field">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>* E-mail</label>
      </div>

      <div className="field">
        <input
          type="tel"
          name="telefone"
          value={formData.telefone}
          onChange={handlePhoneChange}
          required
        />
        <label>* Número de telefone (Brasil +55)</label>
      </div>

      <div className="field">
        <select
          name="origem"
          value={formData.origem}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Selecione...
          </option>
          <option>Google</option>
          <option>Instagram</option>
          <option>Indicação</option>
          <option>LinkedIn</option>
          <option>Outro</option>
        </select>
        <label>* Como você conheceu a Vantix Solutions?</label>
      </div>

      <div className="field">
        <input
          type="text"
          name="produto"
          value={formData.produto}
          onChange={handleChange}
          required
        />
        <label>* Tipo de produto</label>
      </div>

      <div className="field">
        <select
          name="investimento"
          value={formData.investimento}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Selecione...
          </option>
          <option>Até R$ 1.000</option>
          <option>R$ 1.000 - R$ 5.000</option>
          <option>R$ 5.000 - R$ 10.000</option>
          <option>Acima de R$ 10.000</option>
        </select>
        <label>* Quanto você imagina investir?</label>
      </div>

      <div className="field">
        <textarea
          name="ajuda"
          rows="4"
          value={formData.ajuda}
          onChange={handleChange}
          required
        ></textarea>
        <label>* Como podemos te ajudar?</label>
      </div>

      <motion.button
        type="submit"
        className="submit-btn"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
      </motion.button>

      {status && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="status-message"
        >
          {status}
        </motion.p>
      )}
    </motion.form>
  )
}

export default ContactForm
