const express =require("express")
const app = express()

app.get("/",(req,res)=>{
    res.json("This is  primary")
})


app.get("/first",(req,res)=>{
    res.json("this is my secondary.")
})





app.listen(3000,()=>{
    console.log("Hello this is my morn project.")
})