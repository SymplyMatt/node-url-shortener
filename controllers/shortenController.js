const Link = require("../model/Link");
const makeid = require("../config/stringGenerator");

const shortenController = async (req, res) => {
  const url = req.body.url;
  if (!url) {
    res.status(400);
  }
  const duplicate = await Link.findOne({ url }).exec();
  if (duplicate) return res.sendStatus(409); //Conflict
  const shortLink = await makeid(4);
  const result = await Link.create({
    url,
    shortLink,
  });
  res.json(result);
};

module.exports = shortenController;
