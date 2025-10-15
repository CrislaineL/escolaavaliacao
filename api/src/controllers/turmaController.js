import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const criarTurma = async (req, res) => {
  const { nome, descricao, professor_id } = req.body;
  if (!nome || !professor_id) return res.status(400).json({ erro: "Nome e professor_id são obrigatórios" });

  try {
    const turma = await prisma.turma.create({
      data: {
        nome,
        descricao: descricao || null,
        professor_id: parseInt(professor_id),
      },
    });
    res.status(201).json(turma);
  } catch (err) {
    res.status(400).json({ erro: "Erro ao criar turma", detalhes: err.message });
  }
};

export const listarTurmas = async (req, res) => {
  try {
    const turmas = await prisma.turma.findMany();
    res.json(turmas);
  } catch (err) {
    res.status(400).json({ erro: "Erro ao listar turmas", detalhes: err.message });
  }
};

export const deletarTurma = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ erro: "ID da turma é obrigatório" });

  try {
    await prisma.turma.delete({ where: { id: parseInt(id) } });
    res.json({ mensagem: "Turma deletada com sucesso" });
  } catch (err) {
    res.status(400).json({ erro: "Erro ao deletar turma", detalhes: err.message });
  }
};
