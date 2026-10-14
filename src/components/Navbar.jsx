import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          RF<span>.</span>
        </Link>

        <nav>
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre mim</Link>
          <Link to="/projetos">Projetos</Link>
        </nav>

        <a
          href="https://github.com/"
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