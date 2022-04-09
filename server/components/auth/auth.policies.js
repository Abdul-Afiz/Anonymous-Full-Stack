const joi = require("joi");

module.exports.validateSignup = (req, res, next) => {
  const signupSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
  });

  const { err } = signupSchema.validate(req.body);

  if (err) {
    res.status(400).json({
      message: err,
    });
  }

  return next();
};

module.exports.validateLogin = (req, res, next) => {
  const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
  });

  const { err } = loginSchema.validate(req.body);

  if (err) {
    res.status(400).json({
      message: err,
    });
  }

  return next();
};
