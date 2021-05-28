#!/usr/bin/env node

const inquirer = require('inquirer');
const createBookmark = require('./functions/createBookmark');
const getBookmarks = require('./functions/getBookmarks');

async function decideEvent() {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: 'what do you wanna do?',
      choices: ['create a bookmark', 'list bookmarks', 'quit'],
    },
  ]);
  const event = await answer.type;
  if (event === 'create a bookmark') {
    const bookmark = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter the title of yor bookmark',
      },
      {
        type: 'input',
        name: 'url',
        message: 'Enter the url of yor bookmark',
      },
    ]);
    const createdBookmark = await createBookmark(bookmark.title, bookmark.url);
    console.log(createdBookmark);
  } else if (event === 'list bookmarks') {
    const bookmarks = await getBookmarks();
    console.log(bookmarks);
  } else {
    console.log('byeee!!!');
  }
}
decideEvent();
