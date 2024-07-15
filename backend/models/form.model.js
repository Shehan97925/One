const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formSchema = new Schema({
  // confirmPassword: {
  //   type: String,
  //   required: true
  // },
  contactNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('SubmitForm', formSchema);
