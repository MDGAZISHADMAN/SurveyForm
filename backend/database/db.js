
const mongoose=require('mongoose')
mongoose.set('strictQuery', false)
const uri = `mongodb+srv://deepak77:Nd8idFjXCvLxK1fH@cluster0.fmrttxt.mongodb.net/registration?retryWrites=true&w=majority`
async function getConnection() {
    await mongoose.connect(uri, (err)=>{
        if(err){
            console.log("Connection to mongoDB failed");
        }
        else{
            console.log("Connected to MongoDB successfully");
        }
    })
}
module.exports = getConnection;