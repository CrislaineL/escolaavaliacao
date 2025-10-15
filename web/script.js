// script.js

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  try {
    const res = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha })
    });

    const data = await res.json();
    if(res.ok){
      alert('Login realizado! Token: ' + data.token);
    } else {
      alert('Erro: ' + data.erro);
    }
  } catch(err) {
    alert('Erro ao conectar com o servidor');
  }
});

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('emailRegister').value;
  const senha = document.getElementById('senhaRegister').value;

  try {
    const res = await fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha })
    });

    const data = await res.json();
    if(res.ok){
      alert('Professor registrado com sucesso!');
    } else {
      alert('Erro: ' + data.erro);
    }
  } catch(err) {
    alert('Erro ao conectar com o servidor');
  }
});
