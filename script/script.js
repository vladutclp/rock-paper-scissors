const computerChoice = ['rock', 'paper', 'scissors'];
var yourScore = 0;
var computerScore = 0;

function computerPlay(){
	return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}


function playRound(playerSelection, computerSelection) {

	playerSelection = playerSelection.toLowerCase();

	if(playerSelection == 'rock'){
		if(computerSelection == 'paper'){
			computerScore++;	
		}
		else{
			if(computerSelection == 'scissors'){
				yourScore++;	
			}
			else{
				yourScore++;
				computerScore++;
			}
		}
	}
	else
		if(playerSelection == 'paper'){
			if(computerSelection == 'scissors'){
				computerScore++;
			}
			else{
				if(computerSelection == 'rock'){
					yourScore++;	
				}
				else{
					yourScore++;
					computerScore++;	
				}
			}
		}
		else{
			if(computerSelection == 'rock'){
				computerScore++;	
			}
			else{
				if(computerSelection == 'paper'){
					yourScore++;	
				}
				else{
					yourScore++;
					computerScore++;	
				}
			}
		}

	


}

function resetScore(){
	yourScore = 0;
	computerScore = 0;
}

function game(){
	let playerInput ;
	let computerSelection, nrGame = 0;
	while(nrGame < 5){
		playerInput = prompt("Choose your destiny");
		computerSelection = computerPlay();
		console.log("Computer choice: " + computerSelection + "\nYou choice: " + playerInput);
		playRound(playerInput, computerSelection);
		nrGame++;
		console.log("Computer score: " + computerScore + "\nYour score: " + yourScore);
	}

	if(yourScore > computerScore){
		alert("You Won");
	}
	else if(yourScore < computerScore){
		alert("You lost");
	}
	else{
		alert("It's a tie!")
	}

	resetScore();
}


game();