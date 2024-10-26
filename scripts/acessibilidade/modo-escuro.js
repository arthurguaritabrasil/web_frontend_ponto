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

  if (imagemHome.src.includes("homeIcon2.png")) {
    imagemHome.src = "./style/assets/homeIcon.png";
  } else {
    imagemHome.src = "./style/assets/homeIcon2.png";
  }

}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});