---
template: post
title: Chrome custom JS and CSS extension
slug: /posts/chrome-custom-js-and-css-extension
draft: false
priority: 0
date: 2020-04-18T22:22:02.039Z
description: Chrome custom JS and CSS extension
category: productivity
tags:
  - chrome
  - javascript
  - utilities
---

Using websites a lot - there might be a need to improve UX or UI.

For example, [Block Youtube suggested videos overlay](/posts/block-youtube-suggested-videos-overlay).

There are plenty of tools to change the website’s CSS ([Stylebot](https://chrome.google.com/webstore/detail/stylebot/oiaejidbmkiecgbjeifoejpgmdaleoha?hl=en), [Stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?hl=en)) and JS ([Custom Javascript for Websites](https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk?hl=en)) and many more.

Mostly they are working fine, but there are several missing parts:

1. No sharing settings between accounts. You should setup plugin individually for each profile and copy rules on each change.
2. No automatic backup. You can store data in file, but again, you should update it manually on each change.
3. Separate plugins for CSS and JS. Each plugin affects your browser speed and performance is important.

So I’ve made a ”[DNA](https://github.com/dospolov/dna)” Chrome extension. Steps to setup:

1. Create a repository using [DNA](https://github.com/dospolov/dna) as a `template` at your GitHub account.
2. Write your CSS and JS rules in `rules` array:
![rules sample](/media/dna-1/dna-1.png 'rules sample')
3. Load the `build` folder as an [unpacked extension](https://webkul.com/blog/how-to-install-the-unpacked-extension-in-chrome/)
4. Profit!

Now you can set up your rules and persist in your GitHub account.

P.S. Here is how one of song translation site looks with [DNA](https://github.com/dospolov/dna) (before and after):

![amalgama-lab.com with custom styles](/media/dna-1/dna-2.png 'amalgama-lab.com with custom styles')

Brown background used to reduce eye fatigue.
