const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display-result')
const showComputerChoice = document.getElementById('show-computer-choice')
const showUserChoice = document.getElementById('show-user-choice')
let userChoice


function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3)

  switch(randomNumber){
    case 0 : 
        return "rock"

    case 1 :
        return "papper"
    
    case 2 :
        return "scissors"    
  }
}



buttons.forEach(function (button){
    button.addEventListener('click', (e) => {
        userChoice = e.target.className
        const computerChoice = getRandomChoice()

    if(userChoice === computerChoice){
        display.innerHTML = "It' s a tie!"
    } else if (userChoice === 'papper' && computerChoice === 'rock'){
        display.innerHTML = "Win!"
    } else if (userChoice === 'papper' && computerChoice === 'scissors'){
        display.innerHTML = "Lose!"
    } else if (userChoice === 'rock' && computerChoice === 'papper'){
        display.innerHTML = "Lose!"
    } else if (userChoice === 'rock' && computerChoice === 'scissors'){
        display.innerHTML = "Win!"
    } else if (userChoice === 'scissors' && computerChoice === 'papper'){
        display.innerHTML = "Win!"
    } else if (userChoice === 'scissors' && computerChoice === 'rock'){
        display.innerHTML = "Lose!"
    }

    showUserChoice.innerHTML = "USER CHOICE: " + userChoice
    showComputerChoice.innerHTML = "COMPUTER CHOICE: " + computerChoice

  })

  console.log('This was added in dev branch')
           
})

