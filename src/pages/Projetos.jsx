import ProjectCard from "../components/ProjectCard";

function Projetos() {
  return (
    <section className="page">
      <div className="page-header">
        <span className="section-label">PORTFÓLIO</span>

        <h1>Meus projetos</h1>

        <p>
          Alguns dos projetos desenvolvidos durante minha formação e estudos.
        </p>
      </div>

      <div className="projects-grid">
        <ProjectCard
          title="Life+"
          description="Health Manager desenvolvido para auxiliar usuários no gerenciamento de medicamentos e informações médicas."
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
          description="E-commerce desenvolvido em React com catálogo de produtos, carrinho e checkout."
          technologies={[
            "React",
            "JavaScript",
            "CSS",
            "JSON Server",
          ]}
          image="/images/petshop.png"
          link="/projetos/petshop"
        />
        <ProjectCard
          title="Horizon"
          description="Serviço de ajuda e controle de bancos de sangue"
          technologies={[
            "Handlebars",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Prisma",
          ]}
          image="/public/images/horizon.png"
          link="/projetos/horizon"
        />
      </div>
    </section>
  );
}

export default Projetos;