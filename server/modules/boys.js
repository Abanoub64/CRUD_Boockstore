const mongoos = require("mongoose");
const { Schema } = mongoos;

const BoysSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  fathern: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
});

const BoysModle = mongoos.model("boys", BoysSchema);

module.exports = BoysModle;
