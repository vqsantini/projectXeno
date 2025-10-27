import { Link } from "react-router";

export const Header = ({ active }: { active: string }) => {
  return (
    <header>
      <div className="container">
        <h1>Projeto Contra a Xenofobia</h1>
        <nav>
          <ul>
            {active === "home" ? <li><Link to="/" className="button-header active">Início</Link></li> : <li><Link to="/" className="button-header">Início</Link></li>}
            {active === "story" ? <li><Link to="/story" className="button-header active">Histórias</Link></li> : <li><Link to="/story" className="button-header">Histórias</Link></li>}
            {active === "search" ? <li><Link to="/search" className="button-header active">Pesquisa</Link></li> : <li><Link to="/search" className="button-header">Pesquisa</Link></li>}
            {active === "resources" ? <li><Link to="/resources" className="button-header active">Recursos</Link></li> : <li><Link to="/resources" className="button-header ">Recursos</Link></li>}

          </ul>
        </nav>
      </div>
    </header>
  );
}