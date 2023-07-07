//Navegação dos botões do menu da página principal
const calculadora = document.querySelector("#Calculadora");
const peso = document.querySelector("#peso");
const moeda = document.querySelector("#moeda");
const comprimento = document.querySelector("#comprimento");
const popup = document.querySelector('.popup-wrapper');
const botaoCalculadora = document.querySelector('#Calculadora')
const botaoPeso = document.querySelector('#peso')
const botaoMoeda = document.querySelector('#moeda')
const botaoComprimento = document.querySelector('#comprimento')


//Abre o Popup da calculadora 
calculadora.addEventListener("click", () => {
    popup.style.display = 'block';
    botaoCalculadora.style.display = 'none';
    botaoPeso.style.display = 'none';
    botaoMoeda.style.display = 'none';
    botaoComprimento.style.display = 'none';

})

popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0];
    const classNames = ['popup-close', 'popup-wrapper']
    const shouldClosePopup = classNames.some(classNames => classNames === classNameOfClickedElement)
    
    if(shouldClosePopup) {
        popup.style.display = 'none';
        botaoCalculadora.style.display = 'block';
        botaoPeso.style.display = 'block';
        botaoMoeda.style.display = 'block';
        botaoComprimento.style.display = 'block';
    }
}); //

peso.addEventListener("click", () => {
    window.location.href = "html/peso.html";
});

moeda.addEventListener("click", () => {
    window.location.href = "html/moeda.html";
});

comprimento.addEventListener("click", () => {
    window.location.href = "html/comprimento.html";
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

