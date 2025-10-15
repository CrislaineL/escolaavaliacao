import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const criarAtividade = async (req, res) => {
  const { titulo, descricao, turma_id } = req.body;
  if (!titulo || !turma_id) return res.status(400).json({ erro: "Título e turma_id são obrigatórios" });

  try {
    const atividade = await prisma.atividade.create({
      data: { titulo, descricao: descricao || null, turma_id: parseInt(turma_id) },
    });
    res.status(201).json(atividade);
  } catch (err) {
    res.status(400).json({ erro: "Erro ao criar atividade", detalhes: err.message });
  }
};

export const listarAtividades = async (req, res) => {
  const { turma_id } = req.params;
  if (!turma_id) return res.status(400).json({ erro: "turma_id é obrigatório" });

  try {
    const atividades = await prisma.atividade.findMany({ where: { turma_id: parseInt(turma_id) } });
    res.json(atividades);
  } catch (err) {
    res.status(400).json({ erro: "Erro ao listar atividades", detalhes: err.message });
  }
};

export const deletarAtividade = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ erro: "id é obrigatório" });

  try {
    await prisma.atividade.delete({ where: { id: parseInt(id) } });
    res.json({ mensagem: "Atividade deletada com sucesso" });
  } catch (err) {
    res.status(400).json({ erro: "Erro ao deletar atividade", detalhes: err.message });
  }
};
