const mongoose = require("mongoose");
const connect = mongoose.connect(
  `mongodb+srv://mock11:mock11@cluster0.qnjmpba.mongodb.net/?retryWrites=true&w=majority`
);

module.exports = connect;
