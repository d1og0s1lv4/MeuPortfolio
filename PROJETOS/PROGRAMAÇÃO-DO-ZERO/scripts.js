let imagem = document.querySelector(".img-1")

setInterval(() => {

    if (imagem.style.opacity == 0) {
        imagem.style.opacity = 1
    } else {
        imagem.style.opacity = 0
    }


}, 3000)