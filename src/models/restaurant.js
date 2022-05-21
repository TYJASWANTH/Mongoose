 //import mongoose

 const mongoose = require("mongoose");

 const restaurentSchema = new mongoose.Schema({
     name: String, 
     location : String,
     contact : String,
     website : String
 });


 const restaurant = mongoose.model("Restaurant", restaurentSchema);
 module.exports = restaurant; 

