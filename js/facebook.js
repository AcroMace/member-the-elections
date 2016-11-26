'use strict';

//
// Facebook parser
//

// Get all of the cards that have currently been loaded
function getCards() {
  return $('.userContentWrapper');
}

function getTextForCard(card) {
  return $(card).find('.userContent');
}

function getImagesForCard(card) {
  return $(card).find('.uiScaledImageContainer img');
}

function getLinksForCard(card) {
  return $(card).find('a');
}

//
// Facebook modifier
//

function hideVideosOnFacebook() {
  $('video').closest('.mtm').remove();
}

function hideCaptionsOnFacebook() {
  $('._6m3').remove();
}

function updateTextsOnFacebook() {
  getCards().each(function (index, card) {
    // Skip setting the article on the card if already set
    if (articlesAlreadySet[index]) {
      return true;
    } else {
      articlesAlreadySet[index] = true;
    }
    // Set the article on the card
    const article = getArticleForIndex(index);
    getTextForCard(card).html('<p>' + article.text + '</p>');
    getImagesForCard(card).attr('src', article.image || DEFAULT_IMAGE);
    getLinksForCard(card).attr('href', article.link || DEFAULT_LINK);
  });
}

//
// Main
//

function update() {
  hideVideosOnFacebook();
  hideCaptionsOnFacebook();
  updateTextsOnFacebook();
}
