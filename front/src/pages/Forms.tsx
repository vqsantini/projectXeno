import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { Header } from "../components/Header";

export function FormularioPesquisa() {
  const perguntas = [
    "Você já presenciou um ato de xenofobia (pessoalmente ou online)?",
    "Em sua opinião, qual é a principal causa da xenofobia?",
    "Você acredita que a mídia influencia a percepção sobre imigrantes?",
    "Que medida as escolas deveriam tomar para educar contra a xenofobia?",
    "Você já se sentiu desconfortável com piadas sobre a sua ou outra nacionalidade?",
    "Como a xenofobia impacta negativamente a sociedade?",
    "Você acredita que a economia de um país influencia os níveis de xenofobia?",
    "Você já procurou aprender sobre a cultura de imigrantes na sua região?",
    "Qual das seguintes ações individuais você acredita que é eficaz para combater a xenofobia no dia a dia?",
    "Você se considera bem-informado sobre as leis que protegem imigrantes?",
  ];

  const alternativas = [
    { q1: "Sim", q2: "Não", q3: "Não tenho certeza" },
    { q1: "Ignorância", q2: "Mídia", q3: "Desinformação", q4: "Política" },
    { q1: "Sim, positivamente", q2: "Sim, negativamente", q3: "Não influencia" },
    { q1: "Educação", q2: "Cultura", q3: "Projetos" },
    { q1: "Sim", q2: "Não" },
    { q1: "Desigualdade", q2: "Violência", q3: "Injustiça" },
    { q1: "Sim, muito", q2: "Sim, um pouco", q3: "Não" },
    { q1: "Sim", q2: "Não, mas tenho interesse", q3: "Não" },
    { q1: "Denunciar", q2: "Diálogo", q3: "Educar" },
    { q1: "Sim", q2: "Não", q3: "Parcialmente" },
  ];

  const [index, setarIndex] = useState(0);
  const [respostas, setarRespostas] = useState<string[]>([]);
  const [error, setarErro] = useState("");

  const progress = ((index + 1) / perguntas.length) * 100;

  const handleChange = (valor: string) => {
    setarRespostas((prev) => {
      const next = [...prev];
      if (next.length < perguntas.length) {
        next.length = perguntas.length;
        for (let i = 0; i < perguntas.length; i++) {
          if (typeof next[i] === "undefined") next[i] = "";
        }
      }
      next[index] = valor;
      return next;
    });
    setarErro("");
  };

  const avanco = () => {
    if (!respostas[index]) {
      setarErro("Por favor, selecione uma alternativa para continuar.");
      return;
    }
    setarIndex((prev) => prev + 1);
  };

  const voltar = () => {
    if (index > 0) setarIndex((prev) => prev - 1);
  };

  const finalizar = async () => {
    if (!respostas[index]) {
      setarErro("Por favor, selecione uma alternativa para continuar.");
      return;
    }

    try {
      await axios.post("https://backend-projeto-xenofobia.onrender.com/pesquisa", {
      // await axios.post("http://localhost:3000/pesquisa", {
        p1: respostas[0] ?? "",
        p2: respostas[1] ?? "",
        p3: respostas[2] ?? "",
        p4: respostas[3] ?? "",
        p5: respostas[4] ?? "",
        p6: respostas[5] ?? "",
        p7: respostas[6] ?? "",
        p8: respostas[7] ?? "",
        p9: respostas[8] ?? "",
        p10: respostas[9] ?? "",
      });
    } catch (err) {
      console.log(err);
      setarErro("Ocorreu um erro ao enviar. Tente novamente.");
    }
  };

  return (
    <div>
      <Header active="search" />

      <main id="form-section">
        <div className="container form-step-container">

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="form-card"
          >
            <div className="progress-wrapper">
              <div className="progress-text">
                <p>Etapa {index + 1} de {perguntas.length}</p>
                <p>{Math.round(progress)}%</p>
              </div>
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>

            <h2 className="question-title">{perguntas[index]}</h2>

            {error && (
              <p className="error-text">{error}</p>
            )}

            <div className="radio-group-options">
              {Object.entries(alternativas[index]).map(([key, value]) => (
                <label
                  key={key}
                  className={`option-label ${respostas[index] === value ? "active" : ""}`}
                >
                  <input
                    type="radio"
                    value={value}
                    name={`pergunta-${index}`}
                    checked={respostas[index] === value}
                    onChange={() => handleChange(value)}
                  />
                  <span>{value}</span>
                </label>
              ))}
            </div>

            <div className="button-row">
              <button onClick={voltar} disabled={index === 0} className="btn-back">
                Voltar
              </button>

              {index < perguntas.length - 1 ? (
                <button onClick={avanco} className="btn-next">
                  Próxima
                </button>
              ) : (
                <Link to="/">
                  <button onClick={finalizar} className="btn-submit">
                    Finalizar
                  </button>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}