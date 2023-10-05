const mongoos = require("mongoose");
const { Schema } = mongoos;

const userSchema = new Schema({
  name: {
    type: srting,
    required: true,
  },
  fathern: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  stage :{
    type: String,
    required:true,
  },
  phone:{
    type:[Number]
  },
});

const UserModel = mongoos.model("User", userSchema);

module.exports = UserModel;
