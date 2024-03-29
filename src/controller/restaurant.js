const Restaurant = require("../models/restaurant");
const repo = require("../repositories/restaurant")


exports.add = async (req,res) =>{
    const newRestaurant = new Restaurant(req.body);
  const result = await repo.add(newRestaurant);
  if(result){
      res.status(200).send("data added");
  }
  else{
      res.status(503).send("Data not Added");
  }
}

exports.get = async (req,res) => {
    const result = await repo.get();
    if(result){
        res.status(200).send(result);
    }else{
        res.status(503).send("data cant be pulled");
    }
    
}