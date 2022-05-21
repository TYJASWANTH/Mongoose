//mongooseFDDB - databse name

const mongoose = require("mongoose");


const url = "mongodb+srv://jashu123:12345@cluster0.lgiod.mongodb.net/mongooseFDDB?retryWrites=true&w=majority";

exports.mongooseConnect = async () =>{
    
    try
        {
        await  mongoose.connect(url)
         console.log("connected to mongoDb using the mongoose");
        }catch{
     console.log(err);
        }

}