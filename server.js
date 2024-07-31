// // const express= require("express")
// // const colors=require("colors")
// // const dotenv=require("dotenv").config();
// // const app=express();

// // app.get("/",(req,res)=>{
// //     res.send("hello world")
// // })

// // app.listen(PORT,()=>{
// //     console.log(`server running on port ${process.env.PORT}`.yellow.bold)
// // });

// // const express= require("express");
// // const colors=require("colors");
// // const dotenv=require("dotenv");
// // const morgan=require("morgan");
// // const PORT=5000;

// // const app=express();
// // //properties of express has been transfered into app
// // app.use(express.json());
// // c
// // app.get("/",(req,res)=>{
// //     res.send("API is running");
// // })
// // app.get("/profile/:username",(req,res)=>{
// //     res.send(`hello from ${req.params.username}`);
// // })

// // app.listen(PORT,()=>{
// //     console.log(`server is running on port ${PORT}`)
// // })


// const express= require("express");
// const app=express();
// //properties of express has been transfered into app
// // app.use(express.json());
// // app.get("/",(req,res)=>{
// //     res.send("API is running");
// // })
// // app.set("view engine","ejs")
// // app.get("/profile/:username",(req,res)=>{
// //     res.set(`hello from ${req.params.username}`);
// // })

// app.set("view engine","ejs");
// app.get("/",(req,res)=>{
//     res.render("index");
// });

// // app.listen(PORT,()=>{
// //     console.log(`server is running on port ${PORT}`)
// // })
// app.listen(5000);
// const fileURLtoPath=require("url");
// const path = require("path");


const express= require("express");
const colors=require("colors");
const dotenv=require("dotenv");
const morgan=require("morgan");
const userdata=require("./utility/userdata.json")
const fileURLtoPath=require("url");
const path = require("path");
const app=express();
const PORT=5000;
//properties of express has been transfered into app
app.use(express.json());


//static files wala middleware
app.use(express.static(path.resolve(__dirname,"./public")));

app.get("/userdata",(req,res)=>{
    res.send(userdata);
});

app.get("/home",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","index.html"));
});

app.get("/contact",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","contact.html"));
});

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})






























