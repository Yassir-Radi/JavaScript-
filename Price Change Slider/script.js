'use strict';

const slider = document.querySelector('.slider') // input range
const textPrice = document.querySelector('.cost > p') // paraghraph Price
const toggler = document.getElementById('switch') // toggler
const pageviews = document.querySelector('.content h2')

const updatePrice = function() {
  if (toggler.checked) {
    yearlyPrice();
  } else {
    moveSlider();
  }
};

const moveSlider = function() {
  if (slider.value === '1') {
    textPrice.textContent = '$8.00'
    pageviews.textContent = '10K Pageviews'
  } else if (slider.value === '2') {
    textPrice.textContent = '$12.00'
    pageviews.textContent = '50K Pageviews'
  } else if (slider.value === '3') {
    textPrice.textContent = '$16.00'
    pageviews.textContent = '100K Pageviews'
  } else if (slider.value === '4') {
    textPrice.textContent = '$24.00'
    pageviews.textContent = '500K Pageviews'
  } else if (slider.value === '5') {
    textPrice.textContent = '$36.00'
    pageviews.textContent = '1M Pageviews'
  }
};

const yearlyPrice = function() {
  if (slider.value === '1') {
    textPrice.textContent = '$72.00'
    pageviews.textContent = '10K Pageviews'
  } else if (slider.value === '2') {
    textPrice.textContent = '$108.00'
    pageviews.textContent = '50K Pageviews'
  } else if (slider.value === '3') {
    textPrice.textContent = '$144.00'
    pageviews.textContent = '100K Pageviews'
  } else if (slider.value === '4') {
    textPrice.textContent = '$216.00'
    pageviews.textContent = '500K Pageviews'
  } else if (slider.value === '5') {
    textPrice.textContent = '$324.00'
    pageviews.textContent = '1M Pageviews'
  }
};


slider.addEventListener('input', updatePrice);
toggler.addEventListener('change', updatePrice);
