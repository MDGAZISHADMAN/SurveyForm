const express = require("express");
const surveyModel = require("../models/surveySchema");
const router = express.Router();
var bodyParser = require('body-parser');
const {verify}  = require("jsonwebtoken");
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get("/form/surveylist", verify,async(req, res)=> {

  try{
    const data = await surveyModel.find()
   
    if(data){
      return res.status(200).json({
        "message" : "success",
        data
      })
    }
  }
  catch(e){
    return res.status(500).json({
      "message" : e.message,
      "status" : "failed"
    })
  }
})

module.exports = router;