const ProcessoSeletivo = () => {
  return (
    <section
      id="processo-seletivo"
      className="bg-dark text-white py-16 md:py-24 px-4 md:px-8 lg:px-16"
      aria-labelledby="processo-seletivo-heading"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Título e subtítulo */}
        <header className="text-center space-y-4">
          <h2
            id="processo-seletivo-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Processo Seletivo
          </h2>
          <p className="text-xl md:text-2xl text-neon font-medium">
            Quer fazer parte da nossa alcateia?
          </p>
        </header>

        {/* Texto institucional */}
        <p className="text-base md:text-lg text-text-secondary leading-relaxed text-center max-w-3xl mx-auto">
          Se você é estudante de graduação em{' '}
          <strong className="text-neon">Engenharia da Computação</strong> da{' '}
          <strong className="text-neon">Fastech Sinop-MT</strong>, não perca
          essa oportunidade de desenvolver suas habilidades e contribuir para
          projetos desafiadores. Na <strong className="text-neon">Vantix</strong>, você terá a
          chance de trabalhar em equipe, aprender com profissionais experientes
          e participar de eventos e treinamentos exclusivos.
        </p>

        {/* Botão Edital */}
        <div className="flex justify-center">
          <a
            href="#edital"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-dark bg-neon rounded-lg transition-all duration-200 hover:opacity-90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-dark"
          >
            Leia nosso Edital
          </a>
        </div>

        {/* Seção Diretorias */}
        <div className="space-y-6 pt-8 border-t border-border">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Diretorias
          </h3>
          {/* Estrutura preparada para futura listagem de diretorias */}
          <div className="min-h-[80px] flex items-center justify-center text-text-secondary text-sm">
            Em breve: informações sobre as diretorias.
          </div>
        </div>

        {/* Seção Etapas do Processo Seletivo */}
        <div className="space-y-6 pt-8 border-t border-border">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Etapas do Processo Seletivo
          </h3>
          {/* Estrutura preparada para futura adição das etapas (incl. inscrições) */}
          <ol className="space-y-4" aria-label="Etapas do processo seletivo">
            <li className="flex items-center gap-3 text-text-secondary">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neon/20 text-neon font-semibold text-sm">
                1
              </span>
              <span>Inscrições (em breve)</span>
            </li>
            {/* Placeholders para futuras etapas */}
          </ol>
        </div>

        {/* Destaque - próximo processo */}
        <div
          className="rounded-xl bg-neon/10 border border-neon/40 px-6 py-5 text-center"
          role="status"
        >
          <p className="text-lg md:text-xl font-semibold text-neon">
            Aguarde o nosso próximo Processo Seletivo em 2026.2. Até lá!
          </p>
        </div>

        {/* Aviso secundário - inscrições fechadas */}
        <div
          className="rounded-lg bg-panel border border-border px-5 py-4 text-center"
          role="alert"
        >
          <p className="text-sm md:text-base text-text-secondary">
            Estão fechadas as inscrições para o Processo Seletivo 2026.1
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProcessoSeletivo
