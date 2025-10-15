const turmasDiv = document.getElementById("turmas");
const atividadesDiv = document.getElementById("atividades");
const selectTurma = document.getElementById("selectTurma");

document.getElementById("btnSair").addEventListener("click", () => {
  // Redireciona para a página de login
  window.location.href = "index.html";
});


const fetchTurmas = async () => {
  const res = await fetch("http://localhost:3000/turmas");
  const turmas = await res.json();

  turmasDiv.innerHTML = "";
  selectTurma.innerHTML = '<option value="">Selecione a turma</option>';

  turmas.forEach(turma => {
    // Mostrar turmas
    const div = document.createElement("div");
    div.className = "turma";
    div.innerHTML = `
      <strong>${turma.nome}</strong> - ${turma.descricao || ""}
      <button onclick="deletarTurma(${turma.id})">Excluir</button>
      <button onclick="verAtividades(${turma.id})">Ver Atividades</button>
    `;
    turmasDiv.appendChild(div);

    // Popular select de atividades
    const option = document.createElement("option");
    option.value = turma.id;
    option.textContent = turma.nome;
    selectTurma.appendChild(option);
  });
};

const criarTurma = async (nome, descricao) => {
  if (!nome) return alert("O nome da turma é obrigatório!");
  const professor_id = 1; // ID do professor (teste)

  try {
    const res = await fetch("http://localhost:3000/turmas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, descricao, professor_id }),
    });

    const data = await res.json();
    if (!res.ok) {
      alert("Erro ao criar turma: " + data.erro);
      return;
    }

    fetchTurmas(); // atualiza a lista
  } catch (err) {
    console.error(err);
    alert("Erro ao criar turma: " + err.message);
  }
};

const deletarTurma = async (id) => {
  await fetch(`http://localhost:3000/turmas/${id}`, { method: "DELETE" });
  fetchTurmas();
};


const verAtividades = async (turma_id) => {
  const res = await fetch(`http://localhost:3000/atividades/${turma_id}`);
  const atividades = await res.json();

  atividadesDiv.innerHTML = "";
  atividades.forEach(a => {
    const div = document.createElement("div");
    div.className = "atividade";
    div.innerHTML = `
      <strong>${a.titulo}</strong> - ${a.descricao || ""}
      <button onclick="deletarAtividade(${a.id}, ${turma_id})">Excluir</button>
    `;
    atividadesDiv.appendChild(div);
  });
};

const criarAtividade = async (titulo, descricao, turma_id) => {
  if (!titulo || !turma_id) return alert("Título e turma_id são obrigatórios");

  try {
    const res = await fetch("http://localhost:3000/atividades", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo, descricao, turma_id }),
    });

    const data = await res.json();
    if (!res.ok) {
      alert("Erro ao criar atividade: " + data.erro);
      return;
    }

    verAtividades(turma_id);
  } catch (err) {
    console.error(err);
    alert("Erro ao criar atividade: " + err.message);
  }
};

const deletarAtividade = async (id, turma_id) => {
  await fetch(`http://localhost:3000/atividades/${id}`, { method: "DELETE" });
  verAtividades(turma_id);
};


document.getElementById("formTurma").addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nomeTurma").value;
  const descricao = document.getElementById("descricaoTurma").value;
  criarTurma(nome, descricao);
  e.target.reset();
});

document.getElementById("formAtividade").addEventListener("submit", (e) => {
  e.preventDefault();
  const titulo = document.getElementById("tituloAtividade").value;
  const descricao = document.getElementById("descricaoAtividade").value;
  const turma_id = parseInt(selectTurma.value);
  if (!turma_id) return alert("Selecione a turma");
  criarAtividade(titulo, descricao, turma_id);
  e.target.reset();
});

// Inicializar
fetchTurmas();
