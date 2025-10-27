import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export function Resources() {
  return (
    <>
      <Header active="resources"/>
      <main>
        <section id="recursos-section">
          <div className="container">
            <h2>Recursos para Aprender e Agir</h2>
            <p className="intro-text">A informação é uma poderosa ferramenta de transformação. Explore os links e materiais abaixo para aprofundar seu conhecimento e encontrar formas de ajudar.</p>

            <div className="recursos-grid">
              <div className="recurso-card">
                <h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  Organizações e Agências
                </h3>
                <ul>
                  <li><a href="https://www.acnur.org/portugues/" target="_blank">ACNUR (Agência da ONU para Refugiados)</a> - Principal organização do mundo dedicada a salvar vidas e proteger os direitos de refugiados.</li>
                  <li><a href="https://www.oim.org/" target="_blank">OIM (Organização Internacional para as Migrações)</a> - Agência da ONU que promove a migração humana e ordenada.</li>
                  <li><a href="https://www.hrw.org/pt" target="_blank">Human Rights Watch</a> - Organização que investiga e defende os direitos humanos em todo o mundo.</li>
                </ul>
              </div>

              <div className="recurso-card">
                <h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                  Para Ler e Assistir
                </h3>
                <ul>
                  <li><strong>Livro:</strong> "O Avesso da Pele" de Jeferson Tenório - Aborda a complexidade da identidade e do preconceito no Brasil.</li>
                  <li><strong>Documentário:</strong> "Exodus: Our Journey to Europe" (BBC) - Acompanha a jornada de refugiados e migrantes.</li>
                  <li><strong>Filme:</strong> "Babel" (2006) - Mostra como barreiras de comunicação e preconceitos podem levar a consequências trágicas.</li>
                </ul>
              </div>

              <div className="recurso-card">
                <h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Como Denunciar
                </h3>
                <p>Se você presenciar um ato de xenofobia, não hesite em denunciar. No Brasil, você pode usar os seguintes canais:</p>
                <ul>
                  <li><strong>Disque 100 (Disque Direitos Humanos):</strong> Serviço gratuito que recebe denúncias de violações de direitos humanos.</li>
                  <li><strong>Polícia Militar (190):</strong> Em casos de agressão ou perigo iminente.</li>
                  <li><strong>Delegacias de Polícia:</strong> É possível registrar um Boletim de Ocorrência. A xenofobia é crime previsto em lei.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}