import express from "express";
import { criarTurma, listarTurmas, deletarTurma } from "../controllers/turmaController.js";

const router = express.Router();

router.post("/", criarTurma);
router.get("/", listarTurmas);
router.delete("/:id", deletarTurma);

export default router;
