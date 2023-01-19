const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

require("dotenv").config();

const connect = require("./config/db");

app.use(express.json());

const { signupUser, loginUser } = require("./controllers/userController");
const { protect } = require("./middleware/auth");

app.get("/", protect, (req, res) => {
  res.send({ statue: "ok" });
});
app.post("/signup", signupUser);
app.post("/login", loginUser);

app.listen(process.env.PORT, async () => {
  console.log("App is listning at ", process.env.PORT);

  await connect;
  console.log("Connected to DB..");
});
