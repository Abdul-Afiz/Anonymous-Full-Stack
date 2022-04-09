module.exports.responseError = (res, err, location, status = 500) => {
  console.log({ err, location });
  return res.status(500).json({
    message: "internal server error",
  });
};
