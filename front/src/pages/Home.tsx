import { Footer } from "../components/Footer";
import { Header } from "../components/Header";


export function Home() {
  return (
    <>
      <Header active="home" />
      <main>
        <section id="banner">
          <div className="container">
            <h2>Conhecimento que transforma vidas</h2>
            <p>Vamos juntos entender e combater a xenofobia, construindo uma sociedade mais justa e acolhedora para todos!</p>
          </div>
        </section>

        <div className="container">
          <section id="definicao" className="content-section">
            <h3 className="h3-type">O que é Xenofobia?</h3>
            <p >A xenofobia é o preconceito, a aversão ou a discriminação contra pessoas de outras nacionalidades, etnias ou culturas. Manifesta-se através do medo, da desconfiança e do ódio por aquilo que é percebido como "estrangeiro" ou "diferente". É importante lembrar que a xenofobia é crime e viola os Direitos Humanos.</p>
            <img src="./Xenofobia.svg" alt="Mãos de diferentes etnias unidas" className="content-image w-full"/>
          </section>

          <section id="como-ocorre" className="content-section">
            <h3 className="h3-type">Como ela ocorre?</h3>
            <p>A xenofobia pode se manifestar de várias formas, desde as mais sutis até as mais violentas:</p>
            <ul>
              <li><strong>Piadas e estereótipos:</strong> Comentários pejorativos que generalizam e ridicularizam uma nacionalidade ou cultura.</li>
              <li><strong>Discriminação no mercado de trabalho:</strong> Dificultar a contratação ou oferecer salários inferiores a imigrantes.</li>
              <li><strong>Discurso de ódio:</strong> Propagação de ideias que incitam à violência e ao preconceito em redes sociais e outros meios.</li>
              <li><strong>Violência física e verbal:</strong> Agressões diretas motivadas pela origem da vítima.</li>
              <li><strong>Exclusão social:</strong> Isolar ou tratar pessoas de forma diferente com base em sua nacionalidade.</li>
            </ul>
          </section>

          <section id="resultados-pesquisa" className="content-section">
            <h3 className="h3-type">Resultados da nossa pesquisa</h3>
            <p>
              Em uma pesquisa recente realizada com <strong>50 participantes</strong> para este projeto, obtivemos insights valiosos sobre a percepção da xenofobia. Os resultados mostram que a maioria dos entrevistados <strong>(42%) já presenciou um ato xenofóbico</strong>. A influência da mídia é vista como <strong>predominantemente negativa por mais da metade dos participantes (52%)</strong>, e o "Medo" foi apontado como a principal causa do preconceito. Um dado alarmante é que a grande maioria <strong>(72%) se sente pouco ou parcialmente informada sobre as leis</strong> que protegem imigrantes, revelando uma importante lacuna de conhecimento que precisa ser preenchida.
            </p>
          </section>
          <section id="como-prevenir" className="content-section">
            <h3 className="h3-type">Como podemos prevenir e combater?</h3>
            <p>A luta contra a xenofobia é um dever de todos. Algumas atitudes fazem a diferença:</p>
            <ol>
              <li><strong>Educação e Informação:</strong> Busque aprender sobre outras culturas. O conhecimento é a principal ferramenta contra o preconceito.</li>
              <li><strong>Empatia:</strong> Tente se colocar no lugar do outro. Acolha e dialogue com pessoas de diferentes origens.</li>
              <li><strong>Denuncie:</strong> Não se cale diante de um ato xenofóbico. Denuncie às autoridades competentes.</li>
              <li><strong>Promova a Diversidade:</strong> Valorize a contribuição cultural, social e econômica que imigrantes e refugiados trazem para a sociedade.</li>
              <li><strong>Consciência Crítica:</strong> Questione notícias falsas e discursos que generalizam ou culpam estrangeiros por problemas sociais.</li>
            </ol>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}