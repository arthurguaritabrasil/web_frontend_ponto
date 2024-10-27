const toggleButton = document.getElementById('ClaroEscuro');
const body = document.body;

function toggleIcon() {
  const icon = document.getElementById("icon");
  const body = document.body;

  body.classList.toggle("dark");

  if (icon.src.includes("caneta.png")) {
    icon.src = "./style/assets/contrato.png";
  } else {
    icon.src = "./style/assets/caneta.png";
  }
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});