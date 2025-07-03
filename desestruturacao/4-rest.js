function criarPet(nome, idade, ...doencas) {
    const pet = {
        nome: nome,
        idade: idade,
        doencas: doencas
    }
    return pet;
}

const pet1 = criarPet("Rex", 5, []);
const pet2 = criarPet("Bidu", 3, "Gripe", "Artrite");

console.log(pet1);
console.log(pet2);