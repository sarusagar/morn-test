const mongoose = require('mongoose')
async function connetToDatabase(){
    await mongoose.connect(process.env.DATABASE_URL)
    console.log("Database Connected Successfully.")
}
module.exports = connetToDatabase