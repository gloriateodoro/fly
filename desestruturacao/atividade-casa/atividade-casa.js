/* Atividade de Casa: Gestão de Inventário de Produtos da Lanchonete 🍔🥤🍩
Objetivo: Praticar a desestruturação, o operador spread e o operador rest em um cenário real de gerenciamento de dados de produtos.

Contexto: Você foi contratada para ajudar a "Lanchonete da Dona Marieta" a organizar o inventário de seus produtos. Cada produto tem informações básicas, mas também pode ter características adicionais ou variações.

Instruções:
Crie um arquivo index.html (apenas com um script.js linkado) e um arquivo script.js. Todo o código JavaScript deve ser escrito no script.js.

/* Parte 1: Cadastrando Produtos (Desestruturação e Spread)

Objeto Base de Produto:
Defina um array inicial de produtos (no seu script.js) usando objetos. Comece com 3-4 produtos. Cada produto deve ter as seguintes propriedades: id, nome, preco, quantidadeEmEstoque.
Exemplo:

JavaScript:
const inventarioProdutos = [
    { id: 1, nome: "Hamburguer Clássico", preco: 15.00, quantidadeEmEstoque: 50 },
    { id: 2, nome: "Batata Frita Média", preco: 8.00, quantidadeEmEstoque: 100 },
    // ... adicione mais alguns
];

Função adicionarProduto:
Crie uma função chamada adicionarProduto que aceite um objeto como argumento.
Esta função deve:

- Desestruturar o objeto recebido para extrair id, nome, preco e quantidadeEmEstoque diretamente nos parâmetros da função (ou logo no início da função).

- Criar um novo objeto de produto (certificando-se de que ele tem todas as propriedades necessárias, mesmo que algumas não venham na desestruturação inicial, usando valores padrão se for o caso).

- Usar o operador spread para adicionar este novo produto ao array inventarioProdutos de forma imutável (criando um novo array inventarioProdutos a cada adição, sem modificar o original diretamente).

Exemplo de uso esperado:

JavaScript:

// Adicionando um novo produto
inventarioProdutos = adicionarProduto(inventarioProdutos, {
    id: 3,
    nome: "Refrigerante Lata",
    preco: 6.00,
    quantidadeEmEstoque: 75
});

// Adicionando um produto com propriedades extras (será ignorado pela função inicial, mas preparado para Parte 3)
inventarioProdutos = adicionarProduto(inventarioProdutos, {
    id: 4,
    nome: "Milkshake Morango",
    preco: 12.00,
    quantidadeEmEstoque: 30,
    sabor: "Morango",
    tamanho: "Grande"
});
Dica: Pense em como passar o inventarioProdutos atual para a função e como retornar o novo array.


/* Parte 2: Listando e Atualizando Produtos (Template Literals e Spread)
Função listarProdutos:
Crie uma função listarProdutos que recebe o array inventarioProdutos como argumento.
Esta função deve:

- Iterar sobre o array de produtos.

- Para cada produto, usar template literals para criar uma string formatada que mostre ID: [id], Nome: [nome], Preço: R$[preco], Estoque: [quantidadeEmEstoque].

- Exibir essas strings no console.

Exemplo de uso esperado:

JavaScript

listarProdutos(inventarioProdutos);

Saída no console (exemplo):
ID: 1, Nome: Hamburguer Clássico, Preço: R$15.00, Estoque: 50
ID: 2, Nome: Batata Frita Média, Preço: R$8.00, Estoque: 100
ID: 3, Nome: Refrigerante Lata, Preço: R$6.00, Estoque: 75
ID: 4, Nome: Milkshake Morango, Preço: R$12.00, Estoque: 30


Função atualizarPreco:
Crie uma função atualizarPreco que aceite o array inventarioProdutos, um id do produto e o novoPreco.
Esta função deve:

- Usar o método map do array para criar um novo array de produtos.

- Dentro do map, se o id do produto atual for o id que você quer atualizar, use o operador spread para criar uma nova cópia do objeto produto e apenas atualizar a propriedade preco.

- Se não for o produto certo, retorne o produto original sem modificações.

- Retornar o novo array de inventário.

Exemplo de uso esperado:

JavaScript

inventarioProdutos = atualizarPreco(inventarioProdutos, 1, 16.50); // Aumenta o preço do Hamburguer Clássico
listarProdutos(inventarioProdutos); // Verifique no console se o preço mudou


/* Parte 3: Características Variáveis do Produto (Operador Rest)
Modificar adicionarProduto (Desafio Extra):
Adapte a função adicionarProduto (criada na Parte 1) para que ela aceite:

Um objeto com as propriedades básicas (id, nome, preco, quantidadeEmEstoque).

E, usando o operador rest, colete quaisquer outras propriedades adicionais que venham no objeto original e as adicione como um objeto separado dentro do seu objeto de produto (ex: detalhesAdicionais: { sabor: "Morango", tamanho: "Grande" }).

Dica: Pense em como desestruturar o objeto de entrada para pegar as propriedades básicas e o rest das outras propriedades.

Exemplo de uso esperado com a função modificada:

JavaScript

inventarioProdutos = adicionarProduto(inventarioProdutos, {
    id: 5,
    nome: "Pizza Pequena",
    preco: 25.00,
    quantidadeEmEstoque: 15,
    sabor: "Calabresa",
    borda: "Recheada",
    vegetariana: false
});

console.log(inventarioProdutos[4]); // O produto com id 5
/*
Saída esperada para o produto com id 5:
{
  id: 5,
  nome: "Pizza Pequena",
  preco: 25.00,
  quantidadeEmEstoque: 15,
  detalhesAdicionais: {
    sabor: "Calabresa",
    borda: "Recheada",
    vegetariana: false
  }
}

Modificar listarProdutos (Desafio Extra):
Adapte a função listarProdutos para que, se um produto tiver detalhesAdicionais, ela também os liste no console, usando template literals para formatar essas informações de forma legível.

Exemplo de saída com detalhes adicionais:

ID: 4, Nome: Milkshake Morango, Preço: R$12.00, Estoque: 30
  Detalhes: Sabor: Morango, Tamanho: Grande
ID: 5, Nome: Pizza Pequena, Preço: R$25.00, Estoque: 15
  Detalhes: Sabor: Calabresa, Borda: Recheada, Vegetariana: false
*/

/* Entrega:
OBS: Enviar o arquivo script.js (ou um link para um repositório no GitHub) com as soluções. */