
const humanScore = document.querySelector("#hScore") 
const machineScore = document.querySelector("#mScore") 
const result = document.querySelector("#result")
const choiceHuman = document.querySelector("#human")
const choiceMachine = document.querySelector("#machine")

let hScore = 0 // para placar crie uma variável que possa ser mudada, E USE O ++. NUNCA MAIS SE ESQUEÇA
let mScore = 0

// ESCOLHA DO JOGADOR
const playHuman = humanChoice => {
    
    playTheGame(humanChoice, playMachine(), humanChoice)



}
// ECOLHA DA MÁQUINA
const playMachine = machineChoice => {
    const choices = ['rock', 'paper', 'scissor']
    const randomNumber = Math.floor(Math.random() * 3)
    
    if(randomNumber === 0) {
        choiceMachine.innerHTML = '&#x270A;&#x1F3FD;'
    } else if(randomNumber === 1) {
        choiceMachine.innerHTML = '&#x270B;&#x1F3FD;'
    } else {
        choiceMachine.innerHTML = '&#x270C;&#x1F3FD;'
    }

    return choices[randomNumber]


}

// REGRAS DO JOGO
const playTheGame = (human, machine, showHuman) => {

    if(human === machine) {
        result.innerHTML = 'Draw!'
        result.style.color = 'black'
    

    } else if (human === 'rock' && machine === 'scissor' 
    || human === 'paper' && machine === 'rock'
    || human === 'scissor' && machine === 'paper') {
        result.innerHTML = 'You Win!'
        result.style.color = 'lightgreen'
        
        hScore++
        humanScore.innerHTML = hScore
        
    } else {
        result.innerHTML = 'You Loose'
        result.style.color = 'red'; // TENTE SEMPRE SIMPLIFICAR O SEU CÓDIGO, *ECONOMIZE LINHAS!!!*

        mScore++
        machineScore.innerHTML = mScore
    }

    if(showHuman === 'rock') {
        choiceHuman.innerHTML = '&#x270A;&#x1F3FD;'
    } else if(showHuman === 'paper') {
        choiceHuman.innerHTML = '&#x270B;&#x1F3FD;'
    } else {
        choiceHuman.innerHTML = '&#x270C;&#x1F3FD;'
    }
    console.log(human, machine)
}

