function mostrarImagem(temSol, temGuardaChuva) {
    let resultado = document.getElementById("resultado");

    let imagem = "";
    let mensagem = "";

    if(temSol && temGuardaChuva){
        imagem = "./images/preparada.png";
        mensagem = "Você está preparada para qualquer coisa! Pode sair!";
    }else if(temSol || temGuardaChuva){
        imagem = "./images/pode-sair.png";
        mensagem = "Está tudo bem, dá pra sair!";
    } else {
        imagem = "./images/em-casa.webp";
        mensagem = "Melhor ficar em casa!";
    }

    resultado.innerHTML = `
        <p>${mensagem}</p>
        <img src="${imagem}" alt="Situação do dia">
    `;
}