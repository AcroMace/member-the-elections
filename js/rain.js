const rainContainer = document.getElementById('rain-container');
const emojis = ['🐸', '💰', '💸', '💵'];

function random(max) {
  return Math.floor(Math.random() * max);
}

function createRaindrop() {
  var raindrop = document.createElement('marquee');
  raindrop.setAttribute('behavior', 'scroll');
  raindrop.setAttribute('direction', 'down');
  raindrop.setAttribute('scrollamount', random(20));
  raindrop.setAttribute('scrolldelay', random(50));
  raindrop.setAttribute('height', 3000);
  raindrop.setAttribute('style', 'position:absolute; left:' + random(100) + '%; top:0px; width:40; height:100%;');
  raindrop.innerHTML = emojis[random(emojis.length)];
  return raindrop;
}

// Create a new emoji raindrop every 0.2 seconds
setInterval(function () {
  let raindrop = createRaindrop();
  rainContainer.appendChild(raindrop);
  // Remove the emojis after 20 seconds so that the browser does not blow up
  setTimeout(function () {
    rainContainer.removeChild(raindrop);
  }, 20000);
}, 200);
