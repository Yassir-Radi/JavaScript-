'use strict';

const divs = document.querySelectorAll('.wrapper-divs div')
const btn = document.querySelector('.btna')
const hexes = document.getElementsByTagName('p')

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const changeBg = function(){

    for(let i = 0; i < 10 ; i++){
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let hex = rgbToHex(x, y, z);
        divs[i].style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
        hexes[i].textContent = hex;
        hexes[i].addEventListener('click', function() {
            navigator.clipboard.writeText(hex);
            console.log('Copied to clipboard: ' + hex);
        });
    }
}

btn.addEventListener('click', changeBg);
