'use_strict';

//
// r/the_donald parser
//

function getDonaldPosts(callback) {
  chrome.runtime.sendMessage({ type: 'shouldFetchDonald' }, function (response) {
    // Get rid of the placeholders
    articlesAlreadySet = {};
    // Set the response
    articles = response;
  });
}

//
// Main
//

// Initial update
update();

// Fetch data from r/the_donald
getDonaldPosts();

// Keep updating
setInterval(function () {
  update();
}, UPDATE_INTERVAL);
