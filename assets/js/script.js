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
var your_choice
var computer_choice;

function selectPictures () {
    var idUser = your_choice + "-1";
    var idComp = computer_choice + "-2";

    document.getElementById(idUser).classList.add('selected');
    document.getElementById(idComp).classList.add('selected');
}

function unselectPictures () {
    var all = document.querySelectorAll('.selected');
    for (let elem of all) {
        elem.classList.remove('selected');
    }
}


rock1.onclick = function() {
    your_choice = 'rock';
    compare();
}

scissors1.onclick = function() {
    your_choice = 'scissors';
    compare();
}

paper1.onclick = function() {
    your_choice = 'paper';
    compare();
}

function compare() {
    var choices_array = ["rock", "scissors", "paper"];
    computer_choice = choices_array[Math.floor(Math.random() * 3)];

    unselectPictures();
    selectPictures();

    if (your_choice == computer_choice) {
        draw();
    } else if ((your_choice == 'rock' && computer_choice == "scissors") || (your_choice == 'scissors' && computer_choice == "paper") || (your_choice == 'paper' && computer_choice == "rock")) {
        win();
    } else {
        lose();
    }
    document.getElementById("score-id").innerHTML = playerName + " " + your_score + " : " + comp_score + " Computer";
}