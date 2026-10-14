import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">DESENVOLVEDOR DE SOFTWARE</span>

          <h1>
            Olá, eu sou
            <br />
            <span>Renan Fabiani.</span>
          </h1>

          <p>
            Estudante de desenvolvimento de software com interesse em
            desenvolvimento backend, APIs e construção de aplicações web e
            mobile.
          </p>

          <div className="hero-buttons">
            <Link to="/projetos" className="primary-button">
              Ver meus projetos
            </Link>

            <a
              href="https://github.com/RenanFaAl"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="code-box">
            <span>const</span> developer = {"{"}
            <br />
            &nbsp;&nbsp;name: <b>"Renan"</b>,
            <br />
            &nbsp;&nbsp;focus: <b>"Multiplataforma"</b>,
            <br />
            &nbsp;&nbsp;coffee: <b>true</b>
            <br />
            {"}"};
          </div>
        </div>
      </section>

      <section className="about-preview">
        <span className="section-label">SOBRE MIM</span>

        <h2>Desenvolvedor em constante evolução.</h2>

        <p style={{ maxWidth: "600px", margin: "0 auto" , padding: "0 1rem 1rem 1rem"}}>
          Tenho interesse em desenvolvimento de software e venho construindo
          projetos utilizando diferentes tecnologias. Meu principal interesse
          está no desenvolvimento backend, APIs, bancos de dados e integração
          entre sistemas.
        </p>

        <Link to="/sobre" className="text-link">
          Conheça mais sobre mim →
        </Link>
      </section>

      <section className="projects-section">
        <div className="section-header">
          <div>
            <span className="section-label">PORTFÓLIO</span>
            <h2>Projetos em destaque</h2>
          </div>

          <Link to="/projetos" className="text-link">
            Ver todos →
          </Link>
        </div>

        <div className="projects-grid">
          <ProjectCard
            title="Life+"
            description="Aplicação de gerenciamento de saúde para controle de medicamentos e documentos médicos."
            technologies={[
              "React Native",
              "Node.js",
              "Express",
              "PostgreSQL",
              "Prisma",
            ]}
            image="/images/lifeplus.png"
            link="/projetos/lifeplus"
          />

          <ProjectCard
            title="PetShop"
            description="E-commerce desenvolvido em React para gerenciamento e compra de produtos para animais."
            technologies={["React", "JavaScript", "CSS", "JSON Server"]}
            image="/images/petshop.png"
            link="/projetos/petshop"
          />
        </div>
      </section>
    </>
  );
}

export default Home;