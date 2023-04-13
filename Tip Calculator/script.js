"use strict"
const custom = document.querySelector(".custom") //for the input custom
const reset = document.querySelector(".btn-reset") // for the reset btn
const peopleNumber = document.getElementById("number-of-people") // for input of number of people
const bill = document.getElementById("bill") // for the input of the bill value
const tipAmount = document.querySelector(".tip-amount") // for the text that shows the tip value
const total = document.querySelector(".total") // for the text that shows the total of every person 
const buttons = document.querySelectorAll(".btns"); // for selecting all the  btns 

// Calculating the Tip

function tipCalculator(e) {
  let tipPercentage = parseInt(e.target.textContent);
  let result =  bill.value * (tipPercentage / 100) / peopleNumber.value;
  tipAmount.textContent = result;
  total.textContent = result + (bill.value / peopleNumber.value);
  if(bill.value < 0 || peopleNumber.value < 0 ){
    alert("there is something wrong concerning the values please check it again")
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", tipCalculator);
});

// Custom Value 

const chooseRandomValue = function (){
  let result =  bill.value * (custom.value / 100) / peopleNumber.value;
  tipAmount.textContent = result;
  total.textContent = result + bill.value / peopleNumber.value;
}
 custom.addEventListener("input", chooseRandomValue)

// Reset Button

const resetGame = function() {
  bill.value = "";
  peopleNumber.value = "";
  tipAmount.textContent = "$0.00";
  total.textContent = "$0.00";
  custom.value = "";
}
  reset.addEventListener("click", resetGame);