const mongoose = require("mongoose");

//schema of the userdetails while registration
const userDetails = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  password: {
    type: String,
  },
  cpassword: {
    type: String,
  },
});

//collection

const Register = new mongoose.model("Register", userDetails); //creating a collection as Register in db  which follows
// the userDetails schema

module.exports = Register; //it should be exports
