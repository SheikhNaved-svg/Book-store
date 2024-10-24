import express from 'express'
import mongoose from 'mongoose';
import Atlas from './model/model.js';
import cors from 'cors';
const app=express();
const port=3000;

app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(cors());
//db connections
mongoose.connect("mongodb+srv://mern-app:FYTAto9DBVv52UHb@cluster0.5aolrb4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log('db connected')).catch((err)=>console.log(err))

//read operation
app.get('/get',async(req,res)=>{
    const result=await Atlas.find({})
    res.json(result)
})
//create operation
app.post('/post',async (req,res)=>{
    const {bookTitle,bookAuthor,imageUrl,category,bookDescription,bookpdfUrl}=req.body
        const result=await Atlas.create({
            bookTitle,
            bookAuthor,
            imageUrl,
            category,
            bookDescription,
            bookpdfUrl
           
        })

        res.json(result)
})
//update
app.patch('/patch/:id', async (req,res)=>{
    const {name}=req.body;
    const id=req.params.id;
    const result=await Atlas.findByIdAndUpdate({_id:id},{name:name})

    res.json(result)
})
//delete
app.delete('/delete/:id', async (req,res)=>{
    const id=req.params.id;
    const result=await Atlas.findByIdAndDelete({_id:id})

    res.json(result)
})

//get book by category
app.get('/books/:category', async(req,res)=>{
    const category=req.params.category;
    const result= await Atlas.find({
            $or:[
                {
                    category:{$regex:category, $options:'i'}
                }
            ]
    })
    res.json(result)
})


//const uri = "mongodb+srv://mern-app:FYTAto9DBVv52UHb@cluster0.5aolrb4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



app.listen(port ,(req,res) => {
    console.log('server running at 3000 port')
})