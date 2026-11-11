let cliques = 0;
const contador = document.getElementById("contador");

document.getElementById("botao").addEventListener("click", () => {
  cliques++;
  contador.textContent = `Cliques: ${cliques}`;
});