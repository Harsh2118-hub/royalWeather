const mongoose= require("mongoose");
const video_listing=require("./models/live_video.js")

main()
.then(()=>{
    console.log("Connection Succesfull..")
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/temp1');
}

video_listing.insertMany(
    [
        {
            title:"Japan",
            description:"lorem12 gfdsgtfg gffd gfgf",
            video_link:"4-GXa0AogM4?si=MZR8bU3lGGE7p-4W"
        },
        {
            title:"Japan",
            description:"lorem12 gfdsgtfg gffd gfgf",
            video_link:"4-GXa0AogM4?si=MZR8bU3lGGE7p-4W"
        },
        {
            title:"Japan",
            description:"lorem12 gfdsgtfg gffd gfgf",
            video_link:"4-GXa0AogM4?si=MZR8bU3lGGE7p-4W"
        },
        {
            title:"Japan",
            description:"lorem12 gfdsgtfg gffd gfgf",
            video_link:"4-GXa0AogM4?si=MZR8bU3lGGE7p-4W"
        },
        {
            title:"Japan",
            description:"lorem12 gfdsgtfg gffd gfgf",
            video_link:"4-GXa0AogM4?si=MZR8bU3lGGE7p-4W"
        },
        {
            title:"Japan",
            description:"lorem12 gfdsgtfg gffd gfgf",
            video_link:"4-GXa0AogM4?si=MZR8bU3lGGE7p-4W"
        },
        {
            title:"Japan",
            description:"lorem12 gfdsgtfg gffd gfgf",
            video_link:"4-GXa0AogM4?si=MZR8bU3lGGE7p-4W"
        },
        {
            title:"Japan",
            description:"lorem12 gfdsgtfg gffd gfgf",
            video_link:"4-GXa0AogM4?si=MZR8bU3lGGE7p-4W"
        },
        {
            title:"Japan",
            description:"lorem12 gfdsgtfg gffd gfgf",
            video_link:"4-GXa0AogM4?si=MZR8bU3lGGE7p-4W"
        },
        {
            title:"Japan",
            description:"lorem12 gfdsgtfg gffd gfgf",
            video_link:"4-GXa0AogM4?si=MZR8bU3lGGE7p-4W"
        },
        {
            title:"Japan",
            description:"lorem12 gfdsgtfg gffd gfgf",
            video_link:"4-GXa0AogM4?si=MZR8bU3lGGE7p-4W"
        },
        {
            title:"Japan",
            description:"lorem12 gfdsgtfg gffd gfgf",
            video_link:"4-GXa0AogM4?si=MZR8bU3lGGE7p-4W"
        },

    ]
)
