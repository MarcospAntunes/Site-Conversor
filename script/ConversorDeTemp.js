const valor = document.querySelector('#numero');
const botao = document.querySelector('#converter');
const textResultado = document.querySelector('#resultado');
const DeTemp = document.querySelector('#DeTemp');
const ParaTemp = document.querySelector('#ParaTemp');
const curiosidadeTemp = document.querySelector('#curiosidadeTemp')

DeTemp.addEventListener('change', converter);
ParaTemp.addEventListener('change', converter);

//Quando clicar no botão, a função converter será executada
botao.addEventListener('click', function converter() {
    const numero = parseFloat(valor.value);
    const unidadeOrigem = DeTemp.value;
    const unidadeDestino = ParaTemp.value;

    if (unidadeOrigem === 'C' && unidadeDestino === 'F') {
        const tf = (numero * 9/5) + 32
        textResultado.innerHTML = tf.toFixed(2) + ' °' + unidadeDestino
    }

    if(unidadeOrigem === 'C' && unidadeDestino === 'K') {
        const tk = numero + 273.15
        textResultado.innerHTML = tk.toFixed(2) + ' ' + unidadeDestino
    } 

    if (unidadeOrigem === 'F' && unidadeDestino === 'C') {
        const tc = (numero - 32) * 5/9
        textResultado.innerHTML = tc.toFixed(2) + ' °' + unidadeDestino
    } 

    if (unidadeOrigem === 'F' && unidadeDestino === 'K') {
        const tk = (numero - 32) * 5/9 + 273.15
        textResultado.innerHTML = tk.toFixed(2) + ' ' + unidadeDestino
    } 

    if(unidadeOrigem === 'K' && unidadeDestino === 'C') {
        const tc = numero - 273.15
        textResultado.innerHTML = tc.toFixed(2) + ' °' + unidadeDestino
    }
    
    if (unidadeOrigem === 'K' && unidadeDestino === 'F') {
        const tf = (numero - 273.15) * 9/5 + 32
        textResultado.innerHTML = tf.toFixed(2) + ' °' + unidadeDestino
    } 

    if (unidadeOrigem === unidadeDestino) {
        textResultado.innerHTML = numero + ' ' + unidadeDestino
    }

    if (unidadeDestino === '' && unidadeOrigem === ''){
        textResultado.innerHTML = 'Digite um valor!'
     }
})