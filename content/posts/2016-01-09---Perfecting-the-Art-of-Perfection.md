---
template: post
title: Trello + GTD = Trello Bookmark
slug: /posts/trello-plus-gtd-equals-trello-bookmark
draft: false
priority: 5
date: 2019-03-27T00:46:37.121Z
description: >-
  You know, I hate routine.

  But one of the greatest things about being a programmer is that you can
  automate your routine.
category: productivity
tags:
  - trello
  - gtd
  - chrome
  - plugin
---

You know, I hate routine.

But one of the greatest things about being a programmer is that you can automate your routine.

---

As bequeathed by David Allen, in his brilliant GTD: “Put everything out needless of your head to keep it clean and concentrated.”

Let’s see what gets there:

- ideas (develop an Android app for blind puppies);
- tasks (take out the cat, pet the trash, pass the report);
- projects with detailed plans and task lists (trip to Somalia, meeting the girl’s parents);
- notes (Mike snores, not worth to live with him in one tent).

Typically, the practical application of GTD in Trello ends here. However, if you look carefully, you should add browser bookmarks here. Many of us just save them in the browser. They accumulate there and eventually remain without attention.

There are several standard solutions for adding a card to Trello:

- Trello application for the desktop.

![Trello desktop](/media/trello-gtd/01.png 'Trello desktop')

However, this is not very suitable for saving bookmarks, because you cannot add a screenshot. The link fits into the description, not as an attachment. So the name of the bookmark will have to be typed manually.

- Trello chrome extensions. It has many solutions, varying degrees of readiness and stability. In any case, you cannot upload a screenshot or you have got a lot of manual work.
- Manually create a card on Trello.com. It is suitable for people who have a lot of free time.

Upon the whole, not finding a suitable solution — I wrote my own plugin. Meet [Trello Bookmark](https://chrome.google.com/webstore/detail/trello-bookmark/ephoopolmejjnjkbbdcfgoohokhnekca)!

Here’s what it has:

- board and list selection (personal and team);
- position in the list;
- name of the card;
- description;
- link (as an attachment);
- cover;
- labels;
- due date;
- assignee;

And additionally to above-stated:

- it supports hotkeys (keyboard navigation through tab and arrows, saving by CTRL + enter);
- advanced logic field by default.

![Trello Bookmark default locations](/media/trello-gtd/02.png 'Trello Bookmark default locations')

You can link the site you often visit a specific path for the card and the plugin will offer it by default. This means that you relieved to enter the address every time. You can also give a special path for a new browser tab. Then the plugin will open with empty fields (convenient for saving quick tasks to inbox):

![Google Chrome new tab with Trello Bookmark](/media/trello-gtd/03.png 'Google Chrome new tab with Trello Bookmark')

If the plugin is opened on a site that is not added in the settings, the last used path is suggested. All these features may seem overkill, but if you add tens or hundreds of cards a day, they save you a lot of time.

Here’s what one of the boards with my girlfriend looks like:

![Trello cooking board](/media/trello-gtd/04.png 'Trello cooking board')

You may have noticed that my new chrome tab looks unusual.

I was always annoyed that I couldn’t get a summary of tasks from different boards and teams in Trello and make a list for the day. And this is very important, especially if you follow the M. I. T. technique.

As a result, thanks to the Open Trello API, I made another plugin that pulls out cards according to a certain criterion:

![Trello Picker](/media/trello-gtd/05.png 'Trello Picker')

At the moment, this criterion is the presence of a red label “!!!”. In the future, I will add the ability to put down your criteria: for example, tasks with a deadline for today.

While the plugin is not available for public use, write in the comments or me on marat.dospolov@gmail.com if you want to get it faster.

---

Trello is an amazing tool that can solve most of your tasks, especially if you apply a little magic!

![“One ring to rule them all.”](/media/trello-gtd/06.png '“One ring to rule them all.”')
