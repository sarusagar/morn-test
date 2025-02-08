require('dotenv').config()
const express =require("express")
const connetToDatabase = require("./database")
const app = express()

connetToDatabase()
app.get("/",(req,res)=>{
    res.status(200).json("This is  primary")
})


app.get("/first",(req,res)=>{
    res.json("this is my secondary.")
})





app.listen(process.env.PORT,()=>{
    console.log("Hello this is my morn project.")
})


// mongodb+srv://sagarsaru:<db_password>@cluster0.4k759.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

