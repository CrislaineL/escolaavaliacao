import express from "express";
import { registrarProfessor, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registrarProfessor);
router.post("/login", login);

export default router;
