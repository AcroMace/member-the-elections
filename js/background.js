'use_strict';

//
// Variables and constants
//

// Request type to fetch the articles from r/the_donald
const shouldFetchDonaldRequestType = 'shouldFetchDonald';

// The URL to GET the articles
const theDonaldURL = 'https://www.reddit.com/r/the_donald.json';

//
// Reddit parser
//

// Map a res.data.children object for reddit links to an article of the form:
// { text, image, link }
function responseToArticle(child) {
  // Get the highest resolution image if images exist, otherwise set it to null
  const image = child.data.preview &&
    child.data.preview.images &&
    child.data.preview.images.length > 0 &&
    child.data.preview.images[0].source.url || null;
  return {
    text: child.data.title,
    image: image,
    link: child.data.url
  }
}

//
// Main
//

// On 'shouldFetchDonald'
// Fetch the stories from r/the_donald
// Emit message with 'didFetchDonald'
// Facebook's security policies prevent doing this from the script injected to the page
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type !== shouldFetchDonaldRequestType) return;
  $.get(theDonaldURL, function (res) {
    sendResponse(res.data.children.map(responseToArticle));
  });
  return true;
});
