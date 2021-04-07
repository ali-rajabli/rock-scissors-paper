var playerName = prompt("What is your Name?")
while (playerName === "") {
    playerName = prompt("Please type your Name");
}

var your_score = 0;
var comp_score = 0;
document.getElementById("score-id").innerHTML = playerName + " " + your_score + " : " + comp_score + " Computer";
document.getElementById("personal-label").innerHTML = playerName + "'s choice";

function win() {
    your_score++;
}

function lose() {
    comp_score++;
}

function draw() {

}


var rock1 = document.getElementById("rock-1");
var scissors1 = document.getElementById("scissors-1");
var paper1 = document.getElementById("paper-1");

var your_choice = [rock1, scissors1, paper1];



rock1.onclick = function() {
    return rock1 == your_choice;
}

scissors1.onclick = function() {
    return scissors1 == your_choice;
}

paper1.onclick = function() {
    return paper1 == your_choice;
}


function compare() {
    var choices_array = ["Rock", "Scissors", "Paper"];
    var computer_choice = choices_array[Math.floor(Math.random() * 3)];

    if ((your_choice == rock1 && computer_choice == "Rock") || (your_choice == scissors1 && computer_choice == "Scissor") || (your_choice == paper1 && computer_choice == "Paper")) {
        draw();
    } else if ((your_choice == rock1 && computer_choice == "Scissor") || (your_choice == scissors1 && computer_choice == "Paper") || (your_choice == paper1 && computer_choice == "Rock")) {
        win();
    } else {
        lose();
    }
    document.getElementById("score-id").innerHTML = playerName + " " + your_score + " : " + comp_score + " Computer";
}