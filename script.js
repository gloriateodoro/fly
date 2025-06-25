function calcularVoo() {
    // 1. Aqui estou obtendo as referências dos elementos HTML
    const inputDistancia = document.getElementById('distancia-km');
    const inputVelocidade = document.getElementById('velocidade-kmh');
    const inputConsumo = document.getElementById('consumo-lph');
    const resultadosParagrafo = document.getElementById('resultados-voo');

    // 2. Obtendo os VALORES digitados pelos usuários.
    // ATENÇÃO: Neste ponto, esses valores ainda são STRINGS (texto)!
    const distanciaString = inputDistancia.value;
    const velocidadeString = inputVelocidade.value;
    const consumoString = inputConsumo.value;

    // --- SEU TRABALHO COMEÇA AQUI! ---
    // Você inserir as CONVERSÕES de tipo aqui, usando Number(), parseInt() ou parseFloat().


    // 3. Validação básica (este trecho já ajuda a identificar campos vazios ou não numéricos,
    // mas vocês farão as conversões antes)
    if (distanciaString.trim() === '' || velocidadeString.trim() === '' || consumoString.trim() === '') {
        resultadosParagrafo.textContent = "Por favor, preencha todos os campos!";
        resultadosParagrafo.classList.add('resultado-erro'); // Adiciona classe para cor vermelha
        resultadosParagrafo.classList.remove('resultado-sucesso'); // Remove outras cores
        return; // Para a execução da função
    }

    // --- COLOQUE AS VARIÁVEIS CONVERTIDAS AQUI ---
    // Por exemplo:
    // let distancia = Number(distanciaString);
    // let velocidade = Number(velocidadeString);
    // let consumo = Number(consumoString);

    // 4. Verificação de NaN após a conversão (Pois queremos apenas números válidos)


    // --- CALCULE AQUI (usando as variáveis numéricas que você vai criar) ---
    // Exemplo:
    // const tempoVooHoras = distancia / velocidade;
    // const combustivelTotalLitros = tempoVooHoras * consumo;


    // 5. Exiba os resultados (usando as variáveis calculadas)
    // Certifique-se de que as variáveis 'tempoVooHoras' e 'combustivelTotalLitros' existam
    // após os cálculos que você fará.
    // Por enquanto, vamos deixar um placeholder:
    const tempoVooHoras = '??'; // você irá calcular isso!
    const combustivelTotalLitros = '??'; // você irá calcular isso!


    resultadosParagrafo.textContent = `
        Tempo de Voo Estimado: ${tempoVooHoras} horas \n \n
        Combustível Total Necessário: ${combustivelTotalLitros} litros
    `;
    resultadosParagrafo.classList.remove('resultado-erro');
    resultadosParagrafo.classList.add('resultado-sucesso'); // Adiciona classe para cor verde

    // 6. Opcional: Limpar os campos após o cálculo (você pode adicionar isso)
}

// Agora eu conecto a função ao botão de calcular
document.getElementById('btn-calcular-voo').addEventListener('click', calcularVoo);