const valor = document.querySelector('#numero');
const deVelo = document.querySelector('#DeVelo');
const paraVelo = document.querySelector('#ParaVelo');
const converter = document.querySelector('#converter');
const textResultado = document.querySelector('#resultado');
const curiosidadeVelo = document.querySelector('#curiosidadeVelo');

deVelo.addEventListener('change', converter);
paraVelo.addEventListener('change', converter);

converter.addEventListener('click', () => {
    
    if(deVelo.value === 'ms' && paraVelo.value === 'kmh') {
        const resultado = Number((valor.value) * 3.6)
        textResultado.innerHTML = resultado.toFixed(2) + ' km/h'
    };
    if(deVelo.value === 'kmh' && paraVelo.value === 'ms') {
        const resultado = Number((valor.value) / 3.6)
        textResultado.innerHTML = resultado.toFixed(2) + ' m/s'
    };
    if(deVelo.value === 'ms' && paraVelo.value === 'ms') {
        textResultado.innerHTML = Number((valor.value)).toFixed(2) + ' m/s'
    };

    if(deVelo.value === 'kmh' && paraVelo.value === 'kmh') {
        textResultado.innerHTML = Number((valor.value)).toFixed(2) + ' km/h'
    };

    curiosidadeVelo.innerHTML = `
    <h3>Velocidade</h3>
            
    <p>No Sistema Internacional de Unidades (SI) a velocidade é dada em metros por segundo (m/s).</p>

    <br>

    <p>Contudo, outra maneira de medir a velocidade é em quilômetros por hora (km/h), como notamos nas velocidades marcadas pelos carros e nas placas de trânsito.</p>

    <br>

    <p>Contudo, outra maneira de medir a velocidade é em quilômetros por hora (km/h), como notamos nas velocidades marcadas pelos carros e nas placas de trânsito.</p>

    <br>

    <p>Por outro lado, para transformar km/h em m/s divide-se o valor por 3,6, visto que 1 km são 1000 metros e 1 hora correspondem a 3600 s.</p>

    <br>

    <p class="fonte">Fonte: <a href="https://www.todamateria.com.br/velocidade-media/" target="_blank">Toda Matéria</a></p>
    
    `;

    if(deVelo.value === '' && paraVelo.value === '') {
        textResultado.innerHTML = 'Digite um valor!'
        curiosidadeVelo.innerHTML = ''
    };
});
