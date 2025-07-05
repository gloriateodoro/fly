function exibirItems(...items) {
    console.log(`A função recebeu ${items.length} itens.`);
    items.forEach((item, index) => {
        console.log(`Item ${index + 1}: ${item}`);
    });
}

exibirItems('maçã', 'banana', 'laranja');
exibirItems('água');