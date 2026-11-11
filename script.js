let cliques = 0;
const contador = document.getElementById("contador");

document.getElementById("botao").addEventListener("click", () => {
  cliques++;
  contador.textContent = `Cliques: ${cliques}`;
});


document.getElementById("zerar").addEventListener("click", () => {
    cliques = 0;
    contador.textContent = `Total: ${cliques}`;
});