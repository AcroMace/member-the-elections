'use strict';

//
// Variables and constants
//

// Interval in milliseconds to keep rescanning posts to update
const UPDATE_INTERVAL = 3000;

// Articles to display
let articles = [{
  text: 'Ayy lmao',
  image: 'https://cdn.theatlantic.com/assets/media/img/2016/05/select_32/hero_wide_640.jpg?1463509000'
}];

//
// Facebook parser
//

function getTextForIndex(index) {
  return articles[index % articles.length].text;
}

function getTextDivs() {
  return $('.userContent');
}

//
// Facebook modifier
//

function updateTexts() {
  getTextDivs().each(function (index, textDiv) {
    console.log(textDiv);
    $(textDiv).html('<p>' + getTextForIndex(index) + '</p>');
  });
}

//
// Main
//

// Initial update
updateTexts();

// Keep updating
setInterval(function () {
  updateTexts();
}, UPDATE_INTERVAL);
