import mongoose from 'mongoose';

const atlasSchema=new mongoose.Schema({
    bookTitle:{
        type:String,
        required:true
    },
    bookAuthor:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    bookDescription:{
        type:String,
        required:true
    },
    bookpdfUrl:{
        type:String,
        required:true
    }
})
const Atlas= mongoose.model("atlas",atlasSchema);
export default Atlas;