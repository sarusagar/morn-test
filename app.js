const express =require("express")
const app = express()

app.get("/",(req,res)=>{
    res.json("This is my first.")
})


app.get("/first",(req,res)=>{
    res.json("this is my second.")
})





app.listen(3000,()=>{
    console.log("Hello this is my morn project.")
})