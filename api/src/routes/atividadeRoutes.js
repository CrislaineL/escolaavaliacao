import express from "express";
import { criarAtividade, listarAtividades, deletarAtividade } from "../controllers/atividadeController.js";

const router = express.Router();

router.post("/", criarAtividade);
router.get("/:turma_id", listarAtividades);
router.delete("/:id", deletarAtividade);

export default router;
