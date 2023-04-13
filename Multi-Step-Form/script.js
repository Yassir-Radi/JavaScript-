'use strict';
const page1 = document.querySelector('.personal-info') // page 1
const page2 = document.querySelector('.plan') //page2
const page3 = document.querySelector('.add-ons') // page 3
const page4 = document.querySelector('.Finishingup') // page 4
const page5 = document.querySelector('.thank-you')// page 5
const input1 = document.querySelector("input[type ='text']") // the form input
const input2 = document.querySelector("input[type ='email']") // the form input
const input3 = document.querySelector("input[type ='number']") // the form input
const firstBtn = document.getElementById('firstStep') // btn next step to page 2
const pageBack1 = document.getElementById('toFirstStep') // return to page 1
const secondBtn = document.getElementById('secondStep') // btn next step to page 3
const pageBack2 = document.getElementById('toSecondStep') // return to page 2
const thirdBtn = document.getElementById('thirdStep')
const pageBack3 = document.getElementById('toTheThirdStep')// back to page 3
const confirmBtn = document.getElementById('confirm-button') //confirm btn
const btnLight1 = document.querySelector('.btn1') // the btn in the dashboard
const btnLight2 = document.querySelector('.btn2') // the btn in the dashboard
const btnLight3 = document.querySelector('.btn3') // the btn in the dashboard
const btnLight4 = document.querySelector('.btn4') // the btn in the dashboard
const acrade = document.querySelector('.Arcade')
const advanced = document.querySelector('.Advanced')
const pro = document.querySelector('.pro')
const toggler = document.querySelector('.switch input') // the toggler btn
const textFreeMonths = document.querySelectorAll('.free-months')// 2 free months text
const priceOfOffer = document.querySelectorAll('h4 + p')
const divAddons = document.querySelectorAll('.add-ons-menu div:not(.description)') // the divs of the page 3
const checkboxes = document.querySelectorAll('.add-ons-menu div:not(.description) input') // the checkboxes of the page 3
const featurePrice = document.querySelectorAll('.money')
const inputs = document.querySelectorAll('.inputs')
const alerts = document.querySelectorAll('.alert')
const addonsSelected1 = document.querySelector('div.online p:first-child')
const addonsText1 = document.querySelector('div.online p:nth-of-type(2)')
const addonsSelected2 = document.querySelector('div.storage p:first-child')
const addonsText2 = document.querySelector('div.storage p:nth-of-type(2)')
const addonsSelected3 = document.querySelector('div.custom p:first-child')
const addonsText3 = document.querySelector('div.custom p:nth-of-type(2)')
const prix = document.getElementById('Arcade-value')
let total = document.getElementById('total')
let check = true;



// The Pages switching (display or hidden) and Form Validation

const nextPage2 = function() {
    for (let i = 0; i < 3; i++) {
      if (inputs[i].value === '') {
        inputs[i].style.border = "1px solid red";
        alerts[i].style.display = 'block';
        check = false;
      } else {
        alerts[i].style.display = 'none';
        inputs[i].style.border = "1px solid hsl(231, 11%, 63%)";
      }
    }
  
    if (check) {
      page1.style.display = 'none';
      page2.style.display = 'block';
      btnLight1.style.backgroundColor = 'initial'
      btnLight1.style.color = 'white'
      btnLight2.style.backgroundColor = '#bfe2fd' 
      btnLight2.style.color = 'black'
    } else {
      check = true;
    }
  }
firstBtn.addEventListener('click', nextPage2)


const returToPage1 = function(){
    page2.style.display = 'none'
    page1.style.display = 'block'
    btnLight2.style.backgroundColor = 'transparent'
    btnLight2.style.color = 'white'
    btnLight1.style.color = 'black'
    btnLight1.style.backgroundColor = '#bfe2fd'
} 
pageBack1.addEventListener('click', returToPage1)


const nextPage3 = function(){
    page2.style.display = 'none'
    page3.style.display = 'block'
    btnLight2.style.backgroundColor = 'initial'
    btnLight2.style.color = 'white'
    btnLight3.style.backgroundColor = '#bfe2fd'
    btnLight3.style.color = 'black'
}
secondBtn.addEventListener('click', nextPage3)


const returToPage2 = function(){
    page3.style.display = 'none'
    page2.style.display = 'block'
    btnLight3.style.backgroundColor = 'transparent'
    btnLight3.style.color = 'white'
    btnLight2.style.color = 'black'
    btnLight2.style.backgroundColor = '#bfe2fd'
}
pageBack2.addEventListener('click', returToPage2)


const nextPage4 = function(){
    page3.style.display = 'none'
    page4.style.display = 'block'
    btnLight3.style.backgroundColor = 'initial'
    btnLight3.style.color = 'white'
    btnLight4.style.backgroundColor = '#bfe2fd'
    btnLight4.style.color = 'black'
}
thirdBtn.addEventListener('click', nextPage4)


const returToPage3 = function(){
    page4.style.display = 'none'
    page3.style.display = 'block'
    btnLight4.style.backgroundColor = 'transparent'
    btnLight4.style.color = 'white'
    btnLight3.style.color = 'black'
    btnLight3.style.backgroundColor = '#bfe2fd'
}
pageBack3.addEventListener('click', returToPage3)


const confirmation = function(){
    page4.style.display = 'none'
    page5.style.display = 'block'
}
confirmBtn.addEventListener('click', confirmation)







// the card which has been selected 

const arcadeOffer = function(){
    pro.classList.remove('cards-style')
    advanced.classList.remove('cards-style');
    acrade.classList.toggle('cards-style');
    prix.textContent = '$9/mo'
    total.textContent = 9
}
acrade.addEventListener('click', arcadeOffer)


const advancedOffer = function(){
    pro.classList.remove('cards-style')
    acrade.classList.remove('cards-style');
    advanced.classList.toggle('cards-style');
    prix.textContent = '$12/mo'
    total.textContent = 12;
}
advanced.addEventListener('click', advancedOffer)


const proOffer = function(){
    acrade.classList.remove('cards-style');
    advanced.classList.remove('cards-style');
    pro.classList.toggle('cards-style');
    prix.textContent = '$15/mo'
    total.textContent = 15;
}
pro.addEventListener('click', proOffer)


//text 2 free months show


const freeMonthsShow = function(){
    for(let i = 0; i < textFreeMonths.length ; i++ ){
        textFreeMonths[i].classList.toggle('months-hide')
    }

    if(toggler.checked){
        priceOfOffer[0].textContent = '$90/yr'
        priceOfOffer[1].textContent = '$120/yr'
        priceOfOffer[2].textContent = '$150/yr'
        featurePrice[0].textContent = '$10/yr'
        featurePrice[1].textContent = '$20/yr'
        featurePrice[2].textContent = '$20/yr'

    }else{
        priceOfOffer[0].textContent = '$9/mo'
        priceOfOffer[1].textContent = '$12/mo'
        priceOfOffer[2].textContent = '$15/mo'
        featurePrice[0].textContent = '$1/mo'
        featurePrice[1].textContent = '$2/mo'
        featurePrice[2].textContent = '$2/mo'
    }

}
toggler.addEventListener('change', freeMonthsShow)




//the addons effect when cliking

const featureSelected1 = function(){
    divAddons[0].classList.toggle('div-color')
}
checkboxes[0].addEventListener('change', featureSelected1)


const featureSelected2 = function(){
    divAddons[1].classList.toggle('div-color')
}
checkboxes[1].addEventListener('click', featureSelected2)


const featureSelected3 = function(){
    divAddons[2].classList.toggle('div-color')
}
checkboxes[2].addEventListener('click', featureSelected3)




/*The addons selected*/


const fun1 = function(){
    if(checkboxes[0].checked){
        addonsSelected1.textContent = 'Online Service';
        addonsText1.textContent = '+$1/mo'
        total.textContent = parseInt(total.textContent) + 1;
    }else{
        addonsSelected1.textContent = '' 
        addonsText1.textContent = ''
        total.textContent = parseInt(total.textContent) - 1;
    }
}
checkboxes[0].addEventListener('change', fun1)


const fun2 = function(){
    if(checkboxes[1].checked){
        addonsSelected2.textContent = 'Larger Storage';
        addonsText2.textContent = '+$2/mo';
        total.textContent = parseInt(total.textContent) + 2;

    }else{
        addonsText2.textContent = ''; 
        addonsSelected2.textContent = '';
        total.textContent = parseInt(total.textContent) - 2;
    }
}
checkboxes[1].addEventListener('change', fun2)


const fun3 = function(){
    if(checkboxes[2].checked){
        addonsSelected3.textContent = 'Customizable Profile';
        addonsText3.textContent = '+$2/mo';
        total.textContent = parseInt(total.textContent) + 2;


    }else{
        addonsText3.textContent = ''; 
        addonsSelected3.textContent = '';
        total.textContent = parseInt(total.textContent) - 2;

    }
}
checkboxes[2].addEventListener('change', fun3)