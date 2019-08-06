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
			computerScore = computerScore + 1;
			return "You lost!";
			
		}
		else{
			if(computerSelection == 'scissors'){
				yourScore = yourScore + 1;
				return "You won!";
				
			}
			else{
				yourScore = yourScore + 1;
				computerScore = computerScore + 1;
				return "It's a tie!";
				
			}
		}
	}
	else
		if(playerSelection == 'paper'){
			if(computerSelection == 'scissors'){
				computerScore = computerScore + 1;
				return "You lost!";
				
			}
			else{
				if(computerSelection == 'rock'){
					yourScore = yourScore + 1;
					return "You won!";
					
				}
				else{
					yourScore = yourScore + 1;
					computerScore = computerScore + 1;
					return "It's a tie!";
					
				}
			}
		}
		else{
			if(computerSelection == 'rock'){
				computerScore = computerScore + 1;
				return "You lost!";
				
			}
			else{
				if(computerSelection == 'paper'){
					yourScore = yourScore + 1;
					return "You won!";
					
				}
				else{
					yourScore = yourScore + 1;
					computerScore = computerScore + 1;
					return "It's a tie!";
					
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
		playRound(playerInput, computerSelection);
		nrGame++;
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