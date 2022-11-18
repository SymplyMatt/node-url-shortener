const Link = require("../model/Link");
const makeid = async (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  const duplicate = await Link.findOne({ shortLink: result }).exec();
  if (duplicate) {
    makeid(4);
  }
  console.log(result);
  return result;
};
module.exports = makeid;
