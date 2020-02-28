---
template: post
title: Automatically add friends to Facebook
slug: /posts/add-friends-fb
draft: false
priority: 0
date: 2018-08-08T01:14:45.562Z
description: Adds people with more than 10 common friends.
category: automation
tags:
  - facebook
  - javascript
  - utilities
---

Adds people with more than 10 common friends.

---

Change the number to the desired: `var minSharedFriends = 10;`

Run at this location: [https://www.facebook.com/?sk=ff
](https://www.facebook.com/?sk=ff)

```javascript
var minSharedFriends = 10

var addFriendsCount = 100
var addPause = 3 * 1000

function waitForScroll() {
  return new Promise(function(resolve, reject) {
    var it = 0
    var interval = window.setInterval(
      function() {
        console.log('Wait...')
        if (it++ > 15) {
          window.clearInterval(interval)
          resolve()
        }
        window.scrollBy(0, 2000)
      },
      800,
      resolve
    )
  })
}

waitForScroll().then(function() {
  var added = 0
  var addFriends = document.querySelectorAll(
    '#fbSearchResultsBox li.friendBrowserListUnit'
  )
  addFriends = Array.prototype.slice.call(addFriends).reverse()

  var clickInterval = window.setInterval(function() {
    if (!addFriends.length || added++ == addFriendsCount) {
      window.clearInterval(clickInterval)
      return
    }

    var re = / ([0-9]+) /i
    var liElem = addFriends.pop()
    var button = liElem.querySelector('button.FriendRequestAdd')
    var sharedFriends = liElem.querySelector('.friendBrowserSocialContext')
    var personName = liElem.querySelector('.friendBrowserNameTitle').innerText
    var sharedFriendsCount = 0

    if (
      sharedFriends &&
      sharedFriends.innerText &&
      sharedFriends.innerText.length &&
      re.exec(sharedFriends.innerText) !== null &&
      re.exec(sharedFriends.innerText).length &&
      re.exec(sharedFriends.innerText)['1']
    )
      sharedFriendsCount = parseInt(re.exec(sharedFriends.innerText)['1'], 10)

    button.scrollIntoView(false)
    if (sharedFriendsCount >= minSharedFriends) {
      console.log('Friend request sent: ' + personName)
      button.click()
    } else {
      console.log('Not enough mutual friends: ' + personName)
    }

    try {
      document.querySelector('div[role="dialog"] a.layerCancel').click()
    } catch (e) {}
  }, addPause)
})
```
