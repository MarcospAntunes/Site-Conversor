const valor = document.querySelector('#numero');
const botao = document.querySelector('#converter');
const textResultado = document.querySelector('#resultado');
const Decomprimento = document.querySelector('#Decomprimento');
const Paracomprimento = document.querySelector('#Paracomprimento');
const curiosidadePeso = document.querySelector('#curiosidadePeso');
const curiosidadeComp = document.querySelector('#curiosidadeComp')


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
        
        if (unidadeDestino === 'quilometro' || unidadeDestino === 'hectometro' || unidadeDestino === 'decametro' || unidadeDestino === 'metro' || unidadeDestino === 'decimetro' || unidadeDestino === 'centimetro' || unidadeDestino === 'milimetro') {

            curiosidadeComp.innerHTML = `
        
            <h3>Medidas de Comprimento</h3>
            
            <p>As medidas de comprimento são mecanismos de medição eficazes, uma vez que utilizam como recurso medidas convencionais, tais como milímetro, centímetro, metro, quilômetro.</p>

            <br>

            <p>Elas foram criadas justamente para mitigar a probabilidade de ocorrência de erros no momento em que era necessário mensurar as coisas.</p>

            <br>

            <p>A medida base no Sistema Internacional de Medidas (SI) é o metro. O metro possui múltiplos, que correspondem a grandes distâncias e submúltiplos, que por sua vez correspondem a pequenas distâncias.</p>

            <br>

            <p class="fonte">Fonte: <a href="https://www.todamateria.com.br/medidas-de-comprimento/" target="_blank">Toda Matéria</a></p>
            
            `;
        
        } else if (unidadeDestino === 'quilograma' || unidadeDestino === 'hectograma' || unidadeDestino === 'decagrama' || unidadeDestino === 'grama' || unidadeDestino === 'decigrama' || unidadeDestino === 'centigrama' || unidadeDestino === 'miligrama') {

            curiosidadePeso.innerHTML = `
            <h3>Medidas de Massa</h3>
        
            <p>A medida de massa é a grandeza física da quantidade de matéria de um corpo. Ela associa um número a essa quantidade usando o quilograma (kg) como unidade padrão. O instrumento mais comum para fazer essa medição é a balança.</p>
        
            <br>
        
            <p>A unidade básica é o grama (g) e utilizam-se seus submúltiplos para medir objetos de massas menores: o decigrama (dg), o centigrama (cg) e o miligrama (mg). Para objetos com quantidades superiores ao grama são usados os múltiplos: decagrama (dag), o hectograma (hg) e quilograma (kg).</p>
        
            <br>
        
            <p>A unidade padrão de massa no Sistema Internacional de unidades (SI) é o quilograma (kg).</p>
        
            <br>
        
            <p>O quilograma é definido com base na constante de Planck, cujo valor é 6,62 x 10-34 m2kg/s.</p>
        
            <br>
        
            <p>Anteriormente, a massa de um cilindro padrão de platina iridiada era utilizada como correspondente a 1 quilograma (1 kg). Esse cilindro está guardado na Bureau Internacional de Pesos e Medidas (BIPM), em Sèvres na França.</p>
        
            <br>
        
            <p class="fonte">Fonte: <a href="https://www.todamateria.com.br/medidas-de-massa/" target="_blank">Toda Matéria</a></p>
        `;
        }
    } else {
        textResultado.textContent = 'Valores inválidos';
    }
});