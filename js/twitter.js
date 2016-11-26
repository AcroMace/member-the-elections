'use strict';

//
// Twitter parser
//

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
