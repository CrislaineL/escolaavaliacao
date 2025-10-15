import express from "express";
import cors from "cors";

const app = express(); // 👈 declare o app primeiro

// Middlewares
app.use(cors({
  origin: "http://127.0.0.1:5500", // ou "*" para liberar todas as origens
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

// Suas rotas
import authRoutes from "./routes/authRoutes.js";
import turmaRoutes from "./routes/turmaRoutes.js";
import atividadeRoutes from "./routes/atividadeRoutes.js";

app.use("/auth", authRoutes);
app.use("/turmas", turmaRoutes);
app.use("/atividades", atividadeRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
