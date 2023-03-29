const express = require("express");
const surveyModel = require("../models/surveySchema");
const router = express.Router();
var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get("/requested/questions/:id", async(req, res)=> {
  console.log("I came to requested questions route")
  try{
    const id = req.params.id
    console.log(id)
    const data = await surveyModel.find({_id:id})
    console.log(data)
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
