import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <img
            src="/images/foto.png"
            alt="Foto de perfil de Renan"
            className="profile-photo"
            Link to="/"
          />
        </div>

        <nav>
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre mim</Link>
          <Link to="/projetos">Projetos</Link>
        </nav>

        <a
          href="https://github.com/RenanFaAl"
          target="_blank"
          rel="noreferrer"
          className="github-button"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}

export default Navbar;