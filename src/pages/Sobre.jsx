function Sobre() {
  return (
    <section className="page">
      <div className="page-header">
        <span className="section-label">SOBRE MIM</span>
        <h1>Minha trajetória</h1>
        <p>
          Conheça minha formação, conhecimentos, cursos e experiência.
        </p>
      </div>

      <div className="info-grid">
        <section className="info-card">
          <h2>Informações pessoais</h2>

          <div className="info-item">
            <strong>Nome</strong>
            <span>Renan Fabiani</span>
          </div>

          <div className="info-item">
            <strong>GitHub</strong>
            <a
              href="https://github.com/RenanFaAl"
              target="_blank"
              rel="noreferrer"
            >
              github.com/RenanFaAl
            </a>
          </div>
        </section>

        <section className="info-card">
          <h2>Formação acadêmica</h2>

          <div className="timeline-item">
            <span className="date">2024 — 2026</span>

            <h3>Desenvolvimento de Software</h3>

            <p>
              Faculdade: <strong>FATEC</strong>
            </p>

            <p>
              Curso voltado ao desenvolvimento de sistemas, programação,
              bancos de dados, engenharia de software e tecnologias web.
            </p>
          </div>
        </section>
      </div>

      <section className="full-section">
        <span className="section-label">EXPERIÊNCIA</span>

        <h2>Experiência profissional</h2>

        <div className="empty-experience">
          <h3>Estagiário em Projetos e Serviços na empresa Docspider</h3>

          <p>
            Atualmente atuo como estagiário na empresa Docspider, contribuindo para a criação e manutenção de ambientes de clientes, além de testes de funcionalidades e suporte técnico.
          </p>
        </div>
      </section>

      {/* <section className="full-section">
        <span className="section-label">CURSOS</span>

        <h2>Cursos de extensão</h2>

        <div className="course-list">

            <div className="course">

                <div></div>

                <div className="course-info">
                <h3>Google Cloud / Cloud Skills</h3>
                <p>Serviços em Nuvem</p>
                </div>

                <div className="course-divider"></div>

                <div className="course-details">
                <span>🎓 Google Cloud</span>
                <span>◷ 40 horas</span>
                <span>▣ 2026 — Em andamento</span>
                </div>

                <span className="course-status">
                Em andamento
                </span>

            </div>


            <div className="course">

                <div></div>

                <div className="course-info">
                <h3>Python</h3>
                <p>APIs e ciência de dados</p>
                </div>

                <div className="course-divider"></div>

                <div className="course-details">
                <span>🎓 Plataforma de cursos online</span>
                <span>◷ 60 horas</span>
                <span>▣ 2026 — Em andamento</span>
                </div>

                <span className="course-status">
                Em andamento
                </span>

            </div>


            <div className="course">

                <div></div>

                <div className="course-info">
                <h3>Machine Learning</h3>
                <p>Estudos e cursos de desenvolvimento</p>
                </div>

                <div className="course-divider"></div>

                <div className="course-details">
                <span>🎓 Plataforma de cursos online</span>
                <span>◷ 80 horas</span>
                <span>▣ 2026 — Em andamento</span>
                </div>

                <span className="course-status">
                Em andamento
                </span>

            </div>

            </div>
      </section> */}

      <section className="full-section">
        <span className="section-label">IDIOMAS</span>

        <h2>Conhecimentos linguísticos</h2>

        <div className="languages">
          <div>
            <strong>Português</strong>
            <span>Nativo</span>
          </div>

          <div>
            <strong>Inglês</strong>
            <span>Avançado</span>
          </div>

          <div>
            <strong>Francês</strong>
            <span>Básico</span>
          </div>

          <div>
            <strong>Espanhol</strong>
            <span>Básico</span>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Sobre;