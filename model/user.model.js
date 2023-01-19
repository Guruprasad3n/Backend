const {Schema, model} = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  }
);


const userModel = model("user", userSchema);
module.exports = userModel;

userSchema.methods.matchingPas = async function (typingPas) {
  return await bcrypt.compare(typingPas, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const sal = await bcrypt.gensal(10);
  this.password = await bcrypt.hash(this.password, sal);
});


