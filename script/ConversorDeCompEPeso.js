const valor = document.querySelector('#numero');
const botao = document.querySelector('#converter');
const textResultado = document.querySelector('#resultado');
const Decomprimento = document.querySelector('#Decomprimento');
const Paracomprimento = document.querySelector('#Paracomprimento');


Decomprimento.addEventListener('change', converter);
Paracomprimento.addEventListener('change', converter);


//Quando clicar no botão, a função converter será executada
botao.addEventListener('click', function converter() {
    const numero = parseFloat(valor.value);
    const unidadeOrigem = Decomprimento.value;
    const unidadeDestino = Paracomprimento.value;

    //Unidades de medida

    const unidades = {
        quilograma: 1,
        hectograma: 10,
        decagrama: 100,
        grama: 1000,
        decigrama: 10000,
        centigrama: 100000,
        miligrama: 1000000,

        quilometro: 1,
        hectometro: 10,
        decametro: 100,
        metro: 1000,
        decimetro: 10000,
        centimetro: 100000,
        milimetro: 1000000
    };

    //Realiza a conversão de unidades

    if (numero && unidades[unidadeOrigem] && unidades[unidadeDestino]) {
        const multiplicador = unidades[unidadeDestino] / unidades[unidadeOrigem];
        const resultado = numero * multiplicador;
        
        if(unidadeDestino === 'quilograma'){ textResultado.textContent = resultado + "kg" };
        if(unidadeDestino === 'hectograma'){ textResultado.textContent = resultado + "hg" };
        if(unidadeDestino === 'decagrama'){ textResultado.textContent = resultado + "dag" };
        if(unidadeDestino === 'grama'){ textResultado.textContent = resultado + "g" };
        if(unidadeDestino === 'decigrama'){ textResultado.textContent = resultado + "dg" };
        if(unidadeDestino === 'centigrama'){ textResultado.textContent = resultado + "cg" };
        if(unidadeDestino === 'miligrama'){ textResultado.textContent = resultado + "mg" };

        if(unidadeDestino === 'quilometro'){ textResultado.textContent = resultado + "km" };
        if(unidadeDestino === 'hectometro'){ textResultado.textContent = resultado + "hm" };
        if(unidadeDestino === 'decametro'){ textResultado.textContent = resultado + "dam" };
        if(unidadeDestino === 'metro'){ textResultado.textContent = resultado + "m" };
        if(unidadeDestino === 'decimetro'){ textResultado.textContent = resultado + "dm" };
        if(unidadeDestino === 'centimetro'){ textResultado.textContent = resultado + "cm" };
        if(unidadeDestino === 'milimetro'){ textResultado.textContent = resultado + "mm" };
    } else {
        textResultado.textContent = 'Valores inválidos';
    }
});