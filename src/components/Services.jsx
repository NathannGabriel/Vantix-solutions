import { motion } from 'framer-motion'
import './Services.css'

const Services = () => {
    const services = [
        {
            title: 'Densenvolvimento Web',
            description: 'Lading pages, sites institucionais e plataformas completas, com foco em performance e SEO.',
            icon: '🌐'
        },
        {
            title: 'Automação de Processos',
            description: 'Automatize tarefas repetitivas e ganhe tempo focando no que realmente importa para seu negócio.',
            icon: '⚙️'
        },
        {
            title: 'Sistemas Personalizados',
            description: 'Soluções de software desenvolvidas sob medida para atender as necessidades específicas da sua empresa.',
            icon: '💻'
        },
        {
            title: 'Consultoria Tecnológica',
            description: 'Orientação estratégica para transformar a tecnologia em um diferencial competitivo.',
            icon: '🚀'
        }
    ]

    return (
        <section className="services" id="servicos">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="services-header"
            >
                <h2>O que fazemos? <br /><span>Entenda os nossos serviços!</span></h2>
            </motion.div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="service-card"
                    >
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Services
