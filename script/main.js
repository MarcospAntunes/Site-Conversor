const botao = document.querySelectorAll('.botao');
const creditos = document.querySelector('#creditsButton');
const modalCredits = document.querySelector('#modalCredits');
const fecharCredits = document.querySelector('#fecharCredits');

//Navegação dos botões do menu da página principal
botao.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'peso') {
      window.location.href = "html/peso.html";
    } else if (button.id === 'moeda') {
      window.location.href = "html/moeda.html";
    } else if (button.id === 'comprimento') {
      window.location.href = "html/comprimento.html";
    } else if (button.id === 'velocidade') {
      window.location.href = 'html/velocidade.html'
    } else if (button.id === 'temperatura') {
      window.location.href = 'html/temperatura.html'
    }
  });
});

// Navegação do rodapé da página principal
const linkedin = document.querySelector("#linkedin");
const github = document.querySelector("#github");

linkedin.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/marcos-paulo-silva-antunes/")
});

github.addEventListener("click", () => {
    window.open("https://github.com/MarcospAntunes")
});

//Abrir popup dos Créditos
creditos.addEventListener("click", () => {
    modalCredits.showModal()
    botao.forEach(button => button.style.display = 'none');
});

fecharCredits.addEventListener("click", () => {
  modalCredits.close()
  botao.forEach(button => button.style.display = 'block');
});