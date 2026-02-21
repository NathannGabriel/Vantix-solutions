import { motion } from 'framer-motion'
import { IconGlobe, IconGear, IconLaptop, IconRocket } from './icons/ServiceIcons'
import './Services.css'

const SERVICES_CONFIG = [
    {
        title: 'Densenvolvimento Web',
        description: 'Lading pages, sites institucionais e plataformas completas, com foco em performance e SEO.',
        Icon: IconGlobe,
    },
    {
        title: 'Automação de Processos',
        description: 'Automatize tarefas repetitivas e ganhe tempo focando no que realmente importa para seu negócio.',
        Icon: IconGear,
    },
    {
        title: 'Sistemas Personalizados',
        description: 'Soluções de software desenvolvidas sob medida para atender as necessidades específicas da sua empresa.',
        Icon: IconLaptop,
    },
    {
        title: 'Consultoria Tecnológica',
        description: 'Orientação estratégica para transformar a tecnologia em um diferencial competitivo.',
        Icon: IconRocket,
    },
]

const Services = () => {
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
                {SERVICES_CONFIG.map((service, index) => {
                    const { Icon } = service
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="service-card"
                        >
                            <div className="service-icon flex items-center justify-center">
                                <Icon />
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services
