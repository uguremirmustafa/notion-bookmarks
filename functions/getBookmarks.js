const { database_id, notion } = require('./index');
const getBookmarks = async () => {
  const payload = {
    path: `databases/${database_id}/query`,
    method: 'POST',
  };
  const { results } = await notion.request(payload);
  const bookmarks = results.map((page) => {
    const title = page.properties.Title.title[0].plain_text;
    const url = page.properties?.URL?.url;
    return {
      title,
      url,
    };
  });
  return bookmarks;
};
module.exports = getBookmarks;
