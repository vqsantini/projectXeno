import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Section } from "./components/Section";


export function Home() {
  return (
    <>
      <Header active="home" />
      <Banner />
      <div className="container">
        <Section id="definicao" title="O que é Xenofobia?">
          <p>
            A xenofobia é o preconceito, a aversão ou a discriminação contra
            pessoas de outras nacionalidades, etnias ou culturas. Manifesta-se
            através do medo, da desconfiança e do ódio por aquilo que é percebido
            como “estrangeiro” ou “diferente”. É importante lembrar que a
            xenofobia é crime e viola os Direitos Humanos.
          </p>
        </Section>

        <Section id="como-ocorre" title="Como ela ocorre?">
          <p>
            A xenofobia pode se manifestar de várias formas, desde as mais sutis até as mais violentas:
          </p>
          <ul>
            <li><strong>Piadas e estereótipos:</strong> Comentários pejorativos que generalizam e ridicularizam uma nacionalidade ou cultura.</li>
            <li><strong>Discriminação no mercado de trabalho:</strong> Dificultar a contratação ou oferecer salários inferiores a imigrantes.</li>
            <li><strong>Discurso de ódio:</strong> Propagação de ideias que incitam à violência e ao preconceito em redes sociais e outros meios.</li>
            <li><strong>Violência física e verbal:</strong> Agressões diretas motivadas pela origem da vítima.</li>
            <li><strong>Exclusão social:</strong> Isolar ou tratar pessoas de forma diferente com base em sua nacionalidade.</li>
          </ul>
        </Section>

        <Section id="como-prevenir" title="Como podemos prevenir e combater?">
          <p>
            A luta contra a xenofobia é um dever de todos. Algumas atitudes fazem a diferença:
          </p>
          <ol>
            <li><strong>Educação e Informação:</strong> Busque aprender sobre outras culturas. O conhecimento é a principal ferramenta contra o preconceito.</li>
            <li><strong>Empatia:</strong> Tente se colocar no lugar do outro. Acolha e dialogue com pessoas de diferentes origens.</li>
            <li><strong>Denuncie:</strong> Não se cale diante de um ato xenofóbico. Denuncie às autoridades competentes.</li>
            <li><strong>Promova a Diversidade:</strong> Valorize a contribuição cultural, social e econômica que imigrantes e refugiados trazem para a sociedade.</li>
            <li><strong>Consciência Crítica:</strong> Questione notícias falsas e discursos que generalizam ou culpam estrangeiros por problemas sociais.</li>
          </ol>
        </Section>
      </div>
      <Footer />
    </>
  );
}