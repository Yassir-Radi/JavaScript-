"use strict";

let highscore = 0;
let score = 20;
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again")
let storedNumber = Math.trunc(Math.random() * 20 ) + 1;
document.querySelector(".number").textContent = storedNumber && "?";
const modal = document.querySelector(".modal-window");
const modalClose = document.querySelector(".close-modal");

//function for check btn eventlistner 
const conditions = function(){
    const input = Number(document.querySelector(".guess").value)

    if(input === 0){
        document.querySelector(".message").textContent = "not a valid number";
        document.querySelector(".score").textContent = score;

    }else if(input > storedNumber) {
        document.querySelector(".message").textContent = "too high";
        document.querySelector(".score").textContent = score -= 1;

    }else if(input < storedNumber){
        new Audio("wrong.mp3").play()
        document.querySelector(".message").textContent = "too low";
        document.querySelector(".score").textContent = score -= 1;
        document.getElementById("korper").style.backgroundColor = "#d73e3e";

    }else if(input === storedNumber) {
        new Audio("win.mp3").play();
        document.querySelector(".message").textContent = "Correct Number";
        document.getElementById("korper").style.backgroundColor = "#60b347";
        document.querySelector(".number").textContent = storedNumber;

        //High score logic
        if(score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }

    if(score === 0){
        modal.classList.remove("hidden");
    }
}
btnCheck.addEventListener("click", conditions)

// btn again function for the  eventlistner
const restGame = function() {

    score = 20; // score schould be reassigned

    Number(document.querySelector(".guess").value = ""); // to make the input empty after again click
    storedNumber = Math.trunc(Math.random() * 20) + 1; // to run another random number i have to reassign it
    document.getElementById("korper").style.backgroundColor = "#222";
    document.querySelector(".message").textContent = "Start guessing..."
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?"; 
    modal.classList.add("hidden");
}
btnAgain.addEventListener("click", restGame);



