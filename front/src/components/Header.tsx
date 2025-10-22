import { Link } from "react-router";

export function Header() {
  return (
    <header className="text-white py-5 shadow-md">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold font-[Montserrat]">Projeto Contra a Xenofobia</h1>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-wrap gap-5">
            <li><Link to="/" className="hover:underline text-indigo-200">Início</Link></li>
            <li><Link to="/story" className="hover:underline text-indigo-200">Histórias</Link></li>
            <li><Link to="/search" className="hover:underline text-indigo-200">Pesquisa</Link></li>
            <li><Link to="/resources" className="hover:underline text-indigo-200">Recursos</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}