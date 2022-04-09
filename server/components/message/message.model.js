const { model, Schema } = require("mongoose");

const messageSchema = new Schema(
  {
    uniqueId: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

module.exports = model("Message", messageSchema);
