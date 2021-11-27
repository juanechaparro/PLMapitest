const mongoose = require( "mongoose");

const RegisterModel = new mongoose.Schema({
  name: { type: String,  required: true },
  lastName: { type: String },
  email:  { type: String, required: true },
  mobile: { type: String, required: true },
  identificationNumber: { type: String },
  identificationType: { type: String },
  dateOfBirth: { type: Date },
  fileUrl:{type: String}
});

const Register = mongoose.model("Register", RegisterModel);

module.exports= Register;
