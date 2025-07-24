const express=require("express");
const app=express();
const path=require("path")
const ejsMate=require("ejs-mate");
const axios=require("axios");
const mongoose=require("mongoose")
const video_listing=require("./models/live_video.js")
const methodoverride=require("method-override")


app.set("views engines","ejs")
app.set("views",path.join(__dirname,("views")))
app.use(express.static(path.join(__dirname,("public"))))
app.engine("ejs",ejsMate);
app.use(express.urlencoded({extended:true}));
app.use(methodoverride("_method"));

// --------{#001}-------


main()
.then(()=>{
    console.log("Connection Succesfull..")
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb+srv://2mohitsoni:Mohit1234@cluster0.wjfspkb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}

// -----------------------------------------------------main route-----------------------------------------------------------------------

app.get('/',async(req,res)=>{
    let all_videos=await video_listing.find();
    console.log(all_videos);
    // res.render("weatherlist/live_video.ejs",{all_videos})
    res.send('Welcome To Home Route..............')
})

// ------------------------------------------------------city search route------------------------------------------------------------------

app.post("/city",async(req,res)=>{
    let data=req.body.city;
   console.log(data);
//    res.send("dfgg")
    res.redirect(`/home?city=${data}`)
})

// --------------------------------------------------------Live video page route-----------------------------------------------------------------

app.get("/videos",async(req,res)=>{
    let videos=await video_listing.find();
    res.render("weatherlist/video.ejs",{videos})
})
// --------------------------------------------------------home page route-----------------------------------------------------------------------

app.get("/home",async (req,res)=>{
    let all_videos=await video_listing.find();
    let {city="indore"}=req.query;
    // let city="indore"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=df239307346aaf446e01279049f61758`

    console.log("reqparams"+req.query.city)
    let curweather;
    try{
        const response = await axios.get(url);
        // console.log(response);
        curweather = response.data;
        console.log(curweather);
    }
    catch(err){
        curweather = null;

    }
    res.render("weatherlist/index.ejs",{curweather,all_videos})
})

app.get("/addvideo",(req,res)=>{
    res.render("weatherlist/addvideo.ejs")
})

app.post("/addvideo",async(req,res)=>{
    let data=req.body;
    let temp = await new video_listing(data);
    temp.save().then((res)=>{console.log("video1 Saves")})
    console.log(data)
    res.redirect("/videos")
})

app.delete("/videos/:id",async(req,res)=>{
    let {id}=req.params;
    let deletedlisting= await video_listing.findByIdAndDelete(id);
    console.log(deletedlisting);
    res.redirect("/videos")
})
app.listen(8080,()=>{
    console.log("listening.........")
})



// ---------------------#001(this code is to inssert trial one data in database)-----------------


// main()
// .then(()=>{
//     console.log("Connection Succesfull..")
// })
// .catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/temp1');
// }

// let video1=new video_listing({
//     title: "London",
//     description: " London is made up of various Type of Lunds",
//     video_link:"KdAZszejSF8?si=aHlMzXB_gCQ5B9jn"
// })
// video1.save().then((res)=>{console.log("video1 Saves")})