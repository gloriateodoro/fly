function verificarIdade(idade) {
    let idadeUser = document.getElementById("idade").value;
    let temHabilitacao = document.getElementById("temHabilitacao").checked;
    if (idadeUser >= 18) {
        if(temHabilitacao){
            document.getElementById("resultado").innerHTML = "Você pode dirigir, pois tem idade e a habilitação!";
            console.log("Você pode dirigir, pois tem idade e a habilitação!");
        } else {
            document.getElementById("resultado").innerHTML = "Você não pode dirigir, pois não tem a habilitação!";
            console.log("Você não pode dirigir, pois não tem a habilitação!");
        }
    } else if (idadeUser >= 16) {
        document.getElementById("resultado").innerHTML = "Você não pode dirigir, mas está quase lá! Tenha paciência!";
        console.log("Você não pode dirigir, mas está quase lá! Tenha paciência!");
    }
    else {
        document.getElementById("resultado").innerHTML = "Você não pode dirigir, pois não tem idade!";
        console.log("Você não pode dirigir, pois não tem idade!");
    }
}

function verificarIdadeEmTempoReal() {
    let idade = document.getElementById("idade").value;
    let temHabilitacao = document.getElementById("temHabilitacao")
    if (idade >= 18) {
        temHabilitacao.disabled = false;
    } else {
        temHabilitacao.disabled = true;
    }
}