// SCROLL ANIMATION
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        if (sec.getBoundingClientRect().top < window.innerHeight - 120) {
            sec.classList.add("show");
        }
    });
});

const brain = [

    /* === SAUDAÇÕES === */
    { keywords: ["oi", "ola", "olá", "eai", "hey"], reply: "Olá! 👋 Como posso ajudar você hoje?" },
    { keywords: ["bom dia"], reply: "Bom dia! Em que posso ajudar?" },
    { keywords: ["boa tarde"], reply: "Boa tarde! Como posso ajudar você?" },
    { keywords: ["boa noite"], reply: "Boa noite! Precisa de ajuda com algum projeto?" },

    /* === EMPRESA === */
    { keywords: ["empresa", "quem são", "quem sao", "sobre"], reply: "Somos uma empresa de desenvolvimento de software focada em soluções sob medida." },
    { keywords: ["missao"], reply: "Nossa missão é transformar ideias em soluções digitais eficientes." },
    { keywords: ["visao"], reply: "Ser referência em inovação e qualidade em software." },
    { keywords: ["valores"], reply: "Inovação, transparência, qualidade e compromisso." },

    /* === SERVIÇOS === */
    { keywords: ["serviços", "servicos"], reply: "Desenvolvemos sites, sistemas, aplicativos, automações e integrações." },
    { keywords: ["site", "website"], reply: "Criamos sites institucionais, landing pages e portais." },
    { keywords: ["sistema", "software"], reply: "Sistemas sob medida para web ou desktop." },
    { keywords: ["aplicativo", "app"], reply: "Aplicativos Android e iOS." },
    { keywords: ["automacao", "robos"], reply: "Automação de processos empresariais." },
    { keywords: ["chatbot"], reply: "Chatbots para atendimento e vendas." },

    /* === ORÇAMENTO === */
    { keywords: ["orcamento", "preço", "valor", "custo"], reply: "Nosso orçamento é totalmente gratuito." },
    { keywords: ["como solicitar"], reply: "Preencha o formulário de contato para solicitar orçamento." },

    /* === PRAZO === */
    { keywords: ["prazo", "tempo", "entrega"], reply: "O prazo depende da complexidade do projeto." },

    /* === TECNOLOGIAS === */
    { keywords: ["tecnologia", "stack"], reply: "Usamos JavaScript, Python, Node, React, bancos SQL e NoSQL." },
    { keywords: ["framework"], reply: "Trabalhamos com frameworks modernos." },

    /* === SUPORTE === */
    { keywords: ["suporte", "ajuda"], reply: "Oferecemos suporte antes, durante e após entrega." },
    { keywords: ["manutencao"], reply: "Temos planos de manutenção." },

    /* === PAGAMENTO === */
    { keywords: ["pagamento"], reply: "Aceitamos Pix, boleto e transferência." },
    { keywords: ["parcelamento"], reply: "Podemos parcelar conforme projeto." },

    /* === SEGURANÇA === */
    { keywords: ["segurança", "dados"], reply: "Seguimos boas práticas de segurança." },
    { keywords: ["lgpd"], reply: "Atendemos LGPD." },

    /* === COMERCIAL === */
    { keywords: ["contrato"], reply: "Trabalhamos com contrato formal." },
    { keywords: ["nota fiscal"], reply: "Emitimos nota fiscal." },

    /* === TRABALHE CONOSCO === */
    { keywords: ["vaga", "emprego", "estagio"], reply: "Envie currículo para contato@empresa.com." },

    /* === PARCERIAS === */
    { keywords: ["parceria"], reply: "Estamos abertos a parcerias." },

    /* === PÓS VENDA === */
    { keywords: ["garantia"], reply: "Garantia conforme contrato." },
    { keywords: ["atualizacao"], reply: "Oferecemos atualização contínua." },

    /* === CRM / VENDAS === */
    { keywords: ["crm"], reply: "Desenvolvemos CRMs personalizados." },
    { keywords: ["vendas"], reply: "Soluções para funil de vendas." },

    /* === MARKETING === */
    { keywords: ["seo"], reply: "Otimização para Google." },
    { keywords: ["marketing"], reply: "Integração com marketing digital." },

    /* === HOSPEDAGEM === */
    { keywords: ["hospedagem", "servidor"], reply: "Auxiliamos na hospedagem." },

    /* === LOGIN === */
    { keywords: ["login"], reply: "Podemos criar sistemas com login seguro." },
    { keywords: ["cadastro"], reply: "Cadastro de usuários." },

    /* === RELATÓRIOS === */
    { keywords: ["relatorio"], reply: "Dashboards e relatórios." },

    /* === INTEGRAÇÕES === */
    { keywords: ["api"], reply: "Integração com APIs externas." },
    { keywords: ["pagamento online"], reply: "Gateways de pagamento." },

    /* === ECOMMERCE === */
    { keywords: ["loja", "ecommerce"], reply: "Lojas virtuais completas." },

    /* === IA === */
    { keywords: ["inteligencia artificial", "ia"], reply: "Implementamos soluções com IA." },

    /* === LOCALIZAÇÃO === */
    { keywords: ["onde ficam"], reply: "Atendemos online em todo Brasil." },

    /* === HORÁRIO === */
    { keywords: ["horario"], reply: "Segunda a sexta, 9h às 18h." },

    /* === DEMONSTRAÇÃO === */
    { keywords: ["demo"], reply: "Podemos agendar demonstração." },

    /* === PORTFOLIO === */
    { keywords: ["portfolio"], reply: "Temos portfólio disponível no site." },

    /* === FEEDBACK === */
    { keywords: ["avaliacao"], reply: "Sua opinião é importante." },

    /* === ENCERRAMENTO === */
    { keywords: ["obrigado", "valeu"], reply: "Eu que agradeço!" },
    { keywords: ["tchau"], reply: "Até mais!" }

];

function normalize(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s]/g, "");
}

function scoreMessage(message, keyword) {
    const msgWords = message.split(" ");
    const keyWords = keyword.split(" ");

    let score = 0;

    keyWords.forEach(k => {
        msgWords.forEach(m => {
            if (m.includes(k) || k.includes(m)) {
                score++;
            }
        });
    });

    return score;
}

function findBestReply(message) {
    const cleanMsg = normalize(message);

    let bestScore = 0;
    let bestReply = null;

    brain.forEach(block => {
        block.keywords.forEach(key => {
            const s = scoreMessage(cleanMsg, normalize(key));
            if (s > bestScore) {
                bestScore = s;
                bestReply = block.reply;
            }
        });
    });

    return bestReply;
}

function addMessage(text, type) {
    const messages = document.getElementById("messages");
    if (!messages) return;

    if (type === "user") {
        messages.innerHTML += `<div class="user">Você: ${text}</div>`;
    } else {
        messages.innerHTML += `<div class="bot">EVA: ${text}</div>`;
    }
    messages.scrollTop = messages.scrollHeight;
}

function send() {
    const input = document.getElementById("userInput");
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");

    const reply = findBestReply(text);

    if (reply) {
        addMessage(reply, "bot");
    } else {
        addMessage("Não entendi bem 🤔 Pode reformular ou escolher um assunto como: site, sistema, orçamento, chatbot.", "bot");
    }

    input.value = "";
}

// ENTER KEY SUPPORT
document.getElementById("userInput")?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        send();
    }
});

// AUTOMATIC WELCOME MESSAGE & SCROLL TO TOP
window.addEventListener("load", () => {
    window.scrollTo(0, 0); // Start at the top
    const messages = document.getElementById("messages");
    if (messages && messages.innerHTML === "") {
        setTimeout(() => {
            addMessage("Olá! 👋 Sou a EVA, sua assistente virtual. Como posso ajudar você hoje?", "bot");
        }, 500);
    }
});

window.addEventListener("beforeunload", () => {
    window.scrollTo(0, 0);
});

