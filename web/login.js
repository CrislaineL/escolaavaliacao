const form = document.getElementById("loginForm");
const erroDiv = document.getElementById("erro");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  try {
    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha })
    });

    const data = await res.json();

    if (!res.ok) {
      erroDiv.textContent = data.erro || "Erro no login";
      return;
    }

    // Login correto → redirecionar para dashboard
    window.location.href = "dashboard.html";

  } catch (err) {
    erroDiv.textContent = "Erro ao conectar ao servidor";
    console.error(err);
  }
});
