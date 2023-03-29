const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name : {type: String, required: true},
    email: {type:String, unique: true, required: true},
    phone: {type: Number,required: true},
    profession: {type: String, required: true},
    password: {type: String, required: true},

}, {timestamps:true}) 
const users = mongoose.model("user", userSchema);
module.exports= users;