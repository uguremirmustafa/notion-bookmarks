const dotenv = require('dotenv').config();
const { Client } = require('@notionhq/client'); //env
const database_id = process.env.NOTION_DATABASE_ID;
const token = process.env.NOTION_TOKEN;

//client
const notion = new Client({
  auth: token,
});
module.exports = {
  notion,
  database_id,
};
