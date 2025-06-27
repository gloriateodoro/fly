let portaTrancada = true;
let inimigoVisivel = true;

if (!portaTrancada) { // Se NÃO está trancada (ou seja, está destrancada)
    console.log("Porta aberta! Avante!");
} else {
    console.log("Porta trancada, precisa de chave.");
}

if (!inimigoVisivel) { // Se NÃO há inimigo visível
    console.log("Caminho seguro.");
}else{
    console.log("Inimigo visível, avise o herói!");
}