import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Chatbot.css'

const brain = [
  { keywords: ['oi', 'ola', 'olá', 'eai', 'hey'], reply: 'Olá! 👋 Como posso ajudar você hoje?' },
  { keywords: ['bom dia'], reply: 'Bom dia! Em que posso ajudar?' },
  { keywords: ['boa tarde'], reply: 'Boa tarde! Como posso ajudar você?' },
  { keywords: ['boa noite'], reply: 'Boa noite! Precisa de ajuda com algum projeto?' },
  { keywords: ['empresa', 'quem são', 'quem sao', 'sobre'], reply: 'Somos uma empresa de desenvolvimento de software focada em soluções sob medida.' },
  { keywords: ['missao'], reply: 'Nossa missão é transformar ideias em soluções digitais eficientes.' },
  { keywords: ['visao'], reply: 'Ser referência em inovação e qualidade em software.' },
  { keywords: ['valores'], reply: 'Inovação, transparência, qualidade e compromisso.' },
  { keywords: ['serviços', 'servicos'], reply: 'Desenvolvemos sites, sistemas, aplicativos, automações e integrações.' },
  { keywords: ['site', 'website'], reply: 'Criamos sites institucionais, landing pages e portais.' },
  { keywords: ['sistema', 'software'], reply: 'Sistemas sob medida para web ou desktop.' },
  { keywords: ['aplicativo', 'app'], reply: 'Aplicativos Android e iOS.' },
  { keywords: ['automacao', 'robos'], reply: 'Automação de processos empresariais.' },
  { keywords: ['chatbot'], reply: 'Chatbots para atendimento e vendas.' },
  { keywords: ['orcamento', 'preço', 'valor', 'custo'], reply: 'Nosso orçamento é totalmente gratuito.' },
  { keywords: ['como solicitar'], reply: 'Preencha o formulário de contato para solicitar orçamento.' },
  { keywords: ['prazo', 'tempo', 'entrega'], reply: 'O prazo depende da complexidade do projeto.' },
  { keywords: ['tecnologia', 'stack'], reply: 'Usamos JavaScript, Python, Node, React, bancos SQL e NoSQL.' },
  { keywords: ['framework'], reply: 'Trabalhamos com frameworks modernos.' },
  { keywords: ['suporte', 'ajuda'], reply: 'Oferecemos suporte antes, durante e após entrega.' },
  { keywords: ['manutencao'], reply: 'Temos planos de manutenção.' },
  { keywords: ['pagamento'], reply: 'Aceitamos Pix, boleto e transferência.' },
  { keywords: ['parcelamento'], reply: 'Podemos parcelar conforme projeto.' },
  { keywords: ['segurança', 'dados'], reply: 'Seguimos boas práticas de segurança.' },
  { keywords: ['lgpd'], reply: 'Atendemos LGPD.' },
  { keywords: ['contrato'], reply: 'Trabalhamos com contrato formal.' },
  { keywords: ['nota fiscal'], reply: 'Emitimos nota fiscal.' },
  { keywords: ['vaga', 'emprego', 'estagio'], reply: 'Envie currículo para contato@vantixsolutions.com.' },
  { keywords: ['parceria'], reply: 'Estamos abertos a parcerias.' },
  { keywords: ['garantia'], reply: 'Garantia conforme contrato.' },
  { keywords: ['atualizacao'], reply: 'Oferecemos atualização contínua.' },
  { keywords: ['crm'], reply: 'Desenvolvemos CRMs personalizados.' },
  { keywords: ['vendas'], reply: 'Soluções para funil de vendas.' },
  { keywords: ['seo'], reply: 'Otimização para Google.' },
  { keywords: ['marketing'], reply: 'Integração com marketing digital.' },
  { keywords: ['hospedagem', 'servidor'], reply: 'Auxiliamos na hospedagem.' },
  { keywords: ['login'], reply: 'Podemos criar sistemas com login seguro.' },
  { keywords: ['cadastro'], reply: 'Cadastro de usuários.' },
  { keywords: ['relatorio'], reply: 'Dashboards e relatórios.' },
  { keywords: ['api'], reply: 'Integração com APIs externas.' },
  { keywords: ['pagamento online'], reply: 'Gateways de pagamento.' },
  { keywords: ['loja', 'ecommerce'], reply: 'Lojas virtuais completas.' },
  { keywords: ['inteligencia artificial', 'ia'], reply: 'Implementamos soluções com IA.' },
  { keywords: ['onde ficam'], reply: 'Atendemos online em todo Brasil.' },
  { keywords: ['horario'], reply: 'Segunda a sexta, 9h às 18h.' },
  { keywords: ['demo'], reply: 'Podemos agendar demonstração.' },
  { keywords: ['portfolio'], reply: 'Temos portfólio disponível no site.' },
  { keywords: ['avaliacao'], reply: 'Sua opinião é importante.' },
  { keywords: ['obrigado', 'valeu'], reply: 'Eu que agradeço!' },
  { keywords: ['tchau'], reply: 'Até mais!' },
]

const normalize = (text) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
}

const scoreMessage = (message, keyword) => {
  const msgWords = message.split(' ')
  const keyWords = keyword.split(' ')
  let score = 0
  keyWords.forEach((k) => {
    msgWords.forEach((m) => {
      if (m.includes(k) || k.includes(m)) {
        score++
      }
    })
  })
  return score
}

const findBestReply = (message) => {
  const cleanMsg = normalize(message)
  let bestScore = 0
  let bestReply = null

  brain.forEach((block) => {
    block.keywords.forEach((key) => {
      const s = scoreMessage(cleanMsg, normalize(key))
      if (s > bestScore) {
        bestScore = s
        bestReply = block.reply
      }
    })
  })

  return bestReply
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            text: 'Olá! 👋 Sou a EVA, sua assistente virtual. Como posso ajudar você hoje?',
            type: 'bot',
          },
        ])
      }, 500)
    }
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = { text: inputValue, type: 'user' }
    setMessages((prev) => [...prev, userMessage])

    const reply = findBestReply(inputValue)
    const botMessage = {
      text: reply || 'Não entendi bem 🤔 Pode reformular ou escolher um assunto como: site, sistema, orçamento, chatbot.',
      type: 'bot',
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage])
    }, 500)

    setInputValue('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  return (
    <motion.div
      className="chatbot"
      initial={false}
      animate={{
        height: isOpen ? 380 : 48,
      }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      onHoverStart={() => setIsOpen(true)}
      onHoverEnd={() => setIsOpen(false)}
    >
      <div className="chat-header">EVA</div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="chat-content"
          >
            <div className="messages">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`message ${msg.type}`}
                >
                  {msg.text}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="input-area">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Pergunte ao núcleo..."
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={sendMessage}
              >
                ➜
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Chatbot
