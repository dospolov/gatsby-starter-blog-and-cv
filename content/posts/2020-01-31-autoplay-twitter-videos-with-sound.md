---
template: post
title: Autoplay Twitter videos with sound
slug: /posts/twitter-videos-with-sound
draft: false
priority: 0
date: 2020-01-31T00:40:32.893Z
description: >-
  It might be annoying scroll Twitter videos and click on each to hear sound.
  Here is the quick hack. It will unmute video when you hover and mute again
  when your cursor is out video.
category: productivity
tags:
  - twitter
  - javascript
---

It might be annoying scroll Twitter videos and click on each to hear sound. Here is the quick hack. It will unmute video when you hover and mute again when your cursor is out video.

1. Install [Custom JavaScript for websites](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija) plugin

2. Go to [twitter.com](https://twitter.com/)

3. Open Custom JavaScript for websites plugin and paste this code:

```javascript
window.addEventListener('mouseover', ({ target }) => {
  if (target.tagName === 'VIDEO') {
    target.muted = false
  }
})

window.addEventListener('mouseout', ({ target }) => {
  if (target.tagName === 'VIDEO') {
    target.muted = true
  }
})
```
