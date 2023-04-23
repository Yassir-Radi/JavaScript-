// "use strict";
// const box1 = document.getElementById("box-1");
// const box2 = document.getElementById("box-2");
// const box3 = document.getElementById("box-3");
// const box4 = document.getElementById("box-4");
// const box5 = document.getElementById("box-5");
// const box6 = document.getElementById("box-6");
// const box7 = document.getElementById("box-7");
// const box8 = document.getElementById("box-8");
// const box9 = document.getElementById("box-9");
// const allBoxes = document.querySelectorAll(".container-2 div"); // all the boxes
// const restart = document.querySelector(".btn-restart"); // button restart all
// const quit = document.querySelector(".cancel-btn"); // quit round
// const modal = document.querySelector(".modal"); // the modal window of winning
// const modal2 = document.querySelector(".modal-2"); // modal of restart
// const counterX = document.querySelector(".counter-x"); // counter x
// const counterY = document.querySelector(".counter-y"); // counter y
// const ties = document.querySelector(".ties"); // ties
// const homeBtn = document.querySelector(".home-btn"); // btn home page play vs player
// const nextRound = document.querySelector(".reset-btn");
// const main = document.getElementsByTagName("main");
// const modalText = document.querySelector(".modal-text");
// const modalText2 = document.querySelector(".modal h4");
// const cancelBtn = document.querySelector(".cancel-btn-2");
// const restartTheRound = document.querySelector(".modal-2 button:nth-child(2)");
// const turnSymbol = document.querySelector(".span-turn");

// let turn = "x";
// let winner = false;

// allBoxes.forEach((item) => item.addEventListener("mouseover", boxesHovered));

// function boxesHovered(e) {
//   const id = e.target.id;
//   if (turn === "x" && e.target.innerHTML === "") {
//     document.getElementById(id).innerHTML =
//       '<img src="/images/icon-x-outline.svg">';
//   }
// }

// allBoxes.forEach((item) => item.addEventListener("mouseleave", boxesHoveredCancel));

// function boxesHoveredCancel(e) {
//   const id = e.target.id;
//   if (turn === "x" && e.target.innerHTML !== "") {
//     document.getElementById(id).innerHTML = "";
//   }
// }

// function startGame() {
//   main[0].classList.remove("hidden");
//   homeBtn.classList.add("hidden");
// }
// homeBtn.addEventListener("click", startGame);

// // Draw X or Y

// function draw(id) {
//   if (winner) {
//     return;
//   }

//   if (turn === "x" && document.getElementById(id).innerHTML !== "") {
//     document.getElementById(id).innerHTML = '<img src="/images/icon-x.svg">';
//     turnSymbol.textContent = "O";
//     turn = "o";
//   } else if (turn === "o" && document.getElementById(id).innerHTML !== "") {
//     document.getElementById(id).innerHTML = '<img src="/images/icon-o.svg">';
//     turnSymbol.textContent = "X";
//     turn = "x";
//   }
//   checkWinner();
// }

// // set all the posibilities
// // there is 8 case 3 cases horizontaly and verticaly and also diagonal

// function checkWinner() {
//   if (
//     (box1.innerHTML === '<img src="/images/icon-x.svg">' &&
//       box2.innerHTML === '<img src="/images/icon-x.svg">' &&
//       box3.innerHTML === '<img src="/images/icon-x.svg">') ||
//     (box4.innerHTML === '<img src="/images/icon-x.svg">' &&
//       box5.innerHTML === '<img src="/images/icon-x.svg">' &&
//       box6.innerHTML === '<img src="/images/icon-x.svg">') ||
//     (box7.innerHTML === '<img src="/images/icon-x.svg">' &&
//       box8.innerHTML === '<img src="/images/icon-x.svg">' &&
//       box9.innerHTML === '<img src="/images/icon-x.svg">') ||
//     (box1.innerHTML === '<img src="/images/icon-x.svg">' &&
//       box4.innerHTML === '<img src="/images/icon-x.svg">' &&
//       box7.innerHTML === '<img src="/images/icon-x.svg">') ||
//     (box2.innerHTML === '<img src="/images/icon-x.svg">' &&
//       box5.innerHTML === '<img src="/images/icon-x.svg">' &&
//       box8.innerHTML === '<img src="/images/icon-x.svg">') ||
//     (box3.innerHTML === '<img src="/images/icon-x.svg">' &&
//       box6.innerHTML === '<img src="/images/icon-x.svg">' &&
//       box9.innerHTML === '<img src="/images/icon-x.svg">') ||
//     (box1.innerHTML === '<img src="/images/icon-x.svg">' &&
//       box5.innerHTML === '<img src="/images/icon-x.svg">' &&
//       box9.innerHTML === '<img src="/images/icon-x.svg">') ||
//     (box3.innerHTML === '<img src="/images/icon-x.svg">' &&
//       box5.innerHTML === '<img src="/images/icon-x.svg">' &&
//       box7.innerHTML === '<img src="/images/icon-x.svg">')
//   ) {
//     winner = true;
//     modal.classList.remove("hidden");
//     modalText.innerHTML = "X takes the Round";
//     modalText2.innerHTML = "You Won!";
//     modalText.style.color = "#31c3bd";
//     counterX.innerHTML++;
//   } else if (
//     (box1.innerHTML === '<img src="/images/icon-o.svg">' &&
//       box2.innerHTML === '<img src="/images/icon-o.svg">' &&
//       box3.innerHTML === '<img src="/images/icon-o.svg">') ||
//     (box4.innerHTML === '<img src="/images/icon-o.svg">' &&
//       box5.innerHTML === '<img src="/images/icon-o.svg">' &&
//       box6.innerHTML === '<img src="/images/icon-o.svg">') ||
//     (box7.innerHTML === '<img src="/images/icon-o.svg">' &&
//       box8.innerHTML === '<img src="/images/icon-o.svg">' &&
//       box9.innerHTML === '<img src="/images/icon-o.svg">') ||
//     (box1.innerHTML === '<img src="/images/icon-o.svg">' &&
//       box4.innerHTML === '<img src="/images/icon-o.svg">' &&
//       box7.innerHTML === '<img src="/images/icon-o.svg">') ||
//     (box2.innerHTML === '<img src="/images/icon-o.svg">' &&
//       box5.innerHTML === '<img src="/images/icon-o.svg">' &&
//       box8.innerHTML === '<img src="/images/icon-o.svg">') ||
//     (box3.innerHTML === '<img src="/images/icon-o.svg">' &&
//       box6.innerHTML === '<img src="/images/icon-o.svg">' &&
//       box9.innerHTML === '<img src="/images/icon-o.svg">') ||
//     (box1.innerHTML === '<img src="/images/icon-o.svg">' &&
//       box5.innerHTML === '<img src="/images/icon-o.svg">' &&
//       box9.innerHTML === '<img src="/images/icon-o.svg">') ||
//     (box3.innerHTML === '<img src="/images/icon-o.svg">' &&
//       box5.innerHTML === '<img src="/images/icon-o.svg">' &&
//       box7.innerHTML === '<img src="/images/icon-o.svg">')
//   ) {
//     winner = true;
//     modalText.innerHTML = "O takes the round";
//     modalText2.innerHTML = "You Won!";
//     modalText.style.color = "#f2b137";
//     modal.classList.remove("hidden");
//     counterY.innerHTML++;
//   } else if (
//     allBoxes[0].innerHTML !== "" &&
//     allBoxes[1].innerHTML !== "" &&
//     allBoxes[2].innerHTML !== "" &&
//     allBoxes[3].innerHTML !== "" &&
//     allBoxes[4].innerHTML !== "" &&
//     allBoxes[5].innerHTML !== "" &&
//     allBoxes[6].innerHTML !== "" &&
//     allBoxes[7].innerHTML !== "" &&
//     allBoxes[8].innerHTML !== ""
//   ) {
//     winner = true;
//     modal.classList.remove("hidden");
//     modalText.innerHTML = "Round Tied";
//     modalText2.innerHTML = "";
//     modalText.style.color = "#31c3bd";
//     ties.innerHTML++;
//   }
// }

// // Quit button

// function quitPush() {
//   modal.classList.add("hidden");
//   main[0].classList.add("hidden");
//   homeBtn.classList.remove("hidden");
//   counterX.innerHTML = 0;
//   counterY.innerHTML = 0;
//   ties.innerHTML = 0;
//   winner = false;
//   turn = "x";
//   turnSymbol.textContent = "X";
//   for (let i = 0; i < allBoxes.length; i++) {
//     allBoxes[i].innerHTML = "";
//   }
// }
// quit.addEventListener("click", quitPush);

// // Next Round

// function nextTrial() {
//   modal.classList.add("hidden");
//   winner = false;
//   turn = "x";
//   turnSymbol.textContent = "X";
//   for (let i = 0; i < allBoxes.length; i++) {
//     allBoxes[i].innerHTML = "";
//   }
// }
// nextRound.addEventListener("click", nextTrial);

// // if the user press on Restart (the button above)

// function resetGame() {
//   allBoxes.forEach((box) => {
//     box.innerHTML = "";
//     counterX.textContent = 0;
//     counterY.textContent = 0;
//     ties.textContent = 0;
//     turnSymbol.textContent = "X";
//   });
// }
// restart.addEventListener("click", resetGame);
