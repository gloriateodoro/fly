# 🚀 Desafio de Codificação (Mãos à obra!)

Vocês precisam completar o arquivo `script.js` para que a calculadora funcione:

---

## 1. Localize a Função `calcularVoo()`

- No `script.js`, encontrem a função `calcularVoo()`.
- Ela é executada quando o botão **"Calcular Voo"** é clicado.

---

## 2. Converta os Tipos de Dados

- Atualmente, os valores dos inputs (`distanciaString`, `velocidadeString`, `consumoString`) são **strings**.
- Escolham a função de conversão adequada (`Number()`, `parseInt()` ou `parseFloat()`) para transformá-las em números.
- Criem novas variáveis para armazenar os valores numéricos (ex: `distancia`, `velocidade`, `consumo`).

---

## 3. Valide as Entradas

- Após a conversão, **descomentem** o bloco de validação de `NaN`.
- Certifiquem-se de que todos os valores foram convertidos com sucesso.
- Se algum for `NaN`, exibam uma **mensagem de erro** na área de resultados.

---

## 4. Realize os Cálculos

Utilizando os valores numéricos:

- **Tempo de Voo (horas)**: `distancia / velocidade`
- **Consumo Total de Combustível (litros)**: `tempoDeVoo * consumoPorHora`

Armazenem esses resultados em variáveis.

---

## 5. Exiba os Resultados

- Descomentem e completem o **Template Literal** já preparado no final da função.
- Substituam os `??` pelas suas variáveis calculadas.
- Usem `.toFixed(2)` para formatar os resultados com **duas casas decimais**.
- Ajustem a cor da mensagem de resultado:
  - **Verde** para sucesso (`.resultado-sucesso`)
  - **Vermelho** para erro (`.resultado-erro`)

---

## 💡 Dicas e Lembretes

- Sempre usem o **Console do Navegador** para verificar os valores das variáveis e identificar erros.  
  👉 `console.log()` é seu melhor amigo!
  
- Lembrem-se da diferença entre:
  - `Number()`: mais restritivo.
  - `parseInt()`: ignora decimais e aceita caracteres após o número.
  - `parseFloat()`: aceita decimais, mas também ignora caracteres após o número.

- Experimente:
  - O que acontece se digitarem `"abc"` na distância?
  - E se digitarem `"100km"`?
  - O que cada função de conversão retorna nesses casos?

---

**Boa sorte e bons voos!** ✈️
