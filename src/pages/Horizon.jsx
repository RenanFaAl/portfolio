import { Link } from "react-router-dom";

function LifePlus() {
  return (
    <section className="project-page">
      <div className="project-hero">
        <span className="section-label">PROJETO 1° e 2° semestre</span>

        <h1>Horizon</h1>

        <p>
          Um sistema de gerenciamento de bancos de sangue desenvolvido para auxiliar e incentivar a doação de sangue.
        </p>

        <div className="technologies large">
          <span>Handlebars</span>
          <span>Node.js</span>
          <span>Express</span>
        </div>

        <a
          href="https://github.com/RenanFaAl/Horizon"
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
            O Horizon é uma aplicação voltada para o incentivo de doação.
            O sistema permite envio de e-mails, geração de relatórios, cadastro de usuarios / pontos de coleta de sangue.
          </p>
        </section>

        <section>
          <h2>Tecnologias utilizadas</h2>

          <ul className="tech-list">
            <li>Handlebars para o site web</li>
            <li>Node.js para o backend</li>
            <li>Express para criação das rotas da API</li>
          </ul>
        </section>

        <section>
          <h2>Minha participação</h2>

          <p>
            Participei do desenvolvimento da aplicação, contribuindo para a
            construção das funcionalidades, criação de telas e organização da estrutura do
            projeto, além da criação da documentação do projeto.
          </p>

        </section>

        <section>
          <h2>Projeto em funcionamento</h2>

          <div className="screenshots">
            <img
              src="/images/horizon.png"
              alt="Horizon em funcionamento"
            />
            <br></br>            
            <img
              src="/images/horizon2.png"
              alt="Horizon em funcionamento"
            />
            <br></br> 
            <img
              src="/images/horizon3.png"
              alt="Horizon em funcionamento"
            />
            <br></br> 
            <img
              src="/images/horizon4.png"
              alt="Horizon em funcionamento"
            />
            <br></br> 
            <img
              src="/images/horizon5.png"
              alt="Horizon em funcionamento"
            />
            <br></br> 
            <img
              src="/images/horizon6.png"
              alt="Horizon em funcionamento"
            />
            <br></br> 
            <img
              src="/images/horizon7.png"
              alt="Horizon em funcionamento"
            />
            <br></br> 
            <img
              src="/images/horizon8.png"
              alt="Horizon em funcionamento"
            />
            <br></br> 
            <img
              src="/images/horizon9.png"
              alt="Horizon em funcionamento"
            />
            <br></br> 
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