function getAstronomyPicture() {
    fetch("http://192.168.0.8:8000/v1/apod/")
    // Lembre que pra isso funcionar, eu fiz todo aquele processo de instalação do Python e 
    // o clone do repositório cujo link está na descrição da aula
    .then(response => response.json())
    .then(data => {
        document.getElementById("picture").innerHTML = `<img src="${data.hdurl}" alt="${data.title}">`;
    })
    .catch(error => console.error("Erro ao obter a imagem:", error));
}