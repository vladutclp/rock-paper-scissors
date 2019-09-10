const computerChoice = ['rock', 'paper', 'scissors']; // Game choices
let yourScore = 0, computerScore = 0; // User score and computer score
let nrGame = 0;


const scoreDiv = document.querySelector(".tabela");
const yourScoreDisplayed = document.querySelector('#yourScore'), computerScoreDisplayed = document.querySelector('#computerScore'); //Paragraphs to display score
yourScoreDisplayed.textContent = "Your score: " + yourScore; // Display user score on the page
computerScoreDisplayed.textContent = "Computer score: " + computerScore;	// Display computer score on the page



scoreDiv.appendChild(yourScoreDisplayed);
scoreDiv.appendChild(computerScoreDisplayed);

function computerPlay(){
	return computerChoice[Math.floor(Math.random() * computerChoice.length)];
	
}


function playRound(playerSelection, computerSelection) {

	playerSelection = playerSelection.toLowerCase();

	if(playerSelection == 'rock'){
		if(computerSelection == 'paper'){
			computerScore++;	
			computerScoreDisplayed.textContent = "Computer score: " + computerScore;
		}
		else{
			if(computerSelection == 'scissors'){
				yourScore++;
				yourScoreDisplayed.textContent = "Your score: " + yourScore;	
			}
			else{
				//
			}
		}
	}
	else
		if(playerSelection == 'paper'){
			if(computerSelection == 'scissors'){
				computerScore++;
				computerScoreDisplayed.textContent = "Computer score: " + computerScore;
			}
			else{
				if(computerSelection == 'rock'){
					yourScore++;
					yourScoreDisplayed.textContent = "Your score: " + yourScore;	
				}
				else{
					//
				}
			}
		}
		else{
			if(computerSelection == 'rock'){
				computerScore++;
				computerScoreDisplayed.textContent = "Computer score: " + computerScore;	
			}
			else{
				if(computerSelection == 'paper'){
					yourScore++;
					yourScoreDisplayed.textContent = "Your score: " + yourScore;	
				}
				else{
					//
				}
			}
		}

		nrGame++;
}


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");






const reset = document.querySelector("#reset");
reset.addEventListener('click', resetScore);

function printScore(yourScore, computerScore){
	yourScoreDisplayed.textContent = "Your score: " + yourScore;
	computerScoreDisplayed.textContent = "Computer score: " + computerScore;
}

function printChoice(yourChoice, computerChoice){

}

function resetScore(){
	yourScore = 0;
	computerScore = 0;

	startGame.classList.remove("remove");
	rock.disabled = false;
	paper.disabled = false;
	scissors.disabled = false;
	finalMessage.textContent = "";
	computerChoiceDisplayed.textContent = "";
	yourChoiceDisplayed.textContent = "";
	printScore(yourScore, computerScore);
		
	hideDiv.classList.add('remove');
	}

paper.addEventListener('click', playGame);
scissors.addEventListener('click', playGame);
rock.addEventListener('click', playGame);

const finalMessage = document.querySelector('#finalMessage');
var computerChoiceDisplayed = document.querySelector(".computerChoice");
var yourChoiceDisplayed = document.querySelector(".yourChoice");
//scoreDiv.appendChild(finalMessage);
//scoreDiv.appendChild(computerChoiceDisplayed);
//scoreDiv.appendChild(yourChoiceDisplayed);
function playGame(){

	var id = this.id;
	var compChoice;
	


	switch(id){
		case 'paper':
			compChoice = computerPlay();
			playRound('paper', compChoice);
			console.log("Computer score: " + computerScore + "\nYour score: " + yourScore + "\nComputer played: " + compChoice + "\nYour choice: paper");
			computerChoiceDisplayed.textContent = "Computer choose: " + compChoice;
			yourChoiceDisplayed.textContent = "You choose: paper";
			yourScoreDisplayed.textContent = "Your score: " + yourScore;
			computerScoreDisplayed.textContent = "Computer score: " + computerScore;
			break;

		
		case 'rock':
			compChoice = computerPlay();
			playRound('rock', compChoice);
			console.log("Computer score: " + computerScore + "\nYour score: " + yourScore + "\nComputer played: " + compChoice + "\nYour choice: rock");
			computerChoiceDisplayed.textContent = "Computer choose: " + compChoice;
			yourChoiceDisplayed.textContent = "You choose: rock";
			yourScoreDisplayed.textContent = "Your score: " + yourScore;
			computerScoreDisplayed.textContent = "Computer score: " + computerScore;
			break;
		

		case 'scissors':
			compChoice = computerPlay();
			playRound('scissors', compChoice);
			console.log("Computer score: " + computerScore + "\nYour score: " + yourScore + "\nComputer played: " + compChoice + "\nYour choice: scissors");
			computerChoiceDisplayed.textContent = "Computer choose: " + compChoice;
			yourChoiceDisplayed.textContent = "You choose: scissors";
			yourScoreDisplayed.textContent = "Your score: " + yourScore;
			computerScoreDisplayed.textContent = "Computer score: " + computerScore;
			break;
		

		default:
			break;
	}
	
	console.log(nrGame);

	if(nrGame == 5){

		//alert("gata");
		nrGame = 0;
		
		if(yourScore > computerScore)
			finalMessage.textContent = "You won!!!";
		else if(yourScore < computerScore)
			finalMessage.textContent = "You lost!"
		else
			finalMessage.textContent = "ITS A FUCKIN TIEEEEEEE!!";
		
		rock.disabled = true;
		paper.disabled = true;
		scissors.disabled = true;
		
	}
	
}

const startGame = document.querySelector(".start");

const hideDiv = document.querySelector("#removeID");

function removeClass(){
	hideDiv.classList.remove("remove");
	startGame.classList.add("remove");
}

startGame.addEventListener('click', removeClass);




