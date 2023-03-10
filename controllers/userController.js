const generateToken = require("../config/generateToken");
const userModel = require("../model/user.model");

const signupUser = async (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    res.status(201);
    throw new Error("Fill All The Fields");
  }
  const userExists = await userModel.findOne({ email });
  if (userExists) {
    throw new Error("User Already Exist");
  }

  const user = await userModel.create({
    email,
    password,
  });

  if (user) {
    res.status(201).send({
      _id: user._id,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Fail to Create User");
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.status(201).send({
      _id: user._id,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found or Password is Incorrect");
  }
};

module.exports = { signupUser, loginUser };
