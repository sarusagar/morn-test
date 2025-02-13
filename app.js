require('dotenv').config()
const express =require('express')
const connetToDatabase = require('./database')
const Blog = require('./model/blogModel')
const app = express()
app.use(express.json())
const {multer,storage} = require('./middleware/multerConfig')
const upload = multer({storage : storage})

connetToDatabase()
app.get("/",(req,res)=>{
    res.status(200).json("This is  primary")
})


app.get("/first",(req,res)=>{
    res.json("this is my secondary.")
})

app.post("/blog",upload.single('image'), async (req,res)=>{
    // const title = req.body.title
    // const subtitle = req.body.subtitle
    // const description =  req.body.description
    // const image = req.body.image
    console.log(req.body)
    const {title,subtitle,description,image} = req.body
    if(!title || !subtitle || !description || !image){
         return res.status(400).json({
            message:"Pleae provide titile,subtile,description and image"
        })
    }
    await Blog.create({
        title : title,
        subtitle : subtitle,
        description : description,
        image : image
    })

    // console.log(title,subtitle,description,image)
    res.status(200).json({
        message:" Blog API hit successfully."
    })
})




app.listen(process.env.PORT,()=>{
    console.log("Hello this is my morn project.")
})


// mongodb+srv://sagarsaru:<db_password>@cluster0.4k759.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

