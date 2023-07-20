const popup = document.querySelector('.popup-wrapper');
const botao = document.querySelectorAll('.botao');
const creditos = document.querySelector('#creditsButton');
const modal = document.querySelector('dialog');
const fecharModal = document.querySelector('#fechar');


//Abre o Popup da calculadora 
const openPopup = () => {
    popup.style.display = 'block';
    botao.forEach(button => button.style.display = 'none');
  };

  
// Fecha o Popup da calculadora
const closePopup = () => {
    popup.style.display = 'none';
    botao.forEach(button => button.style.display = 'block');
  };

  popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0];
    const classNames = ['popup-close', 'popup-wrapper'];
    const shouldClosePopup = classNames.includes(classNameOfClickedElement);
    
    if (shouldClosePopup) {
      closePopup();
    }
  });

//Navegação dos botões do menu da página principal
botao.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'Calculadora') {
      openPopup();
    } else if (button.id === 'peso') {
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
})

//Abrir popup dos Créditos
creditos.addEventListener("click", () => {
    modal.showModal()
    botao.forEach(button => button.style.display = 'none');
})

fecharModal.addEventListener("click", () => {
  modal.close()
  botao.forEach(button => button.style.display = 'block');
})