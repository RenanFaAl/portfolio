import { Link } from "react-router-dom";

function PetShop() {
  return (
    <section className="project-page">
      <div className="project-hero">
        <span className="section-label">PROJETO 3° SEMESTRE</span>

        <h1>PetShop</h1>

        <p>
          E-commerce desenvolvido em React para apresentação e venda de
          produtos para animais.
        </p>

        <div className="technologies large">
          <span>React</span>
          <span>JavaScript</span>
          <span>CSS</span>
          <span>JSON Server</span>
        </div>

        <a
          href="https://github.com/GuilhermeRocha0/petshop_web"
          target="_blank"
          rel="noreferrer"
          className="primary-button"
        >
          Ver código Frontend no GitHub →
        </a>
        <a
          href="https://github.com/GuilhermeRocha0/petshop_api"
          target="_blank"
          rel="noreferrer"
          className="primary-button"
        >
          Ver código Backend no GitHub →
        </a>
      </div>

      <div className="project-details">
        <section>
          <h2>Sobre o projeto</h2>

          <p>
            O PetShop é uma aplicação de e-commerce criada em React.
            A aplicação apresenta produtos, permite pesquisar itens,
            adicionar produtos ao carrinho e realizar o processo de checkout.
          </p>
        </section>

        <section>
          <h2>Tecnologias utilizadas</h2>

          <ul className="tech-list">
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>JSON Server</li>
            <li>Vite</li>
          </ul>
        </section>

        <section>
          <h2>Minha participação</h2>

          <p>
            Trabalhei na criação da interface da aplicação, componentes,
            páginas, gerenciamento do carrinho, navegação entre telas e
            integração com a API utilizada pelo projeto.
          </p>

          <p>
            Também trabalhei na responsividade e na criação da experiência
            de navegação da loja.
          </p>
        </section>

        <section>
          <h2>Projeto em funcionamento</h2>

          <div className="screenshots">
            <img
              src="/images/petshop.png"
              alt="PetShop em funcionamento"
            />
            <br></br>
            <img
              src="/images/petshop1.png"
              alt="PetShop em funcionamento"
            />
            <br></br>
            <img
              src="/images/petshop2.png"
              alt="PetShop em funcionamento"
            />
            <br></br>
            <img
              src="/images/petshop3.png"
              alt="PetShop em funcionamento"
            />
            <br></br>
            <img
              src="/images/petshop4.png"
              alt="PetShop em funcionamento"
            />
            <br></br>
            <img
              src="/images/petshop5.png"
              alt="PetShop em funcionamento"
            />
            <br></br>
            <img
              src="/images/petshop6.png"
              alt="PetShop em funcionamento"
            />
            <br></br>
            <img
              src="/images/petshop7.png"
              alt="PetShop em funcionamento"
            />
            <br></br>
            <img
              src="/images/petshop8.png"
              alt="PetShop em funcionamento"
            />
            <br></br>
            <img
              src="/images/petshop9.png"
              alt="PetShop em funcionamento"
            />
            <br></br>
            <img
              src="/images/petshop10.png"
              alt="PetShop em funcionamento"
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

export default PetShop;