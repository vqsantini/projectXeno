import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { Header } from "./components/Header";

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

  const [index, setIndex] = useState(0);
  const [respostas, setRespostas] = useState<string[]>([]);
  const [error, setError] = useState("");

  const progress = ((index + 1) / perguntas.length) * 100;

  const handleChange = (valor: string) => {
    setRespostas((prev) => {
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
    setError("");
  };
  const avancar = () => {
    if (!respostas[index]) {
      setError("Por favor, selecione uma alternativa para continuar.");
      return;
    }
    setIndex((prev) => prev + 1);
  };

  const voltar = () => {
    if (index > 0) setIndex((prev) => prev - 1);
  };

  const finalizar = async () => {
    if (!respostas[index]) {
      setError("Por favor, selecione uma alternativa para continuar.");
      return;
    }

    try {
      await axios.post("https://back-projetoxenofobia.onrender.com/pesquisa", {
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
      setError("Ocorreu um erro ao enviar. Tente novamente.");
    }
  };

  return (
    <div>
      <Header />
      <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6 py-12">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-10 flex flex-col gap-8 text-white"
        >
          <div>
            <div className="flex justify-between text-sm mb-2 text-gray-300">
              <p>Etapa {index + 1} de {perguntas.length}</p>
              <p>{Math.round(progress)}%</p>
            </div>
            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-emerald-400"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-emerald-300 leading-snug">
            {perguntas[index]}
          </h2>
          {error && (
            <p className="text-red-400 text-sm text-center -mt-3">{error}</p>
          )}
          <div className="flex flex-col gap-3 mt-4">
            {Object.entries(alternativas[index]).map(([key, value]) => (
              <label
                key={key}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer border transition-all
                ${respostas[index] === value
                    ? "bg-emerald-500/20 border-emerald-400 text-emerald-200"
                    : "border-white/10 hover:border-emerald-300/60 hover:bg-white/5 text-gray-300"
                  }`}
              >
                <input
                  type="radio"
                  value={value}
                  name={`pergunta-${index}`}
                  checked={respostas[index] === value}
                  onChange={() => handleChange(value)}
                  className="hidden"
                />
                <span className="text-lg">{value}</span>
              </label>
            ))}
          </div>
          <div className="flex w-full justify-between items-center pt-6 flex-wrap gap-4">
            <button
              onClick={voltar}
              disabled={index === 0}
              className={`px-5 py-2 rounded-lg font-semibold transition-all duration-200 
              ${index === 0
                  ? "bg-gray-700/50 text-gray-400 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30"
                }`}
            >
              Voltar
            </button>

            {index < perguntas.length - 1 ? (
              <button
                onClick={avancar}
                className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-all shadow-lg shadow-emerald-500/30"
              >
                Avançar
              </button>
            ) : (
              <Link to="/">
                <button
                  onClick={finalizar}
                  className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-all shadow-lg shadow-emerald-500/30"
                >
                  Finalizar
                </button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
