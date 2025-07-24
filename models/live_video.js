const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const videoSchema=new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type: String,
        required:true
    },
    video_link:{
        type:String,
        required:true
    }
})

const video_listing= mongoose.model("video_listing",videoSchema);
module.exports=video_listing;