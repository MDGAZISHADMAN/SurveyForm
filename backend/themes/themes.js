
const express = require("express")
const  router = express.Router()
const themes = [
    {id:1,name:"white"},
    {id:2,name:"blue"},
    {id:3,name:"orange"},
    {id:4,name:"purple"},
    {id:5,name:"green"},
    {id:5,name:"black"}
]

router.get("/themes",(req,res)=>{
    res.json(themes)
})

module.exports = router;