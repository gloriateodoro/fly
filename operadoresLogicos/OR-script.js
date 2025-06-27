let temMana = true;
let temPocaoMana = false;
let dia = "Segunda";

// Pode usar magia se tiver mana OU poção de mana
if (temMana || temPocaoMana) {
    console.log("Magia pode ser conjurada!");
} else {
    console.log("Mana esgotada, sem poção.");
}

// Pode pescar apenas no fim de semana
if (dia === "Sábado" || dia === "Domingo") {
    console.log("Hora de pescar!");
} else {
    console.log("Trabalho, trabalho...");
}