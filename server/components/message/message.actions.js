const { responseError } = require("../../utils/helpers");
const Message = require("./message.model");

module.exports.doPostMessage = async (req, res) => {
  const { uniqueId } = req.params;
  const { message } = req.body;

  try {
    await new Message({
      uniqueId,
      text: message,
    }).save();

    return res.status(201).json({
      message: "Message sent",
    });
  } catch (err) {
    responseError(res, err, "doPostMessage");
  }
};

module.exports.getMessages = async (req, res) => {
  const { uniqueId } = req.decoded;
  try {
    const messages = await Message.find({ uniqueId });
    return res.json({
      messages,
    });
  } catch (err) {
    responseError(res, err, "getMessages");
  }
};
