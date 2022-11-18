const Link = require("../model/Link");
const path = require("path");
const redirectController = async (req, res) => {
  if (!req.params.shortLink) return res.status(204);
  const shortLink = req.params.shortLink;
  const foundLink = await Link.findOne({ shortLink }).exec();
  if (!foundLink) {
    return res.sendFile(path.join(__dirname, "..", "views", "404.html"));
  }
  res.redirect(`${foundLink.url}`);
};

module.exports = redirectController;
