// Função para converter moedas
async function converterMoeda() {
    const numero = document.getElementById('numero').value;
    const moedaOrigem = document.getElementById('Decomprimento').value;
    const moedaDestino = document.getElementById('Paracomprimento').value;
    let resultado = '';
  
    try {
      // Obter a taxa de câmbio da API ExchangeRate-API
      const apiKey = '2bedb6bea11e2da68f61e907';
      const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${moedaOrigem}/${moedaDestino}`;
  
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      // Verificar se a solicitação foi bem-sucedida
      if (response.ok && data.result === 'success') {
        // Obter a taxa de câmbio da resposta da API
        const taxaCambio = data.conversion_rate;
  
        // Calcular o valor convertido
        const valorConvertido = numero * taxaCambio;
  
        // Formatar o resultado como número monetário
        resultado = `${valorConvertido.toLocaleString('pt-BR', {
          style: 'currency',
          currency: moedaDestino
        })}`;

        const curiosidadeMoeda = document.querySelector('#curiosidadeMoeda');

        if (moedaDestino == 'USD') {

          curiosidadeMoeda.innerHTML = 
          `<h3>Dólar Americano</h3>
            
          <p>O dólar dos Estados Unidos, também conhecido como dólar estadunidense ou dólar americano é a moeda oficial dos Estados Unidos e utilizada no mundo inteiro, tanto em reservas internacionais, como em livre circulação em alguns países. Atualmente, sua expedição é controlada pela Reserva Federal dos Estados Unidos.</p>

          <br>

          <p>A Lei da moeda de 1792 (também conhecida como Lei da Casa da Moeda; oficialmente: Um ato que estabelece uma casa da moeda, e regulamenta as Moedas dos Estados Unidos), aprovada pelo Congresso dos Estados Unidos em 2 de abril de 1792, criou o dólar dos Estados Unidos como a unidade padrão de dinheiro do país, estabeleceu a Casa da Moeda dos Estados Unidos e regulamentou a cunhagem dos Estados Unidos. Esta lei estabeleceu o dólar de prata como a unidade de dinheiro nos Estados Unidos, declarou-o como uma proposta legal, e criou um sistema decimal para a moeda americana.</p>

          <br>

          <p class="fonte">Fonte: <a href="https://pt.wikipedia.org/wiki/D%C3%B3lar_dos_Estados_Unidos" target="_blank">WikiPédia</a></p>`

        } else if (moedaDestino === 'AUD') {

          curiosidadeMoeda.innerHTML = 
          `<h3>Dólar australiano</h3>
            
          <p>Dólar australiano é a moeda oficial da Comunidade da Austrália, incluindo o Território Antártico Australiano, a Ilha Christmas ou Ilha do Natal, as Ilhas Cocos (Keeling), a Ilha Heard e Ilhas McDonald e a Ilha Norfolk, assim como os arquipélagos independentes de Quiribati e Tuvalu, no Pacífico.</p>

          <br>

          <p>O dólar australiano é a oitava moeda mais usada no comércio estrangeiro dando conta de aproximadamente 4–5% das transações estrangeiras.</p>

          <br>

          <p>dando conta de aproximadamente 4–5% das transações estrangeiras.</p>

          <br>

          <p class="fonte">Fonte: <a href="https://pt.wikipedia.org/wiki/D%C3%B3lar_australiano" target="_blank">WikiPédia</a></p>`

        } else if (moedaDestino === 'EUR') {

          curiosidadeMoeda.innerHTML = 
          `<h3>Euro</h3>
            
          <p>Euro é a moeda oficial da zona Euro, a qual é constituída por 20 dos 27 estados-membros da União Europeia: Alemanha, Áustria, Bélgica, Chipre, Croácia, Eslováquia, Eslovénia, Espanha, Estónia, Finlândia, França, Grécia, Irlanda, Itália, Letónia, Lituânia, Luxemburgo, Malta, Países Baixos, Portugal e Polônia.  A moeda é também usada de forma oficial pelas instituições da União Europeia e por quatro outros países europeus e, de forma unilateral, pelo Cosovo e Montenegro. Em 2018, a moeda foi usada diariamente por cerca de 343 milhões de europeus.</p>

          <br>

          <p>A moeda é ainda usada por mais 240 milhões de pessoas em todo o mundo, das quais 190 milhões em África, que usam moedas de câmbio fixo em relação ao euro. O euro é a segunda maior moeda de reserva e a segunda moeda mais transacionada no mundo a seguir ao dólar dos Estados Unidos. Com mais de 1,2 biliões de euros em circulação em 2018, o euro tem o maior valor combinado de notas e moedas em circulação no mundo, ultrapassando o dólar norte-americano.</p>

          <br>

          <p>A ideia do estabelecimento de uma moeda única na CEE nasceu já na década de 70. Teve como principais defensores os Economistas Fred Arditti, Neil Dowling, Wim Duisenberg, Robert Mundell, Tommaso Padoa-Schioppa e Robert Tollison. No entanto, só pelo Tratado de Maastricht, de 1992 esta ideia passou da teoria para o Direito. Este tratado foi celebrado pelos doze países que à data faziam parte da Comunidade Económica Europeia. O Reino Unido e a Dinamarca optaram neste tratado por ficar de fora da moeda única.</p>

          <br>

          <p class="fonte">Fonte: <a href="https://pt.wikipedia.org/wiki/Euro" target="_blank">WikiPédia</a></p>`

        } else if (moedaDestino === 'GBP') {

          curiosidadeMoeda.innerHTML = 
          `<h3>Libra esterlina</h3>
            
          <p>A libra esterlina ou simplesmente libra é a moeda oficial do Reino Unido. Desde 15 de Fevereiro de 1971 e da adoção do sistema decimal, ela é dividida em 100 pence. Antes dessa data, uma libra esterlina valia 20 shillings ou 240 pence.</p>

          <br>

          <p>Um aspecto importante da libra é o fato de ser emitida por mais de um banco, uma vez que o padrão é único, ou seja, os bancos da Inglaterra e da Escócia operam em coordenação, embora o comando e controle da política monetária sejam definidos somente pelo banco da Inglaterra.</p>

          <br>

          <p>A libra esterlina é considerada uma das moedas mais valorizadas do mundo, superando inclusive o euro e o dólar, abaixo apenas de dinar kuwaitiano, dinar bareinita, rial omanense e dinar jordano.</p>

          <br>

          <p class="fonte">Fonte: <a href="https://pt.wikipedia.org/wiki/Libra_esterlina" target="_blank">WikiPédia</a></p>`

        } else if (moedaDestino === 'JPY') {

          curiosidadeMoeda.innerHTML = 
          `<h3>Iene</h3>
            
          <p>O iene é a moeda oficial do Japão. É a terceira moeda mais negociada no mercado de câmbio depois do dólar dos Estados Unidos e do euro. É também amplamente usado como moeda de reserva, depois do dólar americano, o euro e a libra esterlina.</p>

          <br>

          <p>É também amplamente usado como moeda de reserva, depois do dólar americano, o euro e a libra esterlina.</p>

          <br>

          <p class="fonte">Fonte: <a href="https://pt.wikipedia.org/wiki/Iene" target="_blank">WikiPédia</a></p>`

        } else if (moedaDestino === 'CHF') {

          curiosidadeMoeda.innerHTML = 
          `<h3>Franco suíço</h3>
            
          <p>O franco suíço é a moeda utilizada na Suíça e no Liechtenstein. É subdividido em 100 cêntimos.</p>

          <br>

          <p>O franco suíço é o resultado da união monetária entre os cantões suíços em 1850, vindo a substituir as moedas cantonais e regionais. Antes de 1850, cerca de 860 moedas diferentes estavam em circulação na Suíça e todas tinham curso legal.</p>

          <br>

          <p class="fonte">Fonte: <a href="https://pt.wikipedia.org/wiki/Franco_su%C3%AD%C3%A7o" target="_blank">WikiPédia</a></p>`

        } else if (moedaDestino === 'CAD') {

          curiosidadeMoeda.innerHTML = 
          `<h3>Dólar canadense</h3>
            
          <p>O dólar canadense ou dólar canadiano é a moeda do Canadá, cujo código ISO 4217 é CAD. É normalmente abreviado com o símbolo $ ou C$. Cada cem centavos ou cêntimos formam um dólar canadense.</p>

          <br>

          <p>Historicamente, a cotação do dólar canadense se mantém abaixo do dólar americano. Contudo, após a crise do subprime, o Banco Central dos Estados Unidos, na tentativa de aquecer sua economia, utiilizou uma prática monetária conhecida como Quantitative Easing injetando uma enorme quantidade de dólares americanos na economia mundial e com isso derrubando sua cotação em relação a várias moedas do mundo, inclusive o dólar canadense.</p>

          <br>

          <p class="fonte">Fonte: <a href="https://pt.wikipedia.org/wiki/D%C3%B3lar_canadense" target="_blank">WikiPédia</a></p>`

        } else if (moedaDestino === 'CNY') {

          curiosidadeMoeda.innerHTML = 
          `<h3>Renminbi</h3>
            
          <p>Renminbi ou, na suas formas portuguesas, renmimbi, remimbi ou remmimbi é a moeda oficial da República Popular da China e é distribuída pelo Banco Popular da China.</p>

          <br>

          <p>O yuan nasceu com a nomenclatura de Rén mín bi, assim como o Banco Popular da China, que se chama ‘Banco do Povo’. Um yuan é subdividido em 10 jiao Um yuan é subdividido em 10 jiao. Foi depois da Dinastia Yuan, que a monetização ficou mais simples. Começou-se a usar principalmente papel-moeda e uma pequena quantidade de moeda de metal.</p>

          <br>

          <p>A abreviação da moeda é RMB, embora se utilize mais a forma CNY — muito mais aceita e amplamente difundida no sistema financeiro global. Fora da China, o mais comum é chamá-la ‘yuan’. Já os chineses costumam designá-la como ‘kuai’.</p>

          <br>

          <p class="fonte">Fonte: <a href="https://pt.wikipedia.org/wiki/Renminbi" target="_blank">WikiPédia</a></p>`

        } else if (moedaDestino === 'ARS') {

          curiosidadeMoeda.innerHTML = 
          `<h3>Peso argentino</h3>
            
          <p>O peso argentino é a moeda oficial da Argentina. A moeda adota divisões em centavos de 1, 5, 10, 25, 50 centavos, e 1, 2, 5 e 10 pesos. Já as notas são de 10, 20, 50, 100, 200, 500, 1.000 e 2.000 pesos.</p>

          <br>

          <p>As moedas abaixo de 1 peso raramente são utilizadas. As notas de 2 pesos perderam o valor em abril de 2018, e as notas de 5 pesos deixaram de circular e de ter validade em fevereiro de 2020.</p>

          <br>

          <p>Em 1813, a Argentina começou a emitir sua própria moeda, denominada Real Argentino, constituída somente por moedas metálicas. Em 1820, foram introduzidas as cédulas. Em 1881, o Real Argentino foi substituído pelo Peso. Na ocasião, cada peso valia 2 reais argentinos.</p>

          <br>

          <p class="fonte">Fonte: <a href="https://pt.wikipedia.org/wiki/Peso_argentino" target="_blank">WikiPédia</a></p>`

        } else if (moedaDestino === 'TRY') {

          curiosidadeMoeda.innerHTML = 
          `<h3>Lira turca</h3>
            
          <p>A lira turca  é a unidade monetária corrente na Turquia, assim como do estado não reconhecido da República Turca do Chipre do Norte. A lira turca é subdividida em 100 kuruş.</p>

          <br>

          <p>A lira foi introduzida na Turquia em 1844. Ela substituiu o kuruş como principal unidade monetária, embora os kuruş tenham continuado a circular como subdivisão da lira, com cem kuruş perfazendo uma lira. O Kurus também continuaram a ser usados. Até a década de 1930 o alfabeto árabe era utilizado nas moedas e notas turcas: پاره significava para, غروش significava kuruş e ليرا lira (تورك ليراسي é "lira turca").</p>

          <br>

          <p>Entre 1844 e 1881, a lira adotou um padrão bimetálico, onde uma lira equivalia tanto a 6,61519 gramas de ouro puro e 99,8292 de prata pura. Em 1881 o padrão do ouro foi adotado, e seguiu em uso até 1914. A Primeira Guerra Mundial viu a Turquia abandonar definitivamente o padrão do ouro, com a lira de ouro valendo cerca de nove liras em papel-moeda até o início da década de 1920.</p>

          <br>

          <p class="fonte">Fonte: <a href="https://pt.wikipedia.org/wiki/Lira_turca" target="_blank">WikiPédia</a></p>`

        } else if (moedaDestino === 'BRL') {

          curiosidadeMoeda.innerHTML = 
          `<h3>Real (moeda brasileira)</h3>
            
          <p>O Real, oficialmente Real Brasileiro, é a moeda corrente oficial do Brasil.</p>

          <br>

          <p>Após sucessivas trocas monetárias, o Brasil adotou o real em 1 de julho de 1994, que, aliado à drástica queda das taxas de inflação, constituiu uma moeda estável para o país. Foi implantado no mandato do presidente Itamar Franco, sob o comando do então ministro da Fazenda, Fernando Henrique Cardoso, depois eleito presidente da República. Quando o Real foi lançado, em 1 de julho, o ministro da Fazenda já era Rubens Ricupero, uma vez que FHC já tinha saído para desincompatibilizar-se e ter o direito de se candidatar a Presidente da República.</p>

          <br>

          <p>O real é a 16.ª moeda mais negociada no mundo, é a segunda mais negociada na América Latina e quarta mais negociada nas Américas. Estima-se que hoje existam mais de oito milhões de moedas perdidas do real. O real é a moeda oficial brasileira, porém, o Banco Central do Brasil permite circulação de moedas privadas e moedas sociais no país, emitidas por bancos comunitários, desde que estas circulem apenas localmente e, sejam lastreadas pela moeda oficial. Portanto, para cada moeda privada/social emitida, o banco comunitário emissor deve possuir R$ 1,00 em caixa.</p>

          <br>

          <p class="fonte">Fonte: <a href="https://pt.wikipedia.org/wiki/Real_(moeda_brasileira)" target="_blank">WikiPédia</a></p>`

        }
      } else {
        resultado = 'Não foi possível obter a taxa de câmbio';
      }
    } catch (error) {
      resultado = 'Ocorreu um erro na conversão, se o erro pessistir tente mais tarde.';
      console.error(error);
    }
  
    // Exibir o resultado na div 'resultado'
    document.getElementById('resultado').textContent = resultado;
  }
  
  // Adicionar evento de clique ao botão 'converter'
  document.getElementById('converter').addEventListener('click', converterMoeda);