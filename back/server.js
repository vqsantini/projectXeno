import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Pesquisa } from "./models/Pesquisa.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

app.post("/pesquisa", async (req, res) => {
  try {
    const { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 } = req.body;

    const newSearch = new Pesquisa({
      p1: p1 || "",
      p2: p2 || "",
      p3: p3 || "",
      p4: p4 || "",
      p5: p5 || "",
      p6: p6 || "",
      p7: p7 || "",
      p8: p8 || "",
      p9: p9 || "",
      p10: p10 || "",
    });

    await newSearch.save();
    res.status(201).json({ message: "Pesquisa salva com sucesso!" });
  } catch (error) {
    console.error("Erro ao salvar pesquisa:", error);
    res.status(500).json({
      message: "Erro interno ao salvar pesquisa",
      error: error.message,
    });
  }
});

app.get("/pesquisa", async (req, res) => {
  try {
    const pesquisas = await Pesquisa.find();
    const estatisticas = {};

    pesquisas.forEach((doc) => {
      Object.entries(doc.toObject()).forEach(([key, value]) => {
        if (key.startsWith("p")) {
          if (!estatisticas[key]) estatisticas[key] = {};
          if (!estatisticas[key][value]) estatisticas[key][value] = 0;
          estatisticas[key][value]++;
        }
      });
    });

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
      "Você se considera bem-informado sobre as leis que protegem imigrantes?"
    ];

    const colors = ["#8B5CF6", "#FBBF24", "#10B981", "#EF4444"];

    const questionsData = Object.entries(estatisticas).map(([key, respostas], i) => {
      const data = Object.entries(respostas).map(([name, value], j) => ({
        name,
        value,
        color: colors[j % colors.length],
      }));

      return {
        id: i + 1,
        question: perguntas[i],
        data,
      };
    });

    res.json(questionsData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao gerar estatísticas" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));