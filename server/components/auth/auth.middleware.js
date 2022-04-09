const { responseError } = require("../../utils/helpers");
const { verifyToken } = require("./auth.utils");

module.exports.requireAuth = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(401).json({
      message: "authenticaton is required",
    });
  }
  try {
    const decoded = await verifyToken(token).catch((err) => {
      return res.status(401).json({
        message: "invalid token",
      });
    });
    req.decoded = decoded;
    return next();
  } catch (err) {
    responseError(res, err, "requireAuthMiddleware");
  }
};
