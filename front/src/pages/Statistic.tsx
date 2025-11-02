import { useEffect, useState, useRef } from "react";
import { Header } from "../components/Header";
import { motion } from "framer-motion";
import axios from "axios";

type Answer = {
  name: string;
  value: number;
  color: string;
};

type QuestionData = {
  id: number;
  question: string;
  data: Answer[];
};

export const Statistics = () => {
  const [index, setIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [questionsData, setQuestionsData] = useState<QuestionData[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    axios
      .get<QuestionData[]>("https://back-projectxeno.onrender.com/pesquisa")
      .then((res) => {
        const normalized = res.data.map((q, qi) => ({
          ...q,
          id: q.id ?? qi + 1,
          data: q.data.map((d) => ({ ...d, value: Number(d.value) || 0 })),
        }));
        setQuestionsData(normalized);
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    if (questionsData.length === 0) {
      setProgress(0);
    } else {
      setProgress(((index + 1) / questionsData.length) * 100);
    }
  }, [index, questionsData.length]);
  useEffect(() => {
    if (questionsData.length === 0) return;
    const q = questionsData[index];
    drawChart(q.data);
  }, [questionsData, index]);

  function drawChart(data: Answer[]) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const size = 250;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;
    const radius = Math.min(cx, cy) - 10;

    const total = data.reduce((sum, d) => sum + (Number(d.value) || 0), 0);
    if (total === 0) {
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = "#e5e7eb";
      ctx.fill();
      return;
    }

    let startAngle = -Math.PI / 2;

    data.forEach((d) => {
      const slice = (d.value / total) * Math.PI * 2;
      const endAngle = startAngle + slice;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = d.color;
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, startAngle, startAngle + 0.001);
      ctx.closePath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#ffffff";
      ctx.stroke();

      startAngle = endAngle;
    });
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 0.2, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0)";
    ctx.fill();
  }

  function voltar() {
    if (index > 0) setIndex((prev) => prev - 1);
    if (index === 0) setIndex(questionsData.length - 1);
  }

  function avanco() {
    if (index < questionsData.length - 1) setIndex((prev) => prev + 1);
    if (index === questionsData.length - 1) setIndex(0);
  }

  if (questionsData.length === 0) {
    return (
      <div>
        <Header active="statistics" />
        <main id="form-section">
          <div className="container form-step-container">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="form-card"
            >
              <p>Carregando dados...</p>
            </motion.div>
          </div>
        </main>
      </div>
    );
  }

  const question = questionsData[index];
  const total = question.data.reduce((sum, d) => sum + (Number(d.value) || 0), 0);

  return (
    <div>
      <Header active="statistics" />
      <main id="form-section">
        <div className="container form-step-container">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="form-card"
          >
            <div className="flex flex-col progress-wrapper gap-2">
              <div className="progress-text">
                <p className="m-0 text-base">
                  Pergunta {index + 1} de {questionsData.length}
                </p>
                <p className="m-0 text-base">{Math.round(progress)}%</p>
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

            <h2 className="text-center">{question.question}</h2>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
              <canvas ref={canvasRef} width={250} height={250} />
            </div>

            <div style={{ display: "grid", gap: 8 }}>
              {question.data.map((d, i) => {
                const percent = total === 0 ? 0 : ((d.value / total) * 100);
                return (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        background: d.color,
                      }}
                    />
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                      <span>{d.name} ({d.value})</span>
                      <span>{percent.toFixed(1)}%</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="button-row" style={{ marginTop: 16 }}>
              <button onClick={voltar} className="btn-back">
                Voltar
              </button>
                <button onClick={avanco} className="btn-next">
                  Próxima
                </button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Statistics;