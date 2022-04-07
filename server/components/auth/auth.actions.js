const User = require("../user/user.model");
const { hashPassword, checkPassword, generateToken } = require("./auth.utils");

module.exports.doSignup = async (req, res) => {
  //Picking out the needed item from the request body
  const { name, email, password } = req.body;

  try {
    //Checking if user exists by searching through email, else create new user

    const userExists = await User.findOne({ email });

    if (userExists) {
      //if user exists, it will send a message with status code 409: conflict

      return res.status(409).json({
        message: "Account exists already, pls login",
      });
    }

    const newUser = await new User({
      name,
      email,
      password: hashPassword(password),
      uniqueId: Math.random().toString(36).substring(5),
    }).save();
    const token = generateToken({
      name,
      email,
      uniqueId: newUser.uniqueId,
    });

    res.json({
      message: "welcome on board",
      token,
      user: {
        name,
        uniqueId: newUser.uniqueId,
      },
    });
  } catch (err) {
    console.log({ err, location: "doSignup" });
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

module.exports.doLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExist = User.findOne({ email });
    if (userExist) {
      checkPassword(userExist.password, password);
    }
  } catch (error) {}
};
