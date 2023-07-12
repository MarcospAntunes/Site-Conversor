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