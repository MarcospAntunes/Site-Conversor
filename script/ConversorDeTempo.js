const valor = document.querySelector('#numero');
const botao = document.querySelector('#converter');
const textResultado = document.querySelector('#resultado');
const Decomprimento = document.querySelector('#DeTempo');
const Paracomprimento = document.querySelector('#ParaTempo');
const curiosidadeComp = document.querySelector('#curiosidadeTempo');

DeTempo.addEventListener('change', converter);
ParaTempo.addEventListener('change', converter);

//Quando clicar no botão, a função converter será executada
botao.addEventListener('click', function converter() {
    const numero = parseFloat(valor.value);
    const unidadeOrigem = Decomprimento.value;
    const unidadeDestino = Paracomprimento.value;

    //Unidades de medida

    const unidades = {
        seculo: 0.01,
        ano: 1,
        mes: 12,
        semana: 52.143,
        dia: 365,
        hora: 8760,
        minuto: 525600,
        segundo: 31622400,
        milessegundo: 31536000000 
        }

        if (numero && unidades[unidadeOrigem] && unidades[unidadeDestino]) {
            const multiplicador = unidades[unidadeDestino] / unidades[unidadeOrigem];
            const resultado = numero * multiplicador;
            const resultadoConvertida = resultado.toFixed(2)

            if(unidadeDestino === 'seculo'){ textResultado.textContent = resultadoConvertida + " seculos" };
            if(unidadeDestino === 'ano'){ textResultado.textContent = resultadoConvertida + " anos" };
            if(unidadeDestino === 'mes'){ textResultado.textContent = resultadoConvertida + " meses" };
            if(unidadeDestino === 'semana'){ textResultado.textContent = resultadoConvertida + " semanas" };
            if(unidadeDestino === 'dia'){ textResultado.textContent = resultadoConvertida + " dias" };
            if(unidadeDestino === 'hora'){ textResultado.textContent = resultadoConvertida + " h" };
            if(unidadeDestino === 'minuto'){ textResultado.textContent = resultadoConvertida + " min" };
            if(unidadeDestino === 'segundo'){ textResultado.textContent = resultadoConvertida + " s" };
            if(unidadeDestino === 'milessegundo'){ textResultado.textContent = resultadoConvertida + " ms" };

            if (unidadeDestino === 'ano' || unidadeDestino === 'mes' || unidadeDestino === 'semana' || unidadeDestino === 'dia' || unidadeDestino === 'hora' || unidadeDestino === 'minuto' || unidadeDestino === 'segundo' || unidadeDestino === 'milessegundo' || unidadeDestino === 'seculo') {

                curiosidadeComp.innerHTML = `
                <h3>Medidas de Tempo</h3>
            
                <p>Existem diversas unidades de medida de tempo, por exemplo a hora, o dia, o mês, o ano, o século. No sistema internacional de medidas a unidades de tempo é o segundo (s).</p>
    
                <br>
    
                <p>O segundo é definido como a duração de 9 192 631 770 períodos da radiação correspondente à transição entre os dois níveis hiperfinos do estado fundamental do átomo de césio 133.</p>
    
                <br>
    
                <p>Muitas vezes necessitamos transformar uma informação que está, por exemplo, em minuto para segundos, ou em segundos para hora.</p>
                
                <br>

                <p>Para tal, devemos sempre lembrar que 1 hora tem 60 minutos e que 1 minuto equivale a 60 segundos. Desta forma, 1 hora corresponde a 3600 segundos.</p>

                <br>
                
                <p>Assim, para mudar de hora para minuto devemos multiplicar por 60. Por exemplo, 3 horas equivalem a 180 minutos (3 . 60 = 180).</p>
    
                <br>
    
                <p class="fonte">Fonte: <a href="https://www.todamateria.com.br/medidas-de-tempo/#:~:text=No%20sistema%20internacional%20de%20medidas,%C3%A9%20o%20segundo%20(s)." target="_blank">Toda Matéria</a></p>
                
                `
            }
        } else {
            textResultado.textContent = 'Valores inválidos';
        }
    }
)