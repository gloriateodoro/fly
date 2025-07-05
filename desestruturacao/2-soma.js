function somarTodos(primeiroNumero, segundoNumero, ...outrosNumeros) {
    console.log(`Primeiro número: ${primeiroNumero}`);
    console.log(`Segundo número: ${segundoNumero}`);
    console.log(`Outros números (array): ${outrosNumeros}`);

    let somaDoResto = 0;
    for (const num of outrosNumeros) {
        somaDoResto += num;
    }
    return primeiroNumero + segundoNumero + somaDoResto;
}

console.log(somarTodos(10, 20));    
console.log(somarTodos(1, 2, 3));       
console.log(somarTodos(5, 5, 1, 2, 3, 4));


