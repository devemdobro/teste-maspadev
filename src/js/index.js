const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    const idSelecionado = personagem.attributes.id.value;

    alterarImagemPersonagemGrande(idSelecionado);

    alterarNomePErsonagemGrande(personagem);

    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");

    personagem.classList.add("selecionado");
  });
});

function alterarNomePErsonagemGrande(personagem) {
  const nomeSelecionado = personagem.getAttribute("data-name");
  const personagemJogador1 = document.querySelector(".personagem-grande.personagem-jogador-1");

  personagemJogador1.getElementsByTagName("h2")[0].innerHTML = nomeSelecionado;
}

function alterarImagemPersonagemGrande(idSelecionado) {
  const imagemJogador1 = document.getElementById("personagem-jogador-1");
  imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;
}
