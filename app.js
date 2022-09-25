const dotenv=require("dotenv");
const express=require("express");
dotenv.config({path:'./config.env'});
const cors=require("cors");
const bodyParser=require("body-parser");
const path=require("path")

const app=express();

const port=process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(express.json());

const user=require("./routes/user");
app.use(user);

// if(process.env.NODE_ENV==="production"){
//     // means if in production mode client requesting for '/' then we will send that file
//     // app.get('/',(req,res)=>{
//     //     app.use(express.static(path.resolve(__dirname,'../client/build')))   //to handle static file

//     //     res.sendFile(path.resolve(__dirname,'../client/build/index.html'));
//     // })

// }

app.use(express.static(path.join(__dirname,'../client/build')));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'../client/build/index.html'))
})
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})