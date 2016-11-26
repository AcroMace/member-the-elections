'use strict';

//
// Variables and constants
//

// Request type to fetch the articles from r/the_donald
const shouldFetchDonaldRequestType = 'shouldFetchDonald';

// Interval in milliseconds to keep rescanning posts to update
const UPDATE_INTERVAL = 100;

// Default text to display if the article has no title (not sure if possible)
const DEFAULT_TEXT = 'Ayy lmao';
// Default image to display when an article does not have a preview picture
const DEFAULT_IMAGE = 'https://cdn.theatlantic.com/assets/media/img/2016/05/select_32/hero_wide_640.jpg?1463509000';
// Default link to set when the article does not have a link (not sure if this is possible)
const DEFAULT_LINK = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

// Articles to display
let articles = [{
  text: DEFAULT_TEXT,
  image: DEFAULT_IMAGE,
  link: DEFAULT_LINK
}];

// { index: true if the article was already set on the card }
// Used to get rid of the flashing images and to prevent re-setting a card over and over again
let articlesAlreadySet = {};

//
// Twitter parser
//

// Get the article to display for the index of a card
function getArticleForIndex(index) {
  return articles[index % articles.length];
}

function getTweets() {
  return $('.tweet');
}

function getTextForTweet(tweet) {
  return $(tweet).find('.TweetTextSize');
}

function getImagesForTweet(tweet) {
  return $(tweet).find('img').not('.avatar');
}

function getLinksForTweet(tweet) {
  return $(tweet).find('a');
}

//
// Tweet modifier
//

function updateTextsOnTwitter() {
  getTweets().each(function (index, tweet) {
    // Skip setting the article on the card if already set
    if (articlesAlreadySet[index]) {
      return true;
    } else {
      articlesAlreadySet[index] = true;
    }
    // Set the article on the card
    const article = getArticleForIndex(index);
    getTextForTweet(tweet).html(article.text);
    getImagesForTweet(tweet).attr('src', article.image || DEFAULT_IMAGE);
    getLinksForTweet(tweet).attr('href', article.link || DEFAULT_LINK);
  });
}

//
// Main
//

function update() {
  updateTextsOnTwitter();
}
