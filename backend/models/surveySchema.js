const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema({
    name:{type:String, required:true},
    startDate:{type:String,required:true},
    endDate:{type:String,required:true},
    description:{type:String,required:true},
    otherCriteria:{type:String},
    type:{type:String,required:true},
    form_id:{type:String,required:true},
    questions:{type:Array},
    madeBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

const survey = mongoose.model("survey",surveySchema);
module.exports = survey