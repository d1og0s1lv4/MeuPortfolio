
// function trocaCor(cor) {
//     const circulo = document.querySelector(".circulo")
//     circulo.style.background = cor
// }



// function trocaImg(img) {
//     let iphone = document.querySelector(".iphone")
//     iphone.src = img
// }

// att scripts.js

const circle = document.getElementById("circulo")
const buttons = document.querySelectorAll(".change")
const iphoneImg = document.querySelector(".iphone")

const cores = {
  vermelho: { cor: "#B50012", img: "iphone-red.png" },
  azul:     { cor: "#81A5C4", img: "iphone-azul.png" },
  branco:   { cor: "#C1C1C1", img: "iphone-branco.png" },
  preto:    { cor: "#252525", img: "iphone-preto.png" },
  amarelo:  { cor: "#F7DA47", img: "iphone-amarelo.png" },
  roxo:     { cor: "#e2cef0", img: "iphone-roxo.png" }
};

buttons.forEach(button => {
  button.addEventListener("click", () => {
    for (let cor in cores) {
      if (button.classList.contains(cor)) {
        circle.style.background = cores[cor].cor;
         iphoneImg.style.opacity = 0;

          setTimeout(() => {
            iphoneImg.src = `img/${cores[cor].img}`;
            iphoneImg.style.opacity = 1;
          }, 200);
      }
    }
  });
});


// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         if (button.classList.contains("vermelho")) {
//             circle.style.background = "#B50012"
//             iphoneImg.src = "./img/iphone-vermelho.png"
//         } else if (button.classList.contains("azul")) {
//             circle.style.background = "#81A5C4"
//             iphoneImg.src = "./img/iphone-azul.png"
//         } else if (button.classList.contains("branco")) {
//             circle.style.background = "#C1C1C1"
//             iphoneImg.src = "./img/iphone-branco.png"
//         } else if (button.classList.contains("preto")) {
//             circle.style.background = "#252525"
//             iphoneImg.src = "./img/iphone-preto.png"
//         }
//         else if (button.classList.contains("amarelo")) {
//             circle.style.background = "#F7DA47"
//             iphoneImg.src = "./img/iphone-amarelo.png"
//         }
//         else if (button.classList.contains("roxo")) {
//             circle.style.background = "#e2cef0"
//             iphoneImg.src = "./img/iphone-roxo.png"
//         }
//     })
// })