![member the elections?](https://github.com/AcroMace/member-the-elections/raw/master/res/icon/640x640.png)

For anyone suffering from election withdrawl

Replaces the posts on Facebook and Twitter with posts from r/the\_donald ¯\\\_(ツ)_/¯

Created for [TerribleHack V](http://terriblehack.website/)

## Facebook examples

![](https://github.com/AcroMace/member-the-elections/raw/master/res/screenshots/facebook.png)
![](https://github.com/AcroMace/member-the-elections/raw/master/res/screenshots/facebook2.png)
![](https://github.com/AcroMace/member-the-elections/raw/master/res/screenshots/facebook3.png)
![](https://github.com/AcroMace/member-the-elections/raw/master/res/screenshots/facebook4.png)
![](https://github.com/AcroMace/member-the-elections/raw/master/res/screenshots/facebook5.png)

## Twitter examples

![](https://github.com/AcroMace/member-the-elections/raw/master/res/screenshots/twitter.png)
![](https://github.com/AcroMace/member-the-elections/raw/master/res/screenshots/twitter2.png)

## Technical notes

For content_scripts, there is a function called `getArticleForIndex` that returns an article object with properties `text`, `image`, and `link`.

Thus, to add additional websites:

1. In `manifest.json`, add a new `content_scripts` line with a new Javascript file corresponding to the website you are adding. You must have `js/jquery.js`, `js/content_shared.js`, `js/NEW_WEBSITE.js`, `js/main.js`, in that order.
2. In `NEW_WEBSITE.js`, implement a function `update` that updates the contents of the website using the article returned from `getArticleForIndex(index)`.
