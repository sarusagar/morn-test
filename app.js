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
    res.status(200).json({
        message:"This is home"
    })
})

app.post("/blog",upload.single('image'), async (req,res)=>{
    const {title,subtitle,description} = req.body
    const filename = req.file.filename

    if(!title || !subtitle || !description){
         return res.status(400).json({
            message:"Pleae provide titile,subtile,description and image"
        })

    }
    await Blog.create({
        title : title,
        subtitle : subtitle,
        description : description,
        image : filename
    })

    // console.log(title,subtitle,description,image)
    res.status(200).json({
        message:" Blog API hit successfully."
    })
})
app.get("/blog", async (req,res)=>{
    const blogs = await Blog.find() //return data in array
    res.status(200).json({
        message:"Data fatched successfully.",
        data : blogs
    })
})

app.use(express.static('./storage'))

app.listen(process.env.PORT,()=>{
    console.log("Hello this is my morn project.")
})


// mongodb+srv://sagarsaru:<db_password>@cluster0.4k759.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

