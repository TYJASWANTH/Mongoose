//import express
const express = require("express");
//import router
const router = express.Router();
const controller = require("../controller/restaurant")
const menu = require("../controller/menu");

router.post("/",controller.add );
router.get("/",controller.get);
//router.post("/menu", );

module.exports=router;  
