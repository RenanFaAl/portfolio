import { Link } from "react-router-dom";

function LifePlus() {
  return (
    <section className="project-page">
      <div className="project-hero">
        <span className="section-label">PROJETO 4° e 5° semestre</span>

        <h1>Life+</h1>

        <p>
          Um sistema de gerenciamento de saúde desenvolvido para auxiliar
          usuários no controle de medicamentos e armazenamento de informações
          médicas.
        </p>

        <div className="technologies large">
          <span>React Native</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>PostgreSQL</span>
          <span>Prisma</span>
        </div>

        <a
          href="https://github.com/RenanFaAl/life-plus-mobile"
          target="_blank"
          rel="noreferrer"
          className="primary-button"
        >
          Ver código no GitHub →
        </a>
      </div>

      <div className="project-details">
        <section>
          <h2>Sobre o projeto</h2>

          <p>
            O Life+ é uma aplicação voltada para o gerenciamento de saúde.
            O sistema permite cadastrar medicamentos, gerar lembretes para
            seus horários de utilização e armazenar documentos relacionados
            à saúde, como receitas e resultados de exames.
          </p>
        </section>

        <section>
          <h2>Tecnologias utilizadas</h2>

          <ul className="tech-list">
            <li>React Native para o aplicativo mobile</li>
            <li>Node.js para o backend</li>
            <li>Express para criação das rotas da API</li>
            <li>PostgreSQL para armazenamento dos dados</li>
            <li>Prisma Client para comunicação com o banco</li>
          </ul>
        </section>

        <section>
          <h2>Minha participação</h2>

          <p>
            Participei do desenvolvimento da aplicação, contribuindo para a
            construção das funcionalidades, integração entre o aplicativo
            mobile e a API, criação de telas e organização da estrutura do
            projeto.
          </p>

          <p>
            Também trabalhei com integração de serviços, autenticação,
            gerenciamento de medicamentos, exames e comunicação com o banco
            de dados.
          </p>
        </section>

        <section>
          <h2>Projeto em funcionamento</h2>

          <div className="screenshots">
            <img
              src="/images/lifeplus.png"
              alt="Life+ em funcionamento"
            />
          </div>
        </section>
      </div>

      <Link to="/projetos" className="back-link">
        ← Voltar para projetos
      </Link>
    </section>
  );
}

export default LifePlus;