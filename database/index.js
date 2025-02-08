const mongoose = require('mongoose')
async function connetToDatabase(){
    await mongoose.connect('mongodb+srv://sagarsaru:Sagarhima1124@cluster0.4k759.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log("Database Connected Successfully.")
}
module.exports = connetToDatabase