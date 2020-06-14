var casalImagem = document.querySelector("#casal-imagem");

let indice = Math.floor(Math.random() * (4 - 1)) + 1;

console.log(indice);
casalImagem.src = "view/couple" + indice + ".png";

