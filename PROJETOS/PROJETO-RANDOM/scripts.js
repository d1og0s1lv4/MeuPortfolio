
function generateNumber() {
    const inputMin = Math.ceil(document.querySelector('.input-min').value)
    const inputMax = Math.floor(document.querySelector('.input-max').value)
    
    const result = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin;

    let resultNumber = document.querySelector('.number')
    resultNumber.innerHTML = result
    

}

//function d20Roll() { const btn = document.querySelector('button'); const rollDice = document.querySelector('.d20') rollDice.style.animationPlayState = "running"; btn.addEventListener("click", d20Roll);}