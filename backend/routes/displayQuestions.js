const express = require("express");
const surveyModel = require("../models/surveySchema");
const router = express.Router();
var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.put("/createquestion/:id", async(req, res)=> {
  console.log("i just come here to createquestions page")
  try{
    const id = req.params.id
    console.log(id)
    const questions = req.body
    console.log(req.body)
    console.log(questions)
    const data = await surveyModel.updateOne({ form_id: id }, { $set: {questions:questions} })
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