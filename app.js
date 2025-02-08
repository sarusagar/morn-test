const express =require("express")
const connetToDatabase = require("./database")
const app = express()

connetToDatabase()
app.get("/",(req,res)=>{
    res.json("This is  primary")
})


app.get("/first",(req,res)=>{
    res.json("this is my secondary.")
})





app.listen(3000,()=>{
    console.log("Hello this is my morn project.")
})


// mongodb+srv://sagarsaru:<db_password>@cluster0.4k759.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

