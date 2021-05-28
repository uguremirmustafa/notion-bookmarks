const { database_id, notion } = require('./index');

const createBookmark = async (title, url) => {
  try {
    // parent object
    const parent = {
      database_id,
    };

    // Properties object. This has to match properties in the database.
    const properties = {
      Title: {
        title: [
          {
            text: {
              content: title,
            },
          },
        ],
      },
      URL: {
        url: url,
      },
    };

    // The page object where we put all our other objects together to create a new page.
    const page = {
      parent: parent,
      properties: properties,
    };
    const res = await notion.pages.create(page);
    const bookmark = {
      title: res.properties.Title.title[0].plain_text,
      url: res.properties?.URL?.url,
    };
    return bookmark;
  } catch (error) {
    console.log(error);
  }
};
module.exports = createBookmark;
