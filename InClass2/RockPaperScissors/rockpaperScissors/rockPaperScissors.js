/**
 * Created by gumma on 6/20/2017.
 */
var userChoice = prompt("Choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.27) {
    computerChoice = "rock";
} else if(computerChoice <= 0.65) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        return "The result is a tie!";
    }
    if(choice1 === "rock") {
        if(choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            if (choice2 === "scissors") {
                return "scissors wins";
            }
        }
        if (choice1 === "scissors") {
            if (choice2 === "rock") {
                return "rock wins";
            } else {
                if (choice2 === "paper") {
                    return "scissors wins";
                }
            }
        }
    }
};


console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
var output = compare(userChoice, computerChoice);
console.log(output);