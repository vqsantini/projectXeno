import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export function Story() {
  return (
    <main>
      <Header active="story" />
      <section id="stories-section">
        <div className="container">
          <h2 >Vozes que constroem pontes</h2>
          <p className="intro-text">A xenofobia deixa marcas profundas, mas também revela a força e a resiliência de quem a enfrenta. Nesta seção, compartilhamos histórias reais — de dor, de superação e de esperança. Cada relato é um convite à empatia e uma poderosa ferramenta contra o preconceito.</p>

          <div className="story-card">
            <h3>"O idioma era a menor das barreiras"</h3>
            <blockquote>
              "Quando cheguei ao Brasil, achei que aprender português seria meu maior desafio. Eu estava enganado. O mais difícil foi ouvir 'volte para o seu país' no meu primeiro dia de trabalho, apenas por eu ter sotaque. Mas encontrei pessoas que me acolheram, e hoje chamo este lugar de lar."
            </blockquote>
            <p className="author-info">- Relato anônimo de um engenheiro vindo da Venezuela.</p>
          </div>

          <div className="story-card">
            <h3>"Meu diploma não valia nada aqui"</h3>
            <blockquote>
              "Eu era enfermeira no Haiti. Anos de estudo e dedicação. Aqui, por causa da burocracia e do preconceito, só consegui trabalho na limpeza. Foi humilhante. Todos os dias eu luto para validar meu diploma e provar que minha contribuição vale muito. Não vou desistir."
            </blockquote>
            <p className="author-info">- Depoimento de Marie, 38 anos, moradora de Florianópolis.</p>
          </div>

          <div className="story-card">
            <h3>"Um prato de comida mudou tudo"</h3>
            <blockquote>
              "Estava sozinho, com fome e com medo de pedir ajuda. Uma senhora, minha vizinha, percebeu. Sem dizer nada, ela me trouxe um prato de feijoada. Não falamos o mesmo idioma, mas naquele momento, eu entendi o que era hospitalidade. Um pequeno gesto de gentileza pode reconstruir a confiança de alguém no mundo."
            </blockquote>
            <p className="author-info">- História de Ibrahima, 24 anos, vindo do Senegal.</p>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}