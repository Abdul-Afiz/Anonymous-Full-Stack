const joi = require("joi");

module.exports.validatePostMessage = (req, res, next) => {
  const messageSchema = joi.object({
    message: joi.string().min(20).required(),
  });

  const { err } = messageSchema.validate(req.body);

  if (err) {
    res.status(400).json({
      message: err,
    });
  }

  return next();
};
