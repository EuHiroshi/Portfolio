function paginaInicial() {
  window.location.href = "homepage.html";
}

function toggleDarkMode() {
  var body = document.body;
  var btn = document.getElementById("toggle-dark-mode");
  
  // Adicione ou remova a classe "dark-mode" do corpo do documento
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌑";
  }
}

