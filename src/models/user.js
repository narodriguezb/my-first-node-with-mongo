const mongoose = require("mongoose");

//crear el modelo de datos que quiero crear
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports=mongoose.model('User',userSchema)