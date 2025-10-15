import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const registrarProfessor = async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const hash = await bcrypt.hash(senha, 10);
    const professor = await prisma.professor.create({
      data: { nome, email, senha: hash },
    });
    res.status(201).json(professor);
  } catch (err) {
    res.status(400).json({ erro: "Erro ao registrar professor", detalhes: err.message });
  }
};

export const login = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const professor = await prisma.professor.findUnique({ where: { email } });
    if (!professor) return res.status(404).json({ erro: "Professor não encontrado" });

    const senhaValida = await bcrypt.compare(senha, professor.senha);
    if (!senhaValida) return res.status(401).json({ erro: "Senha incorreta" });

    res.json({ mensagem: "Login realizado com sucesso" });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao fazer login", detalhes: err.message });
  }
};
